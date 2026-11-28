# 変更点の一覧：AI検索対策 上位5件 確認版 r20261128-aivis4（旧 r20261128-aivis・r20261128-aivis2・r20261128-aivis3 は残してある）

## 【aivis4 での更新】2026-11-28 22:58 JST（EN/KO 紹介記事6本の JSON-LD 日付）

- **本番には出していません。** Netlify へのデプロイ（下書きを含む）、force push、台帳の編集、フォームの送信、ファイルの削除もしていません。
- 確認版：https://eumwang.github.io/propcheck-ui-preview/r20261128-aivis4/
  - commit は push 後にこの節へ追記する
  - RELEASE_SHA256.tsv の sha256：28941f83e3837a3ffed2a9e6e92030b2aa4b879e9f31084d67b19c99126d30a9（161ファイル。aivis3 と同じ161パス。sha が変わったのは次の6ファイルだけ）
    - en/guides/fundedhive/index.html
    - en/guides/hypernova/index.html
    - en/guides/rzr-funded/index.html
    - ko/guides/fundedhive/index.html
    - ko/guides/hypernova/index.html
    - ko/guides/rzr-funded/index.html
  - 写し：RELEASE_SHA256_aivis4_20261128.tsv
  - EN_KO_new_old_aivis.tsv：行数は aivis3 と同じ93行。直したのは上の6行に datePublished="2026-10-10" と dateModified="2026-10-21" を足したことだけ（sha256 b65391da596c65ebcc7f12a0d135a89079bb4035f3aff28fb6b4d46739d49e73）
- 点検：guard.py --visual は PASS（FAIL 0／WARN 0）。報告書は GUARD_REPORT_aivis4_20261128.md（確認版にも GUARD_REPORT.md）。土台は本番 6b0ac36f、候補は aivis3 の公開用ツリーに今回の6ファイルを重ねたもの。aivis3 との公開用ツリーの違いは上記6ファイルだけ。
- 土台：本番 **6b0ac36f2d14408393816a9c**（2026-11-28 21:05:49 JST 公開、Tangem EN/KO サムネ。戻し先 6b0959ae）。Netlify API の published_deploy を作業の前後で再確認し、同じ ID だった。手元の本番原本（/tmp/aivis2/base2/prod）を土台にした。
- 日付の決定（出典：記事作成部屋 22:50 JST の記録と、同部屋から見た目担当への連絡）。JA で PONCHAI が承認した決め方（公開日＝初めて載った日、更新日＝本文が最後に変わった日）を EN/KO に当てはめた値。**値そのものは PONCHAI 本人の承認ではなく、記事作成部屋の判断。** 画面には新しい日付を出さない（質問2＝A）。
  - 6本とも datePublished 2026-10-10（初出 6aca40f5、10/10 22:43:33 JST。rzr-funded は旧 /en|ko/guides/hantec/ の続き）
  - 6本とも dateModified 2026-10-21（6ad88ff7、10/21 19:13:34 JST「EN/KO JA部品化 v2」。DECISIONS_archive_2026-10.md 2585・2588・2613行）
- 見た目担当が根拠を軽く確かめた：
  - /workspace/pcp/r20261021-enko-full-v2/ の6本（rzr は当時 hantec パス）と、現行本番 6b0ac36f の `<main>` を比べた。見える本文は6本とも一字も違わない。HTML の差は、確認版のパス接頭辞と、あとから変わった href/src（hantec→rzr-funded の slug など）だけで、文言の差ではない。
  - 10/26 の本番控えの見える本文も、候補・現行と同じ。fundedhive・hypernova の `<main>` のバイトは 10/26 控えと現行本番で一致。rzr のパスは 10/26 控えにはまだ無く、hantec パスの見える本文が現行の rzr-funded と一致する。
  - 確認版フォルダのままでは `<main>` のバイトは 10/26 控えと一致しない（接頭辞があるため）。見える本文の一致としては確かめた。
