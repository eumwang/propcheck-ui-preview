/* PROP CHECK en/ko: data cutoff from site-dates.json (same rule as ja weekly-scope-ja-dw20261019.js). */
(()=>{const lang=(document.documentElement.lang||'en').slice(0,2)==='ko'?'ko':'en';
const M=['January','February','March','April','May','June','July','August','September','October','November','December'];
const fmt=v=>{const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(v||''));if(!m)return null;return lang==='ko'?`${+m[1]}년 ${+m[2]}월 ${+m[3]}일`:`${M[+m[2]-1]} ${+m[3]}, ${m[1]}`;};
const pre={en:'Data cutoff: ',ko:'데이터 마감: '}[lang];let text=null,none=false;
fetch('/ja-v204/data/site-dates.json').then(r=>r.ok?r.json():null).catch(()=>null).then(d=>{const t=d&&(fmt(d.reflected_at)||fmt(d.review_cutoff));if(t)text=pre+t;else none=true;schedule();});
function refresh(){const a=document.querySelector('#as-of');if(!a)return;if(none){if(!a.hidden||a.textContent){a.textContent='';a.hidden=true;}return;}
if(!text){if(a.textContent!=='—')a.textContent='—';return;}if(a.textContent!==text){a.textContent=text;a.removeAttribute('title');}}
let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});schedule();})();
