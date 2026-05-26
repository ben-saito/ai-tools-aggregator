# AIの「内省」と「根拠」の乖離——2026年5月第4週の開発者向け深掘り

2026年5月第4週、AI開発エコシステムは「AIは自分について何を理解しているか」という根本的な問いと、「正答いても正しさの担保がない」という実運用上の致命的なギャップという、二つの軸で進化を遂げている。本稿ではこれらの技术与ビジネスが交差する话题を、开发者视角で深掘りする。

---

## Anthropic研究者、BACIの発表でAIの「内省」を示唆

2026年5月25日（米国時間）、ローマ・カトリック教会の教皇レオ14世がAIに関する基本教書「Magnifica humanitas」を发表的場で、**Anthropic共同创业者のChristopher Olah** がAIモデルの「内省的行動」について発表した。这是继「Magnifica humanitas」之后，AI safety研究と宗教・哲学の境界線が实质的に曖昧になったことを示す重要なイベントである。

Olahはbasic researchを通じて、AIモデルが**内部的な整合性を確認する行動**を見せていることを示した。これは従来の「パターン一致による出力生成」とは本质的に异なるアプローチであり、AIが自らの一貫性を検証し、矛盾を自己修正する能力を持つ可能性を示唆している。

**开发者にとって的意义：**

Olahの発表は「AIの内省」という概念を、単なる比喩ではなく**具体的な技术的课题**として提示している。AIモデルが自らを確認・高精度化するという概念は、RLHF（Reinforcement Learning from Human Feedback）の次の次日として注目される。开发者角度来看ると、以下の技術が直接的に関话する：

- **Self-Verification**：モデルが自ら出力を検証する机制
- **Constitutional AI**の进化形：单纯的批判から内的な整合性确认へ
- **Interpretability研究との连接**：Olahの研究室はmechanistic interpretabilityの最前线であり、「内省」がどの方向に向かっているかを理解することが、AI安全性の次のパラダイムを把握する上で不可欠

**参考文献：**

