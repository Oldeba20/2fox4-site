# Sprachausgabe

Die Sprüche stehen in `src/voicelines.json` (`[id, Anzeigetext, gesprochener Text]`).
Vertont mit ElevenLabs über Higgsfield (`text2speech_v2`, Variante `elevenlabs`),
Stimme „Gideon" (Preset-ID `1ad38ba4-9cc4-4f2f-9fde-b0fefdf67ae5`), am 03.10.2026.

Nachbearbeitung je Datei (ffmpeg): Stille vorn/hinten weg, Kompressor, Lautheit −15 LUFS,
Mono 64 kbit/s MP3 → `public/spiele/zombie-welle/voice/<id>.mp3`.

Neuen Spruch hinzufügen: Zeile in `voicelines.json` ergänzen, MP3 mit derselben ID erzeugen,
`npm run build`. Fehlt eine Datei, erscheint der Spruch nur als Text.
