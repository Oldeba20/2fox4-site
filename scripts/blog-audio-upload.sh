#!/usr/bin/env bash
# Vorlese-MP3 eines oder mehrerer Beiträge direkt auf den All-Inkl-Server laden (nicht über Git,
# damit das Repo nicht mit MB-großen Audiodateien wächst). Der CI-Deploy löscht nichts (kein --delete).
#   bash site/scripts/blog-audio-upload.sh <slug> [<slug> ...]
set -euo pipefail
SITE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"; ROOT="$(dirname "$SITE")"
export HOME="/tmp/h-$(id -u)"; mkdir -p "$HOME"
cp "$ROOT/.deploy-key/id_ed25519_2fox4" "$HOME/deploykey"; chmod 600 "$HOME/deploykey"
REMOTE="ssh-w0202caa@w0202caa.kasserver.com"; WEB="/www/htdocs/w0202caa/2fox4"
OPT=(-i "$HOME/deploykey" -o BatchMode=yes -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile="$HOME/known_hosts" -o ConnectTimeout=15)
for s in "$@"; do
  f="$SITE/public/uploads/blog/$s/audio.mp3"; [ -s "$f" ] || { echo "FEHLT: $f"; exit 2; }
  ssh "${OPT[@]}" "$REMOTE" "mkdir -p '$WEB/uploads/blog/$s'"
  scp -q "${OPT[@]}" "$f" "$REMOTE:$WEB/uploads/blog/$s/audio.mp3"
  ssh "${OPT[@]}" "$REMOTE" "chmod 644 '$WEB/uploads/blog/$s/audio.mp3'"
  code=$(curl -s -o /dev/null -w '%{http_code} %{content_type}' "https://www.2fox4.de/uploads/blog/$s/audio.mp3")
  echo "UPLOAD_OK $s -> $code"
done
