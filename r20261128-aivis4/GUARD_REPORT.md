# 判定: ✅ PASS（指示外の変更なし）

- FAIL: **0件** / WARN: **0件**
- 作成: 2026-11-28 22:58:20 JST
- 土台（本番）: `/tmp/aivis2/base2/prod`
- 候補: `/tmp/aivis4/A5`
- 依頼spec: `/tmp/aivis4/guard_spec4.json`（r20261128-aivis4：AI検索対策 確認版4。土台は本番 6b0ac36f に aivis3 を重ねたもの。追加は EN/KO の fundedhive・hypernova・rzr-funded 6本の Article JSON-LD に datePublished=2026-10-10 と dateModified=2026-10-21 を入れるだけ（画面は変えない）。ほかは aivis3 のまま。r20261128-aivis3：AI検索対策 確認版3。土台は本番 6b0ac36f に aivis2 を重ねたもの。追加は紹介記事 JA 4本と EN/KO の /guides/propr/ の Article JSON-LD に datePublished/dateModified を入れるだけ（画面は変えない）。ほかは aivis2 のまま。r20261128-aivis2：AI検索対策 上位5件の確認版（PONCHAI 2026-11-28 00:28 決定・00:29「プレビューまで」、ケイシー経由）。①各社 noscript 要約に点数の意味と評価方法リンク ②会社一覧3言語・比較ページ・CSS・sitemap（日付は新規ページだけ） ③記事の JSON-LD dateModified と sitemap lastmod ④紹介記事の署名と Article JSON-LD ⑤/contact/ に /ja/contact/ のフォームを統合、301、リンク付け替え ⑥（PONCHAI 2026-11-28 20:44 質問4=B）EN/KO の /en/contact-guide/・/ko/contact-guide/ を /en/contact/・/ko/contact/ へ301で統合（_redirects 6行追加、sitemap から /ko/contact-guide/ を外す）。1〜3は質問どおり A のまま）

## 1. ファイル差分一覧
変更なし: 1406件 / 変更: 156件 / 追加: 5件 / 削除: 0件

