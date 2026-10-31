/* トップのおすすめ業者カード「特典」の期間限定差し替え（2026-10-31 YAMAAN 依頼・プレビュー・未承認）
   RZR Funded：rzr-daily-offer.js（window.RZR_DAILY_OFFERS）の今日のコードが SHORT にあるときだけ差し替え。
   Propr：期限まで差し替え。期限を過ぎたら元のカード表示（RZR は NEW35）に戻す。 */
(()=>{'use strict';
const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const T={ja:['特典','コード'],en:['Perk','Code'],ko:['혜택','코드']}[lang];
/* 日替わりコードごとの表示（[説明, 短い説明]）。新しい日のコードはここに足す。無いコードの日は元に戻る */
const RZR_SHORT={RZRUNDEAD:{ja:['全チャレンジ 50%OFF · 11/1（日）16:00まで（日本時間）','全チャレンジ 50%OFF'],en:['50% off all challenges · Until 11/1 07:00 UTC','50% off all challenges'],ko:['모든 챌린지 50% 할인 · 11/1(일) 16:00까지(한국 시간)','모든 챌린지 50% 할인']}};
function rzr(){const now=Date.now();const o=(window.RZR_DAILY_OFFERS||[]).filter(x=>x&&x.code&&Date.parse(x.start)<=now&&now<Date.parse(x.start)+864e5).sort((a,b)=>Date.parse(b.start)-Date.parse(a.start))[0];
 const s=o&&RZR_SHORT[o.code];return s?{code:o.code,l:s[lang]||s.ja}:null;}
const LIST={
 'hantec-fx-cfd':rzr,
 'propr-onchain':()=>Date.now()<Date.parse('2026-11-01T09:00:00+09:00')?{code:'SPOOKY',l:{ja:['20%OFF（ハロウィン） · 11/1（日）9:00まで（日本時間）','20%OFF（ハロウィン）'],en:['20% off (Halloween) · Until 11/1 00:00 UTC','20% off (Halloween)'],ko:['20% 할인 (핼러윈) · 11/1(일) 9:00까지(한국 시간)','20% 할인 (핼러윈)']}[lang]}:null
};
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let busy=false;
function update(){if(busy)return;busy=true;try{
 document.querySelectorAll('.featured-card[data-company-id]').forEach(card=>{
  const f=LIST[card.dataset.companyId];if(!f)return;const box=card.querySelector('.fc-offer');if(!box)return;
  if(!('pcOrig' in box.dataset)){box.dataset.pcOrig=box.innerHTML;box.dataset.pcOrigClass=box.className;}
  const o=f();const key=o?o.code+'|'+o.l[0]:'';if(box.dataset.pcKey===key)return;box.dataset.pcKey=key;
  if(!o){box.innerHTML=box.dataset.pcOrig;box.className=box.dataset.pcOrigClass;box.removeAttribute('aria-hidden');if(box.classList.contains('fc-offer-empty'))box.setAttribute('aria-hidden','true');return;}
  box.className='fc-offer';box.removeAttribute('aria-hidden');
  box.innerHTML=`<span class="fc-offer-content"><small>${esc(T[0])}</small><span class="fc-offer-label">${esc(o.l[0])}</span><span class="fc-offer-short">${esc(o.l[1])}</span></span><span class="fc-offer-code"><small>${esc(T[1])}</small><strong>${esc(o.code)}</strong></span>`;
 });}finally{busy=false;}}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update);else update();
new MutationObserver(()=>update()).observe(document.documentElement,{childList:true,subtree:true});
setInterval(update,60000);
})();
