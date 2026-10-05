#!/bin/bash
# Veröffentlicht den fertigen Commit "Fuchs-Flitzer" (liegt schon lokal bereit).
cd "$(dirname "$0")" || exit 1
rm -f .git/HEAD.lock .git/index.lock
echo "== git push origin main =="
git push origin main && echo "" && echo "Fertig! GitHub baut die Seite jetzt (ca. 2-3 Minuten)."
echo ""
read -n 1 -s -r -p "Taste drücken zum Schließen ..."