- [変更] `_redirects`  ← 依頼対象
- [変更] `about/index.html`  ← 依頼対象
- [変更] `advertising/index.html`  ← 依頼対象
- [変更] `alerts/index.html`  ← 依頼対象
- [変更] `articles/borrowed-prop/index.html`  ← 依頼対象
- [変更] `articles/how-to-read-reviews/index.html`  ← 依頼対象
- [変更] `articles/index.html`  ← 依頼対象
- [変更] `articles/prop-firm-survival-models/index.html`  ← 依頼対象
- [変更] `articles/prop-rule-pitfalls/index.html`  ← 依頼対象
- [変更] `articles/propcheck-launch/index.html`  ← 依頼対象
- [変更] `articles/tangem-wallet/index.html`  ← 依頼対象
- [変更] `articles/usdc-yen/index.html`  ← 依頼対象
- [変更] `articles/what-is-a-prop-firm/index.html`  ← 依頼対象
- [変更] `companies/alpha-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/blueberry-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/blueguardian-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/brightfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/e8-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/eightcapchallenges-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fintokei-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/ftmo-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/funded7-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundedelite-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundedhive-onchain/index.html`  ← 依頼対象
- [変更] `companies/fundednext-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundedtradermarkets-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundedtradingplus-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundingpips-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundingtraders-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fundora-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/fxify-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/goat-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/hantec-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/hypernova-onchain/index.html`  ← 依頼対象
- [変更] `companies/icfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/instantfunding-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/monetafunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/pipfarm-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/propr-onchain/index.html`  ← 依頼対象
- [変更] `companies/rzr-funded/index.html`  ← 依頼対象
- [変更] `companies/superfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/the5ers-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/thinkcapital-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/tradeifyfx-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/tradingcult-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/tradingpit-fx-cfd/index.html`  ← 依頼対象
- [変更] `companies/upcomers-fx-cfd/index.html`  ← 依頼対象
- [変更] `contact/index.html`  ← 依頼対象
- [変更] `contact/thanks/index.html`  ← 依頼対象
- [変更] `cookies/index.html`  ← 依頼対象
- [変更] `corrections/index.html`  ← 依頼対象
- [変更] `en/articles/borrowed-prop/index.html`  ← 依頼対象
- [変更] `en/articles/prop-rule-pitfalls/index.html`  ← 依頼対象
- [変更] `en/articles/propcheck-launch/index.html`  ← 依頼対象
- [変更] `en/articles/tangem-wallet/index.html`  ← 依頼対象
- [変更] `en/articles/what-is-a-prop-firm/index.html`  ← 依頼対象
- [変更] `en/companies/alpha-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/blueberry-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/blueguardian-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/brightfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/e8-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/eightcapchallenges-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fintokei-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/ftmo-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/funded7-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundedelite-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundedhive-onchain/index.html`  ← 依頼対象
- [変更] `en/companies/fundednext-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundedtradermarkets-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundedtradingplus-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundingpips-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundingtraders-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fundora-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/fxify-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/goat-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/hypernova-onchain/index.html`  ← 依頼対象
- [変更] `en/companies/icfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/instantfunding-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/monetafunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/pipfarm-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/propr-onchain/index.html`  ← 依頼対象
- [変更] `en/companies/rzr-funded/index.html`  ← 依頼対象
- [変更] `en/companies/superfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/the5ers-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/thinkcapital-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/tradeifyfx-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/tradingcult-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/tradingpit-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/companies/upcomers-fx-cfd/index.html`  ← 依頼対象
- [変更] `en/contact/index.html`  ← 依頼対象
- [変更] `en/guides/fundedhive/index.html`  ← 依頼対象
- [変更] `en/guides/hypernova/index.html`  ← 依頼対象
- [変更] `en/guides/propr/index.html`  ← 依頼対象
- [変更] `en/guides/rzr-funded/index.html`  ← 依頼対象
- [変更] `en/index.html`  ← 依頼対象
- [変更] `guides/fundedhive/index.html`  ← 依頼対象
- [変更] `guides/hantec/index.html`  ← 依頼対象
- [変更] `guides/hypernova/index.html`  ← 依頼対象
- [変更] `guides/index.html`  ← 依頼対象
- [変更] `guides/propr/index.html`  ← 依頼対象
- [変更] `guides/rzr-funded/index.html`  ← 依頼対象
- [変更] `index.html`  ← 依頼対象
- [変更] `ko/articles/borrowed-prop/index.html`  ← 依頼対象
- [変更] `ko/articles/prop-rule-pitfalls/index.html`  ← 依頼対象
- [変更] `ko/articles/propcheck-launch/index.html`  ← 依頼対象
- [変更] `ko/articles/tangem-wallet/index.html`  ← 依頼対象
- [変更] `ko/articles/what-is-a-prop-firm/index.html`  ← 依頼対象
- [変更] `ko/companies/alpha-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/blueberry-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/blueguardian-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/brightfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/e8-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/eightcapchallenges-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fintokei-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/ftmo-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/funded7-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundedelite-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundedhive-onchain/index.html`  ← 依頼対象
- [変更] `ko/companies/fundednext-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundedtradermarkets-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundedtradingplus-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundingpips-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundingtraders-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fundora-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/fxify-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/goat-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/hypernova-onchain/index.html`  ← 依頼対象
- [変更] `ko/companies/icfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/instantfunding-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/monetafunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/pipfarm-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/propr-onchain/index.html`  ← 依頼対象
- [変更] `ko/companies/rzr-funded/index.html`  ← 依頼対象
- [変更] `ko/companies/superfunded-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/the5ers-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/thinkcapital-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/tradeifyfx-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/tradingcult-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/tradingpit-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/companies/upcomers-fx-cfd/index.html`  ← 依頼対象
- [変更] `ko/contact/index.html`  ← 依頼対象
- [変更] `ko/guides/fundedhive/index.html`  ← 依頼対象
- [変更] `ko/guides/hypernova/index.html`  ← 依頼対象
- [変更] `ko/guides/propr/index.html`  ← 依頼対象
- [変更] `ko/guides/rzr-funded/index.html`  ← 依頼対象
- [変更] `ko/index.html`  ← 依頼対象
- [変更] `policy/index.html`  ← 依頼対象
- [変更] `privacy/index.html`  ← 依頼対象
- [変更] `report-error/index.html`  ← 依頼対象
- [変更] `report-error/thanks/index.html`  ← 依頼対象
- [変更] `report/index.html`  ← 依頼対象
- [変更] `request-listing/thanks/index.html`  ← 依頼対象
- [変更] `rules/index.html`  ← 依頼対象
- [変更] `sitemap.xml`  ← 依頼対象
- [変更] `sitemap/index.html`  ← 依頼対象
- [変更] `terms/index.html`  ← 依頼対象
- [追加] `assets/seo-pages-20261127.css`  ← 依頼対象
- [追加] `companies/index.html`  ← 依頼対象
- [追加] `compare/index.html`  ← 依頼対象
- [追加] `en/companies/index.html`  ← 依頼対象
- [追加] `ko/companies/index.html`  ← 依頼対象

