/* Progressive disclosure: overview previews only, never the full report tab. */
(()=>{'use strict';
 const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
 const words={ja:n=>`残り${n}件の報告を表示`,en:n=>`Show ${n} more reports`,ko:n=>`보고 ${n}건 더 보기`};
 const close={ja:'閉じる（最新2件のみ）',en:'Show only the latest 2',ko:'접기 · 최신 2건만 표시'};
 function update(){
  document.querySelectorAll('#detail-root section').forEach(section=>{
   const heading=section.querySelector('h3')?.textContent||'';
   if(!/最近の本人報告|Recent firsthand reports|최근 본인 보고/.test(heading))return;
   const list=section.querySelector('.detail-phase2-report-list,.fundedelite-evidence-list')||section;
   if(list.dataset.reportFold)return;
   const rows=Array.from(list.children).filter(e=>e.matches('article'));
   if(rows.length<=2)return;
   list.dataset.reportFold='true';
   const details=document.createElement('details');details.className='report-preview-more';
   const summary=document.createElement('summary');
   summary.textContent=words[lang](rows.length-2);details.append(summary);
   rows[2].before(details);rows.slice(2).forEach(row=>details.append(row));
   const end=document.createElement('button');end.type='button';end.className='report-preview-close';end.textContent=close[lang];
   end.addEventListener('click',()=>{details.open=false;summary.focus();});details.append(end);
   details.addEventListener('toggle',()=>{summary.textContent=details.open?close[lang]:words[lang](rows.length-2);});
  });
 }
 function start(){const root=document.querySelector('#detail-root');if(!root)return;new MutationObserver(update).observe(root,{childList:true,subtree:true});update();}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
