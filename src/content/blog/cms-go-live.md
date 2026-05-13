---
title: "Headless CMS auf 2FOX4 — neue Posts schreiben sich jetzt selbst"
date: 2026-05-13
description: "Wir haben Pages CMS angeschlossen. Blogposts werden ab sofort als Markdown im Git-Repo gepflegt — und ein Push triggert automatisch das Live-Deployment via GitHub Actions."
categories:
  - websites
categoryNames:
  - Websites
draft: false
---

Nach dem Umzug von WordPress auf Astro war die nächste Frage: **wie schreibe ich
neue Blogposts, ohne wieder ein PHP-Backend hochzufahren?** Die Antwort ist
Pages CMS — ein gehostetes Admin-UI, das direkt mit dem GitHub-Repo dieser Seite
spricht.

## So sieht der Workflow jetzt aus

1. Auf [pagescms.org](https://pagescms.org) einloggen
2. „Neuer Blogpost" klicken, schreiben, Bilder hochladen, speichern
3. Pages CMS committed die Markdown-Datei nach GitHub
4. GitHub Actions baut Astro und lädt das Ergebnis via SFTP zu All-Inkl hoch
5. ~2 Minuten später ist der Post live auf [2fox4.de/blog/](https://www.2fox4.de/blog/)

Kein WordPress-Plugin-Update mehr. Kein PHP-Patch-Day. Kein Datenbank-Backup,
das man sich abends ins Postfach mailen muss.

## Warum kein Strapi oder Directus?

Beide sind tolle CMS — brauchen aber einen eigenen Node-Server samt Datenbank.
Genau das wollten wir loswerden, als WordPress rausgeflogen ist. Pages CMS und
Verwandte wie Decap oder Sveltia speichern Inhalte als Dateien direkt im Repo.
Das Repo ist die Datenbank, Git die History, der Static-Build die einzige
Quelle der Wahrheit für das, was im Netz steht.

## Was sich für dich als Leser ändert: nichts

Die alten Posts liegen weiter aus dem `blog-cache.json` und werden Schritt für
Schritt nach Markdown migriert. URLs bleiben gleich, Stil bleibt gleich, das
Tempo der Seite wird mit jeder Migration etwas besser, weil weniger
WP-Altlasten mit ausgeliefert werden.