## 2. 巻き戻しチェック
依頼対象外のファイルは全て本番とバイト一致（巻き戻しなし）。

## 3. 指定文の一字一句照合

（指定文なし）

## 4. ❌ FAIL（指示外の変更）（0件）

なし

## 5. ⚠ WARN（目視確認が必要）（0件）

なし

## 6. ✅ 指示どおりの変更（許可範囲内）（1231件）

| ファイル | 種別 | 内容 | 場所 | 変更前 | 変更後 |
|---|---|---|---|---|---|
| `assets/seo-pages-20261127.css` | file | ファイルの追加 | — | — | — |
| `companies/index.html` | file | ファイルの追加 | — | — | — |
| `compare/index.html` | file | ファイルの追加 | — | — | — |
| `en/companies/index.html` | file | ファイルの追加 | — | — | — |
| `ko/companies/index.html` | file | ファイルの追加 | — | — | — |
| `_redirects` | file | ファイル内容の変更（HTML/CSS/JS以外） | — | b67599949a8d | d55361d38771 |
| `about/index.html` | attr | 属性 href の変更 | …tml > body > main.static-page > section.pc-policy-section > article > p:nth-of-type(3) > a | ../ja/contact/ | /contact/ |
| `about/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `advertising/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `alerts/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/borrowed-prop/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/borrowed-prop/index.html` | script | <script> の中身が変更（1ブロック） | script | — | --- ⏎+++ ⏎@@ -4,3 +4,3 @@⏎ ⏎-{"@context":"https://schema.org","@type":"Article","headline":"看板は違うのに、中身は同じ。「借り物プロップ」について","description":"別々のブランドのプロップファームが、実は同じ会社… |
| `articles/how-to-read-reviews/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/prop-firm-survival-models/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/prop-rule-pitfalls/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/prop-rule-pitfalls/index.html` | script | <script> の中身が変更（1ブロック） | script | — | --- ⏎+++ ⏎@@ -4,3 +4,3 @@⏎ ⏎-{"@context":"https://schema.org","@type":"Article","headline":"プロップファームのルールで気をつけること｜特殊ルール・ルール変更・隠れルール・業者の撤退","description":"「最大DDも守… |
| `articles/propcheck-launch/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/propcheck-launch/index.html` | script | <script> の中身が変更（1ブロック） | script | — | --- ⏎+++ ⏎@@ -4,3 +4,3 @@⏎ ⏎-{"@context":"https://schema.org","@type":"Article","headline":"プロップファームの「本当の信頼性」を可視化するサイト『PROP CHECK』公開！！","description":"PROP CHEC… |
| `articles/tangem-wallet/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/tangem-wallet/index.html` | script | <script> の中身が変更（1ブロック） | script | — | --- ⏎+++ ⏎@@ -4,3 +4,3 @@⏎ ⏎-{"@context":"https://schema.org","@type":"Article","headline":"ハッキングが過去最多の今、Tangemという選択肢","description":"2026年上半期、暗号資産のハッキングは212件で、… |
| `articles/usdc-yen/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/what-is-a-prop-firm/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `articles/what-is-a-prop-firm/index.html` | script | <script> の中身が変更（1ブロック） | script | — | --- ⏎+++ ⏎@@ -4,3 +4,3 @@⏎ ⏎-{"@context":"https://schema.org","@type":"Article","headline":"プロップファームって何？その仕組みと基本的なルールまとめ","description":"プロップファームは、評価費用を払って試験を受け… |
| `companies/alpha-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/alpha-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Alpha Capital Groupの要約 |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/alpha-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/alpha-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/blueberry-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/blueberry-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Blueberry Fundedの要約 |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/blueberry-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/blueberry-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/blueguardian-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/blueguardian-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Blue Guardianの要約 |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/blueguardian-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/blueguardian-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/brightfunded-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/brightfunded-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] BrightFundedの要約 |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/brightfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/brightfunded-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/e8-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/e8-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] E8 Marketsの要約 |
| `companies/e8-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/e8-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/e8-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/e8-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/e8-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/e8-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/e8-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/e8-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/eightcapchallenges-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/eightcapchallenges-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Eightcap Challengesの要約 |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/eightcapchallenges-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/eightcapchallenges-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fintokei-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fintokei-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Fintokeiの要約 |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fintokei-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fintokei-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/ftmo-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/ftmo-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FTMOの要約 |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/ftmo-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/ftmo-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/funded7-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/funded7-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Funded7の要約 |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/funded7-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/funded7-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundedelite-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundedelite-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FundedEliteの要約 |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundedelite-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundedelite-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundedhive-onchain/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundedhive-onchain/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FundedHiveの要約 |
| `companies/fundedhive-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundedhive-onchain/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundedhive-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundedhive-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundedhive-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundedhive-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundedhive-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundedhive-onchain/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundednext-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundednext-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FundedNextの要約 |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundednext-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundednext-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundedtradermarkets-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundedtradermarkets-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Funded Trader Marketsの要約 |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundedtradermarkets-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundedtradermarkets-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundedtradingplus-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundedtradingplus-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Funded Trading Plusの要約 |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundedtradingplus-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundedtradingplus-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundingpips-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundingpips-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FundingPipsの要約 |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundingpips-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundingpips-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundingtraders-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundingtraders-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FundingTradersの要約 |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundingtraders-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundingtraders-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fundora-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fundora-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Fundoraの要約 |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fundora-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fundora-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/fxify-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/fxify-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] FXIFYの要約 |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/fxify-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/fxify-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/goat-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/goat-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Goat Funded Traderの要約 |
| `companies/goat-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/goat-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/goat-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/goat-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/goat-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/goat-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/goat-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/goat-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/hantec-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/hypernova-onchain/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/hypernova-onchain/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Hypernovaの要約 |
| `companies/hypernova-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/hypernova-onchain/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/hypernova-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/hypernova-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/hypernova-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/hypernova-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/hypernova-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/hypernova-onchain/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/icfunded-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/icfunded-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] IC Fundedの要約 |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/icfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/icfunded-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/instantfunding-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/instantfunding-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Instant Fundingの要約 |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/instantfunding-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/instantfunding-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/monetafunded-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/monetafunded-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Moneta Fundedの要約 |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/monetafunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/monetafunded-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/pipfarm-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/pipfarm-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] PipFarmの要約 |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/pipfarm-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/pipfarm-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/propr-onchain/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/propr-onchain/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Proprの要約 |
| `companies/propr-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/propr-onchain/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/propr-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/propr-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/propr-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/propr-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/propr-onchain/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/propr-onchain/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/rzr-funded/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/rzr-funded/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] RZR Fundedの要約 |
| `companies/rzr-funded/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/rzr-funded/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/rzr-funded/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/rzr-funded/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/rzr-funded/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/rzr-funded/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/rzr-funded/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/rzr-funded/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/superfunded-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/superfunded-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] SuperFundedの要約 |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/superfunded-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/superfunded-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/the5ers-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/the5ers-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] The5ersの要約 |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/the5ers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/the5ers-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/thinkcapital-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/thinkcapital-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] ThinkCapitalの要約 |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/thinkcapital-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/thinkcapital-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/tradeifyfx-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/tradeifyfx-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Tradeify FXの要約 |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/tradeifyfx-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/tradeifyfx-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/tradingcult-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/tradingcult-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] TradingCultの要約 |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/tradingcult-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/tradingcult-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/tradingpit-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/tradingpit-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] The Trading Pitの要約 |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/tradingpit-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/tradingpit-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `companies/upcomers-fx-cfd/index.html` | text | 文言の変更 | …-route > footer.pc-site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) | 紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 | 会社一覧紹介記事評価方法運営者情報編集方針・免責事項広告・紹介リンクの方針 |
| `companies/upcomers-fx-cfd/index.html` | text | 文言の追加 | …mpany-route > main.company-route-main > section#detail > noscript > section.pc-seo-summary | — | [aria-label] Upcomersの要約 |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(1) > a:nth-of-type(4) | /ja/contact/ | /contact/ |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 data-pc-seo の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | — | company-index-link |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(1) | /guides/ | /companies/ |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(2) | /methodology/ | /guides/ |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(3) | /about/ | /methodology/ |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(4) | /policy/ | /about/ |
| `companies/upcomers-fx-cfd/index.html` | attr | 属性 href の変更 | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(5) | /advertising/ | /policy/ |
| `companies/upcomers-fx-cfd/index.html` | structure | 要素の追加 <a> | …site-footer > nav.pc-footer-layout > div.pc-footer-group:nth-of-type(2) > a:nth-of-type(6) | — | <a href="/advertising/">広告・紹介リンクの方針</a> |
| `contact/index.html` | text | 文言の変更 | html > body > main.static-page > p.home-kicker | GUIDE | CONTACT |
| `contact/index.html` | text | 文言の変更 | html > body > main.static-page > div.cn.cnv > p | 2026年9月24日更新 | 広告掲載、会社からの回答・補足、掲載内容の削除のご希望などは、こちらのフォームからお問い合わせください。会社からの回答・補足や削除のご希望は、対象ページのURL、該当箇所、根拠、希望する対応を、分かる範囲でお書きください。依頼だけで修正・削除を約束するものではありません。個人情報や本人確認書類は送らないでください。 |
| `contact/index.html` | text | 文言の変更 | html > body > main.static-page > div.cn.cnv > h2 | お問い合わせ・掲載依頼をフォームから送信できます。秘密情報や本人確認書類は送らないでください。 | ほかの窓口 |
| `contact/index.html` | text | 文言の変更 | html > body > main.static-page > div.cn.cnv > div.lk | お問い合わせフォームを開く → | ✎掲載情報の誤りを報告 →＋未掲載業者をリクエスト →!出金拒否・BANの体験（供養所） → |
| `contact/index.html` | text | 文言の追加 | html > body > main.static-page > article > form > p | — | 入力しないでください |
| `contact/index.html` | text | 文言の追加 | html > body > main.static-page > article > form | — | お名前（任意）お問い合わせの種類（必須）選択してください会社からの回答・補足個人情報・権利関係その他返信用メール（必須）関連URL（任意）お問い合わせ内容（必須）ご入力いただいた個人情報は、お問い合わせへの対応・回答の目的にのみ利用いたします。当サイトのプライバシーポリシーをご確認の上、送信してください。送信する → |
| `contact/index.html` | text | 文言の変更 | html > head > meta:nth-of-type(4) | [meta description] PROP CHECK お問い合わせ | [meta description] 会社からの回答・補足や広告掲載などに関するお問い合わせ |
| `contact/index.html` | structure | 要素の追加 <link> | html > head > link:nth-of-type(2) | — | <link href="../styles.css" rel="stylesheet"/> |
| `contact/index.html` | attr | 属性 href の変更 | html > head > link:nth-of-type(3) | ../styles.css | ../ja-phase15.css |
| `contact/index.html` | attr | 属性 href の変更 | html > head > link:nth-of-type(4) | ../ja-phase15.css | https://propchecklab.com/contact/ |
| `contact/index.html` | attr | 属性 hreflang の変更 | html > head > link:nth-of-type(4) | — | ja |
| `contact/index.html` | attr | 属性 rel の変更 | html > head > link:nth-of-type(4) | stylesheet | alternate |
| `contact/index.html` | attr | 属性 href の変更 | html > head > link:nth-of-type(5) | https://propchecklab.com/contact/ | https://propchecklab.com/en/contact/ |
| `contact/index.html` | attr | 属性 hreflang の変更 | html > head > link:nth-of-type(5) | ja | en |
| `contact/index.html` | attr | 属性 href の変更 | html > head > link:nth-of-type(6) | https://propchecklab.com/ko/contact-guide/ | https://propchecklab.com/ko/contact/ |
| `contact/index.html` | attr | 属性 href の変更 | …> div.header-row > nav > details.language-menu > div.language-menu-list > a:nth-of-type(2) | /en/contact-guide/ | /en/contact/ |
| `contact/index.html` | attr | 属性 href の変更 | …> div.header-row > nav > details.language-menu > div.language-menu-list > a:nth-of-type(3) | /ko/contact-guide/ | /ko/contact/ |
| `contact/index.html` | structure | 要素の追加 <div> | html > body > main.static-page > div.cn.cnv | — | <div class="cn cnv"><p>広告掲載、会社からの回答・補足、掲載内容の削除のご希望などは、こちらのフォームからお問い合わせください。<br/>会社からの回答・補足や削除のご希望は、対象ページのURL、該当箇所、根拠、希望する対応を、分かる範囲でお書きください。依頼だけで修正・削除を約束するものではあり… |
| `contact/index.html` | class | class変更 追加[] 削除['subtle'] | html > body > main.static-page > div.cn.cnv > p | subtle | — |
| `contact/index.html` | structure | 要素の追加 <br> | html > body > main.static-page > div.cn.cnv > p > br:nth-of-type(1) | — | <br/> |
| `contact/index.html` | structure | 要素の追加 <br> | html > body > main.static-page > div.cn.cnv > p > br:nth-of-type(1) | — | <br/> |
| `contact/index.html` | structure | 要素の追加 <h2> | html > body > main.static-page > div.cn.cnv > h2 | — | <h2>ほかの窓口</h2> |
| `contact/index.html` | structure | 要素の追加 <div> | html > body > main.static-page > div.cn.cnv > div.lk | — | <div class="lk"><a href="/report-error/"><i aria-hidden="true">✎</i>掲載情報の誤りを報告 →</a><a href="/ja/request-listing/"><i aria-hidden="true">＋</i>未掲載業者をリクエスト →</a><… |
| `contact/index.html` | structure | 要素の追加 <a> | html > body > main.static-page > div.cn.cnv > div.lk > a:nth-of-type(1) | — | <a href="/report-error/"><i aria-hidden="true">✎</i>掲載情報の誤りを報告 →</a> |
| `contact/index.html` | structure | 要素の追加 <i> | html > body > main.static-page > div.cn.cnv > div.lk > a:nth-of-type(1) > i | — | <i aria-hidden="true">✎</i> |
| `contact/index.html` | structure | 要素の追加 <a> | html > body > main.static-page > div.cn.cnv > div.lk > a:nth-of-type(2) | — | <a href="/ja/request-listing/"><i aria-hidden="true">＋</i>未掲載業者をリクエスト →</a> |
| `contact/index.html` | structure | 要素の追加 <i> | html > body > main.static-page > div.cn.cnv > div.lk > a:nth-of-type(2) > i | — | <i aria-hidden="true">＋</i> |
| `contact/index.html` | structure | 要素の追加 <a> | html > body > main.static-page > div.cn.cnv > div.lk > a:nth-of-type(3) | — | <a href="/report/"><i aria-hidden="true">!</i>出金拒否・BANの体験（供養所） →</a> |
| `contact/index.html` | structure | 要素の追加 <i> | html > body > main.static-page > div.cn.cnv > div.lk > a:nth-of-type(3) > i | — | <i aria-hidden="true">!</i> |
| `contact/index.html` | structure | 要素の追加 <article> | html > body > main.static-page > article | — | <article><form action="/contact/thanks/" data-netlify="true" method="POST" name="prop-check-contact" netlify-honeypot="bot-field"><input name="form-name" type="… |
| `contact/index.html` | structure | 要素の追加 <form> | html > body > main.static-page > article > form | — | <form action="/contact/thanks/" data-netlify="true" method="POST" name="prop-check-contact" netlify-honeypot="bot-field"><input name="form-name" type="hidden" v… |
| `contact/index.html` | structure | 要素の追加 <input> | html > body > main.static-page > article > form > input | — | <input name="form-name" type="hidden" value="prop-check-contact"/> |
| `contact/index.html` | class | class変更 追加[] 削除['notice-copy'] | html > body > main.static-page > article > form > p | notice-copy | — |
| `contact/index.html` | attr | 属性 hidden の変更 | html > body > main.static-page > article > form > p | — |  |
| `contact/index.html` | structure | 要素の削除 <p> | html > body > main.static-page > p:nth-of-type(4) | <p><a class="link-button" href="../ja/contact/">お問い合わせフォームを開く →</a></p> | — |
| `contact/index.html` | structure | 要素の追加 <label> | html > body > main.static-page > article > form > p > label | — | <label>入力しないでください<input autocomplete="off" name="bot-field" tabindex="-1"/></label> |
| `contact/index.html` | structure | 要素の追加 <input> | html > body > main.static-page > article > form > p > label > input | — | <input autocomplete="off" name="bot-field" tabindex="-1"/> |
| `contact/index.html` | structure | 要素の追加 <label> | html > body > main.static-page > article > form > label:nth-of-type(1) | — | <label>お名前（任意）<input autocomplete="name" maxlength="160" name="name"/></label> |
| `contact/index.html` | structure | 要素の追加 <input> | html > body > main.static-page > article > form > label:nth-of-type(1) > input | — | <input autocomplete="name" maxlength="160" name="name"/> |
| `contact/index.html` | structure | 要素の追加 <label> | html > body > main.static-page > article > form > label:nth-of-type(2) | — | <label>お問い合わせの種類（必須）<select name="category" required=""><option value="">選択してください</option><option>会社からの回答・補足</option><option>個人情報・権利関係</option><option>その他</opti… |
| `contact/index.html` | structure | 要素の追加 <select> | html > body > main.static-page > article > form > label:nth-of-type(2) > select | — | <select name="category" required=""><option value="">選択してください</option><option>会社からの回答・補足</option><option>個人情報・権利関係</option><option>その他</option></select> |
| `contact/index.html` | structure | 要素の追加 <option> | … main.static-page > article > form > label:nth-of-type(2) > select > option:nth-of-type(1) | — | <option value="">選択してください</option> |
| `contact/index.html` | structure | 要素の追加 <option> | … main.static-page > article > form > label:nth-of-type(2) > select > option:nth-of-type(2) | — | <option>会社からの回答・補足</option> |
| `contact/index.html` | structure | 要素の追加 <option> | … main.static-page > article > form > label:nth-of-type(2) > select > option:nth-of-type(3) | — | <option>個人情報・権利関係</option> |
| `contact/index.html` | structure | 要素の追加 <option> | … main.static-page > article > form > label:nth-of-type(2) > select > option:nth-of-type(4) | — | <option>その他</option> |
…ほか 831 件（report.json 参照）

