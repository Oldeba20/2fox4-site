/**
 * Hilfsfunktionen für Smartphone-Screenshots der Referenzen.
 *
 * Ein Handy-Screenshot wird als Basis-Pfad OHNE Endung angegeben, z. B.
 * "/images/referenzen/muckundpipp-mobile". Daneben liegen WebP-Dateien in
 * mehreren Breiten: <basis>-240.webp, -360.webp, -540.webp, -720.webp,
 * -1080.webp (aus einem 1170 px breiten Screenshot, Lanczos-skaliert).
 * Der Browser wählt über srcset/sizes die passende Größe.
 */
export const PHONE_WIDTHS = [240, 360, 540, 720, 1080] as const;

export function phoneSrc(base: string, width = 360): string {
  return `${base}-${width}.webp`;
}

export function phoneSrcset(base: string): string {
  return PHONE_WIDTHS.map((w) => `${base}-${w}.webp ${w}w`).join(", ");
}
