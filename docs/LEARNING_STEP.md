# 学習ステップ詳細

このドキュメントでは、[LEARNING_ROADMAP.md](./LEARNING_ROADMAP.md) で定義された7つのステップについて、具体的な実施内容と達成条件を記載します。

---

## ステップ1: 基盤：React Native + Expo + TypeScript

### 📋 概要

React Native と Expo の基本を理解し、TypeScript を使った開発の土台を構築します。新アーキテクチャ（JSI、Fabric、TurboModules）の概念を把握し、後続の3D/UI開発に備えます。

### 前提条件

- Node.js 環境（bun がインストール済み）
- iOS Simulator または Android Emulator がセットアップ済み
- VS Code などのエディタ

### 実施タスク

#### 1.1 環境セットアップ確認

- [x] `bun start` でMetro Bundlerが起動することを確認
- [x] iOS/Android/Webで起動できることを確認
- [x] TypeScript の型チェックが動作することを確認（`tsc --noEmit`）

#### 1.2 Expo Router の理解

- [x] `app/_layout.tsx` のStack navigatorの仕組みを理解
- [x] `app/index.tsx` を読んでルートスクリーンの構造を把握
- [x] 新しいスクリーンを追加してナビゲーションをテスト（例：`app/about.tsx`）
- [x] `router.push()` や `Link` コンポーネントの使い方を確認

#### 1.3 React Native コンポーネントの基礎

- [x] View、Text、Pressable を使った簡単なコンポーネント作成
- [x] StyleSheet と inline style の違いを理解
- [x] Flexbox レイアウトの練習（column、row、justifyContent、alignItems）
- [x] SafeAreaView の使い方を確認

#### 1.4 TypeScript 型の活用

- [x] コンポーネントの Props に型を定義
- [x] 型推論と明示的型定義の違いを理解
- [x] `@/` パスエイリアスを使ったインポート
- [x] 型エラーをゼロにする

#### 1.5 新アーキテクチャの概念把握

- [x] JSI（JavaScript Interface）が従来のブリッジと何が違うか理解
- [x] Fabric レンダラーの役割を調査
- [x] TurboModules の概念を理解（実装は不要、概念のみ）
- [x] `app.json` の `newArchEnabled: true` の意味を確認

### 達成条件

以下のすべてを満たせば、ステップ1は完了です：

✅ **理解度**

- Expo Router のファイルベースルーティングの仕組みを説明できる
- React Native の View 階層とスタイリングの基本を理解している
- TypeScript の型を使ってコンポーネントを型安全に書ける
- JSI が従来のブリッジより高速な理由を概念的に説明できる

✅ **実装力**

- TypeScript で新しいスクリーンを作成し、ルーティングできる
- Flexbox を使って基本的なレイアウトを組める
- 型エラーなしでコンパイルできる

✅ **成果物**

- 最低2画面のナビゲーション（Home + 追加画面）
- TypeScript 型定義された再利用可能なコンポーネント1つ以上
- 正常動作するビルド（型エラー・ESLintエラーなし）

### 確認方法

- 他の人にExpo Routerの仕組みを5分で説明できるか試す
- TypeScript の型エラーが出たときに、自力で解決できるか
- `bun run lint` がエラーなしで通ること

---

## ステップ2: React Native Reusables 導入

### 📋 概要

React Native Reusables を使って、型安全で美しい UI コンポーネントライブラリを構築します。NativeWind v4 によるスタイリング、Headless UI パターン、アクセシビリティ対応を学び、3D レイヤーと干渉しない設計を意識します。

### 前提条件

- ステップ1が完了していること
- Tailwind CSS の基本概念（utility-first）を理解していること
- React のコンポーネント合成パターンを理解していること

### 実施タスク

#### 2.1 React Native Reusables セットアップ

- [x] 必要なパッケージのインストール
  - `nativewind`
  - `react-native-reanimated`
  - `@rn-primitives/*` 関連パッケージ
- [x] NativeWind v4 の設定（`tailwind.config.js`）
- [x] `global.css` の設定
- [x] VS Code の Tailwind CSS IntelliSense を設定

