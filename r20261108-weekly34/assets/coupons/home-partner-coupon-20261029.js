/* ホームのクーポン欄：RZR の「本日のクーポン」枠の中（下の空き）に Moneta Funded の TRADE55 を並べる（2026-10-29 PONCHAI 依頼・未承認）
   見た目は rzr-ad.css の .rzr-offer をそのまま使う。期限を過ぎたら何も出さない。 */
(()=>{'use strict';
const OFFERS=[{id:'moneta',code:'TRADE55',until:'2026-11-01T00:00:00+09:00',
 ja:{h:'Moneta Funded のクーポン',d:'55%OFF（10/31まで）',copy:'コピー',copied:'コピーしました'},
 en:{h:'Moneta Funded coupon',d:'55% OFF (until 10/31)',copy:'Copy',copied:'Copied'},
 ko:{h:'Moneta Funded 쿠폰',d:'55% 할인 (10/31까지)',copy:'복사',copied:'복사했습니다'}}];
function render(){
 document.querySelectorAll('[data-rzr-daily-offer]').forEach(rzr=>{
  const lang=rzr.dataset.lang||'ja';
  OFFERS.forEach(o=>{
   const sel='[data-partner-coupon="'+o.id+'"]';let box=rzr.querySelector(sel);
   if(Date.now()>=Date.parse(o.until)){if(box)box.remove();return;}
   if(box)return;
   const L=o[lang]||o.ja;
   box=document.createElement('div');box.className='pc-partner-coupon';box.dataset.partnerCoupon=o.id;box.style.cssText='margin-top:14px;padding-top:12px;border-top:1px dashed currentColor;border-top-color:rgba(255,184,0,.35)';
   const h=document.createElement('h3');h.textContent=L.h;
   const p=document.createElement('p');p.className='rzr-offer-desc';p.textContent=L.d;
   const row=document.createElement('div');row.className='rzr-offer-row';
   const c=document.createElement('code');c.className='rzr-offer-code';c.textContent=o.code;
   const b=document.createElement('button');b.type='button';b.className='rzr-offer-copy';b.textContent=L.copy;
   const st=document.createElement('span');st.className='rzr-offer-status';st.setAttribute('role','status');st.setAttribute('aria-live','polite');
   b.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(o.code);}catch(_e){const r=document.createRange();r.selectNodeContents(c);const s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand&&document.execCommand('copy');}st.textContent=L.copied;setTimeout(()=>{st.textContent='';},2000);});
   row.append(c,b,st);box.append(h,p,row);rzr.append(box);
  });
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
/* 日替わり枠が描き直されたら付け直す */
new MutationObserver(()=>render()).observe(document.documentElement,{childList:true,subtree:true});
})();
