#!/usr/bin/env bash
# ============================================================
# 2fox4.de: Blog-Dateien committen und veroeffentlichen (ohne Olivers Terminal)
#
# Aufruf (in der Cowork-Geraete-VM):
#   bash site/scripts/blog-publish.sh "Commit-Nachricht" [pfad ...]
# Ohne Pfade werden src/content/blog, public/uploads/blog und scripts/ committet.
#
# Ablauf:
#   1. Lokaler Commit im Mac-Repo (braucht Loesch-Erlaubnis fuer den Projektordner,
#      weil git seine .lock-Dateien entfernen muss).
#   2. Git-Bundle der neuen Commits per SSH (Deploy-Key .deploy-key/id_ed25519_2fox4)
#      auf den All-Inkl-Server (kasserver).
#   3. Dort liegt ein Relay-Klon; der pusht mit seinem GitHub-Deploy-Key auf main.
#   4. GitHub Actions baut und deployt (2-4 Min).
#   5. origin/main lokal nachziehen, damit Olivers Repo sauber "up to date" bleibt.
# Kein --force: Ist GitHub inzwischen weiter (z. B. Push von Oliver), bricht das
# Skript ab und meldet es, statt etwas zu ueberschreiben.
# ============================================================
set -euo pipefail
MSG="${1:?Commit-Nachricht fehlt}"; shift || true
SITE="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ROOT="$(dirname "$SITE")"
KEY="$ROOT/.deploy-key/id_ed25519_2fox4"
REMOTE="ssh-w0202caa@w0202caa.kasserver.com"
export HOME=/tmp/h TMPDIR=/tmp; mkdir -p "$HOME"
# Key nach /tmp kopieren: der Projektpfad enthaelt ein Leerzeichen, ssh-Optionen vertragen das schlecht
cp "$KEY" /tmp/h/deploykey && chmod 600 /tmp/h/deploykey; KEY=/tmp/h/deploykey
SSH="ssh -i $KEY -o BatchMode=yes -o StrictHostKeyChecking=accept-new -o UserKnownHostsFile=/tmp/h/known_hosts -o ConnectTimeout=15"
cd "$SITE"

# Liegengebliebene Locks frueherer Laeufe (nur wenn kein git laeuft)
pgrep -x git >/dev/null || find .git -maxdepth 3 -name '*.lock' -delete 2>/dev/null || true

PATHS=("$@"); [ ${#PATHS[@]} -eq 0 ] && PATHS=(src/content/blog public/uploads/blog scripts)
git add -- "${PATHS[@]}"
if git diff --cached --quiet; then echo "Nichts Neues zu committen."; else
  git commit --no-verify -q -m "$MSG" -m "${COMMIT_TRAILER:-Co-Authored-By: Claude <noreply@anthropic.com>}"
fi
BASE="$(git rev-parse origin/main)"; HEAD="$(git rev-parse HEAD)"
[ "$BASE" = "$HEAD" ] && { echo "Nichts zu pushen (HEAD = origin/main)."; exit 0; }
git bundle create /tmp/blog.bundle "origin/main..main" >/dev/null 2>&1
$SSH "$REMOTE" 'mkdir -p ~/blog-relay'
scp -q -i "$KEY" -o BatchMode=yes -o UserKnownHostsFile=/tmp/h/known_hosts /tmp/blog.bundle "$REMOTE:blog-relay/blog.bundle"
$SSH "$REMOTE" "set -e; cd ~/blog-relay
  [ -d repo/.git ] || git clone -q git@github.com:Oldeba20/2fox4-site.git repo
  cd repo; git fetch -q origin main
  if [ \"\$(git rev-parse origin/main)\" != \"$BASE\" ]; then echo 'ABBRUCH: GitHub main hat sich geaendert (anderer Push). Erst lokal pullen.'; exit 3; fi
  git fetch -q ../blog.bundle main:refs/heads/_incoming
  [ \"\$(git rev-parse _incoming)\" = \"$HEAD\" ] || { echo 'ABBRUCH: Bundle-HEAD passt nicht'; exit 4; }
  git push -q origin _incoming:main && echo PUSH_OK
  git branch -q -D _incoming; rm -f ../blog.bundle"
git update-ref refs/remotes/origin/main "$HEAD"
rm -f /tmp/blog.bundle
echo "Veroeffentlicht: $(git log --oneline -1). GitHub Actions deployt jetzt (2-4 Min)."
