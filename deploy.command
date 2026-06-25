#!/bin/bash
# 2fox4 – Ein-Klick-Deploy.
# Doppelklick im Finder: committet ALLE aktuellen Änderungen und pusht auf main.
# Der Push löst auf GitHub automatisch Build + Deploy zu All-Inkl aus.
cd "$(dirname "$0")" || exit 1
clear
echo "============================================"
echo "  2FOX4 – Deploy"
echo "  Repo: $(pwd)"
echo "============================================"

# Nichts zu tun?
if [ -z "$(git status --porcelain)" ]; then
  echo ""
  echo "Keine Änderungen zum Veröffentlichen."
  echo ""
  read -n 1 -s -r -p "Taste drücken zum Schließen ..."
  exit 0
fi

echo ""
echo "== Diese Änderungen werden veröffentlicht =="
git status --short
echo ""

# Commit-Nachricht per kleinem Dialog abfragen (Abbrechen = nichts tun)
if MSG=$(osascript -e 'set t to text returned of (display dialog "Commit-Nachricht für diesen Deploy:" default answer "Website-Update" with title "2fox4 Deploy" buttons {"Abbrechen","Veröffentlichen"} default button "Veröffentlichen")'); then
  :
else
  echo "Abgebrochen – nichts veröffentlicht."
  read -n 1 -s -r -p "Taste drücken zum Schließen ..."
  exit 0
fi
[ -z "$MSG" ] && MSG="Website-Update"

echo "== git add =="
git add -A
echo "== git commit =="
git commit -m "$MSG"
echo "== git push origin main =="
git push origin main
RC=$?

echo ""
if [ $RC -eq 0 ]; then
  echo "============================================"
  echo "  ✅ FERTIG – Push erfolgreich."
  echo "     Build & Deploy laufen jetzt automatisch."
  echo "============================================"
else
  echo "============================================"
  echo "  ❌ FEHLER beim Push (Exit $RC). Bitte prüfen."
  echo "============================================"
fi
echo ""
read -n 1 -s -r -p "Taste drücken zum Schließen ..."