- 変えたのは Article JSON-LD（`data-pc-aivis="guide-article"`）に2つの日付を足したことだけ。署名・本文・画面はそのまま。en/ko propr の日付（10/10・10/28）と JA 4本も aivis3 のまま。
- /compare/ の intro は、いまの下書きのまま「要確認」（記事作成部屋：PONCHAI の答え待ち）。
- 新規ページの日付 2026-11-28 は仮のまま。いまこの文字列があるのは `compare/index.html`（JSON-LD の dateModified と、画面の「更新日」）と `sitemap.xml`（/contact/・/companies/・/en/companies/・/ko/companies/・/compare/ の lastmod 5行）。公開の日に入れ直すと sha が変わるので、新しい TSV として【K】ダブルチェックの再チェックが要る。会社一覧3ページと /contact/ の HTML 自体には、いま 2026-11-28 は入っていない（会社一覧の集計日は 2026-11-22）。

## 【aivis3 での更新】2026-11-28 22:35 JST（紹介記事4本の JSON-LD 日付）

- **本番には出していません。** Netlify へのデプロイ（下書きを含む）、force push、台帳の編集、フォームの送信、ファイルの削除もしていません。
- 確認版：https://eumwang.github.io/propcheck-ui-preview/r20261128-aivis3/
  - commit c61717a66169e76f75af475b62a8937b0e5ebb0a（85c37a3 の上に通常 push。r20261128-aivis2 は上書きしていない）
  - RELEASE_SHA256.tsv の sha256：14b444cb3d11efd44058bab6840fdc2ba2b3025b0b8ef813ff9281cc2fdff3cc（161ファイル。aivis2 と同じ161パス。sha が変わったのは次の6ファイルだけ）
    - guides/fundedhive/index.html
    - guides/propr/index.html
    - guides/hypernova/index.html
    - guides/rzr-funded/index.html
    - en/guides/propr/index.html
    - ko/guides/propr/index.html
  - 写し：RELEASE_SHA256_aivis3_20261128.tsv
  - EN_KO_new_old_aivis.tsv：sha256 1fdbd0f6a6c20c10d0516b98f692adc65a8ca1df12488eb72d36ecc69571ecd2、93行（行数は aivis2 と同じ。直したのは所見1の2行と、EN/KO の propr に日付を足した2行）
- 点検：guard.py --visual は PASS（FAIL 0／WARN 0）。報告書は GUARD_REPORT_aivis3_20261128.md（確認版にも GUARD_REPORT.md）。土台は本番 6b0ac36f、候補は今回の6ファイルを重ねたもの。aivis2 との公開用ツリーの違いは上記6ファイルだけ。
- 土台：本番 **6b0ac36f2d14408393816a9c**（2026-11-28 21:05:49 JST 公開、Tangem EN/KO サムネ。戻し先 6b0959ae）。Netlify API の読み取りで 22:18 と作業中にも再確認。aivis2 の161ファイルをこの本番に重ねた候補（A3）の上に、今回の6ファイルだけを足した。
- 日付の決定（出典：記事作成部屋 22:18 JST の記録。PONCHAI 本人が 11/28 22:17 JST に記事作成部屋のチャットで承認。見た目担当が直接聞いたものではない＝伝聞）。画面には新しい日付を出さない（質問2＝A）。

### JA 4本（指定どおり入れた）

| ページ | datePublished | dateModified |
|---|---|---|
| /guides/fundedhive/ | 2026-10-10 | 2026-10-19 |
| /guides/propr/ | 2026-10-10 | 2026-10-28 |
| /guides/hypernova/ | 2026-10-10 | 2026-10-17 |
| /guides/rzr-funded/ | 2026-10-10 | 2026-10-19（旧 /guides/hantec/ の続き） |

- 変えたのは Article JSON-LD（`data-pc-aivis="guide-article"`）に2つの日付を足したことだけ。署名・本文・画面の「資料確認：2026-10-10」はそのまま。

### EN/KO 8本の扱い

確認版 aivis2 の現状：12本とも Article JSON-LD に日付欄は無かった。

Netlify の公開デプロイのファイル一覧（sha1）と、手元にある原本で `<main>` の本文を比べた結果：

