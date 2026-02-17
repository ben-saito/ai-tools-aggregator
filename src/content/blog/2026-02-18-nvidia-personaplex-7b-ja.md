---
title: "NVIDIA、リアルタイム音声会話AI「PersonaPlex-7B」を公開。フルデュプレックス対応で割り込み・同時発話を実現"
description: "NVIDIAが音声対話AI「PersonaPlex-7B-v1」を公開。音声認識と音声生成を同時に処理するフルデュプレックス構成により、人間に近い自然な会話を実現する。商用利用可能でGitHub・Hugging Faceで公開中。"
publishedAt: "2026-02-18"
author: "AI Tools Aggregator編集部"
category: "AI Models"
tags: ["NVIDIA", "AI Speech", "Real-time", "Open Source", "Full Duplex"]
lang: "ja"
---

# NVIDIA、リアルタイム音声会話AI「PersonaPlex-7B」を公開。フルデュプレックス対応で割り込み・同時発話を実現

2026年1月15日、NVIDIAはリアルタイム音声会話AI「PersonaPlex-7B-v1」をHugging FaceおよびGitHubで公開した。本モデルは音声認識と音声生成を同時に処理する「フルデュプレックス（全二重）」構成を採用し、人間同士の会話で見られる割り込み、同時発話、素早いターンテイキングなどの自然な対話動作を実現する。

