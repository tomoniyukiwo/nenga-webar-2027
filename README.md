# 2027 年賀状 WebAR

年賀状に印刷したARマーカーをスマートフォンのカメラで認識し、  
`HAPPY NEW YEAR 2027` のAR演出を表示する静的Webサイトです。

GitHub Pagesへそのまま公開できる構成になっています。

## 機能

- スマートフォンのカメラを使ったマーカー型WebAR
- Hiroマーカーの認識
- `HAPPY NEW YEAR 2027` の文字と3Dアニメーション
- カメラを使用できない場合の代替メッセージ
- スマートフォン・PC両対応
- サーバー処理やデータベース不要

カメラ映像は端末内で処理され、保存・送信されません。

## ファイル構成

```text
nenga-webar-2027/
├── index.html
├── style.css
├── app.js
├── .nojekyll
└── README.md
```

GitHub Pagesでは、`index.html` が公開ページの入口になります。

## 1. GitHubリポジトリを作成する

GitHub右上の **New repository** から新しいリポジトリを作成します。

推奨設定：

- Repository name: `nenga-webar-2027`
- Visibility: `Public`
- READMEの自動追加: どちらでも可

GitHub Freeで確実にGitHub Pagesを使用する場合は、Publicリポジトリを使用してください。

## 2. ファイルをアップロードする

### 方法A：ブラウザからアップロード

1. 作成したリポジトリを開く
2. **Add file** を選択
3. **Upload files** を選択
4. このフォルダ内のファイルをすべてアップロード
5. **Commit changes** を押す

`index.html` がリポジトリ直下にあることを確認してください。

### 方法B：Gitコマンドを使用

```bash
cd nenga-webar-2027-github-pages
git init
git add .
git commit -m "Add 2027 New Year WebAR"
git branch -M main
git remote add origin https://github.com/GITHUBユーザー名/nenga-webar-2027.git
git push -u origin main
```

`GITHUBユーザー名` は自分のGitHubユーザー名に置き換えてください。

すでにGitリポジトリとして初期化されている場合、`git init` は不要です。

## 3. GitHub Pagesを有効にする

リポジトリ画面で次の順に開きます。

```text
Settings
  → Pages
  → Build and deployment
  → Source: Deploy from a branch
  → Branch: main
  → Folder: / (root)
  → Save
```

公開には数分かかる場合があります。

公開後は、`Settings → Pages → Visit site` からサイトを開けます。

## 4. 公開URL

リポジトリ名が `nenga-webar-2027` の場合、URLは通常次の形式になります。

```text
https://GITHUBユーザー名.github.io/nenga-webar-2027/
```

例：

```text
https://example-user.github.io/nenga-webar-2027/
```

リポジトリ名を変更するとURLも変わるため、年賀状用QRコードを生成する前にURLを確定してください。

## 5. スマートフォンで動作確認する

1. GitHub Pagesの公開URLをスマートフォンで開く
2. **カメラを起動** を押す
3. カメラの使用を許可する
4. 年賀状に印刷したHiroマーカーを映す
5. `HAPPY NEW YEAR 2027` が表示されることを確認する
6. **カメラなしで見る** も確認する

GitHub PagesはHTTPSで公開されるため、対応ブラウザでカメラを使用できます。

推奨ブラウザ：

- Android: Google Chrome
- iPhone: Safari

## 6. 年賀状に配置するARマーカー

現在のWebARは、AR.jsの標準Hiroマーカーを認識します。

Hiroマーカーは次の条件で配置してください。

- 正方形のまま使用する
- 縦横比を変更しない
- 黒い外枠を切らない
- 周囲に白い余白を設ける
- 目安として一辺35〜50 mm以上で印刷する
- QRコードとは別の位置に配置する

マーカーが小さすぎる場合や、光が強く反射する用紙では認識しにくくなることがあります。

## 7. QRコードを生成する

GitHub Pagesの動作確認が完了した後、確定した公開URLからQRコードを生成します。

```text
WebARを公開
  ↓
スマートフォンで動作確認
  ↓
公開URLを確定
  ↓
QRコードを生成
  ↓
欠損QRと4問を設計
```

URL変更後はQRコードの模様も変わるため、公開URLが確定する前に年賀状へ印刷しないでください。

欠損問題へ使用する場合は、誤り訂正レベルHを推奨します。

## 8. WebARを更新する

ファイルを編集した後、次を実行します。

```bash
git add .
git commit -m "Update WebAR"
git push
```

GitHub Pagesへ自動的に再公開されます。

反映されない場合は、GitHubの **Actions** タブでPagesの処理状況を確認してください。

## トラブルシューティング

### 404 Not Foundになる

- `index.html` がリポジトリ直下にあるか確認
- PagesのBranchが `main` になっているか確認
- Folderが `/ (root)` になっているか確認
- GitHub Pagesの公開処理が完了するまで数分待つ

### カメラが起動しない

- GitHub PagesのHTTPS URLから開いているか確認
- ブラウザのカメラ権限を許可する
- LINEなどのアプリ内ブラウザではなく、SafariまたはChromeで開く
- URLをコピーして通常のブラウザで開き直す

### マーカーを認識しない

- Hiroマーカー全体をカメラ内に入れる
- 黒い外枠が切れていないか確認
- マーカーとの距離を変える
- 用紙の反射や影を避ける
- ブラウザを再読み込みする

### 画面が真っ黒になる

- カメラ権限を確認
- 別のブラウザで試す
- 他のカメラ使用アプリを閉じる
- **カメラなしで見る** が表示できるか確認する

## 使用技術

- HTML
- CSS
- JavaScript
- A-Frame
- AR.js
- GitHub Pages

## 注意事項

- GitHub Pagesは公開サイトです。秘密情報やAPIキーをファイルに記載しないでください。
- A-FrameとAR.jsはCDNから読み込むため、WebAR利用時にはインターネット接続が必要です。
- 年賀状を大量印刷する前に、実際の印刷サイズと用紙で認識テストを行ってください。
