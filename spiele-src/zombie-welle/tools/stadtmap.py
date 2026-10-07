# Erzeugt die Karte "Die Stadt" (Morgendaemmerung) fuer level.js und prueft die Erreichbarkeit.
# Legende (zusaetzlich zu level.js):
#  H Haus (Hoehe je Gebaeude zufaellig)   , Gehweg   - / | Fahrbahnmarkierung
#  i Ladeninneres (mit Decke)  g Gang/Tunnel (mit Decke)  k Lampe im Gang  l Lampe innen  c Regal/Kiste innen  a Start im Gang
#  O Litfasssaeule  A Auto quer (2 Felder)  V Auto laengs (2 Felder)  U Muelltonne  N Absperrbake
#  S Gully (Spawn)  E Ausgang  Y Laterne  B Fass  C Kiste/Palette  X Bauschutt-Container
import sys
W, H = 52, 46
g = [['.' for _ in range(W)] for _ in range(H)]

def rect(r0, c0, r1, c1, ch):
    for r in range(r0, r1 + 1):
        for c in range(c0, c1 + 1):
            g[r][c] = ch

def put(r, c, ch): g[r][c] = ch

# Rand: Haeuser
rect(0, 0, H - 1, W - 1, 'H')
rect(2, 2, H - 3, W - 3, ',')

# Haeuserbloecke
blocks = [(2, 2, 7, 11), (2, 17, 7, 33), (2, 39, 7, 49),
          (13, 2, 19, 11), (13, 17, 19, 33), (13, 39, 19, 49),
          (25, 2, 43, 11), (38, 17, 43, 33), (25, 39, 43, 49)]
for b in blocks: rect(*b, 'H')

# Strassen: Fahrbahn + Mittellinie (Gehwege bleiben ',')
def road_ew(r0, r1, cmin, cmax):
    rect(r0, cmin, r1, cmax, '.')
    mid = (r0 + r1) // 2
    for c in range(cmin, cmax + 1):
        if c % 2 == 0: g[mid][c] = '-'
def road_ns(c0, c1, rmin, rmax):
    rect(rmin, c0, rmax, c1, '.')
    mid = (c0 + c1) // 2
    for r in range(rmin, rmax + 1):
        if r % 2 == 0: g[r][mid] = '|'
road_ew(9, 11, 2, 49)
road_ew(21, 23, 2, 49)
road_ns(13, 15, 2, 43)
road_ns(35, 37, 2, 43)
# Kreuzungen ohne Linien
for (r0, r1) in ((9, 11), (21, 23)):
    for (c0, c1) in ((13, 15), (35, 37)):
        rect(r0, c0, r1, c1, '.')

# Laeden: Inneres i, Front (Oeffnung) zur Strasse, Name fuer das Schild
shops = []
def shop(r0, c0, r1, c1, front, name, shelves=(), lamps=()):
    rect(r0, c0, r1, c1, 'i')
    # Oeffnung in der Fassade
    fr = []
    for (r, c) in front:
        g[r][c] = 'i'; fr.append((r, c))
    for (r, c) in shelves: g[r][c] = 'c'
    for (r, c) in lamps: g[r][c] = 'l'
    rs = [p[0] for p in fr]; cs = [p[1] for p in fr]
    # Blickrichtung des Schilds: zur Strasse hin
    r, c = fr[0]
    if g[r + 1][c] not in 'Hicl' and r + 1 < H: face = 's'
    elif g[r - 1][c] not in 'Hicl': face = 'n'
    elif g[r][c + 1] not in 'Hicl': face = 'e'
    else: face = 'w'
    shops.append(dict(r0=min(rs), c0=min(cs), r1=max(rs), c1=max(cs), face=face, name=name))

shop(4, 4, 6, 8, [(7, 5), (7, 6), (7, 7)], 'BÄCKEREI KORN', shelves=[(4, 5), (4, 7)], lamps=[(5, 6)])
shop(4, 19, 6, 25, [(7, 21), (7, 22), (7, 23)], 'ELEKTRO FUNKE', shelves=[(4, 20), (4, 21), (4, 24), (6, 19)], lamps=[(5, 22)])
shop(4, 28, 6, 31, [(7, 29), (7, 30)], 'KIOSK 24', shelves=[(4, 28), (4, 31)], lamps=[(5, 29)])
shop(4, 41, 6, 46, [(7, 42), (7, 43), (7, 44)], 'APOTHEKE', shelves=[(4, 42), (4, 45), (6, 46)], lamps=[(5, 43)])
shop(14, 4, 17, 9, [(13, 5), (13, 6), (13, 7), (13, 8)], 'BLUMEN ROSE', shelves=[(17, 4), (17, 9), (15, 6)], lamps=[(15, 8)])
# Supermarkt: gross, zwei Eingaenge
shop(14, 19, 18, 31, [(19, 23), (19, 24), (19, 25), (19, 26)], 'SUPERMARKT', lamps=[(15, 22), (15, 28), (17, 25)],
     shelves=[(15, 20), (15, 21), (16, 20), (16, 21), (15, 24), (15, 25), (15, 26), (17, 29), (17, 30), (16, 30), (14, 31)])