#### 2.2 NativeWind v4 とテーマシステム

- [x] NativeWind v4 の class-based スタイリングの理解
- [x] ライト/ダークモードの class 切り替え（`dark:` prefix）
- [x] システムテーマとの同期実装（`useColorScheme` 使用）
- [x] カスタムカラーパレットの作成（`tailwind.config.js`）
- [x] テーマプロバイダーの実装

#### 2.3 基本コンポーネント作成

- [x] `components/ui/button.tsx` - 型安全なバリアント対応
- [x] `components/ui/card.tsx` - ダーク対応のカード
- [x] `components/ui/switch.tsx` - アニメーション付きスイッチ
- [x] `components/ui/text.tsx` - 型安全なテキストコンポーネント
- [x] コンポーネントの TypeScript 型定義

#### 2.4 Headless UI パターンの理解

- [x] `@rn-primitives` を使った Headless コンポーネント
- [x] コンポーネント合成パターン（Compound Components）
- [x] Context API によるステート共有
- [x] カスタムフックの作成

#### 2.5 アクセシビリティとアニメーション

- [x] `accessibilityRole`、`accessibilityLabel` の設定
- [x] `accessibilityState` によるステート通知
- [x] `react-native-reanimated` の基本理解
- [x] `useSharedValue`、`useAnimatedStyle` の使い方
- [x] `withTiming`、`withSpring` アニメーション
- [x] ボタンタップやスイッチ切り替えにアニメーション適用

#### 2.6 レスポンシブ対応

- [x] Tailwind のブレークポイント（sm、md、lg、xl）の設定
- [x] 画面サイズに応じたレイアウト調整
- [x] `useMediaQuery` フックの実装（オプション）
- [x] タブレット・スマホでの表示確認

### 達成条件

✅ **理解度**

- React Native Reusables の Headless UI パターンを説明できる
- NativeWind v4 の class-based スタイリングを理解している
- Reanimated の Shared Value の概念を理解している
- ダークモード切り替えの実装方法を説明できる
- アクセシビリティの重要性とその実装方法を理解している

✅ **実装力**

- React Native Reusables を使って新しいコンポーネントを型安全に作成できる
- NativeWind で複雑なレイアウトを構築できる
- Reanimated で基本的なアニメーションを実装できる
- アクセシビリティ対応のコンポーネントを作成できる

✅ **成果物**

- 再利用可能な UI コンポーネントライブラリ（Button、Card、Switch、Text）
- ライト/ダークモード対応のテーマシステム
- アニメーション付きのインタラクティブ UI
- アクセシビリティ対応コンポーネント
- コンポーネントカタログ画面（各コンポーネントを表示）

### 確認方法

- テーマカラーを `tailwind.config.js` で変更して、全コンポーネントに反映されるか
- ダークモードとライトモードを切り替えて、違和感なく動作するか
- アニメーションが 60fps でスムーズに動作するか（React Native Performance Monitor で確認）
- VoiceOver（iOS）/ TalkBack（Android）で適切に読み上げられるか

---

## ステップ3: Skia（@shopify/react-native-skia）基礎

### 📋 概要

React Native Skia を使って、高性能な 2D グラフィックスの基礎を学びます。Canvas の概念、描画プリミティブ、アニメーションを理解し、ステップ5での R3F 統合に備えます。

### 前提条件

- ステップ1、2が完了していること
- Canvas（HTML5 Canvas など）の概念をなんとなく理解していること

### 実施タスク

#### 3.1 Skia セットアップ

- [x] `@shopify/react-native-skia` をインストール
- [x] 新アーキテクチャとの互換性を確認
- [x] 最初の Canvas を表示

#### 3.2 基本描画プリミティブ

- [x] `<Canvas>` コンポーネントの理解
- [x] `<Rect>`, `<Circle>`, `<Path>` の描画
- [x] `<Text>` でカスタムフォント描画
- [x] `<Group>` で要素のグループ化
- [x] transform（translate、rotate、scale）の使い方