## 7. 参考情報（4件）

| ファイル | 種別 | 内容 | 場所 | 変更前 | 変更後 |
|---|---|---|---|---|---|
| `request-listing/thanks/index.html` | whitespace | 空白・改行・コメント等のみの差分（表示に影響しない可能性が高い） | — | — | — |
| `index.html` | data | 比較表の行数・業者数が本番と同じ（candidate・10状態、例 {'rows': 64, 'firms': 31}） | #comparison-table | — | — |
| `en/index.html` | data | 比較表の行数・業者数が本番と同じ（candidate・7状態、例 {'rows': 64, 'firms': 31}） | #comparison-table | — | — |
| `ko/index.html` | data | 比較表の行数・業者数が本番と同じ（candidate・7状態、例 {'rows': 64, 'firms': 31}） | #comparison-table | — | — |

## 8. 見た目の差分（ヘッドレスChromium）

- `about/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 953→953 / 差分画像 `/tmp/aivis4/guard_out/screenshots/about__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `about/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 1280→1280 / 差分画像 `/tmp/aivis4/guard_out/screenshots/about__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `advertising/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 900→900 / 差分画像 `/tmp/aivis4/guard_out/screenshots/advertising__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `advertising/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 1295→1295 / 差分画像 `/tmp/aivis4/guard_out/screenshots/advertising__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `alerts/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 1210→1210 / 差分画像 `/tmp/aivis4/guard_out/screenshots/alerts__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `alerts/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 2170→2170 / 差分画像 `/tmp/aivis4/guard_out/screenshots/alerts__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/borrowed-prop/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 7648→7648 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__borrowed-prop__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/borrowed-prop/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 10133→10133 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__borrowed-prop__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/how-to-read-reviews/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 1074→1074 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__how-to-read-reviews__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/how-to-read-reviews/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 1528→1528 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__how-to-read-reviews__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 2861→2861 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 4682→4682 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/prop-firm-survival-models/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 16624→16624 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__prop-firm-survival-models__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/prop-firm-survival-models/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 20569→20569 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__prop-firm-survival-models__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/prop-rule-pitfalls/index.html` 1280px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 11102→11102 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__prop-rule-pitfalls__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/prop-rule-pitfalls/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 16123→16123 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__prop-rule-pitfalls__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/propcheck-launch/index.html` 1280px: 変化画素 62927 / 変化領域 3（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 10782→10782 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__propcheck-launch__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/propcheck-launch/index.html` 390px: 変化画素 8742 / 変化領域 2（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 13627→13627 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__propcheck-launch__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/tangem-wallet/index.html` 1280px: 変化画素 222415 / 変化領域 1（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 16119→16119 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__tangem-wallet__index.html_1280_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）
- `articles/tangem-wallet/index.html` 390px: 変化画素 0 / 変化領域 0（指示範囲外 0 / 周辺追従 0 / 1-4px揺れ 0） / 高さ 20370→20370 / 差分画像 `/tmp/aivis4/guard_out/screenshots/articles__tangem-wallet__index.html_390_diff.png`（赤=範囲外, 緑=指示範囲, 青=同じブロック内の追従, 黄=1-4px揺れ, 灰=再描画でも変わる不安定領域）

---
種別: text=文言, bold=太字, color=色/背景/枠線, class=class属性, style=その他スタイル, attr=属性, structure=要素追加削除, css=CSSルール, script=JS, rollback=巻き戻し疑い, visual=画素差分
