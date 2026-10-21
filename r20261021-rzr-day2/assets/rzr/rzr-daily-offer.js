/* PROP CHECK × RZR Funded 広告枠「本日のクーポン」データ（毎日 16:00 JST に、このファイル1本だけを差し替える）
   ルール：開始時刻を過ぎたエントリーだけをこのファイルに書く（未来のクーポンコードは絶対に書かない・push しない）。
   形式：{ start: 'YYYY-MM-DDTHH:MM:SS+09:00', code: 'コード', ja: '説明（日本語）', en: 'description (English)', ko: '설명（韓国語・任意）', image: '任意。画像パス', alt: '画像の代替テキスト' }
   表示されるのは start が現在時刻以前のうち最新の1件。空配列なら枠は出ない。 */
window.RZR_DAILY_OFFERS = [
  { start: '2026-10-21T16:00:00+09:00', code: 'RZRRESET',
    ja: '2日目：10月21日（水）｜30％オフ＋購入代金の払い戻しを受けられるチャンス。全アカウント対象で30％割引。プロモーションコードをご利用いただいたお客様の中から、抽選で10件のご注文に全額返金いたします。',
    en: 'Day 2: Wednesday, October 21 (from 07:00 UTC) | 30% off plus a chance to get your purchase refunded. 30% off all accounts. Among customers who use the promo code, 10 orders will be selected by lottery for a full refund.',
    ko: '2일차: 10월 21일(수) | 30% 할인 + 구매 금액 환불 기회. 모든 계정 대상 30% 할인. 프로모션 코드를 이용하신 고객 중 추첨을 통해 10건의 주문에 전액 환불해 드립니다.' },
];