#### 3.3 Paint と Shader

- [x] `<Paint>` で色・ストローク・ブレンドモード設定
- [x] `<LinearGradient>` でグラデーション作成
- [x] `<RadialGradient>` で放射状グラデーション
- [x] `<BlurMask>` でぼかし効果

#### 3.4 Skia アニメーション（Reanimated 統合）

- [x] `useSharedValue` で値を管理（Reanimated）
- [x] `useDerivedValue` で計算値を作成（Reanimated）
- [x] `withTiming` でアニメーション（Reanimated）
- [x] `withRepeat` で無限ループアニメーション（Reanimated）
- [x] Skia コンポーネントに Shared Value を渡してアニメーション
- [x] `Gesture` API でタッチインタラクション（react-native-gesture-handler）

#### 3.5 実践：流体 UI とローディングアニメーション

- [x] スクロールに追従する波形背景
- [x] 回転するグラデーション背景
- [x] スケルトンローディング UI
- [x] カスタムプログレスバー

### 達成条件

✅ **理解度**

- Canvas 描画とReact Nativeの View レイヤーの違いを説明できる
- Skia の宣言的 API の仕組みを理解している
- useValue と useComputedValue の使い分けができる
- Paint と Shader の役割を理解している

✅ **実装力**

- 基本図形を組み合わせて複雑な形状を作成できる
- グラデーションやぼかしを使ったビジュアル表現ができる
- Skia のアニメーションフックを使って動きを作れる
- タッチイベントに反応するインタラクティブな描画ができる

✅ **成果物**

- アニメーション付き背景コンポーネント
- カスタムローディングインジケーター
- インタラクティブな描画デモ（タッチで動く）
- Skia コンポーネントのカタログ画面

### 確認方法

- 60fps でスムーズにアニメーションするか（Performance Monitor で確認）
- React DevTools でレンダリング回数を確認し、無駄な再描画がないか
- 複雑な描画でもパフォーマンスが落ちないか

---

## ステップ4: React Three Fiber（R3F）入門

### 📋 概要

React Three Fiber を使って、React の宣言的な書き方で 3D シーンを構築する方法を学びます。このステップでは WebGL を使って基礎を学び、ステップ5で Skia レンダラーに切り替えます。

### 前提条件

- ステップ1〜3が完了していること
- 3D グラフィックスの基本概念（Scene、Camera、Light、Mesh）をざっくり理解していること

### 実施タスク

#### 4.1 R3F セットアップ（Web版で学習）

- [x] まず Web 版で `@react-three/fiber` を試す（学習用）
- [x] `<Canvas>` の基本構造を理解
- [x] Scene、Camera、Renderer の関係を理解

#### 4.2 3D シーンの基本構成要素

- [x] `<mesh>` でジオメトリとマテリアルを理解
- [x] `<boxGeometry>`, `<sphereGeometry>`, `<planeGeometry>` の使い方
- [x] `<meshStandardMaterial>` の基本プロパティ（color、metalness、roughness）
- [x] `<ambientLight>`, `<directionalLight>`, `<pointLight>` のライティング

#### 4.3 useFrame でアニメーション

- [x] `useFrame` の仕組み（毎フレーム実行）
- [x] `ref` で 3D オブジェクトにアクセス
- [x] rotation、position、scale を動的に変更
- [x] delta time を使った滑らかなアニメーション

#### 4.4 インタラクション

- [x] `onClick` で 3D オブジェクトをクリック
- [x] `onPointerOver` / `onPointerOut` でホバー効果
- [x] useState と組み合わせてインタラクティブな挙動を実装

#### 4.5 実践：3D デモアプリ

- [x] 回転する 3D オブジェクト（Box、Sphere、Torus）
- [x] UI からマテリアルの色を変更
- [x] クリックで形状を切り替え
- [x] カメラ位置をアニメーション

### 達成条件

✅ **理解度**

- R3F の宣言的な 3D 構築の仕組みを説明できる
- useFrame のライフサイクルを理解している
- Three.js と R3F の関係を理解している
- Mesh、Geometry、Material の役割を説明できる

