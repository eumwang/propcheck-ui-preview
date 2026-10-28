/* PROP CHECK × RZR Funded 広告枠「本日のクーポン」データ（毎日 16:00 JST に、このファイル1本だけを差し替える）
   ルール：開始時刻を過ぎたエントリーだけをこのファイルに書く（未来のクーポンコードは絶対に書かない・push しない）。
   形式：{ start: 'YYYY-MM-DDTHH:MM:SS+09:00', code: 'コード', ja: '説明（日本語）', en: 'description (English)', ko: '설명（韓国語・任意）', image: '任意。画像パス', alt: '画像の代替テキスト' }
   表示されるのは start が現在時刻以前のうち最新の1件。空配列なら枠は出ない。 */
window.RZR_DAILY_OFFERS = [
  { start: '2026-10-21T16:00:00+09:00', code: 'RZRRESET',
    ja: '2日目：10月21日（水）｜30％オフ＋購入代金の払い戻しを受けられるチャンス。全アカウント対象で30％割引。プロモーションコードをご利用いただいたお客様の中から、抽選で10件のご注文に全額返金いたします。',
    en: 'Day 2: Wednesday, October 21 (from 07:00 UTC) | 30% off plus a chance to get your purchase refunded. 30% off all accounts. Among customers who use the promo code, 10 orders will be selected by lottery for a full refund.',
    ko: '2일차: 10월 21일(수) | 30% 할인 + 구매 금액 환불 기회. 모든 계정 대상 30% 할인. 프로모션 코드를 이용하신 고객 중 추첨을 통해 10건의 주문에 전액 환불해 드립니다.' },
  { start: '2026-10-22T16:00:00+09:00', code: 'RZRPAYDAY',
    ja: '3日目：10月22日（木）｜20％オフ＋最大1,000ドルの現金プレゼント。全アカウント対象で20％割引。プロモーションコードをご利用いただいたお客様の中から、抽選で3名様に現金賞品をプレゼントいたします。1等賞：1,000ドル / 2等賞：500ドル / 3等賞：250ドル',
    en: 'Day 3: Thursday, October 22 (from 07:00 UTC) | 20% off plus up to $1,000 in cash prizes. 20% off all accounts. Among customers who use the promo code, 3 winners will be selected by lottery to receive cash prizes. 1st prize: $1,000 / 2nd prize: $500 / 3rd prize: $250',
    ko: '3일차: 10월 22일(목) | 20% 할인 + 최대 1,000달러 현금 증정. 모든 계정 대상 20% 할인. 프로모션 코드를 이용하신 고객 중 추첨을 통해 3분께 현금 상품을 드립니다. 1등: 1,000달러 / 2등: 500달러 / 3등: 250달러' },
  { start: '2026-10-23T16:00:00+09:00', code: 'RZRSHIFT',
    ja: '4日目：10月23日（金）｜全プログラム20％オフ＋日次ドローダウン+1％。全プログラム対象で20％割引。日次ドローダウンが1％上乗せされます。〜10/24 15:59まで（日本時間）',
    en: 'Day 4: Friday, October 23 (from 07:00 UTC) | 20% off all programs plus +1% daily drawdown. 20% off all programs, with an extra 1% added to the daily drawdown. Until Oct 24, 06:59 UTC',
    ko: '4일차: 10월 23일(금) | 전 프로그램 20% 할인 + 일일 드로다운 +1%. 모든 프로그램 대상 20% 할인. 일일 드로다운이 1% 추가됩니다. 10/24 15:59까지(한국 시간)' },
  { start: '2026-10-24T16:00:00+09:00', code: 'RZRFLASH',
    ja: '5日目：10月24日（土）｜40％オフ。〜10/25 15:59まで（日本時間）',
    en: 'Day 5: Saturday, October 24 (from 07:00 UTC) | 40% off. Until Oct 25, 06:59 UTC',
    ko: '5일차: 10월 24일(토) | 40% 할인. 10/25 15:59까지(한국 시간)' },
  { start: '2026-10-25T16:00:00+09:00', code: 'RZREASEUP',
    ja: '6日目：10月25日（日）｜25％オフ＋利益目標-1％。利益目標が1％引き下げられます。〜10/26 15:59まで（日本時間）',
    en: 'Day 6: Sunday, October 25 (from 07:00 UTC) | 25% off plus -1% profit target. The profit target is lowered by 1%. Until Oct 26, 06:59 UTC',
    ko: '6일차: 10월 25일(일) | 25% 할인 + 수익 목표 -1%. 수익 목표가 1% 낮아집니다. 10/26 15:59까지(한국 시간)' },
  { start: '2026-10-26T16:00:00+09:00', code: 'RZRBOGO',
    ja: '7日目：10月26日（月）｜全プログラム20％オフ＋BOGO（1口座買うと2口座）。10/27（火）16:00まで（日本時間）',
    en: 'Day 7: Monday, October 26 (from 07:00 UTC) | 20% off all programs plus BOGO (buy 1 account, get 2). Until 10/27 07:00 UTC',
    ko: '7일차: 10월 26일(월) | 전 프로그램 20% 할인 + BOGO(계정 1개 구매 시 2개). 10/27(화) 16:00까지(한국 시간)' },
];
