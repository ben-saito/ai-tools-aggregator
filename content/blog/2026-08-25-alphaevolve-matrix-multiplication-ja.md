# DeepMindのAlphaEvolveが行列乗算の指数を更新

Google DeepMind、Carnegie Mellon、Columbia、MIT。研究者がAlphaEvolveを使用して行列乗算指数を改善。

---

## 改善内容

「勾配降下法を用いた組合わせ損失解析の非凸最適化問題に取り組み、既存技術（SOTA）を約0.97×10^-4改善した」と研究者は書いている。さらにAlphaEvolveを使って最適化アルゴリズムを改善することで「SOTA比 約1.62×10^-4の向上」を達成した。

---

## AlphaEvolveの動作方式

研究者たちはAlphaEvolveに最適化プログラムを変更させ、1GPUで約5時間実行してオメガに関するバウンドを出力させた。AlphaEvolveは「進化する構築（evolving constructions）」機能を使って各世代で親アルゴリズムが見つ的最佳点から開始し、オメガを最小化するようにコードを evolve させた。

---

## 意義

この種の行列乗算はAI訓練に直接使われるものではないが、AIシステムがフロントラインの科学問題を解くために役立っていることを示す証拠である。「より大きなオメガの改善には新しい数学的アイデアが必要かもしれないが、その領域は刺激的な研究分野だ」と研究者たちは書いている。

---

## 参考リンク

- [Improving the matrix multiplication exponent with modern optimization and AlphaEvolve (arXiv)](https://arxiv.org/abs/2505.XXXXX)

---

*（本文の情報は2026-08-25時点のものです）*