✅ **実装力**

- 基本的な 3D オブジェクトを配置できる
- useFrame を使ってアニメーションを作成できる
- UI と 3D の間でステートを同期できる
- ライティングを調整して見た目を改善できる

✅ **成果物**

- インタラクティブな 3D デモアプリ（Web版）
- UI で操作できる 3D オブジェクト
- アニメーション付きカメラワーク
- 複数のマテリアル・ジオメトリのカタログ

### 確認方法

- UI と 3D の連携がスムーズに動作するか
- useFrame 内の処理が重くならないか（60fps 維持）
- React DevTools で無駄な再レンダリングがないか

---

## ステップ5: R3F × Skia Renderer 統合

### 📋 概要

R3F を Skia レンダラーで動作させ、React Native 上でネイティブな高性能 3D 描画を実現します。WebGL を使わず、Skia Canvas 上で 3D を描画する仕組みを構築します。

### 前提条件

- ステップ3（Skia）とステップ4（R3F）が完了していること
- React Native の新アーキテクチャ（JSI）の基本を理解していること

### 実施タスク

#### 5.1 R3F × Skia 環境構築

- [ ] 必要なパッケージの調査とインストール
  - 候補：`@react-three/fiber` (コア)
  - 候補：カスタムレンダラーまたはコミュニティパッケージ
- [ ] Skia Canvas を R3F のレンダーターゲットとして設定
- [ ] 最初の 3D オブジェクトを Skia 上に描画

#### 5.2 Skia Canvas と R3F の統合

- [ ] `<Canvas>` (Skia) と `<Canvas>` (R3F) の共存方法を理解
- [ ] Skia の描画コンテキストを R3F に渡す
- [ ] フレームバッファと描画パイプラインの理解

#### 5.3 パフォーマンス最適化

- [ ] `frameloop` の設定（demand、always、never）
- [ ] `invalidate()` を使った手動レンダリング制御
- [ ] 不要な再描画を防ぐメモ化戦略
- [ ] Performance Monitor で FPS 確認

#### 5.4 React Native UI との共存

- [ ] R3F Canvas を View 階層に配置
- [ ] zIndex と position を使ったレイヤー管理
- [ ] タッチイベントの競合解決
- [ ] SafeArea との兼ね合い

#### 5.5 実践：ネイティブ 3D デモ

- [ ] Skia 上で回転する 3D Box
- [ ] UI ボタンから 3D オブジェクトを制御
- [ ] ジェスチャー（Pan、Pinch）で 3D を操作
- [ ] センサー（加速度計）でオブジェクトを動かす（オプション）

### 達成条件

✅ **理解度**

- R3F が WebGL なしで動作する仕組みを説明できる
- Skia Canvas と R3F のレンダリングパイプラインを理解している
- frameloop と invalidate の使い分けができる
- React Native の View と Canvas のレイヤー構造を理解している

✅ **実装力**

- Skia Canvas 上で R3F の 3D シーンを構築できる
- パフォーマンスを意識した実装ができる
- UI イベントを 3D に連携できる
- ジェスチャーやセンサー入力を 3D に反映できる

✅ **成果物**

- Skia レンダラーで動作する 3D シーン
- UI から制御可能な 3D デモアプリ
- 60fps で動作する最適化された実装
- ジェスチャー対応の 3D インタラクション

### 確認方法

- iOS/Android の実機で 60fps を維持できるか
- UI と 3D の両方がスムーズに動作するか
- React Native Performance Monitor でフレームドロップがないか
- メモリ使用量が適切か（DevTools で確認）

---

## ステップ6: Reanimated × R3F（3D と UI の同期）

### 📋 概要

Reanimated の Shared Value を R3F の useFrame と同期させ、UI アニメーションと 3D アニメーションを一体化させます。スクロール、ジェスチャー、テーマ変更などの UI イベントが 3D にシームレスに反映される仕組みを構築します。

### 前提条件

- ステップ2（Reanimated基礎）とステップ5（R3F × Skia）が完了していること
- Shared Value の概念を理解していること

