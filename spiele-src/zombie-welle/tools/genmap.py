W,H=40,32
g=[['#']*W for _ in range(H)]
corr=set()
def room(x0,y0,x1,y1):
    for y in range(y0,y1+1):
        for x in range(x0,x1+1): g[y][x]='.'
def cor(x0,y0,x1,y1):
    for y in range(min(y0,y1),max(y0,y1)+1):
        for x in range(min(x0,x1),max(x0,x1)+1):
            if g[y][x]=='#': g[y][x]='.'; corr.add((x,y))
# Räume
room(14,12,25,19)   # R1 Zentrum
room(2,2,9,8)       # R2 NW
room(30,2,37,8)     # R3 NO
room(2,13,8,19)     # R4 W
room(31,12,37,20)   # R5 O Lager
room(2,24,10,29)    # R6 SW
room(28,24,37,29)   # R7 SO
room(14,24,24,29)   # R8 S-Halle
room(16,2,23,6)     # R9 N
# Gänge
cor(10,5,15,5)      # R2-R9
cor(24,4,29,4)      # R9-R3
cor(19,7,20,11)     # R9-R1 (2 breit)
cor(5,9,5,12)       # R2-R4
cor(9,16,13,16)     # R4-R1
cor(26,14,30,14)    # R1-R5
cor(26,18,30,18)    # R1-R5 unten
cor(34,9,34,11)     # R3-R5
cor(17,20,17,23)    # R1-R8 links
cor(22,20,22,23)    # R1-R8 rechts
cor(5,20,5,23)      # R4-R6
cor(11,27,13,27)    # R6-R8
cor(25,26,27,26)    # R8-R7
cor(34,21,34,23)    # R5-R7
cor(6,10,18,10)     # Schleife R2/R4-Gang -> R9-Gang
cor(12,11,12,11)
cor(26,8,29,8)      # Haken vom R3 nach Westen
cor(26,8,26,11)
cor(26,11,27,11)
cor(27,11,27,13)    # -> R1-R5 Gang (y14)? führt zu (27,13) neben (27,14)
def put(x,y,c):
    assert g[y][x]!='#',(x,y,c)
    g[y][x]=c
# Zentrum
put(20,16,'@')
for p in [(16,14),(23,14),(16,17),(23,17)]: put(*p,'O')
put(18,13,'W'); put(21,18,'W'); put(19,18,'W')
put(17,15,'K'); put(22,16,'K')
put(20,13,'R')
# Spawns
for p in [(3,3),(36,3),(3,16),(36,19),(3,28),(36,28),(19,28),(22,3)]: put(*p,'S')
# Räume ausstatten
put(7,3,'C'); put(8,3,'C'); put(8,4,'C'); put(4,6,'W'); put(6,5,'L'); put(3,7,'B')
put(31,6,'C'); put(32,6,'C'); put(35,5,'W'); put(33,3,'L'); put(36,7,'B')
put(4,14,'C'); put(6,18,'W'); put(5,16,'L'); put(7,14,'B')
for p in [(32,13),(33,13),(35,14),(35,15),(32,16),(33,17),(36,13)]: put(*p,'C')
put(34,15,'W'); put(32,19,'W'); put(34,18,'R'); put(36,16,'B')
put(4,25,'C'); put(5,25,'C'); put(8,28,'W'); put(6,26,'L'); put(9,25,'B')
put(30,25,'W'); put(33,28,'C'); put(34,28,'C'); put(32,26,'L'); put(30,28,'B')
put(16,26,'W'); put(22,26,'W'); put(19,25,'K'); put(15,28,'C'); put(23,28,'B')
put(18,4,'L'); put(21,3,'W')
# Gänge: Lichter, Würfel im 2er-Gang
put(19,9,'W'); put(20,8,'L')
put(12,5,'R'); put(27,4,'L'); put(5,11,'L'); put(11,16,'R'); put(28,14,'L'); put(28,18,'L')
put(34,10,'R'); put(17,22,'L'); put(22,21,'R'); put(5,22,'L'); put(12,27,'L'); put(26,26,'R')
put(34,22,'L'); put(9,10,'L'); put(16,10,'R'); put(26,10,'L')
# Gangboden = Riffelblech
for (x,y) in corr:
    if g[y][x]=='.': g[y][x]='P'
# Wände an Gängen = Metall
for y in range(H):
    for x in range(W):
        if g[y][x]!='#': continue
        for dx,dy in((1,0),(-1,0),(0,1),(0,-1)):
            nx,ny=x+dx,y+dy
            if 0<=nx<W and 0<=ny<H and (nx,ny) in corr: g[y][x]='M'
rows=[''.join(r) for r in g]
# Prüfen: Erreichbarkeit
blk=set('#MCBOW')
start=[(x,y) for y in range(H) for x in range(W) if rows[y][x]=='@'][0]
seen={start};st=[start]
while st:
    x,y=st.pop()
    for dx,dy in((1,0),(-1,0),(0,1),(0,-1)):
        n=(x+dx,y+dy)
        if 0<=n[0]<W and 0<=n[1]<H and rows[n[1]][n[0]] not in blk and n not in seen: seen.add(n);st.append(n)
free=[(x,y) for y in range(H) for x in range(W) if rows[y][x] not in blk]
print('free',len(free),'reach',len(seen),'unreach',[f for f in free if f not in seen])
for r in rows: print(r)
open('/tmp/claude-0/map2.txt','w').write('\n'.join(rows))