- **初出**：EN/KO の4本（rzr は当時 /en/guides/hantec/・/ko/guides/hantec/）は 6aca40f5fb5a9cea8b51ff94（2026-10-10 22:43:33 JST）。JA の初出 6aca382b（同日 22:06:11 JST）より約37分あとで、日付は同じ 2026-10-10。
- **/guides/rzr-funded/** のパスが初めて付いたのは 6ae16fd49aa917683dbc1c31（2026-10-28 12:46:48 JST、slug 切り替え）。ただし 10/21 時点の /en/guides/hantec/・/ko/guides/hantec/ の `<main>` の見える文字は、10/28 の rzr-funded と一字も違わない（JA も同じ）。PONCHAI の「旧 hantec の続き」という扱いは、EN/KO でも根拠が合う。
- **本文の最終変更（確認できた範囲）**：
  - EN/KO /guides/propr/：6ae1790ddf92b9fe94238291（2026-10-28 13:28:50 JST）。JA と同じデプロイで `<main>` の本文が変わり、そのあと現行 6b0ac36f まで本文は同じ。**JA と同じ値（公開 2026-10-10、更新 2026-10-28）を入れた。**
  - EN/KO の fundedhive・hypernova・rzr-funded（hantec の続き）：10/21 19:13 JST（6ad88ff78418be554b8bf060）以降、現行まで `<main>` の本文は変わっていない。ただし 10/19〜10/21 の途中デプロイ（6ad6049e、6ad61535、6ad7af9d、6ad88ff7 など）の原本が手元に無く、Netlify の raw 取得もメタデータしか返さないため、**その間に本文が変わったかは未確認**。ファイル全体の sha1 は 10/21 まで何度か変わっている。
  - とくに hypernova の EN/KO は、JA が本文最終変更とした 6ad2c486（10/17）ではファイル sha1 が動いていない。動いたのは 10/18 の 6ad4ba7a と 10/19 の 6ad5e72d（EN/KO 揃え）など。なので **JA の更新日 2026-10-17 をそのまま入れる根拠はない**。
- **入れなかったページ（勝手に決めない）**：en/ko の fundedhive・hypernova・rzr-funded の6本。JSON-LD の日付欄は aivis2 のまま（無し）。案は下のとおり。記事作成部屋／PONCHAI の確認を待つ。
  - 案（datePublished は3本とも 2026-10-10 でよい、と見た目担当は判断している。更新日は未確定）：
    - fundedhive EN/KO：更新日の候補は 2026-10-19（6ad6049e。JA と同じデプロイでファイル sha1 が変わっている）。ただしその後 10/19 22:04 の 6ad61535、10/21 03:16 の 6ad7af9d、10/21 19:13 の 6ad88ff7 でもファイル sha1 が変わっており、本文かどうかは未確認。
    - rzr-funded EN/KO：更新日の候補は 2026-10-19（6ad6049e で EN/KO の hantec ファイル sha1 が変わっている。10/28 のパス切り替えでは見える本文は変わっていない）。同じ未確認の幅あり。
    - hypernova EN/KO：更新日の候補は 2026-10-19（6ad5e72d の EN/KO 揃え。10/17 の JA 復元では EN/KO の sha1 は変わっていない）。こちらもその後の sha1 変化の本文判定は未確認。

### 【K】ダブルチェックの軽い所見1

- 新旧表の2行を直した。/ko/contact-guide/ は本番も aivis2 の原本も **index,follow**。noindex,nofollow なのは EN の /en/contact-guide/ だけ。sitemap から /ko/contact-guide/ を外したこと自体は変えていない。

### 要確認

- 見た目が大きく変わる箇所は、aivis2 から増えていない（JSON-LD だけなので画面は変わらない）。
- JA の /contact/ 統合、新規の /companies/・/compare/ は、これまでどおり「要確認」。
- /compare/ の intro は、記事作成部屋どおり PONCHAI の答え待ちで、下書きのまま「要確認」。

---

# 変更点の一覧：AI検索対策 上位5件 確認版 r20261128-aivis2（旧 r20261128-aivis は残してある）

- 作成：2026-11-28 01:00 JST ごろ、サイトの見た目とプレビュー担当（作業中の宣言は DECISIONS 1327行）
- 依頼：PONCHAI 2026-11-28 00:28 JST の決定と 00:29 の追加指示「寝るから進めといて。何を変更したのかとプレビューまで見せられる形に。」（どちらもケイシーから聞いた話）
- **本番には出していません。** Netlify へのデプロイ（下書きを含む）、台帳の編集、フォームの送信、ファイルの削除もしていません。
- 旧の確認版（aivis）：https://eumwang.github.io/propcheck-ui-preview/r20261128-aivis/
  - commit 97d05bbcd261064960e25e7357a70dc701e53eb6（通常の push）
  - RELEASE_SHA256.tsv の sha256：a48f12bcaa73a5552cf6277df3658cabca25f72c726808dd4af3d5dbde180239（161ファイル。内訳は新規5・変更156・削除0）
  - 写し：/workspace/propnews/ai_visibility/RELEASE_SHA256_aivis_20261128.tsv
- 土台：本番 6b0959ae4c06a76fbccc50e2（2026-11-27 19:22:31 JST に公開）
  - Netlify API で published_deploy を読み取りだけで確かめた。
  - fetch_prod で取ったファイルは 1560/1560 件とも sha1 が一致した。
- 点検の結果：
  - guard.py --visual は PASS（FAIL 0／WARN 0）。報告書は確認版の GUARD_REPORT.md。
  - verify_dom は 99ページで数字の不一致 0・ルール変更の不一致 0。
  - seo2c で【K】ダブルチェックが合格にした要約の数字と、今回の要約の数字を 99ページで比べた。違いは 0（新しく足した1段落を除く）。
- 画像：/workspace/propnews/ai_visibility/img_20261128/（6枚、合計約390KB）
- 一覧の印：
  - **要確認**：見た目が大きく変わるので、PONCHAI の事前確認が要る。
  - **文言要確認**：新しく書いた文言、または並べ替えた文言がある。日本語は【K】PROPCHECK、紹介記事の原稿は記事作成部屋が確かめる。
  - **英韓**：【K】ダブルチェックの合格が要る。


## 【aivis2 での更新】2026-11-28 21:0x JST（PONCHAI の答えを反映）

- PONCHAI の答え（11/28 20:44 JST、ケイシーのアプリ内チャットでの本人の発言。ケイシー経由＝伝聞）：1 各社の根拠と集計日＝A（JSなし用の要約だけ）、2 記事の日付＝A（画面はそのまま、裏側だけ）、3 /contact/ の並び＝A（フォームが先）、4 英韓の問い合わせ＝B（英韓も1つのURLにまとめる）。
- 1〜3 は A なので、確認版のとおり（変えていない）。**変えたのは質問4＝B の分だけ**：
  - _redirects に6行足した：`/en/contact-guide`・`/en/contact-guide/`・`/en/contact-guide/index.html` を `/en/contact/` へ、`/ko/contact-guide`・`/ko/contact-guide/`・`/ko/contact-guide/index.html` を `/ko/contact/` へ、いずれも `301!`。ファイルは消さない（/ja/contact/ と同じ扱い）。
  - sitemap.xml から `/ko/contact-guide/`（noindex のページ）の1行を外した。183 → 182 URL。`/en/contact-guide/` はもともと sitemap にない。`/en/contact/`・`/ko/contact/` の行は変えていない。
  - 統合先を /en/contact/・/ko/contact/ にした理由：すでにフォームがあり、index で、sitemap に入り、フッターなど79ファイルが指している。hreflang の en/ko と言語メニュー（aivis で /contact/ に付け替え済み）もここを指している。/en/contact-guide/・/ko/contact-guide/ を指すリンクは本番にもともと無い（言語メニューは aivis で付け替え済み）。
  - JA との違い：JA は「案内ページ /contact/ にフォームを移し、フォームページ /ja/contact/ を転送」にした。JA の案内ページには「受け付ける内容」の2段落があったので、フォームの下に移した。EN/KO の案内ページ（noindex）は「英語（韓国語）のフォームを使ってください」という1文だけで、フォームのページにすでに同じ趣旨が入っているので、**文は移していない**（新しい文言を足さないため）。
- **見た目**：EN/KO のフォームのページは変わらない（画面は同じ）。変わるのは「古い案内ページのURLにアクセスしたらフォームへ転送される」ことだけ。見た目が大きく変わる箇所は増えていない。
  - 選択肢：案内の1文もフォームの下に移したい場合は、別の確認版にする（英韓の文言になるので【K】ダブルチェックの確認が要る）。今回は移していない。
- 確認版 aivis2：https://eumwang.github.io/propcheck-ui-preview/r20261128-aivis2/
  - commit 85c37a33fc7bfc8b1a804f2f3757204ef4018a30（通常の push、97d05bbc の上）
  - RELEASE_SHA256.tsv の sha256：43bbe0a01c32c7ae459d4f36bb17643f0461f3de12853e5d53e4752efcafd103（161ファイル。aivis と同じ161パス。sha が変わったのは `_redirects` と `sitemap.xml` の2つだけ）
  - 写し：RELEASE_SHA256_aivis2_20261128.tsv（aivis の旧控えは RELEASE_SHA256_aivis_20261128.tsv）
  - EN_KO_new_old_aivis.tsv：sha256 038f5e1252fcfab702de2dcf6749479646fdf33acfc1abf3d3e5606cd5264ad5、92行（aivis の90行に `_redirects`・`sitemap.xml` の2行を足した）
  - guard.py --visual：PASS（FAIL 0／WARN 0）。報告書は GUARD_REPORT_aivis2_20261128.md（確認版にも GUARD_REPORT.md）。
  - aivis → aivis2 の公開用ツリーの違いは `_redirects` と `sitemap.xml` の2ファイルだけ（byte 比較）。なので verify_dom（99ページで不一致0）の結果はそのまま。
- 土台：確認版は 6b0959ae4c06a76fbccc50e2（2026-11-27 19:22:31 JST 公開）から作った。
  - **その後 Tangem EN/KO サムネが公開された**：新しい本番は **6b0ac36f2d14408393816a9c**（2026-11-28 21:05:49 JST 公開、戻し先 6b0959ae）。Netlify API の読み取りで確認。
  - 新しい本番を 1562/1562 件とも sha1 一致で取り直した。6b0959ae との違いは4ファイルだけ：en/articles/index.html・ko/articles/index.html・assets/articles/tangem-wallet/thumb-tangem-wallet-en-20261127.png・…-ko-20261127.png。**今回の161ファイルとは1つも重ならない**。
  - 公開用の161ファイルを新しい本番に重ねた候補で guard.py --visual をもう一度かけた（結果は DECISIONS 参照）。公開するときは、その時点の最新本番を取り直して161ファイルだけを重ねる。
  - 確認版のフォルダ（r20261128-aivis2）の EN/KO の記事一覧は Tangem 公開前の版のまま（確認版は作り直していない。公開には影響しない）。
- 今回、/tmp/aivis と /tmp/seo1/repo が箱から消えていたので、aivis の公開用ツリーは GitHub の確認版から復元した（RELEASE_SHA256.tsv の161ファイルと全件 sha256 一致。道具は tools_aivis2/）。
- 本番公開・Netlify デプロイ（下書き含む）・force push・台帳編集・削除・フォーム送信はしていない。

---

## ① 各社ページの点数の横に、静的な根拠と集計日を置く（ルール第2項）

| ページ | 変更前（本番） | 変更後（確認版） | 見た目 | 印 |
|---|---|---|---|---|
| 各社ページ 33社×3言語＝99ページ（/companies/*/、/en/…、/ko/…） | 点数の場所 `#detail-root` は空。JS を動かさないと点数も根拠も出ない。 | JS なしで読める要約（noscript）を置いた。中身は次のとおり。<br>・総合参考点、順位、口コミ（直近730日）と内訳、本人報告の件数と内訳、直近のルール変更（記録日）<br>・スコア集計日（2026-11-22）と本人報告の期間（〜2026-11-21）<br>・**新しく足した段落**：点数の意味（「総合参考点：出金可否50%、本人口コミ20%、運営基盤30%を合わせ…」）と、評価方法へのリンク。文はトップの「総合参考点」カードの文をそのまま使った。<br>・順位の付かない2社（Funded Trading Plus・ThinkCapital）には、この段落を出していない。 | JS を動かす普通の画面は変わらない。 | 文言要確認（新しい段落の言い回し）・英韓 |
| 同じ99ページとトップ3言語のフッター | 「運営と透明性」の欄は「紹介記事」から始まる。 | 先頭に「会社一覧／All firms／회사 목록」のリンクを1本足した。 | フッターが約33px 高くなる。そのほかの画素差は 0。 | 英韓 |
| EN 各社ページの meta description | first-hand | firsthand（seo2c と同じ。合格済み） | なし | 英韓（合格済み） |

