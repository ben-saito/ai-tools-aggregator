---
title: "Skill Creator Skill - Clawdbotスキル開発を効率化"
description: "Skill Creator Skillを利用して、Clawdbotスキルの設計、構造化、パッケージングを効率化する方法を解説します。"
publishedAt: "2026-02-14"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Skill Creator", "スキル開発", "パッケージング", "開発ツール"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Skill Creator, スキル開発, パッケージング, 開発ツール"
---

# Skill Creator Skill - AgentSkillの作成・更新を自動化

Skill Creator Skillは、Clawdbot Agent向けの新規Skill（プラグイン）の作成、更新、テスト、公開を自動化するための開発支援ツールである。本Skillにより、Skillのボイラープレートコード生成、SKILL.mdドキュメント作成、バリデーション、ClawdHubへの公開までを一貫して実行できる。

## 概要

Clawdbot Agentは、拡張機能として「Skill」と呼ばれるプラグインシステムを採用している。開発者はSkillを作成することで、Agent機能を自由に拡張できるが、適切なディレクトリ構造、メタデータ、ドキュメントの作成には一定の知識が必要である。

Skill Creator Skillは、以下のワークフローを自動化する。

1. Skillプロジェクトの初期化
2. ボイラープレートコード生成
3. SKILL.mdドキュメント自動生成
4. package.jsonメタデータ作成
5. ユニットテスト・統合テストのセットアップ
6. バリデーション（構造、コード品質、セキュリティ）
7. ClawdHubへの公開

2026年2月時点で、Skill Creator SkillはJavaScript/TypeScriptベースのSkill開発をサポートしている。

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- npm 8.0以降
- Git 2.30以降（公開時）

### インストール

```bash
# Skill Creator Skillのインストール
clawdhub install skill-creator

# 初回セットアップ
clawdbot skill skill-creator init
```

### 提供されるコマンド

```bash
# 新規Skill作成
clawdbot skill skill-creator create \
  --name my-custom-skill \
  --description "My custom skill for Clawdbot" \
  --author "Your Name" \
  --license MIT

# ボイラープレートコード生成
clawdbot skill skill-creator scaffold \
  --template basic \
  --typescript

# SKILL.mdドキュメント生成
clawdbot skill skill-creator generate-docs \
  --skill-dir ./my-custom-skill

# バリデーション
clawdbot skill skill-creator validate \
  --skill-dir ./my-custom-skill

# テスト実行
clawdbot skill skill-creator test \
  --skill-dir ./my-custom-skill

# ClawdHubへの公開
clawdbot skill skill-creator publish \
  --skill-dir ./my-custom-skill \
  --tag v1.0.0
```

## 主要機能

### 1. Skillプロジェクト初期化

対話型ウィザードでSkillプロジェクトを作成する。

```bash
clawdbot skill skill-creator create --name weather-api-skill
```

対話型プロンプト例:
```
✓ Skill name: weather-api-skill
✓ Description: Fetch weather data from OpenWeatherMap API
✓ Author: John Doe
✓ License: MIT
✓ Template: (Use arrow keys)
  ❯ basic - Basic skill template
    api-integration - External API integration
    database - Database operations
    custom - Custom template

✓ Language: (Use arrow keys)
  ❯ JavaScript
    TypeScript

Creating skill project...
✓ Directory created: ./weather-api-skill
✓ package.json created
✓ SKILL.md created
✓ index.js created
✓ test/ created

Next steps:
  cd weather-api-skill
  npm install
  npm test
```

生成されるディレクトリ構造:
```
weather-api-skill/
├── SKILL.md              # Skill説明ドキュメント
├── package.json          # パッケージメタデータ
├── index.js              # エントリーポイント
├── lib/                  # ライブラリコード
│   └── api.js
├── test/                 # テストコード
│   └── index.test.js
├── examples/             # 使用例
│   └── basic-usage.js
└── README.md             # 開発者向けREADME
```

### 2. ボイラープレートコード生成

Skill Creatorは以下のテンプレートを提供する。

#### Basic Template

```javascript
// index.js (自動生成)
module.exports = {
  name: 'weather-api-skill',
  version: '1.0.0',
  description: 'Fetch weather data from OpenWeatherMap API',
  
  commands: {
    'weather': {
      description: 'Get current weather for a location',
      params: {
        location: { type: 'string', required: true },
        units: { type: 'string', default: 'metric' }
      },
      handler: async (params, context) => {
        const { location, units } = params;
        const weather = await fetchWeather(location, units);
        return weather;
      }
    }
  },
  
  hooks: {
    onInstall: async (context) => {
      console.log('Weather API Skill installed');
    },
    onUninstall: async (context) => {
      console.log('Weather API Skill uninstalled');
    }
  }
};

async function fetchWeather(location, units) {
  // Implementation here
}
```

