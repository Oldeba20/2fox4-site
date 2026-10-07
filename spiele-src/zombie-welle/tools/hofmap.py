W,H=48,40
g=[['.' for _ in range(W)] for _ in range(H)]
for r in range(H):
    for c in range(W):
        if r<2 or r>=H-2 or c<2 or c>=W-2: g[r][c]='#'
def put(r,c,ch): g[r][c]=ch
def rect(r0,c0,r1,c1,ch):
    for r in range(r0,r1+1):
        for c in range(c0,c1+1): g[r][c]=ch
# Gebaeude mit Dach (Spieler)
rect(29,19,34,28,'T')
put(31,23,'@')
# Tor in der Nordmauer (geht nach den Hof-Wellen auf, dahinter der Gang zur Stadt)
for r in (0,1):
    for c in (37,38): g[r][c]='G'
# Treppen: West (cols 12..18) und Ost (cols 29..35), je 2 breit
for i in range(7):
    for r in (31,32):
        g[r][18-i]=str(7-i)
        g[r][29+i]=str(7-i)
# Metallwand-Streifen an der Suedmauer hinter dem Gebaeude
rect(35,19,37,28,'#')
# Tore / Spawns
for (r,c) in [(3,6),(3,23),(3,41),(13,3),(13,44),(21,3),(21,44)]: put(r,c,'S')
# Container (2.8 m hoch)
for (r,c,l,v) in [(8,9,3,0),(7,30,4,0),(15,15,2,1),(14,33,2,1),(20,22,3,0),(24,8,2,1),(23,38,2,1),(11,22,1,0)]:
    for k in range(l):
        if v: put(r+k,c,'X')
        else: put(r,c+k,'X')
# Kisten, Wuerfel, Faesser
for (r,c) in [(5,15),(5,16),(10,40),(12,12),(18,29),(18,30),(26,30),(26,14),(17,6),(9,26)]: put(r,c,'C')
for (r,c) in [(16,24),(22,14),(22,33),(10,18),(27,24)]: put(r,c,'W')
for (r,c) in [(6,27),(16,20),(19,9),(19,40),(25,22),(12,37),(9,5)]: put(r,c,'B')
# Lampenmasten
for (r,c) in [(6,12),(6,35),(14,24),(19,16),(19,32),(26,5),(26,42),(12,4),(12,43)]: put(r,c,'Y')
for row in g: print("  '"+''.join(row)+"',")
# Erreichbarkeit pruefen (Boden)
from collections import deque
blk=set('#XCWBYG')
def h(ch):
    if ch in 'T@E': return 4.0
    if ch.isdigit(): return int(ch)*0.5
    return 0
start=(31,23); seen={start}; q=deque([start])
while q:
    r,c=q.popleft()
    for dr,dc in ((1,0),(-1,0),(0,1),(0,-1)):
        nr,nc=r+dr,c+dc
        ch=g[nr][nc]
        if ch in blk or (nr,nc) in seen: continue
        if abs(h(ch)-h(g[r][c]))>0.55: continue
        seen.add((nr,nc)); q.append((nr,nc))
import sys
miss=[(r,c) for r in range(H) for c in range(W) if g[r][c] not in blk and (r,c) not in seen]
print('unreachable',miss, file=sys.stderr)
