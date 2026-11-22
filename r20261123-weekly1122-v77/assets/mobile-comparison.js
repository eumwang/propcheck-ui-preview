/* Summary is derived from the rendered row; no copied score dataset. */
(()=>{'use strict';
const body=document.querySelector('#comparison-body');if(!body)return;
const lang=document.documentElement.lang.slice(0,2),t=({ja:['業者詳細 ↗','詳細を開く','詳細を閉じる','評価の内訳','口コミの内訳','出金・問題報告'],en:['Firm details ↗','Expand details','Collapse details','Score breakdown','Review breakdown','Payouts & issues'],ko:['업체 상세 ↗','상세 펼치기','상세 접기','점수 내역','후기 내역','출금·문제 보고']})[lang]||['Firm details ↗','Expand details','Collapse details','Score breakdown','Review breakdown','Payouts & issues'];
const el=(tag,cls,text)=>{const e=document.createElement(tag);e.className=cls;if(text)e.textContent=text;return e;};
let queued=false;
function enhance(){queued=false;body.querySelectorAll('tr[data-company-id]').forEach(row=>{
 const th=row.querySelector('th'),copy=th?.querySelector('.company-cell-copy'),footer=row.nextElementSibling;
 const toggle=footer?.classList.contains('fold-footer')&&footer.querySelector('.fold-toggle');
 const detail=copy?.querySelector('.comparison-detail-link'),name=copy?.querySelector('.company-name')?.textContent.trim();
 const score=row.dataset.referenceScore||row.querySelector('.table-score')?.childNodes[0]?.textContent.trim();
 if(!th||!name||!detail||!toggle||!score)return;
 let summary=th.querySelector('.mc-summary');
 if(!summary){summary=el('div','mc-summary');th.append(summary);}
 const logo=th.querySelector('.company-brand-logo img');
 const meta=[copy.querySelector('.market-chip')?.textContent,...Array.from(copy.querySelectorAll('.signal-tags-company .signal-tag')).map(x=>x.textContent)].filter(Boolean).join(' · ');
 const official=copy.querySelector('.company-official');
 const sig=JSON.stringify([name,score,logo?.getAttribute('src'),meta,detail.getAttribute('href'),official?.getAttribute('href'),official?.textContent]);
 if(summary.dataset.signature!==sig){
  const b=el('button','mc-toggle');b.type='button';
  if(logo){const image=el('img','mc-logo');image.src=logo.getAttribute('src');image.alt='';image.loading='lazy';image.referrerPolicy='no-referrer';b.append(image);}else b.append(el('span','mc-logo'));
  b.append(el('span','mc-name',name));const value=el('span','mc-score',score);value.append(el('small','','/100'));b.append(value,el('span','mc-arrow'));
  b.addEventListener('click',()=>toggle.click());
  const bottom=el('div','mc-bottom'),a=el('a','mc-detail',t[0]);a.href=detail.getAttribute('href');bottom.append(el('span','mc-meta',meta),a);
  const links=el('div','mc-official');if(official){const link=official.cloneNode(true);link.removeAttribute('class');links.append(link);}
  summary.replaceChildren(b,bottom,links);summary.dataset.signature=sig;
 }
 const controls=[];['score','ai','events'].forEach((column,i)=>{const cell=row.querySelector('[data-column="'+column+'"]');if(cell){cell.classList.add('mc-detail-cell');if(!cell.id)cell.id='mc-'+row.dataset.companyId+'-'+column;if(cell.dataset.mobileHeading!==t[i+3])cell.dataset.mobileHeading=t[i+3];controls.push(cell.id);}});
 row.dataset.mcReady='true';const b=summary.querySelector('button'),open=row.classList.contains('fold-open');
 for(const [key,value]of Object.entries({'aria-expanded':String(open),'aria-controls':controls.join(' '),'aria-label':name+' — '+t[open?2:1]})){if(b.getAttribute(key)!==value)b.setAttribute(key,value);}
});}
function schedule(){if(!queued){queued=true;queueMicrotask(enhance);}}
new MutationObserver(schedule).observe(body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:['data-reference-score']});
body.addEventListener('click',()=>schedule());
enhance();
})();