for (r, c) in [(16, 33)]: g[r][c] = 'i'  # Seitentuer zur Strasse (Spalte 34 = Gehweg)
rect(16, 32, 16, 32, 'i')
shop(28, 6, 31, 10, [(29, 11), (30, 11)], 'IMBISS', shelves=[(28, 7), (31, 7)], lamps=[(29, 8)])
shop(30, 40, 33, 45, [(31, 39), (32, 39)], 'FRISEUR', shelves=[(30, 44), (33, 44)], lamps=[(31, 42)])
shop(14, 41, 16, 46, [(13, 43), (13, 44)], 'PFANDHAUS', shelves=[(14, 41), (16, 46)], lamps=[(15, 43)])

# Gang (Ankunft aus dem Hof): unter dem Suedblock zum Platz
rect(38, 24, 43, 25, 'g')
put(43, 24, 'a')
put(41, 25, 'k'); put(38, 24, 'k')

# Marktplatz (Zeilen 25-37, Spalten 17-33): Pflaster, Brunnen-Saeule, Autos
for (r, c) in [(31, 25)]: put(r, c, 'O')

# Autos
for (r, c) in [(9, 5), (11, 20), (9, 27), (11, 44), (9, 40), (21, 7), (23, 18), (21, 29), (22, 42), (23, 46), (27, 20), (34, 29), (26, 26)]:
    put(r, c, 'A'); put(r, c + 1, 'A')
for (r, c) in [(14, 13), (17, 15), (27, 13), (35, 15), (5, 35), (15, 37), (29, 35), (38, 37), (31, 19), (3, 13), (40, 13)]:
    put(r, c, 'V'); put(r + 1, c, 'V')

# Muelltonnen, Baken, Faesser, Kisten, Container
for (r, c) in [(8, 3), (8, 10), (8, 18), (8, 32), (8, 47), (12, 4), (12, 30), (20, 10), (20, 45), (24, 4), (24, 30), (25, 12), (36, 16), (33, 34), (12, 47)]:
    put(r, c, 'U')
for (r, c) in [(20, 13), (20, 14), (24, 36), (24, 37), (12, 36)]: put(r, c, 'N')
for (r, c) in [(26, 31), (36, 18), (12, 20), (24, 25), (29, 34), (8, 38)]: put(r, c, 'B')
for (r, c) in [(26, 18), (27, 18), (35, 32), (36, 31), (12, 10), (20, 32)]: put(r, c, 'C')
for (r, c) in [(36, 26), (36, 27)]: put(r, c, 'X')

# Laternen
for (r, c) in [(8, 6), (8, 25), (8, 44), (12, 16), (12, 40), (20, 6), (20, 26), (24, 20), (24, 44), (30, 12), (30, 38), (40, 16), (40, 34), (5, 16), (5, 34), (17, 12), (17, 38), (34, 22)]:
    put(r, c, 'Y')

# Gullys (Spawns)
for (r, c) in [(3, 14), (3, 36), (10, 3), (10, 48), (22, 3), (22, 48), (42, 14), (42, 36), (28, 30), (33, 18), (10, 25), (22, 25)]:
    put(r, c, 'S')

# Ausgang: zurueck in die Halle (Nordende der Ost-Strasse)
put(3, 37, 'E')

for row in g: print("  '" + ''.join(row) + "',")
print('SHOPS', shops, file=sys.stderr)

# Erreichbarkeit
from collections import deque
blk = set('HAVNCBXYOcU')
start = (43, 24); seen = {start}; q = deque([start])
while q:
    r, c = q.popleft()
    for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
        nr, nc = r + dr, c + dc
        if g[nr][nc] in blk or (nr, nc) in seen: continue
        seen.add((nr, nc)); q.append((nr, nc))
miss = [(r, c) for r in range(H) for c in range(W) if g[r][c] not in blk and (r, c) not in seen]
print('unreachable', miss, file=sys.stderr)