- 画像：
  - company-noscript_nojs_after.jpg：JS を止めたときに要約が見える様子（390px）
  - company-footer_before_after.jpg：フッター。左が変更前、右が変更後
- 日付：各社ページの sitemap lastmod は**動かしていない**（2026-11-26 のまま）。
  - noscript を初めて足すのは、画面に JS で出ている数字の写しなので、中身の変更に数えなかった（ルール第1項）。
  - seo2c で約103件を 2026-11-27 に一括で動かしていた問題は、これで解消した。

## ② /compare/ と /companies/ を出す（その前に lastmod を見直す）

| ページ | 変更前 | 変更後 | 見た目 | 印 |
|---|---|---|---|---|
| /companies/・/en/companies/・/ko/companies/（新規） | 404 | 会社一覧。31社の総合参考点順と、参考扱いの2社。中身は seo2c と同じ（main がバイト一致）。 | 新しいページ | **要確認**・英韓（seo2c で合格済みの文。今回の版で確認し直す） |
| /compare/（JA、新規） | 404 | 比較ページ。本文は記事作成部屋の下書きを seo2c から引き継いだ。seo2c からの違いは、更新日 2026-11-27 を 2026-11-28 にしたことだけ。 | 新しいページ | **要確認**・文言要確認（下の注を参照） |
| assets/seo-pages-20261127.css（新規） | なし | 上のページ用。seo2c と同じ。 | — | — |
| sitemap.xml | 177 URL。lastmod は 2026-11-26 が133件。 | 183 URL（下の内訳）。日付が新しくなるのは、中身が変わったページだけにした。 | なし | — |

