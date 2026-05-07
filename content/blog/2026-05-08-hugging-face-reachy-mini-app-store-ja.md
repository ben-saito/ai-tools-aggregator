# Hugging Face、ロボット版「アプリストア」を公開 —— Reachy Mini向け200超のアプリケーション

2026年5月6日（現地時間）、Hugging Faceが低価格オープンソースロボット**Reachy Mini**向けの<App Store>を開始し、公開済みコミュニティアプリが200を超えた。TechCrunchなど複数のメディアが伝えた。

---

## 「ロボット版App Store」が開く新しい可能性

Reachy Miniは、Hugging Faceが2025年4月にPollen Roboticsを買収したの持ち上げる形で同年7月に発売したデスクトップロボット。価格はずっと**：**

- **Reachy Mini Lite**：299ドル（USB接続、PC側で処理）
- **Reachy Mini Wireless**：449ドル（Raspberry Pi CM4搭載Wi-Fi接続）

本月までに累計1万台以上が販売済み。そのうち3000台は過去2週間だけで販売されており、需要が加速している。

今回の<App Store>は、Hugging Face Hub上で運営され、PCやスマートフォンにおけるアプリストアと同様の操作性でロボット用アプリを検索・インストールできる。最大の特徴は**forkable（フォーク可能）**であること。既存のアプリをコピーして、AIエージェントに「フランス語で应答するように修改するよう指示するだけで自定义 прилож程序が完成する。

---

## コードを書けない普通人でも1時間以内にshippable——ML InternによるAgenticアプローチ

Hugo Face CEOのClément Delangue氏の言葉を借りるなら、「 Anyone can build the apps」で、技术的背景がない普通人でも1時間以内に動くロボットアプリを作成できる。

その中心に据えられているのが、Hugging Face 자체用意したAIエージェント「**ML Intern**」を始めとする agenticツールキットだ。従来の机器人開発では、特定厂商のSDKやファームウェアのニュアンスを學ぶ必要があり、专业知識が обязательно だったが、agenticツールキットは自然な 영어 で望んだ動きを描述するだけでよい。

例：「谁かが『おはよう』と言ったら手を振る」

AIエージェントが实际的コードを書き、ロボットの制約条件下でテストし、最終パッケージを出力する。Hugging Faceはこれを「歴史的に非常に难しかった」を「数分で可能にした」と评価する。

対応モデルはMeta Agentを始めとして多彩で、公式会話アプリではOpenAI RealtimeおよひGemini Liveを使用。技術的な統合に Weeks 要していたものが、ツールキットにより**Minutes**に短縮された。

---

## オープソースがもたらす「、ロボティクス界のGitHub」たれ

Hugging Faceの戦略は簡明だ。**클로즈드소스 하드웨어와 소프트웨어は「ほぼ不可能」**であり、这才培育出能催Communityが革新できる。Reachy Miniプラットフォームは全面的にオープンソースとして公開されている。

このことが意味するのは、コードがパブリックでHugging Face Spaces 통해統合されているため、エージェントがハードウェアと 상호작용する方法を學習しやすいということだ。GitHubが開発者向けに設計されているのに対し、Reachy Mini<App Store>は Technical experienceが全くない.robot ownerや一般ユーザーも対象としている。

また、物理的なReachy Miniを所有していない開発者でも、<App Store>とReachy App（ロボットの3Dシミュレーションと応答を含む）を使えば、가상 환경에서開発・テストを行うことができる。

---

## 開発者視点での意義：なぜ今この発表が重要か

 робот 앱 개발 측면에서 이 앱스토어의 등장에는 몇 가지 중요한 의미가 있다.

**1. 「プロンプトでロボットを программировать」時代の幕開け**

ML InternなどのLLMベースのエージェントに「どのような動きをしてほしいか」を自然な言語で指示すれば、コードに変換される。この抽象化レベルは、従来のROSノード駆動の開発とは根本的に異なる用户体验を提供する。

**2. 評価と反復の範囲가 넓어졌다**

<App Store>上でアプリを公开し、コミュニティがフォーク・改进するサイクルが 빠르게回る。単一の厂商が全機能を垄断する代わりに、オープンソースのLOBALSが革新の速度를 결정한다.

**3.  학습 данные問題への新しいアプローチ**

大規模言語モデルは大量的コードで训练されて不凡なコーディング能力を得たが、ロボティクス界のコードデータはそれ сравнивать と「tiny」なままだった。Hugging Face는 Le Robot Effort 통해このデータ問題を解決しようとしている。<App Store>の登場は、エンドユーザーが実際のロボットの動きに関するデータを生成し、そのデータがさらにモデル改良に使えるという、自己強化的な学習サイクルを構築する可能性持っている。

**関連リンク**

- [Reachy Mini App Store](https://pollen-robotics-reachy-mini.hf.space/apps)
- [Le Robot — Hugging Face](https://huggingface.co/lerobot)
- [Hugging Face Reachy Mini製品ページ](https://huggingface.co/reachy-mini)
- [VentureBeat — The app store for robots has arrived](https://venturebeat.com/technology/the-app-store-for-robots-has-arrived-hugging-face-launches-open-source-reachy-mini-app-store-with-200-apps)

---

*本記事の情報は2026年5月7日時点のものです。*