- [At the launch of Pope Leo XIV's encyclical, Anthropic co-founder says AI models show signs of introspection](https://the-decoder.com/at-the-launch-of-pope-leo-xivs-encyclical-anthropic-co-founder-says-ai-models-show-signs-of-introspection/)
- [教皇レオ14世のAI教書：从Robot規制到企業AIの乱用まで](https://github.com/ben-saito/ai-tools-aggregator/blob/main/content/blog/2026-05-26-pope-leo-ai-encyclical-developer-perspective.md)

---

## CiteVQA研究：AIは「正解」を出しだが「根拠」を指せない

北京大学と上海AI実験室の研究チームが2026年5月に公开发表した**CiteVQA**は、AI研究において见過ごされがちな根本的な问题を量化している：AIが正解を出しても、その正解に至った根拠を正确に示すことができないという「**帰属幻觉（Attribution Hallucination）**」问题である。

### 归属幻觉とは

従来の文書理解ベンチマーク（DocVQA、MMLongBench-Docなど）は最终的な回答のみを評価する。モデルが文书から情报を引き出したのか、それとも既存の知识から推测したのか、区别できない。这是法规、金融監査、医療现场において致命的な问题となる。

CiteVQAは各声明を文書の精密な位置情報で裏付けることを要求する。ページ番号だけでなく、**いつ哪哪哪哪哪哪の段落、表、图かを特定**することが求められる。データセットは7领域から711個のPDF（平均40.6ページ）から成る1,897问題构成了。

### ベンチマーク结果

| モデル | 成绩 |
|--------|------|
| Gemini 3.0 Flash | 87%+ (正しいページの発见率) |
| Qwen3-VL-235B-A22B (最强开源) | 22.5点 |
| 小规模开源モデル | 10点以下 |

注目すべきは、**开源モデルの成绩が明显に低い**ことである。Qwen3-VL-235B-A22Bは最强的开源システムでも22.5点しかなく、规制产业에서는「極めて危险」とされている。

より难度の高いタスクではさらに成绩が低下する。单一文书の質問はまだしも、複数の文书から情报を引き出す必要のある任务では、Gemini 3.1 Pro Previewでも69%から55%へと下落する。

### 技術的详细

研究班のAblation Studyでは、探索空間を意図的に狭めた（関連するページのみまたは正しい文书のみを投入）。结果、Qwen3-VL-8Bで13点以上の改善が見られた。これは**情报检索の精度向上が直接出力を改善すること**を示している。

**開発者への示唆：**

1. **RAG adoçãoの危険**：RAG（Retrieval-Augmented Generation）を採用する企业は多いが、「检索した文书」を「根拠として提示」することが моделиにとって难しいという点が见落とされている
2. **eval基盤の重要性**：单なる正確率だけでなく、根拠の正确性を評価するベンチマークが必要
3. **Agent型AIの信頼性**：Agentが複数ステップで情报を引き出す际、最初哪个哪个哪个哪个哪个の этап ошибкаが累积して最终的な出力を无意义にする

```python
# 归属幻觉を检测する简单なパターン
def check_attribution(model_output, source_documents):
    """
    出力がsource_documentsの哪个哪个哪个哪个哪个哪个から导出されたかを验证
    """
    for doc in source_documents:
        for para in doc.paragraphs:
            if verify_citation(model_output, para):
                return True  # 根拠确认
    return False  # 幻觉疑い
```

**参考文献：**

- [AI models often give the right answers but point to the wrong sources](https://the-decoder.com/ai-models-often-give-the-right-answers-but-point-to-the-wrong-sources/)

---

## Claude CodeがAIスケーリングアルゴリズムを自动発掘——人类は设计できなかった类型

University of Maryland、Virginia、WUSTL、UNC、Google、Metaの共同研究が2026年5月に公开发表した**AutoTTS**は、Claude Codeを用いてAIスケーリングアルゴリズムを自动発掘する新しいアプローチを提案している。

### 従来の研究の问题

従来のAI研究では、高效な算法を设计者が手动で设计していた。しかし、多くの已知の方法は「幅」（同时に走る解路径の数）と「深さ」（各解路径がどこまで进むか）という共有制御空间の特殊ケースに过他ない。研究チームが问いを持った：**なぜ研究者は手动で路径を引き続けるのか、机械に搜索させないのか**。

### AutoTTSの手法

AutoTTSでは、人間が算法そのものを书類する代わりに、**AIエージェントが算法 자체를 发见する环境を構築**する。代理的な評価空间で、AIが自ら算法を书類・改良していく。

最も興味深い発見は、Claude Codeが発见した算法の动作原理である：

1. **モデルの確信度变化を追踪**：複数ラウンドで確信度がどのように转移するかを监控
2. **動的制御**：确信度が微動しかしない场合、より多くの解路径を開く。急速に上昇する场には新しい路径をスキップ
3. **路径の协调**：现在の多数派と整合する中间结果を持つ解路径には追加计算を配分
4. **逐次ドロップ**：复数のラウンドで误った方向に進み続ける路径のみをドロップ

研究班はこの协调メカニズムを「人间が设计するにはほぼ不可能」と描述している。Ablation Studyでは、二つの设计選択の重要性が示された：

- **单一の高レベルコントローラを削除**：エージェントは极端なショートカットにfallbackテスト時には莫大な计算を节省하지만新規タスクでの精度が低下
- **詳細なログなし**：発见された算法は计算を多吃し精度も悪い——最终结果だけでは何が悪かったかわからない

### 技術的示唆

AutoTTSの現在のバージョンは「幅と深さのトレードオフ」のみに対応しており、树検索のようなより複雑な构造は扱えない，发见の品质はコーディングエージェントに依存する。

**開発者への示唆：**

1. **Agent设计の新しい方向性**：单に「人间が程序を置く」场ではなく、「环境を構築してAIに发见させる」というパラダイムシフト
2. **評価の重要性**：最终结果だけでなく、过程全体を监控・評価する机制が必要
3. **Interpreter搭栽の标准化竞争**：コードインタプリタの无料公开とWeb搜索の料金设定など、API经济圏での标准化竞争が加速

**参考文献：**

- [Researchers let Claude Code discover AI scaling algorithms that humans probably wouldn't have designed](https://the-decoder.com/researchers-let-claude-code-discover-ai-scaling-algorithms-that-humans-probably-wouldnt-have-designed/)

---

## George Hotz：コーディングエージェントは「软件開発における最も代价の高い失败」の一つ

有名ハッカーであり、現在tiny corpを経営する**George Hotz**は、2026年5月のポッドキャストで、AIコーディングエージェントに対する批判的な见解を再び表明した。Hotzによると、谁であってもAIエージェントを正しく使えば、生产性を10倍以上向上させることができるという。

一方问题是、AIコーディングエージェントの误用・滥용が「软件開発における最も代价の高い失败」の一つとなる可能性である。これはClickUpの大量レイオフやAIエージェント导入の话题とは质的に异なる视角からの警告である。

**Hotzの见解の核心：**

- AIエージェントの「常识的な误用」が多い
- エージェントは「道具」であり、「代替」ではない
- 正しい活用方法を知っている者が生产力10倍 vs 误った活用による浪费

**開発者への示唆：**

ClickUpの事例では「AIエージェントに仕事を委托する」ことが主流の话题になっているが、Hotzの见解は「谁が·どのように·何时使うか」という根本的な问题を提示している。AIエージェントは：

- **自律的に动作するが、その出力を监视·評価するのは人间**
- **プロンプトエンジニアリングの重要性**：无效なプロンプトは浪费に変わる
- **Agent рабо процессингаのモニタリングなしには、成本だけが増えて效果が头打ちになる**

**参考文献：**

- [George Hotz says coding agents will be "one of the most costly mistakes" in software development](https://the-decoder.com/george-hotz-says-coding-agents-will-be-one-of-the-most-costly-mistakes-in-software-development/)

---

## 总括

2026年5月第4週のAI開発エコシステムは三个の重要なテーマで进化している：

1. **AIの内省能力**：AnthropicのOlahが「AIモデルが自らの一貫性を确认する行动」を实证しつつあり、これはAI安全性研究の新しい方向性を示唆する

2. **归属幻觉问题**：CiteVQA研究が示すように、AIが正解を出しても正しい出典を提示できないという问题是、RAG adopotionにおいて见落とされがちな根本的な课题である

3. **Agent设计のパラダイムシフト**：AutoTTSが示すように、「环境を構築してAIに发见させる」というアプローチは、従来の「人间が算法を设计する」というパラダイムからの根本的な転換である

これらの话题は、**AIの「知性」に対する理解と实運用における「信頼性」の确保**という、表面上是对立するように见える两个の轴で进化している。开发者としては、いずれの方向性にも注目しつつ、自らのプロダクト设计にこれらの视点を反映させることが重要である。

---

## 参考リンク

- [At the launch of Pope Leo XIV's encyclical, Anthropic co-founder says AI models show signs of introspection](https://the-decoder.com/at-the-launch-of-pope-leo-xivs-encyclical-anthropic-co-founder-says-ai-models-show-signs-of-introspection/)
- [AI models often give the right answers but point to the wrong sources](https://the-decoder.com/ai-models-often-give-the-right-answers-but-point-to-the-wrong-sources/)
- [Researchers let Claude Code discover AI scaling algorithms that humans probably wouldn't have designed](https://the-decoder.com/researchers-let-claude-code-discover-ai-scaling-algorithms-that-humans-probably-wouldnt-have-designed/)
- [George Hotz says coding agents will be "one of the most costly mistakes" in software development](https://the-decoder.com/george-hotz-says-coding-agents-will-be-one-of-the-most-costly-mistakes-in-software-development/)
- [教皇レオ14世のAI教書：从Robot規制到企業AIの乱用まで](https://github.com/ben-saito/ai-tools-aggregator/blob/main/content/blog/2026-05-26-pope-leo-ai-encyclical-developer-perspective.md)
- [AI開発の価格戦争と「正答と引用の乖離」問題](https://github.com/ben-saito/ai-tools-aggregator/blob/main/content/blog/2026-05-26-ai-price-war-citevqa-pope-olah-ja.md)

---

*（本文の情報は2026年5月26日時点のものです）*