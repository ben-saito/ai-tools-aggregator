# Anthropic、Claude Sonnet 5とFable/Mythosを復元——18日間の輸出規制措置の終結

2026年7月上旬、AI業界を揺るがしたAnthropicモデルの一時停止措置がついに解除された。Claude Sonnet 5および最上位モデル群（Fable、MyROS）が米国政府の輸出規制見直しを経てサービスを再開。これは6月12日の輸出制御Directive発動からわずか18日間での回復となり、業界関係者の予想より早期の解決となった。

---

## 輸出規制発動の経緯

6月12日、米政府はAnthropicの最高性能システムの一時停止を命じた。発動の的直接原因是、Amazonの研究者たちが**Fable 5の安全コントロールをバイパスし、ソフトウェア脆弱性の特定と悪用可能なコードの生成に応用できる方法**を文書化したことだ。

この手法は、エクスポート規制の枠組みで「，国家安全保障上のリスク」と見なされた。AIモデルが持つコード生成・脆弱性分析の能力が、サイバー攻撃への悪用可能性を持つとして、強力な規制対象として位置づけられた。

---

## 復元までの18日間

Anthropicは联邦輸出規制機関と密的に対応を行い、安全保証の強化を実装。復元にあたり以下の改善が確認されている:

- **安全策の強化**: Fable 5entrance guardの改良により、脆弱性分析能力の悪用を防止
- **監視体制の扩充**: 高リスクなプロンプト系列へのリアルタイム監視導入
- **API利用ポリシーの更新**: 輸出規制対象地域でのアクセス制限明確化

Claude Sonnet 5の復元に伴い、Claude CodeやCoworkなどの開発者ツールも通常稼働に戻っている。

---

## 開発者への影響

| 影響領域 | 状況 |
|----------|------|
| Claude Code (Desktop) | ✅ 通常稼働 |
| Claude Max 契約者向けCowork | ✅ サービス再開 |
| Fable/Mythos API (要承認) | ✅ 復元済み |
| 米国以外のAPIアクセス | ⚠️ 一部制限継続 |

注目すべきは、復元後も**輸出規制対象地域でのアクセスには引き続き制限**がある点。グローバルに展開する開発チームは、地域別のアクセス権を確認する必要がある。

---

## 業界への影響

Anthropicの迅速な復元は、同社の規制対応能力の高さを見せつける結果となった。一方で，这次の措置は**AIモデルの安全性に関する業界全体の議論**を加速させた：

- **モデル規制の将来的方向性**: 輸出規制はAIのafety評価とどう整合するか
- **企業ユーザーのリスク管理**: AIサービスの継続利用における規制リスクの考慮重要性
- **競合他社の対応**: OpenAI、Google、Metaなどの対応規制の動き

---

## 参考リンク

- [Anthropic deploys Claude Sonnet 5, Fable and Mythos restored — AI News](https://www.artificialintelligence-news.com/news/anthropic-deploys-claude-sonnet-5-fable-and-mythos-restored/)
- [The 'first' AI-run ransomware attack still needed a human — TechCrunch](https://techcrunch.com/2026/07/06/the-first-ai-run-ransomware-attack-still-needed-a-human/)
- [Vercel CEO on models vs agents — TechCrunch](https://techcrunch.com/2026/07/06/vercel-ceo-guillermo-rauch-on-the-fight-to-split-off-models-from-agents/)

---

*（本文の情報は2026年7月8日時点のものです）*
