---
title: "Weather Skill - APIキー不要で天気情報を取得"
description: "Clawdbot向けWeather Skillを利用して、APIキー不要で現在の天気、週間予報、過去の気象データを取得する方法を解説します。"
publishedAt: "2026-02-14T23:00:00+09:00"
author: "AI Tools Hub"
category: "Clawdbot Skills"
tags: ["Clawdbot", "Weather", "Open-Meteo", "天気予報", "APIキー不要"]
featured: false
lang: "ja"
seo:
  keywords: "Clawdbot, Weather, Open-Meteo, 天気予報, APIキー不要"
---

# Weather Skill - APIキー不要で天気・予報情報を取得

Weather Skillは、気象情報APIを利用せずに天気・予報データを取得できるClawdbot Agent向けの機能である。本SkillはOpen-Meteo等の無料気象データソースを活用し、APIキー登録不要で現在の天気、週間予報、気温・湿度等の情報を取得できる。

## 概要

従来、気象情報の取得にはOpenWeatherMap、WeatherAPI等の有料APIが必要であり、APIキーの取得と管理が必須であった。Weather Skillは、Open-Meteo（https://open-meteo.com/）等のオープンソース気象データプロバイダーを活用し、以下の特徴を提供する。

- APIキー不要（登録不要）
- 無料・無制限（商用利用可能）
- グローバル対応（全世界の気象データ）
- 高精度（NOAA、DWD等の公的機関データを統合）

2026年2月時点で、Weather Skillは以下の情報を取得可能である。

- 現在の天気（気温、湿度、風速、降水量）
- 時間別予報（1時間ごと、最大16日先まで）
- 日別予報（最大16日先まで）
- 過去の気象データ（1940年以降）
- 気象警報・注意報

## 技術的仕様

### システム要件

- Clawdbot Agent 0.9.0以降
- Node.js 18.0以降
- インターネット接続（Open-Meteo APIへのアクセス）

### インストール

```bash
# Weather Skillのインストール
clawdhub install weather

# 設定不要（APIキー不要）
```

### 提供されるコマンド

```bash
# 現在の天気取得（都市名指定）
clawdbot skill weather current --location "Tokyo"

# 現在の天気取得（緯度・経度指定）
clawdbot skill weather current --lat 35.6762 --lon 139.6503

# 週間予報取得
clawdbot skill weather forecast \
  --location "New York" \
  --days 7

# 時間別予報取得
clawdbot skill weather hourly \
  --location "London" \
  --hours 24

# 複数地点の天気取得
clawdbot skill weather current \
  --locations "Tokyo,New York,London,Paris" \
  --format table

# 過去の気象データ取得
clawdbot skill weather historical \
  --location "Tokyo" \
  --start-date "2025-01-01" \
  --end-date "2025-01-31"
```

## 主要機能

### 1. 現在の天気取得

指定された地点の現在の気象情報を取得する。

```javascript
// JavaScript APIの使用例
const weather = require('clawdbot-skill-weather');

async function getCurrentWeather(location) {
  const data = await weather.current({
    location: location,
    units: 'metric' // 'metric', 'imperial', 'si'
  });
  
  return {
    temperature: data.temperature, // 気温（℃）
    humidity: data.humidity, // 湿度（%）
    windSpeed: data.windSpeed, // 風速（m/s）
    precipitation: data.precipitation, // 降水量（mm）
    weatherCode: data.weatherCode, // 天気コード
    weatherDescription: data.weatherDescription // 天気説明
  };
}

// 実行例
const tokyo = await getCurrentWeather('Tokyo');
console.log(`Temperature: ${tokyo.temperature}°C`);
console.log(`Weather: ${tokyo.weatherDescription}`);
```

出力例:
```
Temperature: 15.2°C
Weather: Partly cloudy
Humidity: 60%
Wind Speed: 3.5 m/s
```

### 2. 週間予報取得

最大16日先までの日別予報を取得する。

