# react-tutorial

## 概要

- React の学習用プロジェクト

### 初期セットアップ

- Using [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Add setting
  - https://github.com/nvm-sh/nvm#deeper-shell-integration

```sh
nvm use
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
| webapp:test      | jest を用いた単体テストの実行                                                                                  |
| build            | 全パッケージの成果物をビルドする                                                                               |
| webapp:build     | ホスティング用にアプリをビルドする<br>ビルド成果物の出力先は `build/`                                          |
| webapp:start     | ローカルホストで Web サーバを起動する<br>http://localhost:8080 にアクセスすると HMR が有効な状態で開発ができる |
| webapp:storybook | UI コンポーネントカタログページの表示                                                                          |
