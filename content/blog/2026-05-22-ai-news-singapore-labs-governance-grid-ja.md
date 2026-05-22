# OpenAI、シンガポールにAIラボ設立 —— 米国主導のガバナンス枠組みと淘汰されるEO

2026年5月、生成AI業界は複数の重要な転換点を迎えている。OpenAIのシンガポール進出、米中のAI治理政策の分歧、そしてデータセンター電力需要の爆発的増加——本稿では今週の最重要AIニュースを开发者視点で整理する。

---

## OpenAI、シンガポールにApplied AI Lab設立——200名以上の技術採用を計画

OpenAIは5月22日、シンガポールに同社が米国之外で初となるApplied AI Lab設立を発表しました。Digital Development and Information（IMDA）省とのパートナーシップ「OpenAI for Singapore」は、ATx Summitで正式に発表されたもので、S$3億以上のコミットメントが backingしている。

同ラボでは今後数年間で200名以上のシンガポール拠点の技術者を雇用予定。OpenAIはまた、Singapore Forward Deployed Engineersの全球的なハブとしても位置づけ、政府機関や企業とAI導入に関する支援を行うとしている。

### 教育・人材開発プログラム

パートナーシップの一環として、以下が期待されている:

- **Singapore Academy**: 教育者向けのAI活用促進
- **National AI Impact Programme**: AIインパクト評価への参加
- **Codex for Teachers ハッカソン**: 教育現場でのAI活用促进
- **スタートアップアクセラレーター**: AIネイティブ企業の成长支援（マイクロエンタープライザー〜中小企業のFounder向け、 operations・顧客サービスへのAI導入支援）

Chng Kai Fong IMDA Permanent Secretaryは、「SingaporeのAI対応は新世代の成長、最前線企業の誘致、そして人才的スキルの配备を柱とする」と語った。

---

## IMDA、エージェントAIガバナンス枠組みを更新——多要素システムと第三提供商向けguidanceを追加

同時に、IMDAは2026年1月のWorld Economic Forumで発売されたエージェントAIガバナンス枠組みを更新した。60以上の組織（AWS、DBS、Google、Salesforceなど）からのフィードバックと事例研究を踏まえ、以下を追加:

- **マルチエージェントシステムのリスク** guidance
- **第三提供商のエージェント** responsabilidad
- **自動化バイアス** 防范措置
- **人間の説明責任** 明確化

### 事例研究から見る実装パターン

**Dayos（エンタープライズAI自動化企业）** の事例:
- 内部ITリクエスト用のAI_ticketing_agentを構築
- リスクレベル別の権限分层设计
  - 低リスク（パスワードリセットなど）: 自动执行、 biweekly監査
  - 中リスク: 実行前に人間の承認が必要
  - 高リスク（アクセス権限変更など）: エージェントの権限から除外

**TencentのCodeBuddy**:
- 自然言語でコードを計画・作成・配置できる自律型AIコーディングシステム
- ファイルシステム、ターミナル、外部API、MCPツールにアクセス可能
- 複雑なコマンドは平易な言葉で説明后才批准
- 疑わしいコマンドは事前承認済みでも人間の承認を要求

**GovTech Singapore**:
- 政府内での自律型コーディングアシスタント本格展開
- フェーズ1はGovTech従業員のみ、外部ツール禁止、低リスクシステムに限定
- 中央ロギングと承認済み外部ツール接続框架を構築

---

## Trump大統領、AI政令を撤回——Musk・Zuckerbergのロビー活動で90日前の安全評価義務化が見送り

5月22日（米国時間）、Trump大統領は対応が困難だったAI政令の署名を突然取り止めた。この政令は、前倒し90日前に avançéモデルを出願・レビューするための自主的なメカニズムを確立するもので、ライセンス制度も義務付けも存在しなかった。

然而、Elon Musk（xAI）、Mark Zuckerberg（Meta）、David Sacks（元AI・Cryptocurrency担当） が署名直前の水曜夜から木曜朝に 걸쳐直接Trumpに語りかけたことで、White Houseは政令の haltを選んだ。

### 政策の真空状態

- **米国**: 包括的なAI立法は未通過。ガバナンスアーキテクチャは行政命令・省的ガイダンス・自主的合意で断片的に構築
- **中国**: 5月、国家CouncilがAI立法加速を明文化。4月にはAI企業に対して内部倫理審査委員会の設置を義務化

Trump大統領は「中国领先地位を維持するため、規制他的手が必要な场合がある」と述べており、行政内 acceleration派の活用が維持されている。

### 业界による政策への影響

- **xAI**: 直接的な競合であるOpenAI・Anthropicに対する規制が存在しないことは構造上の利益
- **Meta**: オープンソースAI推進者として規制の少なさからbenefits
- **OpenAI**: 州レベルでのAI規制押し上げ戦略をWhite Houseの後押しで推进中

---

## 中国、AIで再生可能エネルギーGrid全体を一括mapping——31.9万の太陽光施設と9.1万の風力タービンを特定

Nature（5月22日号）に Peking UniversityとAlibaba DAMO Academyの研究者が論文を発表。中国全国的規模で、風力・太陽光インフラの 完全な高解像度インベントリをAIで生成したのは初めてのこと。

### 技術的成果

- **学習モデル**: サブメートル衛星画像で訓練された深層学習モデル
- **特定施設数**: 太陽光319,972施設、風力91,609タービン
- **データ処理量**: 7.56 TBの衛星画像
- **対象範囲**: 1,915の中国countyを網羅

### 太陽光-風力の相補性

研究チームは、地理的距離が離れた施設ほど発電の変動性を低減できる实证した。例えば、甘粛の雲が空が雲で覆われても、內蒙古の風力回廊は暗くならない。 しかし、中国の現在のGrid管理は省级协调に留まっており、全国統一スケールへの移行が见状に举げられている。

### データセンター電力需要の爆発

中国ではAI駆動の電力需要急増がGrid逼迫を引き起こしている。2026年第1四半期、データセンターセクターの電力消費は前年比44%増の229億kWhに達した。新データセンターは 太陽暦-風力相補性の一番高い北部・西部の省に集中しており、土地代は安く、再エネ資源は豊富で電気代は低い。

---

## まとめ：AI政策と治理の分水領

今週のニュースは、AI業界における三つの大きな流れを示している:

1. **治理の地方分権化**: 米国は規制的手を柔らかく、州・企業レベル任せに。中国は国家级の立法を加速
2. **自律型AIの实务導入**: エージェントAIの治理枠組みが事例と共に具体化
3. **エネルギーとの両立**: AIの電力消費が再生可能エネルギーGrid最適化と結びつく新时代

---

## 参考リンク

- [OpenAI opens Singapore AI lab as IMDA updates AI framework](https://www.artificialintelligence-news.com/news/openai-singapore-ai-lab-imda-agentic-ai-framework/)
- [Musk and Zuckerberg convinced Trump to scrap AI executive order](https://www.artificialintelligence-news.com/news/trump-ai-executive-order-scrapped-musk-zuckerberg-china/)
- [China's AI just mapped its entire renewable energy grid](https://www.artificialintelligence-news.com/news/ai-energy-grid-mapping-china/)
- [Meta quietly launches a new Reddit-like app called Forum](https://techcrunch.com/2026/05/22/meta-quietly-launches-a-new-reddit-like-app-called-forum/)
- [Waymo pauses service in four cities as robotaxis keep driving into floods](https://techcrunch.com/2026/05/21/waymo-pauses-service-in-four-cities-as-robotaxis-keep-driving-into-floods/)

---

*（本文の情報は2026年5月22日時点のものです）*