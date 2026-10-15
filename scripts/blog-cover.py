#!/usr/bin/env python3
"""
Macht aus einem hochaufloesenden KI-Bild (z. B. Higgsfield nano_banana_pro, 4k)
das Blog-Cover fuer 2fox4.de: 2400x1350 (16:9) als cover.webp + JPG-Zwilling cover.jpg
(der JPG-Zwilling ist Pflicht fuer og:image, Facebook/LinkedIn zeigen kein WebP).

Aufruf: python3 scripts/blog-cover.py <quelle.png|jpg> <slug>
Ergebnis: public/uploads/blog/<slug>/cover.webp + cover.jpg
"""
import os, sys
from PIL import Image

src, slug = sys.argv[1], sys.argv[2]
site = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
outdir = os.path.join(site, "public", "uploads", "blog", slug)
os.makedirs(outdir, exist_ok=True)
im = Image.open(src).convert("RGB")
W, H = 2400, 1350
r = max(W / im.width, H / im.height)
im = im.resize((round(im.width * r), round(im.height * r)), Image.LANCZOS)
l, t = (im.width - W) // 2, (im.height - H) // 2
im = im.crop((l, t, l + W, t + H))
im.save(os.path.join(outdir, "cover.webp"), "WEBP", quality=88, method=6)
im.save(os.path.join(outdir, "cover.jpg"), "JPEG", quality=88, optimize=True, progressive=True)
for f in ("cover.webp", "cover.jpg"):
    p = os.path.join(outdir, f)
    print("OK", p, os.path.getsize(p), "Bytes")
