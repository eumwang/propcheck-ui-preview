/* rankchg 案：順位・変動表示をロゴの下へ移す（データは rank-delta-20261026.js の表示をそのまま使う） */
(()=>{const V=(document.documentElement.dataset.rkv||'A');
const css={
common:'.rk-col{display:inline-flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;vertical-align:middle}.rk-col .pc-rd-rank{margin:0!important;line-height:1.1}',
A:'.rk-col .pc-rd-rank{gap:3px;font-size:11px}.rk-col .pc-rd-rank>span:first-child{background:#f3f4f6;border:1px solid #d1d5db;border-radius:4px;padding:1px 4px;color:#374151}.rk-col .pc-rd-rank>span:last-child{border-radius:999px;padding:0 5px;font-size:11px}.rk-col .pc-rd-up{background:#dcfce7}.rk-col .pc-rd-down{background:#fee2e2}.rk-col .pc-rd-same{background:#f3f4f6}',
B:'.rk-col .pc-rd-rank>span:first-child{display:none}.rk-col .pc-rd-rank>span:last-child{font-size:15px;font-weight:800}',
C:'.rk-col .pc-rd-rank>span:first-child{display:none}.rk-col .pc-rd-rank>span:last-child{border-radius:999px;padding:1px 6px;font-size:11px;line-height:1.3}.rk-col .pc-rd-up{background:#dcfce7}.rk-col .pc-rd-down{background:#fee2e2}.rk-col .pc-rd-same{background:#f3f4f6}',
D:'.rk-col .pc-rd-rank{flex-direction:column;gap:0}.rk-col .pc-rd-rank>span:first-child{font-size:12px;color:#374151}.rk-col .pc-rd-rank>span:last-child{font-size:13px;line-height:1}'};
const st=document.createElement('style');st.textContent=css.common+'.homepage-company-heading>.pc-rd-rank,.mc-name>.pc-rd-rank{display:none!important}'+css[V];document.head.appendChild(st);
function move(logo,orig){if(!logo||!orig)return;let col=logo.parentElement;if(col.classList.contains('rk-col')&&col.querySelector('.pc-rd-rank'))return;const rank=orig.cloneNode(true);
 if(!col.classList.contains('rk-col')){col=document.createElement('span');col.className='rk-col';logo.before(col);col.appendChild(logo)}
 col.appendChild(rank);
 if(V==='C'){const a=rank.lastElementChild;const m=(a.getAttribute('aria-label')||'').match(/(\d+)/);const cur=parseInt(rank.firstElementChild.textContent);
  if(m&&!a.dataset.rk){const d=parseInt(m[1])-cur;a.textContent=d>0?'\u25B2'+d:d<0?'\u25BC'+(-d):'\u2192';a.dataset.rk=1}}}
function run(){document.querySelectorAll('#comparison-table tr[data-company-id]').forEach(tr=>{
 const h=tr.querySelector('.homepage-company-heading>.pc-rd-rank');if(h)move(tr.querySelector('.company-brand-logo'),h);
 const m=tr.querySelector('.mc-name>.pc-rd-rank');if(m)move(tr.querySelector('.mc-logo'),m);})}
let q=0;new MutationObserver(()=>{if(q)return;q=1;requestAnimationFrame(()=>{q=0;run()})}).observe(document.documentElement,{childList:true,subtree:true});
document.addEventListener('DOMContentLoaded',run);run();})();
