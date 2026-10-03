cd /home/claude/fk && npx esbuild src/main.js --bundle --format=esm --minify --target=es2020 --outfile=public/game.js --log-level=warning --legal-comments=none --loader:.svg=text
