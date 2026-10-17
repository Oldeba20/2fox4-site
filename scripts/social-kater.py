#!/usr/bin/env python3
"""
Baut die Social-Grafik (Facebook + Instagram, 4:5, 1080x1350) fuer den Kater-Post
zum aktuellen Blogbeitrag im 2fox4-Stil:
  oben das KI-Bild mit dem 2fox4-Kater, unten ein dunkles Textfeld
  (#0a0a0a, gelber Balken, Eyebrow, weisse Headline mit EINEM gelben Wort, Footer 2fox4.de + Logo).

Aufruf:
  python3 scripts/social-kater.py <rohbild.png> <slug> "<Headline mit *Gelbwort*>" "<EYEBROW>"
Beispiel:
  python3 scripts/social-kater.py /tmp/kater.png rechnungseingang-automatisieren-e-rechnung-ki \
      "Rechnungen tippt hier *keiner* mehr ab" "KI IM BÜRO"
Ergebnis: public/uploads/blog/<slug>/social.jpg  (wird mit dem Blog-Commit live,
          oeffentliche URL https://www.2fox4.de/uploads/blog/<slug>/social.jpg fuer Zernio)
"""
import os, re, sys
from PIL import Image, ImageDraw, ImageFont

src, slug, headline, eyebrow = sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4]
SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(SITE, "public", "uploads", "blog", slug)
os.makedirs(OUT, exist_ok=True)

W, H = 1080, 1350
BG, YEL, WHITE, GREY, ORANGE = (10, 10, 10), (255, 230, 0), (255, 255, 255), (154, 154, 154), (255, 107, 53)

def font(names, size):
    dirs = ["/usr/share/fonts/truetype/google-fonts", "/usr/share/fonts/truetype/lato",
            "/usr/share/fonts/truetype/dejavu", os.path.join(SITE, "brand", "fonts")]
    for n in names:
        for d in dirs:
            p = os.path.join(d, n)
            if os.path.exists(p):
                return ImageFont.truetype(p, size)
    return ImageFont.load_default(size)

# --- Bildteil: oberer Bereich, Cover-Crop -------------------------------------
IMG_H = 900
im = Image.open(src).convert("RGB")
r = max(W / im.width, IMG_H / im.height)
im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
l = (im.width - W) // 2
t = max(0, min(im.height - IMG_H, int((im.height - IMG_H) * 0.35)))  # leicht nach oben (Kopf)
im = im.crop((l, t, l + W, t + IMG_H))

canvas = Image.new("RGB", (W, H), BG)
canvas.paste(im, (0, 0))
# weicher Verlauf ins Schwarz
grad = Image.new("L", (1, 160))
for y in range(160):
    grad.putpixel((0, y), int(255 * (y / 159) ** 1.6))
grad = grad.resize((W, 160))
canvas.paste(Image.new("RGB", (W, 160), BG), (0, IMG_H - 160), grad)

d = ImageDraw.Draw(canvas)
PAD = 72
# gelber Balken
d.rectangle([PAD, IMG_H + 6, PAD + 120, IMG_H + 14], fill=YEL)
# Eyebrow
f_eb = font(["Poppins-SemiBold.ttf", "Poppins-Bold.ttf", "Lato-Bold.ttf", "DejaVuSans-Bold.ttf"], 30)
d.text((PAD, IMG_H + 36), ("2FOX4 · " + eyebrow).upper(), font=f_eb, fill=GREY)

# Headline mit *Gelbwort*, automatischer Umbruch, Groesse passend
tokens = []
for part in re.split(r"(\*[^*]+\*)", headline):
    if not part:
        continue
    hl = part.startswith("*") and part.endswith("*")
    for w in part.strip("*").split():
        tokens.append((w, hl))
maxw, maxh = W - 2 * PAD, 250
for size in range(78, 40, -2):
    f_h = font(["Poppins-Bold.ttf", "Lato-Black.ttf", "DejaVuSans-Bold.ttf"], size)
    space = d.textlength(" ", font=f_h)
    lines, cur, cw = [], [], 0
    for w, hl in tokens:
        tw = d.textlength(w, font=f_h)
        if cur and cw + space + tw > maxw:
            lines.append(cur); cur, cw = [], 0
        cur.append((w, hl, tw)); cw += (space if cw else 0) + tw
    if cur:
        lines.append(cur)
    lh = int(size * 1.18)
    if len(lines) * lh <= maxh and len(lines) <= 3:
        break
y = IMG_H + 96
for line in lines:
    x = PAD
    for w, hl, tw in line:
        d.text((x, y), w, font=f_h, fill=YEL if hl else WHITE)
        x += tw + space
    y += lh

# Footer
f_ft = font(["Lato-Bold.ttf", "DejaVuSans-Bold.ttf"], 28)
d.text((PAD, H - 70), "Mehr im Blog · 2fox4.de", font=f_ft, fill=GREY)
logo = os.path.join(SITE, "brand", "logo", "2fox4-logo-weiss.png")
if os.path.exists(logo):
    lg = Image.open(logo).convert("RGBA")
    lw = 170
    lg = lg.resize((lw, round(lg.height * lw / lg.width)), Image.LANCZOS)
    canvas.paste(lg, (W - PAD - lw, H - 40 - lg.height), lg)

out = os.path.join(OUT, "social.jpg")
canvas.save(out, "JPEG", quality=90, optimize=True, progressive=True)
print("OK", out, os.path.getsize(out), "Bytes", f"{len(lines)} Zeilen, Schrift {size}px")
