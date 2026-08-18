#!/usr/bin/env python3
"""記事1本を検証する。違反があれば終了コード 1 で落ちる。

    python3 scripts/check_article.py src/content/blog/xxx.md

黙って劣化させず、落とす。
"""
import sys, os, re

REQUIRED = ["title", "description", "publishedAt", "author", "category", "tags"]
CONSUMED_DIR = os.path.join("src", "content", "blog")

# 別スクリプト（コードポイント範囲で検出できる）
FOREIGN_SCRIPTS = {
    "ハングル":           re.compile(r"[가-힣ᄀ-ᇿ]"),
    "キリル":             re.compile(r"[Ѐ-ӿ]"),
    "ギリシャ":           re.compile(r"[Ͱ-Ͽ]"),
    "タイ":               re.compile(r"[฀-๿]"),
    "デーヴァナーガリー": re.compile(r"[ऀ-ॿ]"),
    "アラビア":           re.compile(r"[؀-ۿ]"),
    "ヘブライ":           re.compile(r"[֐-׿]"),
}

_jp_cache = {}


def foreign_kanji(ch):
    """CJK 統合漢字だが日本語の文字集合に無い ＝ 簡体字などの混入。

    範囲判定ではなく、日本語の符号化文字集合に属するかで判定する
    （簡体字は日本語漢字と同じブロックにいるため範囲では分離できない）。
    """
    r = _jp_cache.get(ch)
    if r is None:
        o = ord(ch)
        is_cjk = 0x4E00 <= o <= 0x9FFF or 0x3400 <= o <= 0x4DBF or 0xF900 <= o <= 0xFAFF
        if not is_cjk:
            r = False
        else:
            r = True
            for enc in ("cp932", "euc_jisx0213"):
                try:
                    ch.encode(enc)
                    r = False
                    break
                except UnicodeEncodeError:
                    pass
        _jp_cache[ch] = r
    return r


def check(path):
    errors = []
    rel = os.path.relpath(path, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

    # 1) 書き込み先
    if CONSUMED_DIR not in os.path.normpath(os.path.abspath(path)):
        errors.append(
            f"書き込み先が {CONSUMED_DIR}/ ではない: {rel}\n"
            f"    Astro は src/content/ 配下しか読まない。ここに置いてもサイトには出ない。"
        )

    text = open(path, encoding="utf-8", errors="replace").read()

    # 2) frontmatter
    m = re.match(r"^---\r?\n(.*?)\r?\n---", text, re.S)
    if not m:
        errors.append("frontmatter が無い。Astro の content collection はスキーマ違反でビルドを落とす。")
        body = text
    else:
        keys = set(re.findall(r"^([A-Za-z_]+)\s*:", m.group(1), re.M))
        missing = [k for k in REQUIRED if k not in keys]
        if missing:
            errors.append("frontmatter の必須項目が欠落: " + ", ".join(missing))
        body = text[m.end():]

    # 3) 混入検知（コードブロック・インラインコード・URL は除外）
    scan = re.sub(r"```.*?```", "", body, flags=re.S)
    scan = re.sub(r"`[^`]*`", "", scan)
    scan = re.sub(r"https?://\S+", "", scan)

    hits = {}
    for name, pat in FOREIGN_SCRIPTS.items():
        found = set(pat.findall(scan))
        if found:
            hits[name] = found
    kanji = {c for c in scan if foreign_kanji(c)}
    if kanji:
        hits["日本語外の漢字"] = kanji

    for name, chars in hits.items():
        sample = "".join(sorted(chars))[:40]
        errors.append(f"{name} が混入: {sample}")
        for i, line in enumerate(scan.split("\n"), 1):
            if any(c in line for c in chars):
                print(f"    L{i}: {line.strip()[:110]}", file=sys.stderr)
                break

    return errors


def main():
    if len(sys.argv) < 2:
        print(f"usage: {sys.argv[0]} <article.md> [...]", file=sys.stderr)
        return 2
    bad = 0
    for path in sys.argv[1:]:
        if not os.path.isfile(path):
            print(f"NG  {path}: ファイルが無い", file=sys.stderr)
            bad += 1
            continue
        errors = check(path)
        if errors:
            bad += 1
            print(f"NG  {path}", file=sys.stderr)
            for e in errors:
                print(f"  - {e}", file=sys.stderr)
        else:
            print(f"OK  {path}")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
