/* PROP CHECK ja-only copy of approved-provider-offers-20261018.js (2026-10-19 coupon preview). Read only by ja companies/* coupon pages; en/ko keep the 20261018 file. */
(()=>{'use strict';
const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const urls={'fundedhive-onchain':'https://fundedhive.com/','monetafunded-fx-cfd':'https://www.monetafunded.com/?coupon=PONCHAI','fundora-fx-cfd':'https://partners.fundora-trading.com/click?campaign_id=1&ref_id=147','icfunded-fx-cfd':'https://checkout.icfunded.com/products?aff=ponchai&utm_source=blog&utm_medium=social'};
const copy={ja:{title:'クーポンコード',benefit:'特典',official:'公式サイト ↗',first:'初回のみ',hantec:'初回購入 35%OFF',hive:'PFPプラン 20%OFF / Classic・Instant 10%OFF',propr:'初回チャレンジ 30%OFF',nova:'Nova Scoreの購入割引',campaign:'トレーダー応援キャンペーン',fundoraRates:'Entry・Lite・Growth：27%OFF／Standard：25%OFF／Professional・Master：23%OFF',fundoraPeriod:'期間：2026年10月19日 00:00～10月26日 23:59（日本時間）',fundoraAuto:'期間中、割引は自動適用。クーポンコードの入力は不要です。'},en:{title:'Coupon codes',benefit:'Offer',official:'Official website ↗',first:'first purchase only',hantec:'35%OFF first purchase',hive:'PFP plans 20%OFF / Classic・Instant 10%OFF',propr:'30%OFF first challenge',nova:'Nova Score purchase discount',campaign:'Trader Support Campaign',fundoraRates:'Entry / Lite / Growth: 27% OFF; Standard: 25% OFF; Professional / Master: 23% OFF',fundoraPeriod:'Oct 19, 2026 00:00 – Oct 26, 2026 23:59 (JST)',fundoraAuto:'Discounts apply automatically during the campaign; no coupon code is needed.'},ko:{title:'쿠폰 코드',benefit:'혜택',official:'공식 사이트 ↗',first:'첫 구매만',hantec:'첫 구매 35%OFF',hive:'PFP 플랜 20%OFF / Classic・Instant 10%OFF',propr:'첫 챌린지 30%OFF',nova:'Nova Score 구매 할인',campaign:'트레이더 응원 캠페인',fundoraRates:'Entry·Lite·Growth: 27% 할인 / Standard: 25% 할인 / Professional·Master: 23% 할인',fundoraPeriod:'기간: 2026년 10월 19일 00:00~10월 26일 23:59 (JST)',fundoraAuto:'기간 중 할인은 자동 적용되며 쿠폰 코드 입력은 필요하지 않습니다.'}}[lang];
const offers={'hantec-fx-cfd':[['NEW35',copy.hantec]],'fundedhive-onchain':[['PONCHAI',copy.hive]],'monetafunded-fx-cfd':[['ponchai42','42%OFF'],['PONCHAI','50%OFF ('+copy.first+')']],'icfunded-fx-cfd':[['TREAT40',{ja:'全チャレンジ 40%OFF · 11/1（日）7:59まで（日本時間）',en:'40%OFF all challenges · Until 10/31 23:59 CET',ko:'전 챌린지 40%OFF · 11/1(일) 7:59까지(한국 시간)'}[lang]]],'hypernova-onchain':[[null,copy.nova]]};
function setDestination(a,id){
 const url=urls[id];if(!url)return;
 if(a.getAttribute('href')!==url)a.setAttribute('href',url);
 if(id==='fundedhive-onchain'){
  a.removeAttribute('data-affiliate');a.rel='noopener noreferrer';
 }else if(id==='fundora-fx-cfd'||id==='icfunded-fx-cfd'){
  a.rel='sponsored noopener noreferrer';a.dataset.affiliate='true';
 }
}
function update(){
 const sid=location.pathname.match(/\/companies\/([^/]+)/)?.[1];
 document.querySelectorAll('a[href*="tradinghive.com/registration?invite="],a[href="https://fundedhive.com/"]').forEach(a=>setDestination(a,'fundedhive-onchain'));
 document.querySelectorAll('a.company-official,a.fc-signup,a.af-register,a.link-button').forEach(a=>{
  const box=a.closest('[data-company-id]'),id=box?.dataset.companyId||sid;
  if(urls[id]&&a.origin!==location.origin)setDestination(a,id);
 });
 if(!sid||(!offers[sid]&&!urls[sid]))return;
 const root=document.querySelector('#detail-root'),tabs=root?.querySelector('.detail-tabs');if(!tabs)return;
 if(root.querySelector('[data-provider-offer="'+sid+'"]'))return;
 const actions=root.querySelector('.detail-phase1-actions');
 const section=document.createElement('div');section.className=offers[sid]?'pc-provider-coupons pc19-coupon':'section-note pc-provider-links';section.dataset.companyId=sid;section.dataset.providerOffer=sid;
 if(!offers[sid])section.style.cssText='margin:12px 0;line-height:1.7;overflow-wrap:anywhere';
 if(offers[sid]){
  /* ja 2026-10-19 preview: 注目4社カードと同じ「特典｜コード」枠（左に特典、右にコード）。文言は従来のまま。 */
  const heading=sid==='fundora-fx-cfd'?copy.campaign:(sid==='hypernova-onchain'?copy.benefit:copy.title);
  section.setAttribute('role','group');section.setAttribute('aria-label',heading);
  for(const [code,label] of offers[sid]){
   const row=document.createElement('div');row.className='pc19-coupon-row'+(code?'':' pc19-coupon-row-nocode');
   const left=document.createElement('div');left.className='pc19-coupon-benefit';
   const kicker=document.createElement('small');kicker.className='pc19-coupon-kicker';kicker.textContent=sid==='fundora-fx-cfd'?copy.campaign:copy.benefit;
   const benefit=document.createElement('span');benefit.className='pc-offer-benefit pc19-coupon-label';benefit.textContent=label;
   left.append(kicker,benefit);row.append(left);
   if(code){
    const right=document.createElement('div');right.className='pc19-coupon-code';
    const head=document.createElement('div');head.className='pc19-coupon-codehead';
    const ck=document.createElement('small');ck.className='pc19-coupon-kicker';ck.textContent='コード';
    const msg=document.createElement('span');msg.className='pc19-copied';msg.textContent='コピーしました';
    head.append(ck,msg);
    const b=document.createElement('button');b.type='button';b.className='pc19-code';b.dataset.code=code;
    b.setAttribute('aria-label','クーポンコード '+code+' をコピー');b.title='クリックでコピー';
    const t=document.createElement('code');t.className='pc19-code-text';t.textContent=code;b.append(t);
    b.insertAdjacentHTML('beforeend','<span class="pc19-code-icon">'+SVG_COPY+'</span>');
    right.append(head,b);row.append(right);
   }
   section.append(row);
  }
  /* 同じ枠の2行目以降（Moneta の2つ目のコード、Fundora の期間・自動適用）は小見出しを繰り返さない */
  section.querySelectorAll('.pc19-coupon-row').forEach((r,i)=>{if(i)r.querySelectorAll('.pc19-coupon-kicker').forEach(k=>{k.hidden=true;});});
  const live=document.createElement('p');live.className='pc19-sr';live.setAttribute('aria-live','polite');section.append(live);
 }
 if(urls[sid]&&!Array.from(root.querySelectorAll('a[href]')).some(a=>a.href===urls[sid])){
  const a=document.createElement('a');a.className='link-button';a.textContent=copy.official;a.target='_blank';a.rel='noopener noreferrer';setDestination(a,sid);section.append(a);
 }
 if(offers[sid]&&actions){actions.classList.add('pc19-has-coupon');actions.prepend(section);}
 else tabs.before(section);
 if(offers[sid])watchFit(section);
}
/* 長いコードで特典欄が細くなりすぎる幅では、コードを特典の下に回す（コード自体は折り返さない） */
function fit(section){
 section.classList.remove('pc19-stack');
 const narrow=[...section.querySelectorAll('.pc19-coupon-row:not(.pc19-coupon-row-nocode) .pc19-coupon-benefit')].some(b=>b.getBoundingClientRect().width<104);
 section.classList.toggle('pc19-stack',narrow);
}
function watchFit(section){
 fit(section);
 if('ResizeObserver' in window){const ro=new ResizeObserver(()=>{if(!section.isConnected){ro.disconnect();return;}fit(section);});ro.observe(section.parentElement||section);section.querySelectorAll('.pc19-code').forEach(b=>ro.observe(b));}
}
const SVG_COPY='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const SVG_OK='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
async function copyText(code){
 try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(code);return true;}}catch(_e){}
 const ta=document.createElement('textarea');ta.value=code;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:-1000px;opacity:0';
 document.body.append(ta);ta.select();let ok=false;try{ok=document.execCommand('copy');}catch(_e){}ta.remove();return ok;
}
document.addEventListener('click',async ev=>{
 const btn=ev.target.closest&&ev.target.closest('.pc19-coupon .pc19-code');if(!btn)return;
 const code=btn.dataset.code;const ok=await copyText(code);
 const wrap=btn.closest('.pc19-coupon-code'),msg=wrap.querySelector('.pc19-copied'),live=btn.closest('.pc19-coupon').querySelector('.pc19-sr');
 msg.textContent=ok?'コピーしました':'コピーできませんでした';
 wrap.classList.add('is-copied');btn.classList.toggle('is-ok',ok);
 btn.querySelector('.pc19-code-icon').innerHTML=ok?SVG_OK:SVG_COPY;
 if(live)live.textContent=ok?'クーポンコード '+code+' をコピーしました':'コピーできませんでした。コード '+code+' を手入力してください';
 clearTimeout(btn._t);btn._t=setTimeout(()=>{wrap.classList.remove('is-copied');btn.classList.remove('is-ok');btn.querySelector('.pc19-code-icon').innerHTML=SVG_COPY;},1800);
});
let queued=false;function schedule(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;update();});}
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});update();
})();