#### API Integration Template

外部API連携用のテンプレート。認証、エラーハンドリング、レート制限処理を含む。

```javascript
// lib/api.js (自動生成)
const axios = require('axios');

class WeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.openweathermap.org/data/2.5';
    this.client = axios.create({
      baseURL: this.baseURL,
      timeout: 10000
    });
  }
  
  async getCurrentWeather(location, units = 'metric') {
    try {
      const response = await this.client.get('/weather', {
        params: {
          q: location,
          units: units,
          appid: this.apiKey
        }
      });
      return response.data;
    } catch (error) {
      throw new Error(`Weather API error: ${error.message}`);
    }
  }
}

module.exports = WeatherAPI;
```

### 3. SKILL.mdドキュメント自動生成

コードから自動的にSKILL.mdを生成する。

```bash
clawdbot skill skill-creator generate-docs --skill-dir ./weather-api-skill
```

生成されるSKILL.md:
```markdown
# Weather API Skill

Fetch weather data from OpenWeatherMap API

## Installation

```bash
clawdhub install weather-api-skill
```

## Configuration

Set the following environment variables:

- `OPENWEATHERMAP_API_KEY`: Your OpenWeatherMap API key

## Commands

### weather

Get current weather for a location

**Parameters:**
- `location` (string, required): Location name (e.g., "Tokyo", "New York")
- `units` (string, optional): Units of measurement ("metric", "imperial"). Default: "metric"

**Example:**
```bash
clawdbot skill weather-api-skill weather --location "Tokyo" --units metric
```

**Response:**
```json
{
  "temperature": 15.2,
  "description": "Clear sky",
  "humidity": 60,
  "wind_speed": 3.5
}
```

## API Reference

See [API Documentation](docs/api.md) for detailed information.

## License

MIT
```

### 4. バリデーション

Skillの構造、コード品質、セキュリティをチェックする。

```bash
clawdbot skill skill-creator validate --skill-dir ./weather-api-skill
```

検証項目:
```
✓ Directory structure
  ✓ SKILL.md exists
  ✓ package.json exists
  ✓ index.js exists
  ✓ test/ directory exists

✓ package.json validation
  ✓ name field is valid
  ✓ version follows SemVer
  ✓ description is present
  ✓ license is specified

✓ Code quality (ESLint)
  ✓ No syntax errors
  ✓ No unused variables
  ✓ Follows style guide

✓ Security (npm audit)
  ✓ No high-severity vulnerabilities
  ✓ Dependencies are up-to-date

✓ Tests
  ✓ Test files exist
  ✓ All tests pass (10/10)
  ✓ Code coverage: 85%

All checks passed! Skill is ready for publication.
```

### 5. テストセットアップ

ユニットテスト・統合テストの雛形を生成する。

```javascript
// test/index.test.js (自動生成)
const { expect } = require('chai');
const skill = require('../index');

describe('Weather API Skill', () => {
  describe('weather command', () => {
    it('should fetch weather for a valid location', async () => {
      const result = await skill.commands.weather.handler({
        location: 'Tokyo',
        units: 'metric'
      });
      
      expect(result).to.have.property('temperature');
      expect(result).to.have.property('description');
    });
    
    it('should throw error for invalid location', async () => {
      try {
        await skill.commands.weather.handler({
          location: 'InvalidCityName123456'
        });
        throw new Error('Should have thrown error');
      } catch (error) {
        expect(error.message).to.include('Weather API error');
      }
    });
  });
});
```

### 6. ClawdHubへの公開

バリデーション完了後、ClawdHubリポジトリに公開する。

```bash
clawdbot skill skill-creator publish \
  --skill-dir ./weather-api-skill \
  --tag v1.0.0 \
  --changelog "Initial release"
```

公開フロー:
1. バリデーション実行
2. Gitタグ作成
3. npmパッケージビルド
4. ClawdHubリポジトリにプッシュ
5. リリースノート生成

## API仕様

Skill Creator SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### Skill作成API

```bash
POST /api/skills/skill-creator/create
Content-Type: application/json

{
  "name": "weather-api-skill",
  "description": "Fetch weather data",
  "author": "John Doe",
  "license": "MIT",
  "template": "api-integration",
  "language": "javascript"
}
```

レスポンス:
```json
{
  "skillId": "weather-api-skill",
  "path": "./weather-api-skill",
  "files": [
    "package.json",
    "SKILL.md",
    "index.js",
    "lib/api.js",
    "test/index.test.js"
  ],
  "nextSteps": [
    "cd weather-api-skill",
    "npm install",
    "npm test"
  ]
}
```

## 実装例

### 1. カスタムSkill作成

データベース操作を行うSkillを作成する。

