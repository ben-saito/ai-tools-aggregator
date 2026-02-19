---
title: "OpenClawの正体：「ハッカーのおもちゃ箱」がGitHub200k超スターになるまでの全軌跡と設計思想"
description: "VibeTunnel→Clawdbot→OpenClawという3段階の進化、Piランタイムの哲学、HEARTBEATの構造的意義、ClawHubのサプライチェーン攻撃（スキルの12%が悪意ある内容）まで。最もよく使われているが最も誤解されているOSSエージェントの実態を解説する。"
publishedAt: "2026-02-19T12:00:00+09:00"
author: "AI Tools Hub"
category: "research"
lang: "ja"
tags: ["OpenClaw", "steipete", "Pi", "HEARTBEAT", "ClawHub", "エージェント設計", "セキュリティ"]
featured: true
---

OpenClawは現在GitHub史上最速クラスの成長を遂げたOSSプロジェクトの一つで、VS Codeのスター数を抜いたことでも話題になった。しかし「何がそんなに特別なのか」という問いへの答えは、機能リストを眺めても見えてこない。VibeTunnel→Clawdbot→OpenClawという開発の軌跡、Piランタイムの哲学、そしてHEARTBEATという仕組みを理解することで初めて、このプロジェクトの本質が見えてくる。

## 3つの核心的な特別さ

技術的な詳細に入る前に、OpenClawが他のコーディングエージェントと根本的に異なる点を整理しておく。

**1. Claude CodeやCodex CLIより一段上のレイヤー**
Claude Codeはユーザーが起動した端末で対話するツールで、ユーザーがいなくなれば止まる。OpenClawはエージェント起点で動く。この違いが使用感をまるごと変える。

**2. Agent Skillsというプロンプト拡張の新世代設計**
SOUL.md・AGENTS.md・MEMORY.mdといったMarkdownファイルから毎ターン動的にシステムプロンプトを構築する。設定ファイルではなくドキュメントとして振る舞いを定義するという哲学は、従来のエージェントフレームワークにはない発想だ。

**3. Piを核にした外部SDKなしの独自構築**
LangChainやAutogenといった外部フレームワークに依存せず、Mario Zechnerが作ったミニマルなランタイム「Pi」を軸に構築されている。

## VibeTunnel→Clawdbot→OpenClaw：3段階の進化

2025年6月、iOSエンジニア出身のPeter Steinberger（steipete）はMario Zechner（libGDX）、Armin Ronacher（Flask/Sentry）の3人でAI Vibe Coding Hackathonに参加し、自分のMacで動くClaude Codeにスマートフォンからアクセスするための**VibeTunnel**を作った。ブラウザをMacのターミナルに変えるという概念で、Claude Code前提のツールだ。

2025年11〜12月、VibeTunnelの「リモート操作」発想を拡張して**Clawdbot**が誕生する。ローカルマシンで動く自律型エージェントで、WhatsAppアカウントに接続してチャット感覚で指示を送れる設計だった。「インターフェイスがWebアプリからモバイルチャットアプリになり自然に使える」という点が評価された。

Anthropicからの商標通知（「Claudeに似すぎ」）でMoltbotに改名し、さらに諸事情でOpenClawに再改名した後、数週間でGitHubスター200k超を達成。670人を超えるコントリビューターを集め、VS Codeを抜いた時は「これは普通じゃない」と話題になった。

2026年2月14日、steipeteはOpenAIに引き抜かれ、OpenClawはOSS財団へ移管された。

## Piランタイム：「エージェントに自分を拡張させる」という哲学

Clawdbot初期は独自のエージェントハーネスで動いていたが、2026年1月頃にMario Zechnerが公開した**Pi**（旧称 "shitty coding agent"）をランタイムとして採用した。

Piのツールはたった4つ：Read/Write/Edit/Bash。MCPもサブエージェントも許可ポップアップもプランモードもない。「エージェントに足りない機能があればエージェント自身に拡張させる」という思想で設計された異端のライブラリだ。

Armin Ronacherはブログで「OpenClawもPiも同じ思想で、LLMはコードを書いて実行するのが得意なのでそれを受け入れる」と書いた。この思想はOpenClawのAgent Skillsにも表れている——SkillファイルがLLMのプロンプトに注入され、LLMがそれを読んで任意のコマンドを実行する。コードを実行できれば原理的にはなんでもできる。