商用利用可能な[NVIDIA Open Model License](https://www.nvidia.com/en-us/agreements/enterprise-software/nvidia-open-model-license/)のもとで公開されており、開発者や企業は本モデルを自由に利用できる。

## 概要

PersonaPlex-7B-v1は、パラメータ数70億のTransformerベースの音声対話モデルである。ユーザーの音声入力をリアルタイムで処理しながら、同時に自身の音声出力を生成することで、従来の「話す→聞く→話す」のターンベース対話ではなく、人間同士の会話に近い柔軟な対話を可能にする。

NVIDIAによれば、本モデルは以下の特徴を持つ：

- 音声入力を継続的にエンコードしながら、同時に音声出力を生成する「デュアルストリーム構成」
- 会話開始前に音声プロンプト（声質・話し方）とテキストプロンプト（役割・背景・シナリオ）で会話アイデンティティを設定
- 24kHz音声入力・出力に対応
- 商用利用可能

本モデルの論文は[arXiv](https://arxiv.org/abs/2602.06053)で公開されている。

## 主な特徴

### フルデュプレックス（全二重）対話

PersonaPlexは、ユーザーの音声を聞きながら同時に自身の音声を生成できる「フルデュプレックス」構成を採用している。これにより以下の動作が可能となる：

- **割り込み（interruption）**: ユーザーがモデルの発話中に割り込んで話しかけることが可能
- **バージイン（barge-in）**: ユーザーの発話をリアルタイムで検出し、即座に応答を調整
- **同時発話（overlap）**: モデルとユーザーが同時に話すことを処理
- **素早いターンテイキング**: 発話の切り替えを低遅延で実現

従来のターンベース音声アシスタントでは、ユーザーが話し終えるまで待つ必要があったが、PersonaPlexはユーザーの発話中に内部状態を更新しながら流暢な出力を生成できる。

### 音声・役割のカスタマイズ

会話開始前に2種類のプロンプトでモデルの振る舞いを制御できる：

1. **音声プロンプト（voice prompt）**: 音声トークン列で声質・話し方を設定
2. **テキストプロンプト（text prompt）**: 役割・背景・シナリオ（例: カスタマーサポート担当者、専門家など）を設定

これらのプロンプトにより、モデルの会話アイデンティティと言語・音響の振る舞いが決定される。

## 技術的詳細

### アーキテクチャ

PersonaPlex-7B-v1は以下のアーキテクチャで構成される：

- **ベースアーキテクチャ**: Kyutai Labsの[Moshi（Moshikoウェイト）](https://huggingface.co/kyutai/moshiko-pytorch-bf16)をベースに開発
- **パラメータ数**: 70億（7B）
- **音声エンコーダ**: Mimi Speech Encoder（ConvNet + Transformer）
- **コアモデル**: Moshi Temporal Transformer + Depth Transformer
- **音声デコーダ**: Mimi Speech Decoder（Transformer + ConvNet）

モデルは音声をニューラルコーデックでエンコードし、テキストトークンと音声トークンを自己回帰的に予測することで音声応答を生成する。

### 訓練データ

- **訓練データセット**: Fisher English（[Part1](https://catalog.ldc.upenn.edu/LDC2004S13), [Part2](https://catalog.ldc.upenn.edu/LDC2005S13)）
- **データ量**: 7,303会話（各会話最大10分）、合計10,000時間未満
- **データモダリティ**: 音声（人間による収集）

### ベンチマーク性能

NVIDIAは[FullDuplexBench](https://arxiv.org/abs/2503.04721)公開ベンチマークでの評価結果を公開している。このベンチマークは合成データと実データを組み合わせ、フルデュプレックス対話の様々な側面を評価する。

主要な評価指標：

| 評価項目 | 指標 | PersonaPlex-7B-v1の結果 |
|---------|-----|------------------------|
| Pause Handling（Synthetic） | TOR↓ | 0.358 |
| Pause Handling（Candor） | TOR↓ | 0.431 |
| Backchannel | TOR↓ | 0.273 |
| Backchannel | Freq↑ | 0.042 |
| Backchannel | JSD↓ | 0.662 |
| Smooth Turn Taking | TOR↑ | 0.908 |
| Smooth Turn Taking | Latency↓ | 0.170秒 |
| User Interruption | TOR↑ | 0.950 |
| User Interruption | GPT-4o評価↑ | 4.290 |
| User Interruption | Latency↓ | 0.240秒 |
| User Interruption | SSIM（音声類似度）↑ | 0.650 |

NVIDIAによれば、PersonaPlexは他のオープンソース・商用音声会話システムと比較して、対話ダイナミクス、応答・割り込み遅延、タスク遵守（質問応答アシスタント、カスタマーサービス役割）において優れた性能を示している。

### 推論環境

- **推奨ハードウェア**: NVIDIA Ampere（A100）、NVIDIA Hopper（H100）
- **テスト環境**: NVIDIA A100 80GB
- **推奨OS**: Linux
- **ランタイムエンジン**: PyTorch

## ユースケース

NVIDIAは以下のユースケースを想定している：

- **カスタマーサポート**: 自然な対話を必要とするカスタマーサービス
- **音声アシスタント**: 質問応答、情報提供
- **教育・トレーニング**: 対話型学習システム
- **エンターテインメント**: インタラクティブな会話体験

英語音声入力に対して英語音声応答を生成する用途に適している。

## 制限事項

- **言語**: 現在は英語のみ対応
- **音声サンプリングレート**: 24kHz（入力・出力）
- **ハードウェア要件**: NVIDIA GPU推奨（A100、H100など）

商用利用は可能だが、導入前にNVIDIAの[倫理的考慮事項](https://huggingface.co/nvidia/personaplex-7b-v1/blob/main/bias.md)（バイアス、説明可能性、安全性・セキュリティ、プライバシー）を確認し、各業界・ユースケースの要件を満たしているか検証することが推奨される。

## リンク

- **Hugging Face**: [nvidia/personaplex-7b-v1](https://huggingface.co/nvidia/personaplex-7b-v1)
- **GitHub**: [NVIDIA/personaplex](https://github.com/NVIDIA/personaplex)
- **プロジェクトページ**: [PersonaPlex Project Page](https://research.nvidia.com/labs/adlr/personaplex/)
- **論文**: [PersonaPlex Preprint (arXiv)](https://arxiv.org/abs/2602.06053)
- **NVIDIA開発者ポータル**: [developer.nvidia.com](https://developer.nvidia.com/)

## 引用

研究での使用時の引用形式：

```
@misc{roy2026personaplexvoicerolecontrol,
  title={PersonaPlex: Voice and Role Control for Full Duplex Conversational Speech Models},
  author={Rajarshi Roy and Jonathan Raiman and Sang-gil Lee and Teodor-Dumitru Ene and Robert Kirby and Sungwon Kim and Jaehyeon Kim and Bryan Catanzaro},
  year={2026},
  eprint={2602.06053},
  archivePrefix={arXiv},
  primaryClass={cs.CL},
  url={https://arxiv.org/abs/2602.06053},
}
```

---

本記事の情報は2026年2月18日時点のものです。モデルの機能や仕様は変更される可能性があります。最新情報は[公式サイト](https://huggingface.co/nvidia/personaplex-7b-v1)をご確認ください。
