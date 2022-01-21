# react-tutorial

## 概要

- React の学習用プロジェクト

### 初期セットアップ

- Using [Volta](https://docs.volta.sh/guide/getting-started)

```sh
node -v
npm -v
```

```sh
npm run bootstrap
```

### 定義済 npm スクリプトの説明

- npm スクリプトは `package.json` の `scripts` に定義する
  - `npm run` を実行すると設定されているスクリプトが一覧表示される

| コマンド         | 用途                                                                                                           |
| :--------------- | -------------------------------------------------------------------------------------------------------------- |
| bootstrap        | 全パッケージに必要なコンポーネントをインストール                                                               |
| prepare          | git hook の設定<br>https://docs.npmjs.com/cli/v7/using-npm/scripts#life-cycle-scripts                          |
| lint             | 全パッケージのコード自動整形                                                                                   |
| test             | 全パッケージのテスト実行                                                                                       |
| apps:test        | jest を用いた単体テストの実行                                                                                  |
| build            | 全パッケージの成果物をビルドする                                                                               |
| apps:build       | ホスティング用にアプリをビルドする<br>ビルド成果物の出力先は `build/`                                          |
| apps:start       | ローカルホストで Web サーバを起動する<br>http://localhost:8080 にアクセスすると HMR が有効な状態で開発ができる |
| apps:storybook   | UI コンポーネントカタログページの表示                                                                          |