```bash
# プロジェクト初期化
clawdbot skill skill-creator create \
  --name postgresql-skill \
  --template database \
  --typescript

cd postgresql-skill
npm install pg

# コード実装
code lib/database.ts

# テスト
npm test

# バリデーション
clawdbot skill skill-creator validate

# 公開
clawdbot skill skill-creator publish --tag v1.0.0
```

### 2. 既存ライブラリのSkillラッパー作成

既存のNode.jsライブラリをClawdbot Skillとして公開する。

```javascript
// Stripe APIラッパーSkillの作成
clawdbot skill skill-creator create \
  --name stripe-skill \
  --template api-integration

// index.js
const Stripe = require('stripe');

module.exports = {
  name: 'stripe-skill',
  commands: {
    'create-payment-intent': {
      handler: async (params) => {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
        return await stripe.paymentIntents.create({
          amount: params.amount,
          currency: params.currency
        });
      }
    }
  }
};
```

### 3. 複数コマンドを持つSkill作成

複雑な機能を持つSkillを作成する。

```bash
clawdbot skill skill-creator create \
  --name analytics-skill \
  --template advanced

# 複数コマンドの実装
# - track: イベントトラッキング
# - report: レポート生成
# - export: データエクスポート
```

## ユースケース

### 1. 社内ツールのSkill化

社内で使用しているツールをClawdbot Skillとして公開する。

```bash
# 社内Wikiツール連携Skill
clawdbot skill skill-creator create \
  --name internal-wiki-skill \
  --template api-integration \
  --private # プライベートリポジトリとして公開
```

### 2. オープンソースSkillの公開

コミュニティ向けにSkillを公開する。

```bash
# AWS S3操作Skill
clawdbot skill skill-creator create \
  --name aws-s3-skill \
  --license MIT

# 実装・テスト後、ClawdHubに公開
clawdbot skill skill-creator publish \
  --public \
  --github-repo https://github.com/yourusername/aws-s3-skill
```

### 3. Skill開発教育

新規開発者向けにSkill作成のチュートリアルを提供する。

```bash
# チュートリアル用Skillテンプレート
clawdbot skill skill-creator create \
  --name tutorial-skill \
  --template tutorial \
  --with-examples
```

## ベストプラクティス

### Skillディレクトリ構造

```
my-skill/
├── SKILL.md              # 必須: Skill説明
├── package.json          # 必須: パッケージメタデータ
├── index.js              # 必須: エントリーポイント
├── lib/                  # 推奨: ライブラリコード
│   ├── api.js
│   └── utils.js
├── test/                 # 必須: テストコード
│   ├── index.test.js
│   └── integration.test.js
├── examples/             # 推奨: 使用例
│   └── basic-usage.js
├── docs/                 # 推奨: 詳細ドキュメント
│   └── api.md
└── .clawdbotrc           # オプション: Clawdbot設定
```

### package.json必須フィールド

```json
{
  "name": "my-skill",
  "version": "1.0.0",
  "description": "My custom Clawdbot skill",
  "main": "index.js",
  "keywords": ["clawdbot", "skill", "api"],
  "author": "Your Name <email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/my-skill"
  },
  "clawdbot": {
    "minVersion": "0.9.0",
    "category": "api-integration",
    "tags": ["weather", "api"]
  }
}
```

### エラーハンドリング

```javascript
// 推奨: 詳細なエラーメッセージ
commands: {
  'fetch-data': {
    handler: async (params) => {
      try {
        return await fetchData(params.url);
      } catch (error) {
        // Clawdbotが理解できる形式でエラーを返す
        throw {
          code: 'FETCH_ERROR',
          message: `Failed to fetch data: ${error.message}`,
          originalError: error
        };
      }
    }
  }
}
```

## 制限事項

- Skillサイズ: 50MB以下（依存パッケージ含む）を推奨
- Node.jsバージョン: 18.0以降のみサポート
- 言語: JavaScript/TypeScriptのみ（他言語はバイナリラッパー経由で可能）

## セキュリティガイドライン

Skillを公開する際、以下のセキュリティガイドラインを遵守すること。

1. **APIキーの管理**: コードにハードコードせず、環境変数で管理
2. **入力検証**: ユーザー入力を必ずバリデーション
3. **依存パッケージ**: 定期的に`npm audit`で脆弱性チェック
4. **権限の最小化**: 必要最小限の権限のみ要求
5. **ログ出力**: 機密情報をログに出力しない

## 参考リンク

- Clawdbot Skill開発ガイド: https://docs.clawd.bot/skills/development
- ClawdHub リポジトリ: https://github.com/clawdbot/clawdhub-skills
- Skill Creator GitHub: https://github.com/clawdbot/skill-creator
- Clawdbot公式ドキュメント: https://docs.clawd.bot/

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
