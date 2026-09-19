# 2027 New Year WebAR

年賀状に印刷されたARマーカーをスマートフォンのカメラで認識し、  
`HAPPY NEW YEAR 2027` のAR演出を表示するWebARコンテンツです。

## Demo

GitHub Pagesで公開後、次の形式のURLから利用できます。

```text
https://GITHUB_USERNAME.github.io/nenga-webar-2027/
```

## Features

- ブラウザだけで動作するマーカー型WebAR
- AR.js標準Hiroマーカーの認識
- `HAPPY NEW YEAR 2027` の3Dアニメーション
- カメラを使用できない環境向けの代替表示
- スマートフォン・PC対応
- サーバーやデータベース不要

カメラ映像は端末内で処理され、保存・送信されません。

## Files

```text
├── index.html
├── style.css
├── app.js
├── .nojekyll
├── README.md
└── README_TOME.md
```

## How to use

1. GitHub Pagesの公開URLをスマートフォンで開く
2. **カメラを起動** を押す
3. ブラウザのカメラ使用を許可する
4. Hiroマーカーをカメラに映す
5. AR演出が表示されることを確認する

カメラが使用できない場合は、**カメラなしで見る** からメッセージを表示できます。

## Notes

- WebARの利用時にはインターネット接続が必要です。
- カメラを利用するため、HTTPS環境で公開してください。
- アプリ内ブラウザではなく、SafariまたはChromeの利用を推奨します。
- 年賀状を印刷する前に、実際の印刷サイズでAR認識を確認してください。