```javascript
async function getWeeklyForecast(location, days = 7) {
  const data = await weather.forecast({
    location: location,
    days: days
  });
  
  return data.daily.map(day => ({
    date: day.date,
    temperatureMax: day.temperatureMax,
    temperatureMin: day.temperatureMin,
    precipitation: day.precipitation,
    precipitationProbability: day.precipitationProbability,
    weatherDescription: day.weatherDescription
  }));
}

// 実行例
const forecast = await getWeeklyForecast('Tokyo', 7);
forecast.forEach(day => {
  console.log(`${day.date}: ${day.temperatureMin}°C ~ ${day.temperatureMax}°C, ${day.weatherDescription}`);
});
```

出力例:
```
2026-02-15: 10°C ~ 18°C, Partly cloudy
2026-02-16: 12°C ~ 20°C, Sunny
2026-02-17: 8°C ~ 15°C, Light rain
2026-02-18: 9°C ~ 16°C, Cloudy
2026-02-19: 11°C ~ 19°C, Sunny
2026-02-20: 13°C ~ 21°C, Partly cloudy
2026-02-21: 10°C ~ 17°C, Sunny
```

### 3. 時間別予報取得

1時間ごとの詳細な予報を取得する。

```javascript
async function getHourlyForecast(location, hours = 24) {
  const data = await weather.hourly({
    location: location,
    hours: hours
  });
  
  return data.hourly.map(hour => ({
    time: hour.time,
    temperature: hour.temperature,
    precipitation: hour.precipitation,
    windSpeed: hour.windSpeed,
    weatherDescription: hour.weatherDescription
  }));
}
```

### 4. 緯度・経度ベース検索

都市名ではなく、緯度・経度で直接検索する。

```javascript
async function getWeatherByCoordinates(lat, lon) {
  const data = await weather.current({
    latitude: lat,
    longitude: lon
  });
  
  return data;
}

// 東京タワーの天気
const tokyoTower = await getWeatherByCoordinates(35.6586, 139.7454);
```

### 5. 複数地点の天気取得

複数の都市の天気を一括取得する。

```javascript
async function getMultipleLocations(locations) {
  const results = await Promise.all(
    locations.map(loc => weather.current({ location: loc }))
  );
  
  return results.map((data, i) => ({
    location: locations[i],
    temperature: data.temperature,
    weatherDescription: data.weatherDescription
  }));
}

// 実行例
const cities = ['Tokyo', 'New York', 'London', 'Paris'];
const weatherData = await getMultipleLocations(cities);
```

### 6. 過去の気象データ取得

過去の気象データ（1940年以降）を取得する。

```javascript
async function getHistoricalWeather(location, startDate, endDate) {
  const data = await weather.historical({
    location: location,
    startDate: startDate, // 'YYYY-MM-DD'
    endDate: endDate
  });
  
  return data.daily;
}

// 2025年1月の東京の気象データ
const historical = await getHistoricalWeather(
  'Tokyo',
  '2025-01-01',
  '2025-01-31'
);
```

## API仕様

Weather SkillはClawdbot Gateway経由でREST APIとして利用可能である。

### 現在の天気取得API

```bash
GET /api/skills/weather/current?location=Tokyo&units=metric
```

レスポンス:
```json
{
  "location": "Tokyo",
  "coordinates": {
    "latitude": 35.6762,
    "longitude": 139.6503
  },
  "temperature": 15.2,
  "humidity": 60,
  "windSpeed": 3.5,
  "windDirection": 180,
  "precipitation": 0,
  "weatherCode": 2,
  "weatherDescription": "Partly cloudy",
  "timestamp": "2026-02-14T12:00:00Z"
}
```

### 週間予報API

```bash
GET /api/skills/weather/forecast?location=Tokyo&days=7
```

レスポンス:
```json
{
  "location": "Tokyo",
  "daily": [
    {
      "date": "2026-02-15",
      "temperatureMax": 18,
      "temperatureMin": 10,
      "precipitation": 0,
      "precipitationProbability": 10,
      "weatherCode": 2,
      "weatherDescription": "Partly cloudy"
    },
    ...
  ]
}
```

### パラメータ