- sitemap.xml の内訳：
  - 新規4ページを足した（lastmod は 2026-11-28）。
  - prop-rule-pitfalls の3言語を足した（本番の sitemap から抜けていた）。
  - /ja/contact/ を外した。
  - ③の記事の lastmod を直した。
- /compare/ の注：
  - intro の2段落は、記事作成部屋が直し案を出して、いま PONCHAI に確認している（DECISIONS 11/27 02:52）。
  - その答えが出たら、intro を差し替える。
- 新規ページの日付「2026-11-28」は仮の値。公開する日に seo_regen.py を `--pubdate <公開日>` で回し直す。そうすると sha が変わるので、【K】ダブルチェックにもう一度確かめてもらう。
- 道具の修正：/workspace/propnews/tools/seo_weekly/seo_regen.py を直した（元は seo_regen.py.bak_20261128_before_aivis に残した）。
  - lastmod を決めるとき、title と description は比べないようにした。
  - noscript は「前の本番にも同じ種類の noscript があったページ」でだけ比べるようにした（ルール第1項・第10項）。
  - 要約に点数の意味の段落を足すようにした。
- GA4 の送信先を本番ホストだけにする変更（seo2b の B）は、別に持ち主の判断を待っているので、今回は入れていない。

## ③ 日付の食い違いを直す

