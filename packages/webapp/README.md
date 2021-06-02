# React Tutorial WebApp

## 概要

* React + TypeScript + MaterialUI
* Snowpack
* eslint
* jest
* Storybook, Storyshot

### 初期セットアップ

```
npm ci
```

### 定義済 npm スクリプトの説明

* npm スクリプトは `package.json` の `scripts` に定義する
    * `npm run` を実行すると設定されているスクリプトが一覧表示される

| コマンド | 用途 |
|:-----:| ----- |
| start | ローカルホストで Web サーバを起動する<br>http://localhost:8080 にアクセスすると HMR が有効な状態で開発ができる |
| build | ホスティング用にアプリをビルドする<br>ビルド成果物の出力先は `build/` |
| lint | eslint の設定に基づきルールをチェック<>コードを自動整形する |
| test | jest を用いた単体テストの実行 |
| test:watch | TDD 用<br>変更を保存して差分が生じたら即時にテストを実行する |
| storybook | UIコンポーネントカタログページの表示 |
| build-storybook | Storybook の静的ページファイルを生成 |
