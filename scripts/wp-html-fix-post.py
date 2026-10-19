"""Stufe 2: gerendertes HTML säubern und auf Website-Standard bringen."""
import re, sys
from bs4 import BeautifulSoup, NavigableString, Comment

BOX_RE = re.compile(r'(box|card|callout|notice|banner|cta-section|intro-section|^pros$|^cons$|pros-cons|process-step|stat-item|affiliate|^highlight$|tips)', re.I)
TW_BOX = re.compile(r'^bg-(?!white|transparent)')
Q_CLS = {'faq-question','accordion-header','accordion-trigger','accordion-button','faq-trigger'}
A_CLS = {'faq-answer','accordion-content','faq-content'}
ITEM_CLS = {'faq-item','accordion-item'}
KEEP_ATTR = {'href','src','alt','width','height','title','colspan','rowspan','target','rel','id','start','loading'}
BLOCK = 'p|h2|h3|h4|h5|ul|ol|li|div|table|thead|tbody|tr|details|summary|pre|figure|figcaption|blockquote|hr'

def cls(e): return set(e.get('class') or [])
def norm(t): return re.sub(r'\W+', '', t.lower())

def clean_text_el(e):
    for i in e.find_all(['i','svg','button']): i.decompose()
    for s in e.find_all('span', class_=re.compile('icon')): s.decompose()

def make_details(soup, q, a):
    d = soup.new_tag('details'); s = soup.new_tag('summary')
    clean_text_el(q)
    s.string = re.sub(r'\s+', ' ', q.get_text(' ')).strip().rstrip('+−-▼▾ ').strip()
    d.append(s)
    if a is not None:
        inner = a.find(class_='faq-answer-content') or a.find(class_='accordion-text') or a
        kids = list(inner.contents)
        if not any(getattr(k, 'name', None) in ('p','ul','ol','table','div') for k in kids):
            p = soup.new_tag('p')
            for k in kids: p.append(k.extract())
            d.append(p)
        else:
            for k in kids: d.append(k.extract())
    return d

