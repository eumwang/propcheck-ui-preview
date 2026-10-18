(()=>{'use strict';
const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const urls={'fundedhive-onchain':'https://fundedhive.com/','monetafunded-fx-cfd':'https://www.monetafunded.com/?coupon=PONCHAI','fundora-fx-cfd':'https://partners.fundora-trading.com/click?campaign_id=1&ref_id=147','icfunded-fx-cfd':'https://checkout.icfunded.com/products?aff=ponchai&utm_source=blog&utm_medium=social'};
const copy={ja:{title:'クーポンコード',benefit:'特典',official:'公式サイト ↗',first:'初回のみ',hantec:'初回購入 35%OFF',hive:'PFPプラン 20%OFF / Classic・Instant 10%OFF',propr:'初回チャレンジ 30%OFF',nova:'Nova Scoreの購入割引'},en:{title:'Coupon codes',benefit:'Offer',official:'Official website ↗',first:'first purchase only',hantec:'35%OFF first purchase',hive:'PFP plans 20%OFF / Classic・Instant 10%OFF',propr:'30%OFF first challenge',nova:'Nova Score purchase discount'},ko:{title:'쿠폰 코드',benefit:'혜택',official:'공식 사이트 ↗',first:'첫 구매만',hantec:'첫 구매 35%OFF',hive:'PFP 플랜 20%OFF / Classic・Instant 10%OFF',propr:'첫 챌린지 30%OFF',nova:'Nova Score 구매 할인'}}[lang];
const offers={'hantec-fx-cfd':[['NEW35',copy.hantec]],'fundedhive-onchain':[['PONCHAI',copy.hive]],'propr-onchain':[['OWNTHEHOUSE',copy.propr]],'monetafunded-fx-cfd':[['ponchai42','42%OFF'],['PONCHAI','50%OFF ('+copy.first+')']],'icfunded-fx-cfd':[['40FOR40','40%OFF · '+({ja:'期限未確認',en:'Expiry unconfirmed',ko:'종료일 미확인'}[lang])]],'hypernova-onchain':[[null,copy.nova]]};
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
 const section=document.createElement('div');section.className='section-note '+(offers[sid]?'pc-provider-coupons':'pc-provider-links');section.dataset.companyId=sid;section.dataset.providerOffer=sid;section.style.cssText='margin:12px 0;line-height:1.7;overflow-wrap:anywhere';
 if(offers[sid]){
  const title=document.createElement('strong');title.textContent=sid==='hypernova-onchain'?copy.benefit:copy.title;section.append(title);
  for(const [code,label] of offers[sid]){
   const row=document.createElement('p');row.style.margin='4px 0';
   const benefit=document.createElement('span');benefit.className='pc-offer-benefit';benefit.textContent=label;benefit.style.display='block';row.append(benefit);
   if(code){const c=document.createElement('code');c.textContent=code;c.style.cssText='display:block;font-weight:700;user-select:all;white-space:nowrap;overflow-wrap:normal;word-break:normal';row.append(c);}
   section.append(row);
  }
 }
 if(urls[sid]&&!Array.from(root.querySelectorAll('a[href]')).some(a=>a.href===urls[sid])){
  const a=document.createElement('a');a.className='link-button';a.textContent=copy.official;a.target='_blank';a.rel='noopener noreferrer';setDestination(a,sid);section.append(a);
 }
 tabs.before(section);
}
let queued=false;function schedule(){if(queued)return;queued=true;queueMicrotask(()=>{queued=false;update();});}
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});update();
})();
