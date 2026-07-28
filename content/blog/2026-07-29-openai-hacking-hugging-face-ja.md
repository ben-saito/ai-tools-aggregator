# OpenAIとHugging Faceを狙ったサプライチェーン攻撃 -- JFrog研究者が侵害を報告

AI開発コミュニティを狙った大規模なサプライチェーン攻撃が7月28日（現地時間）、セキュリティ企業のJFrogにより公表された。OpenAIやHugging Faceを含む複数のAIプラットフォームを装った悪意のあるパッケージが、Python Package Index（PyPI）にアップロードされていたことが判明した。

JFrogのセキュリティチームは、7月27日にPyPI上で「openai」「huggingface」「langchain」などの有名OSSプロジェクトを装った35以上の悪意あるパッケージを発見したと報告した。

---

## 攻撃の手口と被害範囲

これらのパッケージは、公式のパッケージと似た名前で、アイデンティティavasthiyaやproducts labels、devuser121などの複数のアカウントからアップロードされていた。皮肉なことに、攻撃者の多くは「セキュリティ強化」を名目にしていた。

各パッケージには、Pythonの「setup.py」スクリプトに隠された悪意のあるコードが含まれており、インストール時に受害者の環境変数（APIキーやクレデンシャル情報）を窃取する仕組みになっていた。

現時点で確認されている被害は限定的だが、OpenAIのAPIキーやHugging Faceのアクセストークンが流出した可能性については調査が続いている。

---

## 対応と対策

PyPIセキュリティチームはJFrogの報告を受け、該当パッケージを速やかに削除した。OpenAIとHugging Faceの両者も公式声明でユーザーへの注意を呼びかけている。

JFrogは、AI開発者に対して以下の防策を推奨している：

- パッケージインストール前に必ずパッケージの詳細を確認
- 信頼できるソースからのみパッケージをダウンロード
- 機密情報を環境変数に直接保存せず、シークレット管理ツールを使用
- インストールしたパッケージのアクセス許可を確認し、異常なネットワーク通信をチェック

---

## AI開発者への影響

今回の攻撃は、AI開発コミュニティにおけるサプライチェーンの脆弱性を露呈した。Hugging Face Hubを活用したモデルダウンロードや、OpenAI APIを活用したアプリケーション開発を行う開発者にとって、第三方のパッケージ信頼性検証の重要性が再認識された。

セキュリティ专家指出、今後AI分野での攻撃はさらに巧妙化すると予想されており、開発者自身のセキュリティリテラシー向上が急務となっている。

---

## 参考リンク

- [Malicious packages impersonate OpenAI and Hugging Face on PyPI](https://jfrog.com/blog/malicious-packages-impersonate-openai-and-hugging-face-on-pypi/) (JFrog Security Research)
- [Python Package Index (PyPI)](https://pypi.org/)

---

*本文の情報は2026年7月29日時点のものです*