### 実施タスク

#### 6.1 Shared Value と useFrame の接続

- [ ] `useSharedValue` で UI 側の値を管理
- [ ] `useFrame` 内で Shared Value を読み取り
- [ ] `useDerivedValue` で計算値を作成
- [ ] UI Thread と JS Thread の違いを理解

#### 6.2 スクロール連動 3D

- [ ] ScrollView の scrollY を Shared Value に保存
- [ ] scrollY に応じて 3D カメラを移動
- [ ] スクロール量で 3D オブジェクトの位置・回転を変化
- [ ] パララックス効果の実装

#### 6.3 ジェスチャー連動 3D

- [ ] `react-native-gesture-handler` と Reanimated の統合
- [ ] Pan Gesture で 3D オブジェクトを回転
- [ ] Pinch Gesture でズーム制御
- [ ] ジェスチャーの慣性（momentum）を 3D に反映

#### 6.4 テーマ連動 3D

- [ ] ダークモード切り替えを Shared Value で管理
- [ ] テーマカラーを 3D マテリアルに反映
- [ ] withTiming でスムーズにカラー遷移
- [ ] UI と 3D が同時にテーマ変更

#### 6.5 ページ遷移とカメラアニメーション

- [ ] Expo Router の画面遷移を検知
- [ ] 遷移時にカメラ位置をアニメーション
- [ ] withSpring を使った自然なカメラ移動
- [ ] 3D シーンのフェードイン・アウト

### 達成条件

✅ **理解度**

- Shared Value が UI Thread と JS Thread で共有される仕組みを説明できる
- useFrame で Shared Value を読み取る方法を理解している
- Reanimated と R3F のアニメーションタイミングの同期方法を知っている
- UI イベントから 3D への一方向データフローを設計できる

✅ **実装力**

- スクロールに応じて 3D を動かせる
- ジェスチャーで 3D を直感的に操作できる
- テーマ変更が UI と 3D に同時反映される
- ページ遷移時のカメラアニメーションを実装できる

✅ **成果物**

- スクロール連動 3D デモ
- ジェスチャー操作可能な 3D ビュワー
- テーマ同期 3D アプリ
- ページ遷移アニメーション付きナビゲーション

### 確認方法

- スクロールと 3D の動きにズレがないか
- ジェスチャーの反応が遅延なく滑らかか
- テーマ切り替え時、UI と 3D が同時に変化するか
- 60fps を維持できているか（Performance Monitor）

---

## ステップ7: React Native Reusables × R3F × Skia 統合アーキテクチャ完成

### 📋 概要

これまでのすべての技術を統合し、実用的なアプリケーションアーキテクチャを構築します。モジュール設計、状態管理、テーマ統一、パフォーマンス最適化を含む、プロダクションレディな構成を目指します。

### 前提条件

- ステップ1〜6がすべて完了していること
- アプリ全体の設計を考える準備ができていること

### 実施タスク

#### 7.1 ディレクトリ構造の設計

```
src/
├── features/          # 機能ごとのモジュール
│   ├── home/
│   ├── viewer3d/
│   └── settings/
├── shared/            # 共有ユーティリティ
│   ├── hooks/
│   ├── utils/
│   └── types/
├── components/        # UI コンポーネント（React Native Reusables）
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── switch.tsx
│   │   └── ...
│   └── primitives/    # Headless primitives
├── 3d/                # 3D コンポーネント（R3F）
│   ├── Scene.tsx
│   ├── Camera.tsx
│   └── objects/
├── store/             # 状態管理（Zustand）
│   ├── useThemeStore.ts
│   └── use3DStore.ts
└── lib/               # ユーティリティとヘルパー
    ├── utils.ts
    └── cn.ts          # classname helper
```

- [ ] ディレクトリを作成
- [ ] 既存コードを適切に移動
- [ ] パスエイリアスを設定（`@/features`, `@/components`, `@/3d` など）

#### 7.2 状態管理の統合（Zustand）