本番の実際の値を並べると、次のとおり（すべて JA。EN/KO も同じ日付）。

| 記事 | 画面の日付 | 記事一覧カードの日付 | JSON-LD 公開日 | JSON-LD 更新日 | sitemap lastmod（本番 → 確認版） |
|---|---|---|---|---|---|
| what-is-a-prop-firm | 2026-11-11 | 2026-10-22 | 2026-10-22 | なし → **2026-11-11** | 2026-11-26 → **2026-11-11** |
| prop-rule-pitfalls | 2026-11-11 | 2026-10-24 | 2026-10-24 | なし → **2026-11-11** | sitemap に無い → **足して 2026-11-11** |
| borrowed-prop | 2026-11-10 | — | 2026-11-10 | なし → 2026-11-10 | 2026-11-26 → **2026-11-10** |
| propcheck-launch | 2026-10-19 | — | 2026-10-19 | なし → 2026-10-19 | 2026-11-26 → **2026-10-19** |
| tangem-wallet | 2026-11-25 | — | 2026-11-25 | なし → **2026-11-27** | 2026-11-26 → **2026-11-27** |
| prop-firm-survival-models | 2026-11-26 | — | 2026-11-26 | 2026-11-26 | 2026-11-27（変えていない） |
| usdc-yen | 2026-11-25 | — | 2026-11-25 | なし | 2026-11-26（変えていない） |

