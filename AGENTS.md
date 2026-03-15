# AGENTS.md

## プロジェクト概要

npm workspaces + Turborepo によるモノレポ。2つのフロントエンドパッケージを含む。

- `packages/react-vite` — React 19 + Vite + MUI 7 + Firebase + Storybook + Jest
- `packages/vue3-vite` — Vue 3 + Vite + Vuetify 3 + Pinia + Vitest

Node.js 24.x / npm 11.x（Volta で管理）

## 開発コマンド

### ルート（全パッケージ一括）

```sh
npm ci                        # 依存インストール（CI では --legacy-peer-deps を付与）
npm run check                 # lint + build + test（pre-push フックと同じ）
npm run lint                  # 全パッケージの lint
npm run build                 # 全パッケージのビルド
npm run test                  # 全パッケージのテスト
```

### react-vite

```sh
npm run dev -w react-vite                                        # 開発サーバー
npm run test -w react-vite                                       # Jest テスト（全件）
npm run test -w react-vite -- --testPathPattern="Button"         # 単一テスト実行
npm run storybook -w react-vite                                  # Storybook（port 6006）
npm run dev:emulator -w react-vite                               # Firebase Emulator で開発
npm run emulators:start -w react-vite                            # Firebase Emulator 起動
npm run test:updateSnapshot -w react-vite                        # Jest スナップショット更新
```

### vue3-vite

```sh
npm run dev -w vue3-vite                  # 開発サーバー
npm run test -w vue3-vite                 # Vitest テスト（全件）
npm run test -w vue3-vite -- Button       # 単一テスト実行（ファイル名フィルタ）
npm run typecheck -w vue3-vite            # vue-tsc による型チェック（ビルドとは別）
```

## アーキテクチャ

### Turbo パイプライン

`turbo.json` でタスク依存を定義。`lint` は単独実行、`build` と `test` は `^build`（上流パッケージのビルド完了）に依存する。`npm run check` は `turbo run lint build test` を実行し、lint → build → test の順に処理される。

### react-vite のソース構成

```
src/
├── about/          # 機能モジュール（ページ + テストを同一ディレクトリに配置）
├── header/         # 機能モジュール
├── information/    # 機能モジュール
├── firebase/       # Firebase 初期化・設定
├── hooks/          # カスタム React フック
├── providers/      # React コンテキストプロバイダー
├── stories/        # Storybook ストーリー
├── App.tsx
├── Routes.tsx
└── main.tsx
```

ビルド: `tsc --noEmit && vite build`（TypeScript チェックと Vite ビルドは別ステップ）

Firebase 設定は `VITE_*` 環境変数で管理。`.env` が本番用、`.env.emulator` がローカル Emulator 用（Firestore: port 9000、Auth: port 9099）。

### vue3-vite のソース構成

```
src/
├── components/     # 再利用コンポーネント（テストは __tests__/ サブディレクトリ）
├── views/          # ルートレベルのページコンポーネント
├── stores/         # Pinia ストア
├── router/         # vue-router 設定
├── plugins/        # Vuetify プラグイン設定
└── styles/         # グローバルスタイル（SCSS）
```

ビルド: `vite build` のみ（型チェックは `npm run typecheck` で別途実行）

tsconfig が複数に分割されている:
- `tsconfig.app.json` — アプリ本体
- `tsconfig.vitest.json` — テスト用
- `tsconfig.vite-config.json` — vite.config.mts 用

## コーディング規約

### Biome（ESLint / Prettier は不使用）

両パッケージとも Biome でフォーマット・リントを統一。設定は各パッケージの `biome.json` に記載。

- 2スペースインデント、シングルクォート、セミコロンあり
- JSX もシングルクォート（`jsxQuoteStyle: "single"`）
- アロー関数の括弧は常に付与: `(x) => x`
- import の自動整理（`organizeImports: "on"`）
- 有効なスタイルルール: `noUselessElse`、`noUnusedTemplateLiteral`、`useSelfClosingElements`、`useNumberNamespace`、`noInferrableTypes`、`noParameterAssign`

自動修正: `npm run lint:fix -w react-vite` または `npm run lint:fix -w vue3-vite`

### パスエイリアス

`@/` が `src/` にマップされる（両パッケージ共通、各 `tsconfig.json` の `paths` で設定）。

### テストの書き方

**react-vite（Jest + @testing-library/react）:**

- テストファイル: `*.test.tsx`（ソースと同一ディレクトリ、または `__tests__/` 以下）
- 各テストファイルの先頭で `@testing-library/jest-dom` をインポート
- セットアップファイル: `src/setupTests.ts`

**vue3-vite（Vitest + @vue/test-utils）:**

- テストファイル: `*.spec.ts`（`src/**/__tests__/` 以下）
- `describe`、`it`、`expect` は `vitest` から明示的にインポート

## CI / 品質ゲート

- **pre-push フック**（`.githook/pre-push`）: `npm run check` を実行
- **GitHub Actions**（`check.yml`）: PR 作成時に `npm run check` を実行
- lint・build・test がすべて通らないとプッシュ・マージ不可
