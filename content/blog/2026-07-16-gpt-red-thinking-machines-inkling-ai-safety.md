# OpenAIが「GPT-Red」でLLM超ハッカーを自作、Mira Muratiの新会社もオープンウェイトモデル公開

AI安全性とモデル開発の両面で今週も動きが大きい。OpenAIがLLMを使った自動赤チーム活動「GPT-Red」を公開した一方、Mira Murati率が率いるThinking Machines Labsも初めてのオープンウェイトモデル「Inkling」を発表。Microsoftは逆に自社モデルでOpenAIやAnthropic代替を進めている。

---

## OpenAI、GPT-Red発表 — LLM同士で「 себя攻撃」する自動セキュリティテスト

MIT Technology Reviewによれば、OpenAIは自ら開発したLLM型赤チーム「GPT-Red」を公開した。GPT-RedはNikhil Kandpal研究員とDylan Hunn研究员が共同開発した「LLM超ハッカー」で、OpenAIの他のモデルの安全性を向上させるために設計された。

### 赤チーム自動化の狙いと技術的背景

伝統的な赤チーム（red team）は人間のテスターが手で脆弱性を探す手法だが、LLMベースのAIエージェントがファイル、Webサイト、他のLLMと相互作用するようになりました。この変化により、人間のチームだけでは新たな攻撃パターンを全て発見することが難しくなっている。

「リスク表面と爆破半径の両方が拡大する」とKandpal研究員は説明する。

GPT-Redの核心は「自己プレイループ」（self-play loop）にあり、攻撃者と防御者の双方に別のLLMを配置して対決させる。攻撃側としては未訓練のLLMからスタートし、防御側のモデルが守るべきながら攻撃を試みるという方式。多数のラウンドを重ねることで、GPT-Redは攻撃能力を高め、防御側モデルもそれに対する抵抗力獲得していく。

### ハイライト：プロンプトインジェクション特化

OpenAIが特に重点を置いたのは、LLMに隠された命令を挿入する「プロンプトインジェクション」攻撃への対応。理論上、Webサイトやコードに隠された命令を通じてLLMを誘導し、機密情報の抽出やコードベースの破壊、有害コンテンツの生成などを実行できる。

### ベンチマークと実世界での効果

OpenAIによると、GPT-5.6の最終モデルはGPT-Redで訓練したことで「これまでで最も堅牢なリリース」となったという。人間の赤チームと比較して「モデルは有効性実現のために最も効果的な攻撃を見極める能力に優れている」とHunn研究员は語る。

---

## Mira Muratiの新会社Thinking Machines Labs、最初のオープンウェイトモデル「Inkling」公開

元OpenAI CTO Mira Murati氏率いるThinking Machines Labsは7月15日、同社初のAIモデル「Inkling」を公开发表した。OpenAIやAnthropic、Googleの旗艦モデル不同的是、Inklingはオープンウェイト（open-weight）モデルであり、外部の開発者や企業が直接ダウンロードして改変できる。

### モデルアーキテクチャ：9000億パラメータのMixture-of-Experts

Inklingは全部で9750億パラメータを持つMixture-of-Experts（MoE）システムだが、任意のタスクに対しては実際に使用するadouは約410億パラメータのみ。この方式是、非常に大きなモデルを高速かつ低コストに運用するための一般的な設計パターン。

Trainingデータには450兆トークンのテキスト、画像、音声、映像が利用され、4つのモダリティをネイティブに跨いで理詰めるとのこと。ただし現時点では出力はテキスト（コード、Styled artifacts、構造化データを含む）のみに制限されている。

### 企業向けカスタマイズという赌け

InklingはThinking Machines Labsの核心的な赌けの最初の成果。同社の基本方針は、組織が自ら適応できるAIが大手ラボが売る均一式な万能モデル性能を上回るという考え方だ。

このモデルは不确定性を明示的に示しつつユーザーが「思考の努力」（thinking effort）を上下調整でき、速度と精度のトレードオフをユーザー側で制御できる設計になっている。

---

## Microsoft FY27に向けてOpenAI・Anthropic対抗でMS製モデルへの置き換え加速

TechCrunch伝えたところによると、Microsoftは7月の内部ミーティングで、FY27に向けたAI製品の新販売戦略を明らかにした。Jay Parikh EVPは「他の人都是部品を売っているが、Microsoftは(end-to-endシステム全体を売っている。このストーリーをFY27では広げていく」と述たとされる。

Copilot担当EVP Jacob Andreouは具体的にAnthropicのClaudeとの比較資料を提示。Microsoftのオフィスアプリ内での性能について「Anthropicのモデルはより遅く正確性が低く、適切なセキュリティ統合が欠けている」と指摘した。

この動きはMicrosoftがWordやExcelなどのフラグシップアプリからOpenAIとAnthropicのモデルを自社モデルに置き換え始めている先前月のレポートと一致する。MicrosoftはAIモデル提供者でありながら、同時に競合としての側面も持ち始めたということだ。

---

## その他の注目動き

- **Apple Intelligence、中国でAlibabaのQwenを使用して承認獲得**：上年から噂されていた取引が現実になり、Appleにとって重要な市場でのAI展開に向けた значительнымな一歩となる
- **OpenAI、Codex向け$230キーボード「Codex Micro」発売**：代理的コーディングアプリと共に使用する設計で、ハードウェア法廷闘争の最中でのリリース
- **Microsoft、月例パッチで記録的570件の脆弱性に対応**：AI活用により検出件数が増加したことも明かしている

---

## 参考リンク

- [Meet GPT-Red: an LLM super-hacker OpenAI built to make its models safer - MIT Technology Review](https://www.technologyreview.com/2026/07/15/1140514/meet-gpt-red-an-llm-super-hacker-openai-built-to-make-its-models-safer/)
- [Thinking Machines amps up its bet against one-size-fits-all AI with its first open model, Inkling - TechCrunch](https://techcrunch.com/2026/07/15/thinking-machines-amps-up-its-bet-against-one-size-fits-all-ai-with-its-first-open-model-inkling/)
- [Microsoft is reportedly training salespeople to talk down OpenAI and Anthropic - TechCrunch](https://techcrunch.com/2026/07/15/microsoft-is-reportedly-training-salespeople-to-talk-down-openai-and-anthropic/)

---

*本記事の情報は2026年7月16日時点のものです。*
