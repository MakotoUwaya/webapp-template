# CLAUDE.md

## プロジェクト概要

npm workspaces + Turborepo によるモノレポ。2つのフロントエンドパッケージを含む。

- `packages/react-vite` — React 19 + Vite + MUI + Firebase + Storybook + Jest
- `packages/vue3-vite` — Vue 3 + Vite + Vuetify + Pinia + Vitest

Node.js 24.x / npm 11.x (Volta で管理)

## 開発コマンド

### ルート (一括操作)

```sh
npm ci                    # セットアップ (CI では --legacy-peer-deps を付与)
npm run check             # lint + build + test (pre-push フックと同じ)
npm run lint              # 全パッケージの lint
npm run build             # 全パッケージのビルド
npm run test              # 全パッケージのテスト
```

### react-vite

```sh
npm run dev -w react-vite           # 開発サーバー
npm run test -w react-vite          # Jest テスト
npm run test -w react-vite -- --testPathPattern="Button"  # 単一テスト実行
npm run storybook -w react-vite     # Storybook (port 6006)
```

### vue3-vite

```sh
npm run dev -w vue3-vite            # 開発サーバー
npm run test -w vue3-vite           # Vitest テスト
npm run test -w vue3-vite -- Button # 単一テスト実行 (ファイル名フィルタ)
```

## アーキテクチャ

```
webapp-template/
├── packages/
│   ├── react-vite/    # React 19 + MUI 7 + Firebase + react-router-dom
│   └── vue3-vite/     # Vue 3 + Vuetify 3 + Pinia + vue-router
├── turbo.json         # Turbo タスク定義 (build, test は ^build に依存)
└── package.json       # ワークスペースルート
```

- パスエイリアス: `@/` → `src/` (両パッケージ共通、tsconfig で設定)
- react-vite: `tsc --noEmit && vite build` でビルド
- vue3-vite: `vite build` でビルド、`vue-tsc` で型チェック

## コーディング規約

Biome でフォーマット・リントを統一 (ESLint/Prettier は不使用)。

- 2スペースインデント
- シングルクォート / JSX もシングルクォート
- セミコロンあり
- アロー関数の括弧は常に付与 `(x) => x`
- import の自動整理 (`organizeImports: "on"`)
- lint 推奨ルール有効 + カスタムスタイルルール (詳細は各 `biome.json`)

## CI / 品質ゲート

- **pre-push フック** (`.githook/pre-push`): `npm run check` を実行
- **GitHub Actions** (`check.yml`): PR 作成時に `npm run check` を実行
- `npm run check` = `turbo run lint build test` (lint → build → test の順)
