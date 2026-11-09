/* PROP CHECK × RZR Funded 広告枠「本日のクーポン」データ（毎日 16:00 JST に、このファイル1本だけを差し替える）
   ルール：開始時刻を過ぎたエントリーだけをこのファイルに書く（未来のクーポンコードは絶対に書かない・push しない）。
   形式：{ start: 'YYYY-MM-DDTHH:MM:SS+09:00', code: 'コード', ja: '説明（日本語）', en: 'description (English)', ko: '설명（韓国語・任意）', image: '任意。画像パス', alt: '画像の代替テキスト' }
   表示されるのは start が現在時刻以前のうち最新の1件。空配列なら枠は出ない。 */
window.RZR_DAILY_OFFERS = []; /* 20261110 campaign-off: RZR ad slot removed; offers cleared */

