# webapp-template

## 概要

- Web アプリの学習用プロジェクト

### 初期セットアップ

- Using [Volta](https://docs.volta.sh/guide/getting-started)

```sh
node -v
npm -v
```

```sh
npm ci
```

### 定義済 npm スクリプトの説明

- npm スクリプトは `package.json` の `scripts` に定義する
  - `npm run` を実行すると設定されているスクリプトが一覧表示される

| コマンド | 用途                                                                                  |
| :------- | ------------------------------------------------------------------------------------- |
| prepare  | git hook の設定<br>https://docs.npmjs.com/cli/v7/using-npm/scripts#life-cycle-scripts |
| lint     | 全パッケージのコード自動整形                                                          |
| test     | 全パッケージのテスト実行                                                              |
| build    | 全パッケージの成果物をビルドする                                                      |
