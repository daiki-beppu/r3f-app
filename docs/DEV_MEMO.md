# 開発メモ

## プロジェクトのセットアップ

```bash
bunx create-expo-app@latest
```

## プロジェクトのリセット

```bash
bun run reset-project
```

## インストール方法の違い

- `npx expo install [package-name]`
- `bun add [package-name]`

基本的には `npx expo install [package-name]` が推奨
内部的に以下のことを行っている

- 互換性のチェック
- ネイティブ依存の自動処理（ネイティブコードを含むパッケージの場合、適切なバージョンを自動で判断）
- 自動セットアップ（必要に応じて追加の依存関係もインストール）
- パッケージマネージャーの自動検出

## React Native New Architecture (JSI)

### JSI とは

`JavaScript` とネイティブ間の非同期ブリッジが廃止され、代わりに `JSI (JavaScript Interface)` が導入された。

**JSI の特徴:**

- JS が C++ オブジェクト参照を保持できる
- C++ が JS オブジェクト参照を保持できる
- メモリ参照を利用することで**シリアライゼーションのコストなしに**メソッド呼び出しが可能

### シリアライゼーション削減のメリット

旧アーキテクチャでは、JavaScript と Native 間でデータをやり取りする際に：

1. **JavaScript 側**: オブジェクトを JSON 文字列に変換（シリアライゼーション）
2. **Bridge**: 非同期キューで文字列を送信
3. **Native 側**: JSON 文字列をパースしてオブジェクトに復元（デシリアライゼーション）

この変換プロセスは CPU を消費し、特に大きなデータや頻繁な呼び出しでは顕著なオーバーヘッドになる。

**具体的な改善:**

- **パフォーマンス**: アニメーションやジェスチャーのような高頻度な処理が滑らかに（20-400倍高速化）
- **同期的な実行**: Bridge の非同期制約から解放され、即座にネイティブ機能を呼べる
- **メモリ効率**: 大きなデータ（画像、3D メッシュなど）を変換せず直接共有

### アーキテクチャ比較図

#### 旧アーキテクチャ（Bridge）- シーケンス図

```mermaid
sequenceDiagram
    participant JS as JavaScript
    participant Bridge as Bridge<br/>(非同期キュー)
    participant Native as Native (Obj-C/Java)

    Note over JS,Native: 例：スクロール位置の更新（60fps）

    JS->>JS: オブジェクト作成<br/>{scrollY: 150, velocity: 2.3}
    JS->>JS: JSON文字列化<br/>"{"scrollY":150,...}"<br/>⏱️ ~0.5ms
    JS->>Bridge: メッセージ送信<br/>(非同期)
    Note over Bridge: キューに追加<br/>⏱️ ~1-3ms
    Bridge->>Native: メッセージ配信
    Native->>Native: JSON パース<br/>⏱️ ~0.5ms
    Native->>Native: オブジェクト復元
    Native->>Native: ビュー更新

    Note over JS,Native: 合計 ~2-4ms/フレーム<br/>16.6ms(60fps)の12-24%を消費
```

#### 新アーキテクチャ（JSI）- シーケンス図

```mermaid
sequenceDiagram
    participant JS as JavaScript
    participant JSI as JSI<br/>(直接参照)
    participant Native as Native (C++)

    Note over JS,Native: 例：スクロール位置の更新（60fps）

    JS->>JSI: オブジェクト参照取得<br/>nativeScrollView
    JS->>JSI: プロパティ設定<br/>.scrollY = 150<br/>⏱️ ~0.01ms
    JSI->>Native: メモリ直接アクセス<br/>(同期的)
    Native->>Native: ビュー更新

    Note over JS,Native: 合計 ~0.01-0.1ms/フレーム<br/>20-400倍高速化
```

#### アーキテクチャ構造比較

```mermaid
graph TB
    subgraph old["旧アーキテクチャ"]
        direction TB
        JSThread["JavaScript Thread"]
        BridgeQ["Bridge Queue<br/>(非同期)"]
        NativeThread["Native Thread"]

        JSThread -->|"JSON文字列"| BridgeQ
        BridgeQ -->|"バッチ処理"| NativeThread
        NativeThread -.->|"コールバック(JSON)"| BridgeQ
        BridgeQ -.->|"非同期"| JSThread

        style BridgeQ fill:#f96,stroke:#333,stroke-width:2px
    end

    subgraph new["新アーキテクチャ (JSI)"]
        direction TB
        JSThread2["JavaScript Thread"]
        JSI["JSI Layer<br/>(メモリ共有)"]
        NativeThread2["Native Thread (C++)"]
        UIThread["UI Thread<br/>(Worklets)"]

        JSThread2 <-->|"直接参照<br/>(同期)"| JSI
        JSI <-->|"ポインタ"| NativeThread2
        JSThread2 <-->|"Worklets"| UIThread

        style JSI fill:#9f6,stroke:#333,stroke-width:2px
    end
```

#### データフロー比較（アニメーションの例）

```mermaid
flowchart LR
    subgraph bridge["旧Bridge（1フレーム = 16.6ms）"]
        direction TB
        B1["JS: 座標計算<br/>2ms"] --> B2["シリアライズ<br/>0.5ms"]
        B2 --> B3["Bridge待機<br/>1-3ms"]
        B3 --> B4["デシリアライズ<br/>0.5ms"]
        B4 --> B5["Native描画<br/>8ms"]
        B6["残り<br/>4.6ms"]

        style B3 fill:#f96
    end

    subgraph jsi["新JSI（1フレーム = 16.6ms）"]
        direction TB
        J1["JS: 座標計算<br/>2ms"] --> J2["JSI直接呼出<br/>0.01ms"]
        J2 --> J3["Native描画<br/>8ms"]
        J4["残り<br/>6.59ms<br/>バッファ増"]

        style J2 fill:#9f6
    end
```

### 重要ポイント

1. **レイテンシの削減**: Bridge の非同期キューによる待機時間（1-3ms）が完全に消滅。60fps では 1 フレームが 16.6ms なので、この削減は体感できるレベル。

2. **同期的な実行**: 旧 Bridge では結果を即座に取得できなかったが、JSI では `const result = nativeModule.calculate()` のような同期呼び出しが可能に。これにより複雑な制御フローが書きやすくなった。

3. **Worklets の実現**: JSI があるからこそ、JavaScript を UI Thread で直接実行する Worklets が可能に。これが `react-native-reanimated` や `react-native-skia` の高パフォーマンスの秘密。