| パラメータ | 型 | 説明 | デフォルト値 |
|----------|------|------|------------|
| location | string | 都市名（英語） | - |
| latitude | number | 緯度（-90 ~ 90） | - |
| longitude | number | 経度（-180 ~ 180） | - |
| units | string | 単位系（metric, imperial, si） | metric |
| days | number | 予報日数（1-16） | 7 |
| hours | number | 予報時間数（1-384） | 24 |

## 実装例

### 1. 天気ボット（Slackへの定期投稿）

毎朝、天気予報をSlackチャンネルに投稿する。

```javascript
const weather = require('clawdbot-skill-weather');
const slack = require('clawdbot-skill-slack');

async function postDailyWeather() {
  const forecast = await weather.forecast({
    location: 'Tokyo',
    days: 3
  });
  
  const message = forecast.daily.map(day => 
    `${day.date}: ${day.weatherDescription}, ${day.temperatureMin}°C ~ ${day.temperatureMax}°C`
  ).join('\n');
  
  await slack.chat.postMessage({
    channel: 'general',
    text: '今日の天気予報',
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*Tokyo Weather Forecast*\n${message}`
        }
      }
    ]
  });
}

// Cronジョブで毎朝7時に実行
// 0 7 * * * node post-daily-weather.js
```

### 2. イベント開催判断

屋外イベントの開催可否を天気予報から自動判断する。

```javascript
async function shouldHoldOutdoorEvent(location, date) {
  const forecast = await weather.forecast({
    location: location,
    days: 7
  });
  
  const targetDay = forecast.daily.find(d => d.date === date);
  
  if (!targetDay) {
    throw new Error('Date out of forecast range');
  }
  
  // 判断基準
  const isGoodWeather = 
    targetDay.precipitationProbability < 30 &&
    targetDay.temperatureMax < 35 &&
    targetDay.temperatureMin > 5;
  
  return {
    recommendation: isGoodWeather ? 'Go ahead' : 'Consider postponing',
    reasoning: {
      precipitation: `${targetDay.precipitationProbability}%`,
      temperature: `${targetDay.temperatureMin}°C ~ ${targetDay.temperatureMax}°C`,
      weather: targetDay.weatherDescription
    }
  };
}

// 実行例
const decision = await shouldHoldOutdoorEvent('Tokyo', '2026-02-20');
console.log(decision.recommendation);
```

### 3. 農業支援アプリ

降水量データから灌漑（水やり）の必要性を判断する。

```javascript
async function checkIrrigationNeeds(location) {
  const hourly = await weather.hourly({
    location: location,
    hours: 48 // 48時間先まで
  });
  
  // 今後48時間の総降水量
  const totalPrecipitation = hourly.hourly.reduce(
    (sum, hour) => sum + hour.precipitation,
    0
  );
  
  // 10mm以下なら灌漑推奨
  const needsIrrigation = totalPrecipitation < 10;
  
  return {
    needsIrrigation,
    totalPrecipitation,
    recommendation: needsIrrigation 
      ? 'Irrigation recommended' 
      : 'Natural rainfall expected'
  };
}
```

### 4. 旅行プランニング

複数都市の天気を比較し、旅行先を提案する。

```javascript
async function suggestTravelDestination(cities, travelDate) {
  const forecasts = await Promise.all(
    cities.map(city => weather.forecast({ location: city, days: 7 }))
  );
  
  const scores = forecasts.map((forecast, i) => {
    const targetDay = forecast.daily.find(d => d.date === travelDate);
    if (!targetDay) return { city: cities[i], score: 0 };
    
    // スコアリング（晴れ度合い、気温の快適さ）
    const score = 
      (100 - targetDay.precipitationProbability) * 0.5 +
      (Math.max(0, 25 - Math.abs(targetDay.temperatureMax - 22))) * 2;
    
    return {
      city: cities[i],
      score,
      weather: targetDay.weatherDescription,
      temperature: `${targetDay.temperatureMin}°C ~ ${targetDay.temperatureMax}°C`
    };
  });
  
  // スコア順にソート
  scores.sort((a, b) => b.score - a.score);
  
  return scores;
}

