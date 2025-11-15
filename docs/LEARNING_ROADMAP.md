# R3F × Skia × React Native Reusables 学習ロードマップ

## 🎯 ゴール

- React Native（Expo）で
  - 美しく型安全な UI（React Native Reusables）
  - 本格 3D 描画（R3F × Skia）
- を組み合わせたアプリを作れるようになる

---

## 1. 基盤：React Native + Expo + TypeScript

**目的:** 基礎を固めて、3D UI 開発の土台を作る

### 学ぶこと

- Expo の基本構造
- React Native の View / Style
- TypeScript 型の使い方
- JSI がなぜ重要か（軽く）

### 目標

- Expo で RN アプリを起動できる
- TypeScript でコンポーネント作成ができる

---

## 2. React Native Reusables 導入

**目的:** 型安全で美しい UI コンポーネントライブラリを構築し、3D と干渉しない設計を作る

### 学ぶこと

- React Native Reusables のセットアップ
- NativeWind v4 による Tailwind スタイリング
- Headless UI パターンの理解
- アクセシビリティ対応（ARIA 属性）
- SafeArea / Responsive 対応

### 作るもの

- Button / Card / Switch コンポーネント
- ダークモード対応テーマ（class-based）
- Reanimated を使った簡単トランジション

### 目標

- 3D と相性の良い型安全な UI が作れる
- NativeWind v4 でのスタイリングを理解

---

## 3. Skia（@shopify/react-native-skia）基礎

**目的:** R3F の下層エンジンを理解し、高速描画の感覚を掴む

### 学ぶこと

- Canvas の概念
- 2D 描画基本（Rect / Circle / Text）
- Paint / Shader（軽く）
- useValue / useComputedValue（アニメーション基礎）

### 作るもの

- スクロールで動く流体 UI
- グラデーション付きアニメーション背景
- Skia ローディングアニメ

### 目標

- Skia でアニメーションが作れる
- Canvas の世界を理解

---

## 4. React Three Fiber（R3F）入門

**目的:** React 的に 3D を組み立てる思考を身につける

### 学ぶこと

- Scene / Camera / Light
- useFrame（毎フレーム処理）
- Mesh / Material 基本
- OrbitControls カメラ操作
- Geometry 練習

### 作るもの

- 回転する 3D オブジェクト
- マテリアル変更 UI
- クリック・ホバーで動くアニメーション

### 目標

- R3F ライフサイクル理解
- UI ↔ 3D 連携の理解

---

## 5. R3F × Skia Renderer 統合

**目的:** ネイティブ高速 3D 環境を完成

### 学ぶこと

- @react-three/skia セットアップ
- SkiaCanvas と R3F の配置
- 描画と RN UI の共存
- performance / invalidate / frameloop

### 作るもの

- Skia 上で回転する 3D ボックス
- UI から 3D 制御
- センサーや Drag 操作で動かす

### 目標

- R3F が WebGL なしで動く
- UI と 3D の干渉を最小化

---

## 6. Reanimated × R3F（3D と UI の同期）

**目的:** 3D と UI の一体化

### 学ぶこと

- R3F に Reanimated 値を渡す
- UI / 3D のアニメーション同期
- useSharedValue ↔ useFrame 同期
- UIテーマに応じた 3D 色変化

### 作るもの

- スクロールに応じた 3D 動作
- UI トグルで 3D マテリアル色変更
- ページ遷移でカメラアニメーション

### 目標

- UI と 3D が一体化
- 高度なインタラクションが作れる

---

## 7. React Native Reusables × R3F × Skia 統合アーキテクチャ完成

**目的:** 実アプリとして成立する構成

### 設計ポイント

- UIレイヤー（React Native Reusables）
- 3Dレイヤー（R3F）
- 描画レイヤー（Skia）
- 状態管理（Zustand）
- テーマ統一（NativeWind class-based theming）
- モジュール構成（features / shared / ui / 3d）

### ディレクトリ例