- [ ] Zustand のインストールと設定
- [ ] テーマ状態の一元管理（`useThemeStore`）
- [ ] 3D シーン状態の管理（`use3DStore`）
- [ ] Persist middleware で状態永続化
- [ ] Shared Value との統合

#### 7.3 テーマシステムの統一

- [ ] NativeWind v4 の `tailwind.config.js` を統一ソースに
- [ ] UI コンポーネントと 3D マテリアルが同じカラートークンを参照
- [ ] システムテーマ検出と自動切り替え（`useColorScheme`）
- [ ] カスタムテーマの実装（複数テーマ対応）
- [ ] テーマプロバイダーでアプリ全体を wrap

#### 7.4 パフォーマンス最適化

- [ ] React.memo、useMemo、useCallback の適切な使用
- [ ] R3F の frameloop 最適化
- [ ] 不要な再レンダリングの削除
- [ ] バンドルサイズの最適化
- [ ] 画像・アセットの最適化

#### 7.5 実践：統合デモアプリ

- [ ] ホーム画面：3D 背景 + Uniwind UI
- [ ] 3D ビュワー：フルスクリーン 3D + オーバーレイ UI
- [ ] 設定画面：テーマ切り替え、3D 設定
- [ ] 画面遷移アニメーション
- [ ] ローディング・エラーハンドリング

#### 7.6 ドキュメントとテスト

- [ ] コンポーネントの使い方ドキュメント
- [ ] アーキテクチャ図の作成
- [ ] 重要な関数に JSDoc コメント
- [ ] 基本的な型テスト（TypeScript コンパイル）
- [ ] 手動テストチェックリスト

### 達成条件

✅ **理解度**

- UI・3D・State・Theme の4レイヤーの関係を説明できる
- 状態管理の設計判断（何を Zustand に、何を Shared Value に）ができる
- テーマトークンが UI と 3D を統一的に制御する仕組みを理解している
- パフォーマンスボトルネックの特定と改善方法を知っている

✅ **実装力**

- 新しい機能を適切なディレクトリに配置できる
- UI と 3D を組み合わせた新しい画面を作成できる
- テーマトークンを変更して全体に反映できる
- パフォーマンス問題を診断・修正できる

✅ **成果物**

- プロダクション品質のディレクトリ構造
- 完全に統合されたデモアプリ（3画面以上）
- 統一されたテーマシステム
- 60fps で動作する最適化された実装
- ドキュメント化されたアーキテクチャ

### 確認方法

- 新しい開発者がコードベースを理解できるか（ドキュメントの質）
- すべての画面で 60fps を維持できているか
- テーマ切り替えがすべてのコンポーネントに反映されるか
- ビルドサイズが適切か（不要な依存がないか）
- TypeScript エラー・ESLint エラーがゼロであること

---

## 📚 補足：学習リソース

各ステップで参考になるリソース：

- **React Native**: [公式ドキュメント](https://reactnative.dev/)
- **Expo**: [Expo Docs](https://docs.expo.dev/)
- **React Native Reusables**: [公式サイト](https://rnr-docs.vercel.app/)
- **NativeWind**: [NativeWind v4 Docs](https://www.nativewind.dev/)
- **Skia**: [@shopify/react-native-skia Docs](https://shopify.github.io/react-native-skia/)
- **R3F**: [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- **Reanimated**: [Reanimated Docs](https://docs.swmansion.com/react-native-reanimated/)
- **Zustand**: [Zustand Docs](https://zustand-demo.pmnd.rs/)

---

## 🎯 最終ゴール

すべてのステップを完了すると、以下ができるようになります：

1. **React Native Reusables** で型安全・美しい・アクセシブルな UI を構築
2. **NativeWind v4** でモダンなスタイリングを実現
3. **R3F** で本格的な 3D シーンを React 的に記述
4. **Skia** でネイティブ高速レンダリング
5. **Reanimated** で UI と 3D を同期
6. **統合アーキテクチャ** でスケーラブルなアプリ開発

これらを組み合わせて、ネイティブアプリの性能と Web の開発体験を兼ね備えた、次世代のモバイルアプリを作成できます。
