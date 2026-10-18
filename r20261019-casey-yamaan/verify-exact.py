#!/usr/bin/env python3
"""Character-level check of the reviewer-specified Japanese strings."""
import re
import sys
from html.parser import HTMLParser
from pathlib import Path

ROOT = Path(__file__).resolve().parent

S1 = "当サイトの紹介リンクを経由して申し込まれた場合、運営者に報酬が発生することがあります。"
S2 = "しかし、当サイトの評価データはすべて客観的な事実に基づいて算出しており、紹介報酬の有無によって評価が変わることは一切ありません。"
S3 = "記事は利用体験と公式資料の読み取りをまとめたものです。"
S4 = "プロップファームのすべての取引は完全にシミュレートされており、規制対象となる業務を行っておらず、ブローカーとしても機能しておらず、また預金を受け入れていないため、規制当局からの認可は必要ありません。"
LIST = S1 + S2
FIRM = LIST + S3 + S4
ABOUT = "PROP CHECK（プロップチェック）は、プロップファームを選ぶ際に役立つ情報を整理・比較するサイトです。利用者の口コミや出金・口座に関する報告、各社の公式情報、プラン・ルールの変更履歴をまとめ、確認できた「確かな事実」と「未確認の情報」を分けて掲載しています。点数だけでは分からない違いを確認し、自分に合う会社を検討するための参考情報を提供します。"

BOLD_RE = re.compile(r"font-weight\s*:\s*(bold|[6-9]00)\b", re.I)


class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []
        self.skip = 0

    def handle_starttag(self, tag, attrs):
        if tag in ("script", "style"):
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in ("script", "style") and self.skip:
            self.skip -= 1

    def handle_data(self, data):
        if not self.skip:
            self.parts.append(data)


def visible(html):
    parser = TextExtractor()
    parser.feed(html)
    return "".join(parser.parts)


def inner(html, start_marker, end_marker):
    i = html.find(start_marker)
    if i < 0:
        raise SystemExit(f"missing start {start_marker!r}")
    j = html.find(end_marker, i)
    if j < 0:
        raise SystemExit(f"missing end {end_marker!r}")
    return html[i:j]


fails = []


def check(name, got, expected):
    ok = got == expected
    print(f"{'OK' if ok else 'NG'} {name} len={len(got)} expected={len(expected)}")
    if not ok:
        for n, (a, b) in enumerate(zip(got, expected)):
            if a != b:
                print("  first diff at", n, repr(got[max(0, n - 12):n + 16]), "vs", repr(expected[max(0, n - 12):n + 16]))
                break
        else:
            print("  prefix match, extra", repr(got[len(expected):len(expected) + 40]), "or missing", repr(expected[len(got):len(got) + 40]))
        fails.append(name)


def bold_scan(name, html):
    low = html.lower()
    bad = []
    if "<strong" in low or "<b>" in low or "<b " in low:
        bad.append("strong/b tag")
    if BOLD_RE.search(html):
        bad.append("font-weight bold in this fragment")
    # The two sentences must not be wrapped differently.
    if S2 not in html or S1 not in html:
        bad.append("sentences missing from fragment")
    print(f"{'OK' if not bad else 'NG'} {name} bold-scan {bad or 'no strong/b and no bold font-weight'}")
    if bad:
        fails.append(name + " bold")


# ④ list
html = (ROOT / "guides/index.html").read_text(encoding="utf-8")
block = inner(html, '<div class="pc-guide-disclosure">', "</div></main>")
text = re.sub(r"\s+", "", visible(block))
check("④ 紹介記事一覧", text, LIST)
bold_scan("④ 紹介記事一覧", block)
if "PROP CHECK · 調べて、比べて、選ぶ。" in html:
    fails.append("tagline still present")
    print("NG tagline still present")
else:
    print("OK tagline absent")
gone = "紹介報酬のある4社のガイドです。市場全体の順位を示すページではありません。価格比較は同じ資金額でも条件が異なる点を併記しています。"
if gone in html:
    fails.append("list intro still present")
    print("NG list intro still present")
else:
    print("OK list intro sentence absent")

# ④ firms
for name in ["fundedhive", "hantec", "hypernova", "propr"]:
    html = (ROOT / "guides" / name / "index.html").read_text(encoding="utf-8")
    block = inner(html, '<div class="pc-disclosure-note">', "</div>")
    text = re.sub(r"\s+", "", visible(block))
    check(f"④ {name}", text, FIRM)
    bold_scan(f"④ {name}", block)
    if "PROP CHECK · 調べて、比べて、選ぶ。" in html:
        fails.append(name + " tagline")
        print("NG", name, "tagline")

# ⑤
policy = (ROOT / "policy/index.html").read_text(encoding="utf-8")
check("⑤ サイトについて", ABOUT if ABOUT in policy else "", ABOUT)

# ⑥
ad = (ROOT / "advertising/index.html").read_text(encoding="utf-8")
block = inner(ad, '<h2 id="pc-policy-ads">', "</article>")
text = re.sub(r"\s+", "", visible(block).replace("広告・紹介リンク方針", ""))
check("⑥ 広告・紹介リンク方針", text, LIST)
bold_scan("⑥ 広告・紹介リンク方針", block)

# ① markers
privacy = (ROOT / "privacy/index.html").read_text(encoding="utf-8")
for marker in ["確認中の事項を含む暫定版です", "［公開前に確認", "2026年9月24日更新"]:
    if marker in privacy:
        fails.append("privacy marker " + marker)
        print("NG privacy still has", marker)
    else:
        print("OK privacy absent", marker)
if "5.1 クッキーポリシー" in privacy or "目次" in privacy or "pc-privacy-toc" in privacy:
    fails.append("privacy toc")
    print("NG privacy toc still present")
else:
    print("OK 5.1 and 目次 absent")
COOKIE = [
    "当サイトには分析タグや広告タグを組み込んでいません。現在の日本語の記事一覧では、外部記事へのリンクを表示し、NOTE記事の外部サムネイルは表示していません。一部の英語・韓国語の紹介ページでは、会社サイトのアイコンをGoogleの画像配信元から読み込む場合があります。",
    "NOTE、公式HP、紹介先など外部リンクの移動先では、各提供者のCookie方針が適用されます。",
    "本番で解析や広告を導入する場合は、用途、提供元、保存期間、選択手段を確認して本ページを更新します。",
]
for n, para in enumerate(COOKIE, 1):
    count = privacy.count(para)
    if count == 1:
        print(f"OK cookie {n} once")
    else:
        fails.append(f"cookie {n}")
        print(f"NG cookie {n} count={count}")
if ">クッキーポリシー</h1>" not in privacy:
    fails.append("cookie heading")
    print("NG cookie heading")
else:
    print("OK cookie heading")

# ⑦ wording unchanged
def editorial_text(html):
    key = "<h3>情報の更新と訂正について</h3>"
    i = html.find(key)
    i = html.rfind("<article", 0, i)
    j = html.find("</article>", i)
    return re.sub(r"\s+", "", visible(html[i:j]))

base = editorial_text(policy)
for key in "ABC":
    page = (ROOT / f"editorial-update-{key}.html").read_text(encoding="utf-8")
    got = editorial_text(page)
    check(f"⑦ 表示案{key} 文言", got, base)

print("FAILS", len(fails))
sys.exit(1 if fails else 0)