- 確認版の考え方：
  - 画面の日付が正しいものとして扱い、データをそれに合わせた。
  - 11/26 の作り直し（NOTE調・デザイン）は、YAMAAN さんが「日付このまま」と決めている（11/25 20:56）。なので中身の更新には数えなかった。
  - Tangem の 11/27 の改稿（値段の直し・紹介コード・マーカー）は中身の変更なので、11/27 を更新日にした。
- 変えたのは15ページの JSON-LD だけで、画面は変えていない。画素差は 0（記事一覧で出た差は、サムネの読み込みのタイミングによるもの）。EN/KO にかかるので英韓の確認が要る。
- **まだ残っている食い違い**：
  - what-is-a-prop-firm と prop-rule-pitfalls は、記事一覧カードの日付（10/22・10/24＝公開日）と本文の日付（11/11）が違う。
  - 直すかどうかは、PONCHAI への質問2の答えで決める。
- 本番 sitemap の 2026-11-26 一括（各社など121件）について：
  - 本当の更新日が分からないので、今回は戻していない。
  - 次に中身が変わったページから、正しい日付になる。

## ④ 紹介記事に、筆者・日付・各社ページへの案内を足す

| ページ | 変更前 | 変更後 | 見た目 | 印 |
|---|---|---|---|---|
| /guides/fundedhive・propr・hypernova・rzr-funded（JA/EN/KO の12ページ） | 署名なし。Article の JSON-LD もない。各社ページへのリンクはもともと2本ある（最後の案内「口コミ・採点根拠・詳しいルールを見る →」と横の欄）。 | 冒頭の登録ボタンの下に、署名「ぽんちゃい（PROP CHECK）／PONCHAI (PROP CHECK)／PONCHAI(PROP CHECK)」を1行足した。書き方は記事の署名と同じ。<br>Article の JSON-LD（見出し＝ページの title、著者＝表示と同じ名前）も足した。 | 冒頭に小さな1行が増える。fundedhive は高さが約35px 増える。 | 文言要確認・英韓 |

- 日付はまだ入れていない。
  - fundedhive と rzr-funded には、もとから「資料確認：2026-10-10」がある。
  - propr と hypernova には日付がない。
  - 公開日と更新日は記事作成部屋に決めてもらう（依頼文は PLAN にある）。
- 各社ページへの案内は、すでに本文の外（最後の案内と横の欄）にある。なので本文の中にリンクは足していない。YAMAAN さんの「記事本文内リンクなし」とはぶつからない。
- 画像：guide-propr-hero_before_after.jpg（390px）

## ⑤ 問い合わせは /contact/ を残し、/ja/contact/ をまとめる

