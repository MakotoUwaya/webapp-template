# AGENTS.md

## プロジェクト概要

pnpm workspaces + Turborepo によるモノレポ。2つのフロントエンドパッケージを含む。

- `packages/react-vite` — React 19 + Vite + MUI 7 + Firebase + Storybook + Jest
- `packages/vue3-vite` — Vue 3 + Vite + Vuetify 3 + Pinia + Vitest

Node.js 24.x / pnpm 10.x（[mise](https://mise.jdx.dev/) で管理）

初回セットアップ:

```sh
mise trust   # .mise.toml を信頼（リポジトリクローン直後に一度だけ）
mise install # node / pnpm をインストール
pnpm install # 依存解決
```

## 開発コマンド

### ルート（全パッケージ一括）

```sh
pnpm install                  # 依存インストール（CI では --frozen-lockfile を付与）
pnpm check                    # lint + build + test（pre-push フックと同じ）
pnpm lint                     # 全パッケージの lint
pnpm build                    # 全パッケージのビルド
pnpm test                     # 全パッケージのテスト
```

### react-vite （ルート script `react` がエイリアス）

```sh
pnpm react dev                                          # 開発サーバー
pnpm react test                                         # Jest テスト（全件）
pnpm react test --testPathPattern="Button"              # 単一テスト実行
pnpm react storybook                                    # Storybook（port 6006）
pnpm react dev:emulator                                 # Firebase Emulator で開発
pnpm react emulators:start                              # Firebase Emulator 起動
pnpm react test:updateSnapshot                          # Jest スナップショット更新
```

### vue3-vite （ルート script `vue` がエイリアス）

```sh
pnpm vue dev                              # 開発サーバー
pnpm vue test                             # Vitest テスト（全件）
pnpm vue test Button                      # 単一テスト実行（ファイル名フィルタ）
pnpm vue typecheck                        # vue-tsc による型チェック（ビルドとは別）
```

`pnpm react`/`pnpm vue` は `pnpm --filter <pkg>` のエイリアスなので、その後ろに任意の workspace script や引数を渡せる。

## アーキテクチャ

### Turbo パイプライン

`turbo.json` でタスク依存を定義。`lint` は単独実行、`build` と `test` は `^build`（上流パッケージのビルド完了）に依存する。`pnpm check` は `turbo run lint build test` を実行し、lint → build → test の順に処理される。

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

ビルド: `vite build` のみ（型チェックは `pnpm vue typecheck` で別途実行）

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

自動修正: `pnpm react lint:fix` または `pnpm vue lint:fix`

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

## 依存管理

- `package.json` の `pnpm.overrides` で transitive dep の version を強制している（脆弱性対策・deprecation 警告対策）。各 override の解消条件は GitHub Issue #3368-3371 で管理
- pnpm 10 のデフォルト挙動で運用（`.npmrc` 不要）。peer deps は `auto-install-peers=true` で自動補完される
- pnpm の strict isolation でファントム依存（宣言なしの依存）が検出される。新しい package を import する際は `pnpm add` で正規に追加すること

## CI / 品質ゲート

- **pre-push フック**（`.githook/pre-push`）: `pnpm check` を実行
- **GitHub Actions**（`check.yml`）: PR 作成時に `pnpm check` を実行
- lint・build・test がすべて通らないとプッシュ・マージ不可