def process(html, title):
    soup = BeautifulSoup(html, 'html.parser')
    for c in soup.find_all(string=lambda x: isinstance(x, Comment)): c.extract()

    # FAQ / Akkordeon -> <details>
    for item in soup.find_all(lambda e: cls(e) & ITEM_CLS):
        if not item.parent: continue
        q = item.find(lambda e: cls(e) & Q_CLS) or item.find(['button','h3','h4','summary'])
        a = item.find(lambda e: cls(e) & A_CLS)
        if q is None: continue
        q.extract()
        if a is not None:
            a.extract()
            item.replace_with(make_details(soup, q, a))
        else:  # Antwort steht ohne eigene Klasse direkt im Item
            d = make_details(soup, q, item)
            item.replace_with(d)
    for q in soup.find_all(lambda e: cls(e) & Q_CLS):
        if not q.parent: continue
        a = q.find_next_sibling()
        if a is not None and cls(a) & A_CLS:
            a.extract(); d = make_details(soup, q, a); q.replace_with(d)
    for d in soup.find_all('details'):
        d.attrs = {}
        s = d.find('summary')
        if s:
            clean_text_el(s); s.attrs = {}
            if not s.find(True): s.string = re.sub(r'\s+', ' ', s.get_text()).strip()

    # Code-Beispiele (Prompt-Kästen) -> <pre><code>
    for cb in soup.find_all(lambda e: e.name in ('div','p') and cls(e) & {'code-block','code-showcase'}):
        for br in cb.find_all('br'): br.replace_with('\n')
        txt = '\n'.join(l.strip() for l in cb.get_text().strip().split('\n'))
        pre = soup.new_tag('pre'); code = soup.new_tag('code'); code.string = txt; pre.append(code)
        cb.replace_with(pre)

    # Interaktive Reste ohne Skript entfernen
    for e in soup.find_all(['i','svg','button','input','select','option','textarea','label','form','script','style']):
        e.decompose()
    for e in soup.find_all(lambda e: any(c.startswith('calculator-result') or c in ('faq-icon','accordion-icon','icon-rotate','check-icon','feature-icon','benefit-icon') for c in cls(e))):
        e.decompose()

    # Überschrift 1 im Inhalt
    for h in soup.find_all('h1'):
        if norm(h.get_text())[:40] == norm(title)[:40]: h.decompose()
        else: h.name = 'h2'

    # Kästen markieren
    for e in soup.find_all(['div','section','aside']):
        c = cls(e)
        if any(BOX_RE.search(x) for x in c) or (any(TW_BOX.match(x) for x in c) and any(re.match(r'^(p|px|py)-\d', x) for x in c)):
            if not any('wp-box' in (p.get('class') or []) for p in e.parents):
                e['data-box'] = '1'
    # Struktur-Tags auspacken
    for e in soup.find_all(['article','section','header','main','nav','aside','span','small']):
        if e.get('data-box'): e.name = 'div'; continue
        if e.name == 'span' and cls(e) & {'stat-number','metric-value','stats-number','price-value','highlight-keyphrase','highlight-text','gradient-text'}:
            e.name = 'strong'; continue
        e.unwrap()
    for e in soup.find_all(lambda e: e.name in ('div','p') and cls(e) & {'stat-number','metric-value','stats-number','price-value'}):
        e.name = 'p'; inner = soup.new_tag('strong'); inner.extend(list(e.contents)); e.append(inner)

    # Attribute säubern
    for e in soup.find_all(True):
        box = e.get('data-box')
        keepcls = [c for c in cls(e) if c.startswith('blog-cta')]
        e.attrs = {k: v for k, v in e.attrs.items() if k in KEEP_ATTR}
        if box: e['class'] = ['wp-box']
        elif keepcls: e['class'] = keepcls
    # verschachtelte Kästen: innere Markierung weg
    for e in soup.find_all(class_='wp-box'):
        if any('wp-box' in (p.get('class') or []) for p in e.parents): del e['class']

    # Leere Elemente entfernen (mehrfach, von innen nach außen)
    for _ in range(4):
        for e in soup.find_all(['div','p','li','ul','ol','h2','h3','h4','h5','strong','em','a','figure']):
            if not e.get_text().strip() and not e.find(['img','br','hr','table','pre']):
                e.decompose()
    # div ohne Klasse mit nur einem Kind-div auspacken
    for e in soup.find_all('div'):
        if not e.attrs: e.unwrap()

    # Tabellen scrollbar machen
    for t in soup.find_all('table'):
        w = soup.new_tag('div', attrs={'class': 'wp-table'}); t.wrap(w)

    # Zeilenumbrüche in Text (außer <pre>) einebnen
    for s in soup.find_all(string=True):
        if s.find_parent('pre'): continue
        new = re.sub(r'\s+', ' ', str(s))
        if new != str(s): s.replace_with(new)
    out = str(soup)
    out = re.sub(r'>\?\s+(?=\S)', '>', out)  # verlorene WP-Emojis (als ? gespeichert)
    out = re.sub(r'\s*<(%s)([\s>])' % BLOCK, r'\n<\1\2', out)
    out = re.sub(r'</(%s)>\s*' % BLOCK, r'</\1>\n', out)
    # pro Zeile trimmen + Leerzeilen raus, <pre>-Inhalt unangetastet
    res, inpre = [], False
    for line in out.split('\n'):
        if inpre:
            res.append(line)
        elif line.strip():
            res.append(line.strip())
        if '<pre' in line: inpre = True
        if '</pre>' in line: inpre = False
    return '\n'.join(res)

if __name__ == '__main__':
    md, s1 = sys.argv[1], sys.argv[2]
    src = open(md).read()
    m = re.match(r'^---\n[\s\S]*?\n---\n', src)
    title = re.search(r'^title:\s*"?(.*?)"?\s*$', m.group(0), re.M).group(1)
    body = process(open(s1).read(), title)
    open(sys.argv[3], 'w').write(m.group(0) + '\n' + body + '\n')
