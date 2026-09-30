/**
 * Der 2FOX4-Fuchs als SVG — eigene Figur in Markenorange (#ff6b35).
 * Wird im Spiel „Fuchs & Federn“ (Canvas) und in der Spielauswahl
 * der 404-Seite verwendet.
 *
 * mood: "normal" | "happy" | "angry"
 * paws: Pfoten unten mit zeichnen (Fuchs lugt über einen Heuballen)
 */
const ORANGE = "#ff6b35";
const ORANGE_DARK = "#e2531f";
const CREAM = "#fff5ea";
const INNER = "#ffd9bf";
const INK = "#1d1410";

function eyes(mood) {
  if (mood === "happy") {
    return (
      `<path d="M60 106 Q72 92 84 106" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>` +
      `<path d="M116 106 Q128 92 140 106" fill="none" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>`
    );
  }
  if (mood === "angry") {
    return (
      `<path d="M56 86 L88 98" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>` +
      `<path d="M144 86 L112 98" stroke="${INK}" stroke-width="7" stroke-linecap="round"/>` +
      `<ellipse cx="74" cy="108" rx="8" ry="6" fill="${INK}"/>` +
      `<ellipse cx="126" cy="108" rx="8" ry="6" fill="${INK}"/>`
    );
  }
  return (
    `<ellipse cx="73" cy="104" rx="8.5" ry="11" fill="${INK}"/>` +
    `<ellipse cx="127" cy="104" rx="8.5" ry="11" fill="${INK}"/>` +
    `<circle cx="76" cy="99" r="3.2" fill="#fff"/>` +
    `<circle cx="130" cy="99" r="3.2" fill="#fff"/>`
  );
}

function mouth(mood) {
  if (mood === "angry") {
    return `<path d="M88 188 Q100 180 112 188" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round"/>`;
  }
  if (mood === "happy") {
    return (
      `<path d="M86 181 Q100 198 114 181 Z" fill="${INK}"/>` +
      `<path d="M92 187 Q100 196 108 187 Z" fill="#ff8fa3"/>`
    );
  }
  return `<path d="M88 182 Q94 190 100 184 Q106 190 112 182" fill="none" stroke="${INK}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>`;
}

export function foxSVG(mood = "normal", paws = true) {
  const h = paws ? 214 : 200;
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 ${h}" width="200" height="${h}">` +
    // Ohren
    `<path d="M40 14 L20 100 L90 72 Z" fill="${ORANGE}"/>` +
    `<path d="M160 14 L180 100 L110 72 Z" fill="${ORANGE}"/>` +
    `<path d="M45 40 L34 90 L76 73 Z" fill="${INNER}"/>` +
    `<path d="M155 40 L166 90 L124 73 Z" fill="${INNER}"/>` +
    `<path d="M40 14 L33 44 L54 36 Z" fill="${INK}"/>` +
    `<path d="M160 14 L167 44 L146 36 Z" fill="${INK}"/>` +
    // Kopf
    `<path d="M28 86 C54 56 146 56 172 86 L196 124 C164 130 144 142 130 156 L100 194 L70 156 C56 142 36 130 4 124 Z" fill="${ORANGE}"/>` +
    // Stirn-Schattierung
    `<path d="M100 62 L86 96 L100 118 L114 96 Z" fill="${ORANGE_DARK}" opacity="0.55"/>` +
    // Wangen (hell)
    `<path d="M4 124 C36 130 56 142 70 156 L100 194 L100 146 C84 130 60 120 30 118 Z" fill="${CREAM}"/>` +
    `<path d="M196 124 C164 130 144 142 130 156 L100 194 L100 146 C116 130 140 120 170 118 Z" fill="${CREAM}"/>` +
    eyes(mood) +
    // Nase
    `<path d="M89 166 Q100 159 111 166 Q108 177 100 179 Q92 177 89 166 Z" fill="${INK}"/>` +
    mouth(mood) +
    (paws
      ? `<ellipse cx="58" cy="200" rx="22" ry="13" fill="${ORANGE}"/>` +
        `<ellipse cx="142" cy="200" rx="22" ry="13" fill="${ORANGE}"/>` +
        `<path d="M50 206 v6 M58 207 v6 M66 206 v6 M134 206 v6 M142 207 v6 M150 206 v6" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>`
      : "") +
    `</svg>`
  );
}

export function foxDataURL(mood = "normal", paws = true) {
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(foxSVG(mood, paws));
}