// 実行例
const destinations = ['Barcelona', 'Rome', 'Athens', 'Lisbon'];
const recommendations = await suggestTravelDestination(destinations, '2026-03-15');
console.log(`Best destination: ${recommendations[0].city}`);
```

## ユースケース

### 1. スマートホーム自動化

天気予報に基づいて家電を制御する。

```javascript
// 雨予報なら洗濯機を止め、窓を閉める
async function automateHome() {
  const forecast = await weather.hourly({ location: 'Tokyo', hours: 6 });
  
  const willRain = forecast.hourly.some(h => h.precipitation > 0);
  
  if (willRain) {
    await homeAutomation.closeWindows();
    await homeAutomation.stopWashingMachine();
    await notify('Rain expected in next 6 hours. Windows closed.');
  }
}
```

### 2. 配送ルート最適化

天気情報から配送効率の良いルートを選択する。

```javascript
// 降雨を避けたルート選択
async function optimizeDeliveryRoute(waypoints) {
  const weatherPromises = waypoints.map(point => 
    weather.current({ latitude: point.lat, longitude: point.lon })
  );
  
  const weatherData = await Promise.all(weatherPromises);
  
  // 降水量でソート（少ない順）
  const sorted = waypoints
    .map((point, i) => ({ ...point, precipitation: weatherData[i].precipitation }))
    .sort((a, b) => a.precipitation - b.precipitation);
  
  return sorted;
}
```

### 3. エネルギー管理

太陽光発電量を天気予報から予測する。

```javascript
async function predictSolarGeneration(location) {
  const forecast = await weather.forecast({ location, days: 7 });
  
  const predictions = forecast.daily.map(day => {
    // 晴天度合いから発電量を推定（簡易計算）
    const cloudCover = day.weatherCode > 2 ? 0.5 : 0.1; // 天気コードから推定
    const estimatedGeneration = (1 - cloudCover) * 10; // kWh
    
    return {
      date: day.date,
      estimatedGeneration,
      weather: day.weatherDescription
    };
  });
  
  return predictions;
}
```

## データソース

Weather Skillは以下のデータソースを利用している。

- Open-Meteo API（https://open-meteo.com/）
- データ提供元:
  - NOAA（アメリカ海洋大気庁）
  - DWD（ドイツ気象局）
  - MeteoFrance（フランス気象局）
  - ECMWF（ヨーロッパ中期予報センター）

## 天気コード

Weather Skillが返す天気コード（WMO Weather interpretation codes）:

| コード | 説明 |
|-------|------|
| 0 | Clear sky（快晴） |
| 1-3 | Partly cloudy（曇り） |
| 45, 48 | Fog（霧） |
| 51-57 | Drizzle（霧雨） |
| 61-67 | Rain（雨） |
| 71-77 | Snow（雪） |
| 80-82 | Rain showers（にわか雨） |
| 85-86 | Snow showers（にわか雪） |
| 95-99 | Thunderstorm（雷雨） |

## 制限事項

- レート制限: Open-Meteo APIは1日あたり10,000リクエストまで無料（通常使用では超過しない）
- 予報期間: 最大16日先まで
- 過去データ: 1940年以降
- 精度: 公的機関データを統合しているが、局地的な天候変化は捉えられない場合がある

## セキュリティとプライバシー

- APIキー不要のため、認証情報漏洩リスクなし
- ユーザーの位置情報はOpen-Meteo APIに送信されるが、匿名化されており個人識別不可
- Open-Meteo APIはGDPR準拠

## 商用利用

Open-Meteo APIは商用利用可能であり、以下の条件で利用できる。

- 無料プラン: 1日10,000リクエストまで
- 有料プラン（オプション）: €50/月で無制限、SLA付き

Weather Skill自体はMITライセンスで提供されており、商用利用可能。

## 参考リンク

- Open-Meteo公式サイト: https://open-meteo.com/
- Open-Meteo API Documentation: https://open-meteo.com/en/docs
- WMO Weather Codes: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM
- Clawdbot公式ドキュメント: https://docs.clawd.bot/skills/weather

---

*本記事の情報は2026年2月14日時点のものです。各サービスの機能や仕様は変更される可能性があります。最新情報は各公式サイトをご確認ください。*
