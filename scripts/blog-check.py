#!/usr/bin/env python3
"""
Qualitaets-Gate fuer 2fox4-Blogbeitraege (siehe BLOG-AUTOMATIK.md im Projektordner).

Aufruf:
  python3 scripts/blog-check.py <slug> [<slug> ...]   # bestimmte Beitraege
  python3 scripts/blog-check.py --since 2026-07-14    # alle Beitraege ab Datum
Exit 0 = alles ok, 1 = mindestens ein FEHLER (WARN blockiert nicht).
"""
import os, re, sys, glob

SITE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BLOG = os.path.join(SITE, "src", "content", "blog")
PUB = os.path.join(SITE, "public")
CATS = {"ki": "KI / AI", "wordpress": "WordPress", "seo": "SEO", "webdesign": "Webdesign",
        "ecommerce": "E-Commerce", "tools": "Tools", "digitalisierung": "Digitalisierung"}
SERVICES = {"webdesign", "seo", "digitale-stadtrallyes", "wartung-support", "hosting",
            "digitalisierungsberatung", "bafa-foerderung", "barrierefreie-website", "print-design"}
PAGES_OK = ("/kontakt/", "/leistungen/", "/preise/", "/referenzen/", "/ki-sichtbarkeit-check/", "/ueber-uns/", "/blog/")

def fm_val(fm, key):
    m = re.search(rf'^{key}:\s*"?(.*?)"?\s*$', fm, re.M)
    return m.group(1) if m else None

def check(path):
    errs, warns = [], []
    slug = os.path.basename(path)[:-3]
    txt = open(path, encoding="utf-8").read()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", txt, re.S)
    if not m:
        return [f"kein Frontmatter"], []
    fm, body = m.groups()
    if not re.fullmatch(r"[a-z0-9-]+", slug): errs.append("Dateiname nicht [a-z0-9-]")
    for k in ("title", "date", "description", "seoTitle", "seoDescription"):
        if fm_val(fm, k) is None: errs.append(f"Frontmatter-Feld fehlt: {k}")
    d = fm_val(fm, "description") or ""
    if not (20 <= len(d) <= 220): errs.append(f"description {len(d)} Zeichen (erlaubt 20-220)")
    st = fm_val(fm, "seoTitle") or ""
    if len(st) > 60: warns.append(f"seoTitle {len(st)} Zeichen (>60)")
    if not re.search(r"^draft:\s*false", fm, re.M): warns.append("draft: false fehlt")
    cm = re.search(r"^categories:\s*\n\s*-\s*(\S+)", fm, re.M)
    if not cm or cm.group(1).strip('"') not in CATS: errs.append("Kategorie fehlt/ungueltig")
    cv = re.search(r'^cover:\s*\n\s+src:\s*"?([^"\n]+)"?', fm, re.M)
    if not cv: errs.append("cover.src fehlt")
    else:
        p = os.path.join(PUB, cv.group(1).lstrip("/"))
        if not os.path.isfile(p) or os.path.getsize(p) < 5000: errs.append(f"Cover fehlt/leer: {cv.group(1)}")
        j = re.sub(r"\.webp$", ".jpg", p)
        if p.endswith(".webp") and not os.path.isfile(j): errs.append("JPG-Zwilling zum Cover fehlt")
    words = len(body.split())
    if words < 2000: errs.append(f"nur {words} Woerter (min. 2000)")
    if re.search(r"^# ", body, re.M): errs.append("H1 im Body")
    if "**Kurz gesagt:**" not in body: errs.append("TL;DR-Box '> **Kurz gesagt:**' fehlt")
    if not re.search(r"^\|.*\|\s*\n\|\s*:?-{3,}", body, re.M): errs.append("keine Markdown-Tabelle")
    faqs = len(re.findall(r"<details>\s*<summary>", body))
    if faqs < 3: errs.append(f"nur {faqs} FAQ-Akkordeons (min. 3)")
    for img in re.findall(r"!\[[^\]]*\]\((/[^)\s]+)\)", body):
        if not os.path.isfile(os.path.join(PUB, img.lstrip("/"))): errs.append(f"Bild fehlt: {img}")
    inline = len(re.findall(r"!\[[^\]]*\]\(/uploads/blog/", body))
    if inline < 2: warns.append(f"nur {inline} Inline-Grafiken (Soll 2)")
    blogs = re.findall(r"\]\(/blog/([a-z0-9-]+)/?\)", body) + re.findall(r'href="/blog/([a-z0-9-]+)/?"', body)
    for b in blogs:
        if not os.path.isfile(os.path.join(BLOG, b + ".md")): errs.append(f"interner Link ins Leere: /blog/{b}/")
    if not [b for b in blogs if b != slug]: errs.append("kein interner Link auf anderen Blogbeitrag")
    for s in re.findall(r"/leistungen/([a-z0-9-]+)/", body):
        if s not in SERVICES: errs.append(f"Leistungs-Link ungueltig: /leistungen/{s}/")
    if not re.search(r"/leistungen/[a-z0-9-]+/", body): warns.append("kein Link auf Leistungs-Pillar")
    ext = re.findall(r"\]\((https?://[^)\s]+)\)", body) + re.findall(r'href="(https?://[^"]+)"', body)
    if not [e for e in ext if "2fox4.de" not in e]: errs.append("kein externer Quellenlink")
    dashes = len(re.findall(r"\s[–—]\s|[–—]", re.sub(r"`[^`]*`", "", body)))
    if dashes: errs.append(f"{dashes} Gedankenstrich(e) – oder — im Text")
    return errs, warns

def main():
    a = sys.argv[1:]
    files = []
    if a[:1] == ["--since"]:
        since = a[1]
        for f in sorted(glob.glob(os.path.join(BLOG, "*.md"))):
            m = re.search(r'^date:\s*"?(\d{4}-\d{2}-\d{2})', open(f, encoding="utf-8").read(), re.M)
            if m and m.group(1) >= since: files.append(f)
    else:
        files = [os.path.join(BLOG, s if s.endswith(".md") else s + ".md") for s in a]
    if not files: print("Keine Beitraege gefunden."); sys.exit(1)
    bad = 0
    for f in files:
        if not os.path.isfile(f): print(f"FEHLER {f}: Datei fehlt"); bad += 1; continue
        e, w = check(f)
        name = os.path.basename(f)
        print(("OK    " if not e else "FEHLER") + f" {name}")
        for x in e: print("   - FEHLER:", x)
        for x in w: print("   - WARN:  ", x)
        bad += bool(e)
    print(f"== {len(files)} geprueft, {bad} mit Fehlern")
    sys.exit(1 if bad else 0)

main()
