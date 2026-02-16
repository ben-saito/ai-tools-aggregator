# AI Tools Ecosystem Research

## Objective
各主要AIツールの周辺ツール・プラグイン・拡張機能をリサーチして、サイトに追加する

## 対象AIツール（優先順位順）

### 1. Claude Ecosystem
- [x] **claude-mem** - メモリ圧縮システム（調査済み）
- [ ] Claude Desktop MCPツール
- [ ] Claude API ラッパー・SDK
- [ ] Claude統合ツール

### 2. ChatGPT Ecosystem
- [ ] ChatGPT Plus Custom GPTs（人気なもの）
- [ ] ChatGPT API ラッパー
- [ ] ChatGPT Chrome拡張
- [ ] ChatGPT Slack/Discord統合

### 3. Midjourney Ecosystem
- [ ] Midjourney Discord Bot管理ツール
- [ ] Midjourney プロンプト生成ツール
- [ ] Midjourney画像管理ツール

### 4. GitHub Copilot Ecosystem
- [ ] Copilot拡張機能
- [ ] Copilot統合IDE
- [ ] Copilot代替・補完ツール

### 5. Stable Diffusion Ecosystem
- [ ] Stable Diffusion WebUI
- [ ] LoRA/モデル管理ツール
- [ ] プロンプトマネージャー

## 収集情報

各ツールについて：
- **名前**
- **説明**（簡潔・詳細）
- **URL**（GitHub, 公式サイト等）
- **親ツール**（Claude, ChatGPT等）
- **カテゴリー**（プラグイン、API、拡張機能等）
- **価格**（free, open-source, paid）
- **人気度**（GitHub stars, ダウンロード数等）
- **主な機能**
- **対応プラットフォーム**

## データ構造案

既存の `tools.json` を拡張：

```json
{
  "id": "claude-mem",
  "name": "Claude-Mem",
  "url": "https://github.com/thedotmack/claude-mem",
  "category": "code-development",
  "subcategory": "claude-plugin",
  "parent_tool": "claude-code",
  "description": "Persistent memory compression system for Claude Code. Preserves context across sessions.",
  "pricing": "open-source",
  "tags": ["claude", "memory", "plugin", "mcp"],
  "featured": false,
  "github_stars": 1500,
  "github_url": "https://github.com/thedotmack/claude-mem",
  "logoUrl": null,
  "addedAt": "2026-02-13"
}
```

## 表示方法案

### オプション1: 既存カテゴリーに統合
- Code Developmentカテゴリー内に表示
- タグで「Claude Plugin」等でフィルタリング可能

### オプション2: 新カテゴリー作成
- 「Plugins & Extensions」カテゴリー
- 親ツール別にグループ化

### オプション3: 親ツール詳細ページに表示
- Claudeツールページに「関連ツール」セクション
- 「このツール用のエコシステム」として表示

## 次のステップ

1. リサーチ実行（GitHub Awesome lists, Reddit, Product Hunt等）
2. データ収集（最低30-50ツール）
3. データ構造確定
4. UIデザイン（表示方法）
5. 実装
6. デプロイ

---

**開始日**: 2026-02-13  
**担当**: フロウ  
**ステータス**: 計画中