| 対象 | 変更前 | 変更後 | 見た目 | 印 |
|---|---|---|---|---|
| /contact/ | 案内だけのページ。「フォームを開く →」で /ja/contact/ に飛ぶ。言語メニューは EN=/en/contact-guide/、KO=/ko/contact-guide/。 | /ja/contact/ のフォームをそのまま移した（フォーム名 prop-check-contact、送信先 /contact/thanks/、honeypot も同じ）。その下に、もとの案内にあった「受け付ける内容」の2段落を字句どおり置いた。<br>canonical、JSON-LD の url、hreflang の ja と x-default は /contact/ にした。言語メニューは /en/contact/・/ko/contact/。og と twitter はもとの /contact/ の値のまま。 | **大きく変わる** | **要確認**・文言要確認（並べ方） |
| _redirects | — | `/ja/contact`、`/ja/contact/`、`/ja/contact/index.html` を /contact/ に 301! で飛ばす3行を足した（ファイルは消さない）。既存の Hantec、/review、/assessment/ 302 の行はそのまま。 | — | — |
| /ja/contact/ を指すリンク（既存65ファイル・73か所＋新規ページ2つ） | /ja/contact/ | /contact/。主にフッター。評価方法ページ、/ja/request-listing/、/assessment/ は触らず、転送で届くようにした。 | なし（リンク先だけ） | 英韓（EN/KO 側は該当なし） |
| /en/contact/・/ko/contact/ | hreflang の ja と x-default が /ja/contact/ | /contact/ に変えた。言語メニューの JA も /contact/ | なし | 英韓（属性だけ） |
| /en/contact-guide/・/ko/contact-guide/（aivis2 で追加） | noindex の1文だけの案内ページ。本番では転送なし | `/en/contact/`・`/ko/contact/` へ 301!（_redirects に6行）。ファイルは消さない。sitemap から `/ko/contact-guide/` を外した | フォームのページは変わらない | 英韓（URLの転送だけ）。質問4＝B |
| sitemap | /contact/ は 2026-10-21、/ja/contact/ あり | /contact/ は 2026-11-28（フォームが入り、中身が変わるため）。/ja/contact/ は外した。 | — | — |

- フォームへの影響：
  - Netlify のフォームは名前で区別される。名前を変えていないので、これまでの受信、通知の設定、スパム対策はそのまま続く。
  - 送信先の /contact/thanks/ もこれまでと同じ。
  - EN と KO のフォームも同じフォームなので、影響はない。
  - 試しの送信はしていない。
- GA4 の ga4-events JS は、パスの "contact" で区分している。/contact/ のままでも同じ区分になる見込み（推測）。
- 確認版では転送が効かない。なので /ja/contact/ には「本番では /contact/ に 301」という説明ページを置いた（確認版だけ。公開するファイルには入っていない）。中身は _redirects.txt で見られる。
- 画像：contact_before_after.jpg（390px。左が変更前、右が変更後）

---

## 確認版で見るページ

- 各社（JS なしで要約が見える）：…/r20261128-aivis/companies/ftmo-fx-cfd/
- 会社一覧：…/r20261128-aivis/companies/ ・ /en/companies/ ・ /ko/companies/
- 比較：…/r20261128-aivis/compare/
- 紹介記事：…/r20261128-aivis/guides/propr/ ほか
- 問い合わせ：…/r20261128-aivis/contact/
- 変更表：…/r20261128-aivis/RELEASE_SHA256.tsv、EN_KO_new_old_aivis.tsv、GUARD_REPORT.md、AIVIS_SEO_EVIDENCE.json

## 着手しなかったもの

- 【K】PROPCHECK が作業中のページ：なし。DECISIONS の【K】PROPCHECK の作業中は、11/25 のものまで全部作業終了になっていて、11/26 17:51 の合同公開で本番に入っている。なので「未着手（【K】作業中）」のページはない。
- 評価方法ページ、og と twitter、_headers、/assessment/ 302、クーポン、RZR の名前と slug、affiliateId、GA4 ID：触っていない。
