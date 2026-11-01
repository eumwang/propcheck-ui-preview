(()=>{
const expanded=new Set();
let alignmentPending=false;
function alignColumns(){
 if(alignmentPending)return;alignmentPending=true;
 requestAnimationFrame(()=>{
  const rows=[...document.querySelectorAll('#comparison-body tr[data-company-id]')];
  rows.forEach(r=>r.querySelectorAll('.overall-score-compact,.table-sentiment,.report-bars').forEach(e=>e.style.minHeight=''));
  if(innerWidth>650)rows.filter(r=>!r.classList.contains('fold-open')).forEach(r=>{
   const blocks=[r.querySelector('.company-cell-layout'),r.querySelector('.overall-score-compact'),r.querySelector('.table-sentiment'),r.querySelector('.report-bars')].filter(Boolean);
   const height=Math.max(...blocks.map(e=>e.getBoundingClientRect().height));
   blocks.slice(1).forEach(e=>e.style.minHeight=height+'px');
  });alignmentPending=false;
 });
}
addEventListener('resize',alignColumns);document.fonts?.ready.then(alignColumns);
const officialLinks={"icfunded-fx-cfd":{"url":"https://checkout.icfunded.com/products?aff=ponchai&utm_source=blog&utm_medium=social","affiliate":true},"ftmo-fx-cfd":{"url":"https://ftmo.com/","affiliate":false},"the5ers-fx-cfd":{"url":"https://the5ers.com/","affiliate":false},"fundednext-fx-cfd":{"url":"https://fundednext.com/","affiliate":false},"fundingpips-fx-cfd":{"url":"https://fundingpips.com/","affiliate":false},"e8-fx-cfd":{"url":"https://e8markets.com/","affiliate":false},"alpha-fx-cfd":{"url":"https://alphacapitalgroup.uk/","affiliate":false},"fxify-fx-cfd":{"url":"https://fxify.com/","affiliate":false},"blueguardian-fx-cfd":{"url":"https://blueguardian.com/","affiliate":false},"fundedelite-fx-cfd":{"url":"https://fundedelite.com/","affiliate":false},"goat-fx-cfd":{"url":"https://goatfundedtrader.com/","affiliate":false},"thinkcapital-fx-cfd":{"url":"https://www.thinkcapital.com/","affiliate":false},"brightfunded-fx-cfd":{"url":"https://brightfunded.com/","affiliate":false},"fundedtradingplus-fx-cfd":{"url":"https://fundedtradingplus.com/","affiliate":false},"instantfunding-fx-cfd":{"url":"https://instantfunding.com/","affiliate":false},"tradingpit-fx-cfd":{"url":"https://thetradingpit.com/","affiliate":false},"fintokei-fx-cfd":{"url":"https://fintokei.com/","affiliate":false},"fundingtraders-fx-cfd":{"url":"https://fundingtraders.com/","affiliate":false},"propr-onchain":{"url":"https://app.propr.xyz/r/PONCHAI","affiliate":true},"hypernova-onchain":{"url":"https://hn.xyz/r/akv3u9","affiliate":true},"hantec-fx-cfd":{"url":"https://dashboard.rzrfunded.com/purchasechallenge?affiliateId=2907&lang=jp","affiliate":true},"fundedhive-onchain":{"url":"https://fundedhive.com/","affiliate":false},"pipfarm-fx-cfd":{"url":"https://pipfarm.com/","affiliate":false},"fundedtradermarkets-fx-cfd":{"url":"https://fundedtradermarkets.com/","affiliate":false},"funded7-fx-cfd":{"url":"https://funded7.com/ja/","affiliate":false},"tradingcult-fx-cfd":{"url":"https://tradingcult.com/ja/","affiliate":false},"blueberry-fx-cfd":{"url":"https://blueberryfunded.com/","affiliate":false},"fundora-fx-cfd":{"url":"https://partners.fundora-trading.com/click?campaign_id=1&ref_id=147","affiliate":true},"monetafunded-fx-cfd":{"url":"https://www.monetafunded.com/?coupon=PONCHAI","affiliate":false},"superfunded-fx-cfd":{"url":"https://superfunded.com/","affiliate":false}};
function enhance(){document.querySelectorAll('#comparison-body tr[data-company-id]').forEach(r=>{
 if(r.dataset.foldReady||!r.querySelector('.ux183-row-tools'))return;
 r.dataset.foldReady='true';const id=r.dataset.companyId;
 r.querySelectorAll('[data-column=score] .signal-tags-score').forEach(tags=>tags.remove());
 const warning=r.querySelector('.ux183-warning'),copy=r.querySelector('.company-cell-copy');
 if(warning&&copy){warning.textContent='⚠ Caution';warning.classList.add('fold-warning');const link=copy.querySelector('.comparison-detail-link');link.before(warning);}
 const detail=copy?.querySelector('.comparison-detail-link');
 if(detail){const actions=document.createElement('div');actions.className='company-actions';detail.before(actions);detail.textContent='Details →';actions.append(detail);const name=copy.querySelector('.company-name');if(name){const a=document.createElement('a');a.href=detail.href;a.className='company-name-link';a.textContent=name.textContent;if(name.tagName==='A'){name.href=detail.href;name.classList.add('company-name-link');}else name.replaceChildren(a);}const target=officialLinks[id];if(target){const a=document.createElement('a');a.href=target.url;a.target='_blank';a.rel='noopener noreferrer'+(target.affiliate?' sponsored':'');a.className='company-official';a.textContent='Official ↗';a.title=target.affiliate?'Official website (referral link)':'Official website';actions.append(a);}}
 const b=document.createElement('button');b.className='fold-toggle';b.type='button';
 const sync=()=>{const open=expanded.has(id);r.classList.toggle('fold-open',open);b.textContent=open?'Close ▲':'Show comparison data ▾';b.setAttribute('aria-expanded',String(open));alignColumns();};
 b.onclick=()=>{expanded.has(id)?expanded.delete(id):expanded.add(id);sync();};
 const footer=document.createElement('tr');footer.className='fold-footer';const cell=document.createElement('td');cell.colSpan=4;cell.append(b);footer.append(cell);r.after(footer);sync();
});}
const body=document.querySelector('#comparison-body');if(body){new MutationObserver(enhance).observe(body,{childList:true,subtree:true});enhance();}
function enhanceFeatured(){
 const grid=document.querySelector('#featured-grid');if(!grid)return;
 const cards=[...grid.querySelectorAll('.featured-card')];
 cards.forEach(card=>{
  const heading=card.querySelector('h3');
  if(heading&&!heading.querySelector('img')){
   const source=document.querySelector('#comparison-body tr[data-company-id="'+card.dataset.companyId+'"] .company-brand-logo img');
   if(source){const logo=source.cloneNode(true);logo.className='featured-company-logo';logo.alt='';heading.prepend(logo);}
  }
 });
 const ordered=[...cards].sort((a,b)=>Number(b.querySelector('.ux184-total strong')?.textContent||0)-Number(a.querySelector('.ux184-total strong')?.textContent||0));
 if(ordered.some((card,i)=>card!==cards[i]))ordered.forEach(card=>grid.append(card));
 const intro=document.querySelector('#featured .featured-heading p:not(.home-kicker)');
 const text='These four featured firms are ordered by overall reference score. Compare the three components and firsthand reports too.';
 if(intro&&intro.textContent!==text)intro.textContent=text;
}
const featured=document.querySelector('#featured');
if(featured)new MutationObserver(enhanceFeatured).observe(featured,{childList:true,subtree:true,characterData:true});
if(body)new MutationObserver(enhanceFeatured).observe(body,{childList:true,subtree:true});
enhanceFeatured();
})();