steipete自身はCodexを好む理由を「長時間タスクを黙々とこなす。Claude Codeは確認を求めてきて気が散る」と述べており、MCPやplan modeを嫌い会話ベースの直接操作を好む。「I ship code I don't read（自分が読まないコードを出荷する）」と公言し、直近1カ月で3,300以上のコミットを記録した。

## HEARTBEATこそが本質的な差別化要因

OpenClawがClaude CodeやCodex CLIと決定的に異なるのが**HEARTBEAT**だ。デフォルト30分ごと（OAuth利用時は1時間ごと）に自律推論を行い、HEARTBEAT.mdのチェックリストを判定して「送るべきメッセージがあるときだけ」LLMが生成する。

**HEARTBEATが可能にすること：**
- メール受信箱やカレンダーの定期チェック
- 重要事項をエージェントからユーザーに先回りして通知
- 数日おきに短期記憶を長期記憶（MEMORY.md）へ整理

「HEARTBEATはclaude -pとcronで近似できる」という意見もある。実際、コア部分の再現自体は難しくない。OpenClawの価値は、会話コンテキストのcompaction引き継ぎ、プロンプトキャッシュTTLに合わせた間隔設計、13以上のチャネルへの自動ルーティング、Skills/Memoryとの統合が**パッケージになっている点**にある。

間隔設計にはコスト最適化が絡んでいる。APIキー利用時はキャッシュTTL内の30分、OAuth利用時はキャッシュ再構築を抑える1時間に設定されている点は技術的に合理的だ。

## Agent Skills：「善良なプロンプトインジェクション」の威力と危険

SOUL.md・IDENTITY.md・MEMORY.md・HEARTBEAT.mdといったMarkdownファイルから動的にシステムプロンプトを構築するAgent Skillsの仕組みを、ある技術者は「善良なプロンプトインジェクション」と表現した。

Skillファイルがプロンプトに注入される設計は、SOUL.mdを書き換えればエージェントの人格が変わるという強力な拡張性を持つ。その一方で、**悪意あるSkillも同じ経路で注入される**という構造的なリスクがある。公式セキュリティドキュメントもプロンプトインジェクションを「未解決の問題」と認め、ガードレールはソフトなガイダンスに過ぎないと述べている。

## ClawHub：npmと同じ轍——スキルのサプライチェーン攻撃

ClawHubはOpenClaw公式のスキルレジストリで、3,286以上のスキル、150万以上のダウンロードを持つ。公開要件は「1週間以上のGitHubアカウント」のみで、コード署名もレビューもサンドボックスもない。

セキュリティ企業Koi AIによる「ClawHavoc」調査では、2,857スキルの監査で**341個（11.9%）が悪意あるもの**と判明した。暗号通貨ツールを偽装したtyposquat（clawhub1、clawhubbなどの偽名）が主な手口で、Atomic macOS Stealer（AMOS）の配布も確認された。Keychain、ブラウザcookies、暗号通貨ウォレット、SSH鍵が窃取対象だ。Snykの調査では3,984スキルの**36.82%に何らかのセキュリティ欠陥**があった。

これはnpmエコシステムが経験した教訓と同じパターンだ。急速に成長するパッケージ（スキル）レジストリは、攻撃者にとって格好のサプライチェーン攻撃の標的になる。

## コストと規約の問題

常時起動エージェントのAPI利用料は高額になるため、Max/Proサブスクリプションのsetup-tokenを流用して定額で使う手法が広まったが、これはAnthropicのToS違反にあたる。AnthropicはOAuthの第三者利用をブロックし、GoogleもOpenClaw経由でOAuthトークンを利用していたAntigravityユーザーのアカウントを停止している。

正規の利用にはAPIキー課金が必要で、ClawRouterのようなコスト最適化ツールとの組み合わせが現実的な運用になる。

## steipeteの正直な嘆き

steipete自身は「ホビープロジェクトを無料で公開しただけなのに、何百万ドルのビジネスみたいに扱われる」「ほとんどの非エンジニアはインストールすべきではない。まだ3ヶ月も経っていない」とこぼしている。

この言葉が示すのは、OpenClawの本質は「iOSハッカーのおもちゃ箱が偶然に刺さった」プロジェクトだということだ。モデル性能の向上、Skillsによるプロンプト拡張、steipeteの開発力という3つの前提が揃ったタイミングで、「常時起動の個人エージェント」というニーズに応えた。

技術的な正確性より実験的な面白さを優先した設計が、セキュリティの未成熟さとして表れている。それを理解した上で使うプロジェクトだ。

**公式：** https://openclaw.ai / https://github.com/openclaw/openclaw
