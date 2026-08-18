# ai-tools-aggregator — 作業規約

## 記事の書き込み先

**記事は `src/content/blog/` にのみ書く。`content/blog/` には書かない。**

理由: このサイトは Astro の content collection（`src/content/config.ts`）で記事を読む。
Astro が読むのは `src/content/` 配下だけで、`content/blog/` はビルドのどこからも参照されていない。
そこに書いてもエラーは出ず、コミットも成功し、GitHub 上にファイルも実在するが、サイトには一生出ない。

実際に 2026-05 以降、1,770 本がこの読まれない側に書かれ、読まれる側には 9 本しか届かなかった。
6ヶ月間、失敗信号は一度も出ていない。

## frontmatter は必須

`src/content/config.ts` のスキーマに違反するとビルドが落ちる。以下は全部必要:

```yaml
---
title: string
description: string
publishedAt: string
author: string
category: string
tags: [string, ...]
lang: en | ja        # 省略時 en
---
```

`content/blog/` の 1,773 本のうち frontmatter があるのは 14 本だけ。
これは検証する消費者がいなかったため。書く側の努力ではなく、拒否する側の有無で決まる。

## 記事を書いたら必ず検証を通す

```bash
python3 scripts/check_article.py src/content/blog/<新しい記事>.md
```

**「必要に応じて」ではなく、毎回実行する。** 条件付きにすると実行されない。
検証しない例外はない。既存記事の一括修正時も1本ずつ通す。

検証内容:

1. frontmatter の必須項目がすべてある
2. 書き込み先が `src/content/blog/` である
3. 日本語記事に日本語以外の文字体系が混入していない

## 混入検知はホワイトリストで行う

日本語記事に簡体字・ハングル・キリル文字が混入する。特に**簡体字は日本語漢字と同じ
CJK 統合漢字ブロックにいるため、コードポイント範囲による判定では原理的に検出できない**。

検出は「その文字が日本語の符号化文字集合（cp932 ∪ JIS X 0213）に入るか」という
**ホワイトリスト判定**で実装する。簡体字を列挙するブラックリスト方式は
`国` `体` `参` `会` `医` のような正規の日本語漢字を誤検出して破綻する。

混入は専門用語ではなく**機能語**に出る（「人员的流動」「削減的同时に」「针对この」
「Meade씨가」「举行了大规模的」）。固有名詞は無傷なので、目視レビューでは見落とす。

## 使い捨てスクリプトを増やさない

`check_unicode.py` `find_contamination.py` `find_hangul_line57.py` `fix_line57.py`
のような、特定の1ファイルを直書きした使い捨てスクリプトを新規に作らない。
検査は `scripts/check_article.py` に足す。個別対応は同じ欠陥を何度も見逃す。
