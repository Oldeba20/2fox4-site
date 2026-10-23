#!/usr/bin/env python3
"""Sprechtext fuer die Vorlese-MP3 eines Blogbeitrags erzeugen.

Aufruf:  python3 scripts/blog-audio-text.py <slug> [max_zeichen=2000]
Ausgabe: JSON auf stdout: {"slug", "chars", "chunks": [text, ...]}
         und dieselben Abschnitte als ../_blog-audio/<slug>/chunks.json

Regeln: Titel + Fliesstext + Ueberschriften + Listen + Kurz-gesagt-Box + FAQ.
Bilder, Tabellen, HTML-Reste und Code-Bloecke werden weggelassen.
"2fox4" wird als "two fox four" geschrieben, damit die Stimme es englisch spricht.
"""
import json, os, re, sys

slug = sys.argv[1]
maxc = int(sys.argv[2]) if len(sys.argv) > 2 else 2000
here = os.path.dirname(os.path.abspath(__file__))
site = os.path.dirname(here)
src = open(os.path.join(site, "src/content/blog", slug + ".md"), encoding="utf-8").read()

m = re.match(r"^---\n(.*?)\n---\n(.*)$", src, re.S)
fm, body = m.group(1), m.group(2)
t = re.search(r'^title:\s*"?(.*?)"?\s*$', fm, re.M)
title = t.group(1).replace('\\"', '"') if t else slug

def clean_inline(s):
    s = re.sub(r"!\[[^\]]*\]\([^)]*\)", "", s)               # Bilder
    s = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", s)            # Links -> Text
    s = re.sub(r"<[^>]+>", "", s)                             # HTML-Tags
    s = re.sub(r"`([^`]*)`", lambda m: m.group(1).replace("_", " "), s)  # Inline-Code, WP_DEBUG -> WP DEBUG
    s = re.sub(r"(\*\*|\*)(?=\S)(.+?)(?<=\S)\1", r"\2", s)        # fett/kursiv mit *
    s = re.sub(r"(?<!\w)(__|_)(?=\S)(.+?)(?<=\S)\1(?!\w)", r"\2", s)  # fett/kursiv mit _ (nicht mod_php)
    s = re.sub(r"(?<=\w)_(?=\w)", " ", s)                          # mod_php -> mod php
    s = s.replace("&amp;", "&").replace("&nbsp;", " ")
    s = re.sub(r"\s+", " ", s).strip()
    return s

def end_punct(s):
    return s if re.search(r"[.!?:;…]$", s) else s + "."

paras = [end_punct(title)]
in_code = False
in_table = False
for raw in body.split("\n"):
    line = raw.rstrip()
    if line.startswith("```"):
        in_code = not in_code; continue
    if in_code: continue
    if line.startswith("|"):
        if not in_table:                                      # Tabellen nicht vorlesen, nur Hinweis
            paras.append(""); paras.append("Die Tabelle dazu findest du im Beitrag."); paras.append("")
        in_table = True
        continue
    in_table = False
    if re.match(r"^\s*!\[", line) or not line.strip():
        paras.append(""); continue
    if line.strip() in ("<details>", "</details>"):
        paras.append(""); continue
    h = re.match(r"^(#{1,6})\s+(.*)$", line)
    if h:
        txt = clean_inline(h.group(2))
        if re.search(r"Häufige Fragen", txt): txt = "Häufige Fragen"
        paras.append(""); paras.append(end_punct(txt)); paras.append(""); continue
    line = re.sub(r"^>\s?", "", line)
    line = re.sub(r"^\s*([-*+]|\d+\.)\s+", "", line)
    txt = clean_inline(line)
    if not txt: continue
    if raw.lstrip().startswith(("<summary", "- ", "* ", "+ ")) or re.match(r"^\s*\d+\.\s", raw):
        txt = end_punct(txt)
        paras.append(""); paras.append(txt); paras.append(""); continue
    if paras and paras[-1]:
        paras[-1] += " " + txt
    else:
        paras.append(txt)

paras = [p for p in (re.sub(r"\s+", " ", p).strip() for p in paras) if p]
paras.append("Das war ein Beitrag von two fox four punkt de. Danke fürs Zuhören.")

def speakable(s):
    s = re.sub(r"\b2fox4\.de\b", "two fox four punkt de", s, flags=re.I)
    s = re.sub(r"\b2fox4\b", "two fox four", s, flags=re.I)
    s = s.replace(" · ", ", ")
    return s
paras = [speakable(p) for p in paras]

# zu Abschnitten <= maxc zusammenfassen (an Absatzgrenzen, lange Absaetze an Satzgrenzen)
units = []
for p in paras:
    if len(p) <= maxc:
        units.append(p); continue
    cur = ""
    for s in re.split(r"(?<=[.!?])\s+", p):
        if cur and len(cur) + 1 + len(s) > maxc:
            units.append(cur); cur = s
        else:
            cur = (cur + " " + s).strip()
    if cur: units.append(cur)
chunks, cur = [], ""
for u in units:
    if cur and len(cur) + 2 + len(u) > maxc:
        chunks.append(cur); cur = u
    else:
        cur = (cur + "\n\n" + u) if cur else u
if cur: chunks.append(cur)
# sehr kurzen Rest (z. B. nur den Abspann) an den vorigen Abschnitt haengen
if len(chunks) > 1 and len(chunks[-1]) < 300:
    tail = chunks.pop()
    chunks[-1] += "\n\n" + tail

out = {"slug": slug, "title": title, "chars": sum(len(c) for c in chunks), "chunks": chunks}
d = os.path.join(os.path.dirname(site), "_blog-audio", slug)
os.makedirs(d, exist_ok=True)
json.dump(out, open(os.path.join(d, "chunks.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(json.dumps({"slug": slug, "chars": out["chars"], "n": len(chunks), "lens": [len(c) for c in chunks]}))
