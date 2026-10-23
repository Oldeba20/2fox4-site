#!/usr/bin/env python3
"""Vorlese-MP3 aus den TTS-Abschnitten zusammensetzen.

Aufruf:  python3 scripts/blog-audio-build.py <slug> <url1> <url2> ...
         (URLs der fertigen Abschnitte in Lesereihenfolge, z. B. Higgsfield result_url)
Ergebnis: public/uploads/blog/<slug>/audio.mp3 (mono, 64 kbit/s, lautheitsnormalisiert)
          + Eintrag in src/data/blog-audio.json  {slug: {src, duration, voice, chars}}
Temporaeres nur unter $HOME (in der Geraete-VM: /tmp/h-<uid>).
"""
import json, os, subprocess, sys, tempfile, urllib.request

slug, urls = sys.argv[1], sys.argv[2:]
voice = os.environ.get("BLOG_AUDIO_VOICE", "Helena")
site = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
tmp = tempfile.mkdtemp(dir=os.environ.get("HOME", "/tmp"))
parts = []
for i, u in enumerate(urls):
    p = os.path.join(tmp, f"p{i:02d}.mp3")
    urllib.request.urlretrieve(u, p)
    w = os.path.join(tmp, f"p{i:02d}.wav")
    subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", p, "-ac", "1", "-ar", "44100", w], check=True)
    parts.append(w)
# 0,5 s Pause zwischen den Abschnitten
sil = os.path.join(tmp, "sil.wav")
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "lavfi", "-i", "anullsrc=r=44100:cl=mono", "-t", "0.5", sil], check=True)
lst = os.path.join(tmp, "list.txt")
with open(lst, "w") as f:
    for i, w in enumerate(parts):
        if i: f.write(f"file '{sil}'\n")
        f.write(f"file '{w}'\n")
full = os.path.join(tmp, "full.wav")
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-f", "concat", "-safe", "0", "-i", lst, "-c", "copy", full], check=True)
outdir = os.path.join(site, "public/uploads/blog", slug)
os.makedirs(outdir, exist_ok=True)
out = os.path.join(outdir, "audio.mp3")
subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", full, "-af", "loudnorm=I=-16:TP=-1.5:LRA=11",
                "-ac", "1", "-ar", "44100", "-c:a", "libmp3lame", "-b:a", "64k",
                "-metadata", f"artist=2fox4.de", "-metadata", f"title={slug}", out], check=True)
dur = float(subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", out],
                           capture_output=True, text=True, check=True).stdout.strip())
chars = None
cj = os.path.join(os.path.dirname(site), "_blog-audio", slug, "chunks.json")
if os.path.exists(cj):
    chars = json.load(open(cj, encoding="utf-8")).get("chars")
dj = os.path.join(site, "src/data/blog-audio.json")
data = json.load(open(dj, encoding="utf-8")) if os.path.exists(dj) else {}
data[slug] = {"src": f"/uploads/blog/{slug}/audio.mp3", "duration": round(dur, 1), "voice": voice, "chars": chars}
json.dump(dict(sorted(data.items())), open(dj, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
subprocess.run(["rm", "-rf", tmp])
print(f"OK {out} {dur/60:.1f} min {os.path.getsize(out)//1024} KB")
