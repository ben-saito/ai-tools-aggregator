# Google AI検索がデフォルトに -- 検索結果の43%がAIオーバービュー

Google検索結果においてAI生成された回答「AI Overviews」が全検索の43%に表示されるようになっている。急速に変化する検索体験の現状とSEO業界への影響を考える。

---

## AIオーバービューの急速な普及

Googleは2024年5月にAIオーバービューを発表し、当初は少数の検索にしか表示されなかった。しかしわずか2年で検索結果の43%にAI生成の回答が表示されるまでになった。

このデータはBrightEdgeによる調査で2026年7月に公開されたもの。AIオーバービューは「Additional context」や「AI Overview」などの形式で検索結果の上部に表示され、ユーザーの検索意図に応じた要約回答を提供する。

Googleの検索結果の半分近くがAI生成の回答に触れるようになったことで、従来のSEO（検索エンジン最適化）の手法は大きく変わりつつある。AIオーバービューに表示されるコンテンツは従来のランキング上位サイトとは限らず、新しい発見方法としてのAI回答がユーザーの情報探索行動そのものを変えつつある。

---

## MirrorCode -- AIはどこまで巨大なソフトを自作できるか

EpochとMETRは7月、MirrorCodeという新しいベンチマークをリリースした。MirrorCodeはAIシステムに元のソースコードやWebアクセスなしでCLI（コマンドラインインターフェース）だけを使い、与えられたソフトウェアを再実装させるテストだ。

例えばAppleが開発した設定言語pkl（総計61,000行のコード）や系統樹を操作するgotree（16,000行）、CSVデータの列選択・並べ替えを行うqsv_select（87,000行）などをAIにCLIアクセスだけで再実装させる。

結果は驚異的だ。AnthropicのClaude Opus 4.7はpklの再実装に成功。qsv_selectも87,000行の規模ながら完璧に実装した。総計25個の対象プログラムのうち17個で完璧なスコアを達成。4個で99%以上のスコアを記録した。

一方ruff（Pythonリント・Formatter）や数学パッケージgiac_subset、メール認証ライブラリmailauthは完全解決できなかった。AIにとって最も難しいタスクは依然として存在することが確認されている。

MirrorCodeが示すもう1つの重要な結果は「bitter lesson」の教訓との関連だ。Robotics分野では、2025年8月にClaude Opus 4.1は完全にタスクを解けなかったが、2026年5月のOpus 4.7では自律的に同タスクを9分35秒で完了。人間の最快記録（181分）の約20倍高速になった。

これは大規模言語モデルのスケールアップだけでロボットエージェントの能力向上が実現できることを示している。MirrorCodeが示した「ブラックボックスアクセスだけでホームステートな文明をブートストラップできる可能性」は、AIの自律性に関する更なる議論を呼びそうだ。

---

## 広がるAIの「日常業務」化

Google検索におけるAI回答の定着とMirrorCodeが示すAIの自律的コーディング能力向上。これらはAIが只是一种の「特別な技術」から「日常的なインフラへと変わったことを示している。

Google検索のAIオーバービュー表示率43%という数字は、ユーザーが明示的にAIツールを使わなくてもAIの支援を受け取る時代がすでに到来していることを示唆する。同時にMirrorCodeが示す「ブラックボックスアクセスだけでホームステートな文明をブートストラップできる可能性」は、AIの自律性に関する更なる議論を呼びそうだ。

---

## 参考リンク

- [TechCrunch: Google AI search becoming default](https://techcrunch.com/2026/07/27/googles-ai-search-is-rapidly-becoming-the-default-new-data-shows/)
- [Import AI 466: The bitter lesson for robotics](https://importai.substack.com/p/466-the-bitter-lesson-for-robotics)
- [MirrorCode: Epoch AI](https://epoch.ai/)

*（本文の情報は2026年7月28日時点のものです）*