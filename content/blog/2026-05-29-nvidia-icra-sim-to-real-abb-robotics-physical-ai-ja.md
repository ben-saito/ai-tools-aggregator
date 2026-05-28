# NVIDIAがICRA 2026でsim-to-realロボティクス研究を8論文発表：ABB Roboticsとのindustrial physical AIで製造現場に進出

2026年5月28日、NVIDIAは国際ロボティクス会議ICRA 2026において、sim-to-real（シミュレーション-to-リアリティ）転送に関する研究8論文を一口に発表。同日、ABB Roboticsとの industrial physical AI パートナーシップも公式発表され、AI×ロボティクスの商用化が急速に進んでいる。本稿では、これらの最新動向を技術的に深く剖析する。

---

## ICRA 2026：NVIDIA Researchの8論文が示すsim-to-realの現実解

NVIDIA ResearchはICRA 2026で28件の accepted papers のうち8件をsim-to-real転送に集中発表。内容は座学・検証から実機適用まで全フェーズをカバーする。

**ロボティクスが「制御されたデモ」と「スクリプト付き自動化」から、「汎用力」と「信頼性」を兼ね備えた具体的身体的知能（embodied autonomy）へ移行する新时期**が到来している。

### ScheduleStream：GPUで複数ロボットアームを並列計画

従来のロボットスケジューリングは逐一処理が基本だった。異なる行程かかる複数のロボットアームを協調させる場合、逐次処理では処理のボトルネックが発生していた。

**ScheduleStream**はGPU上で動きを計算し、複数ロボットアームの計画と操作を並列実行可能にしたフレームワーク。NVIDIA JetsonエッジAIプラットフォーム上で動作し、**マルチアーム計画で3倍のスピードアップ**を達成。コードはGitHubで公開済み。

### COMPASS： الجسم的不同跨越ナビゲーションポリシー

ロボットナビゲーションソフトウェア是不同的体型のロボットに移植する際、動作パーツ的不同から動作が崩れることが多かった。

**COMPASS policy framework**は首先模倣学習で基本ナビゲーション機能を構築，而后在NVIDIA Isaac Labで残留強化学習用于 الجسم specializing。重要な点是**実機データ完全不要**——Isaac Labシミュレーションのみで訓練。

模倣学習ベースライン比较で**平均成功率4.5倍改善**、実機環境への転送성도高く、20件の自律移動ロボット・ヒューマノイド実機ナビゲーション試験で成功率約80%を達成している。

### Grasp-MPC：把持の「最後数センチ」を適応的に修正

従来の把持システムは「物体を特定→把持を予測→軌道を計画→実行」の4段階が基本。だが、把持対象の最終数厘米 where微小な误差が 실패の原因になることが多かった。

**Gripp-MPC**は 고정計画を実行するのではなく、ロボットが物に近づくにつれ把持を連続修正する適応的計算を採用。人が関節角度を全部計算せず「手感」で掴むのと同じ原理。

政策構築のため、GraspGenデータセットのアノテーションとcuRobo（CUDAAcceleratedロボット動作生成ライブラリ）のmotion planning データを使い、8000物体×200万 simulated trajectoriesで訓練。结果、**新規物体把持成功率75%**（ベースライン41%）。

### Deformable Cluster Manipulation：柔らかい・絡まった物体を一括処理

製造・インフラ現場では硬的单个物体ではなく柔らかい・絡まった物質（樹木の枝、ケーブル、ブラシなど）を扱う必要がある。この問題に対応するため、**Deformable Cluster Manipulation**フレームワークが提案された。

樹木の枝などパワーラインに絡んだ物質を「捆む」アプローチで、肩 entire arm + 掴む gripper ではなく、包围把它们扫到一边。生物学的成長方程式使った木製発生器で数千種類の树木を生成し、NVIDIA Isaacシミュレーション環境で訓練している。

---

## ABB Robotics × NVIDIA：industrial physical AIのパートナーシップ

同年5月28日、ABB RoboticsはNVIDIAとの提携を公式発表industrial-grade physical AI at scale.

ABB RoboticsのロボットシステムにNVIDIA Omniversを統合し、デジタルツイン环境下でのロボット訓練・検証を実現。ABBの産業用ロボット筐体とNVIDIAのシミュレーション基盤の組み合わせにより、**製造現場へのphysical AI導入加速**が期待されている。

NVIDIA側発表的资料によると、Omniverse NuRec使ったデジタルツイン環境でのpost-training・検証ワークフローが統合され、新環境のロボット配備前にデジタルツインで_validate可能になる見込み。

これは前述のCOMPASSフレームワークの产业応用版であり、sim-to-real研究の产業転換が進行中であることを示している。

---

## sim-to-real技術栈の全体構造

| レイヤー | 技術 | 開発元 | 特徴 |
|---------|------|--------|------|
| **シミュレーター基盤** | Isaac Lab / Isaac Gym | NVIDIA | GPU並列物理計算 |
| **ナビゲーション** | COMPASS | NVIDIA Research | 跨機種泛化・Isaac Lab訓練 |
| **把持** | Grasp-MPC + cuRobo | NVIDIA Research | 適応的最終微修正 |
| **マルチアーム計画** | ScheduleStream | NVIDIA Research | GPU並列計画・Jetson対応 |
| **産業应用** | ABB Robotics + Omniverse | ABB + NVIDIA |  디지털ツイン訓練・验证 |
| **動作生成** | cuRobo | NVIDIA | CUDAAccelerated motion planning |

---

## 开发者への影響

1. ** Isaac Lab が产业研究事实上の標準に**：COMPASS・Grasp-MPC・Deformable Cluster ManipulationがすべてIsaac Lab 기반으로개발されており、シミュレーターの選択肢としてIsaac Labの posiciónが明確に
2. **実機データ不要潮流**：いずれのフレームワークも実機データを必要とせず、シミュレーションのみで訓練可能。データ収集コストが大幅に削減可能
3. **ABB + NVIDIA統合の産業展開**： Omniverseベースのデジタルツインが产业用ロボットに統合され始め、研究段階から実機適用への скорость が加速
4. **Jetson边缘部署**：ScheduleStream がJetson上で動作することは、エッジAIでのリアルタイムロボット控制が現実的であることを示す

---

## 参考リンク

- [NVIDIA Research Advances Robotics From Simulation to the Real World](https://blogs.nvidia.com/blog/icra-research-robotics-simulation-to-real-world/)
- [ABB Robotics Partners with NVIDIA to Deliver Industrial-Grade Physical AI at Scale](https://news.google.com/rss/articles/CBMiygFBVV95cUxOZ3V2Qm1mTjRicWROUFB1NFcyb1VhMGQtTFcxUTVPRG5hR0Q)
- [NVIDIA Blog: ABB Robotics Taps NVIDIA Omniverse to Deliver Industrial‑Grade Physical AI](https://news.google.com/rss/articles/CBMiY0FVX3lxTE5IZlVtUUF5QlBjR1J1dzM1TWtiZmdsQldIczRlT3ZENFNibXY)

---

*（本文の情報は2026年5月29日時点のものです。）*
