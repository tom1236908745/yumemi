## URL

- アプリケーションの URL -> [https://yumemi-prob.web.app](https://yumemi-prob.web.app/)

- 課題の説明 URL -> [https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d](https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d)

## 環境

- macOS Big Sur v11.5.2
- node v14.15.5
- npm v7.20.6
- Nuxt.js v2.15.8
- Firebase v9.6.11
- ※highcharts v10.0.0
- ※highcharts-vue v1.4.0

※highcharts ••• サードパーティ製のグラフライブラリとして使用しました。

## セットアップ

`git@github.com:tom1236908745/yumemi.git` <br />
`cd yumemi` <br />
`npm install` <br />

### RESAS-API

RESAS-API の API キー[https://opendata.resas-portal.go.jp/](https://opendata.resas-portal.go.jp/) から API キーを取得する。

`touch .env` <br />
(.env ファイル) <br />
`X-API-KEY="取得したAPI"` <br />
`npm run dev` <br />
[http://localhost:3000/](ttp://localhost:3000/)

## 工夫した所

- グラフに表示するデータ(都道府県の「人口構成」)を`mounted`時に予め取得する事で、各都道府県にチェックを入れた時に瞬時に描画させました。

- また、上記のデータ取得を完了するまでの際、ロード画面を表示させました。
