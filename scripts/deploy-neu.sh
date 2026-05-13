#!/usr/bin/env bash
# Deploy zur Preview-URL https://www.2fox4.de/neu/
# Voraussetzung: Du hast den SSH-Zugang im KAS aktiviert und SSH-Key
# hinterlegt — oder du wirst beim rsync nach dem Passwort gefragt.
#
# Aufruf:
#   ./scripts/deploy-neu.sh
#
# Was passiert:
#   1. Frischer Build mit base='/'
#   2. Pfad-Prefix /neu/ über prefix-paths.mjs
#   3. rsync auf den Server in /www/htdocs/w0202caa/2fox4/neu/
#   4. Berechtigungen 755/644 setzen
#
# Wenn du den Hostnamen / User änderst, hier oben anpassen:

set -euo pipefail

SSH_USER="ssh-w0202caa"
SSH_HOST="w0202caa.kasserver.com"
REMOTE_DIR="/www/htdocs/w0202caa/2fox4/neu"
LOCAL_DIST="dist"
PREFIX="/neu"

cd "$(dirname "$0")/.."

echo "==> 1/4  Astro build"
npm run build

echo ""
echo "==> 2/4  Pfade präfixen (${PREFIX})"
node scripts/prefix-paths.mjs "$LOCAL_DIST" "$PREFIX"

echo ""
echo "==> 3/4  rsync nach $SSH_HOST:$REMOTE_DIR"
# --exclude Astro-Sandbox-Reste, --delete entfernt verwaiste Dateien
rsync -avz --delete \
  --exclude='*.mjs' \
  --exclude='chunks/' \
  --exclude='pages/' \
  --exclude='.astro/' \
  "$LOCAL_DIST/" \
  "$SSH_USER@$SSH_HOST:$REMOTE_DIR/"

echo ""
echo "==> 4/4  Berechtigungen setzen"
ssh "$SSH_USER@$SSH_HOST" \
  "find $REMOTE_DIR -type d -exec chmod 755 {} + && find $REMOTE_DIR -type f -exec chmod 644 {} +"

echo ""
echo "✓ Fertig. Preview unter https://www.2fox4.de/neu/"
