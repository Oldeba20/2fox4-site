#!/bin/bash
# Veröffentlicht den neuen Blogbeitrag "KI versteht jetzt Videos – Frame für Frame"
# Committet NUR die neuen Dateien und pusht auf main -> löst Build & Deploy aus.
cd "$(dirname "$0")" || exit 1
echo "Repo: $(pwd)"
echo "== git add =="
git add "src/content/blog/ki-videos-verstehen-frame-fuer-frame.md" \
        "public/uploads/blog/ki-videos-verstehen-frame-fuer-frame"
echo "== git commit =="
git commit -m "Neuer Blogbeitrag: KI versteht jetzt Videos - Frame fuer Frame"
echo "== git push origin main =="
git push origin main
RC=$?
echo ""
if [ $RC -eq 0 ]; then
  echo "======================================"
  echo " FERTIG - Push erfolgreich. Deploy laeuft."
  echo "======================================"
else
  echo "======================================"
  echo " FEHLER beim Push (Exit $RC). Bitte pruefen."
  echo "======================================"
fi
