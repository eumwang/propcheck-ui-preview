/* rank-delta-20261026: トップ比較表の今週の順位・先週からの順位変化（案C＋N1：ロゴの下に▲n/▼n/−、表の上に説明）・点数差（今週 2026-10-25 / 先週 2026-10-18）
   今週: /perf-data/66dd5bf15411201ce9817895.json (6ade5502)  先週: /perf-data/1657871162f0049e14d798fa.json (6addba2d)  値は [今週順位,先週順位,今週点,先週点] */
(()=>{'use strict';
const R=window.__pcRD={"hantec-fx-cfd":[1,1,74.68,74.68],"fundedhive-onchain":[2,2,74.1,73.92],"ftmo-fx-cfd":[3,3,71.93,71.9],"hypernova-onchain":[4,4,71.51,71.51],"propr-onchain":[5,5,70.74,70.41],"icfunded-fx-cfd":[6,7,68.55,68.55],"monetafunded-fx-cfd":[7,6,68.45,69.13],"fxify-fx-cfd":[8,8,64.79,64.79],"e8-fx-cfd":[9,9,64.68,64.68],"fundedtradermarkets-fx-cfd":[10,12,62.18,61.81],"brightfunded-fx-cfd":[11,10,62.11,61.92],"fundednext-fx-cfd":[12,11,61.93,61.84],"fundora-fx-cfd":[13,14,61,61.02],"fintokei-fx-cfd":[14,13,60.84,61.52],"fundedtradingplus-fx-cfd":[15,15,60.47,60.47],"thinkcapital-fx-cfd":[16,16,59.78,59.78],"the5ers-fx-cfd":[17,17,58.69,59.05],"funded7-fx-cfd":[18,18,56.58,56.58],"pipfarm-fx-cfd":[19,19,56.51,56.51],"blueguardian-fx-cfd":[20,20,54.61,56.12],"superfunded-fx-cfd":[21,22,54.26,54.26],"fundingpips-fx-cfd":[22,21,53.94,54.38],"tradingpit-fx-cfd":[23,24,53.24,53.24],"alpha-fx-cfd":[24,23,53.18,53.84],"instantfunding-fx-cfd":[25,25,52.18,52.18],"blueberry-fx-cfd":[26,26,50.7,50.7],"goat-fx-cfd":[27,29,45.36,45.04],"fundedelite-fx-cfd":[28,27,44.67,47.37],"tradingcult-fx-cfd":[29,28,43.32,45.8],"fundingtraders-fx-cfd":[30,30,41.74,41.74]};
const L=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const T={ja:{rank:n=>n+'位',up:p=>'先週'+p+'位から上昇',down:p=>'先週'+p+'位から下降',same:p=>'先週と同じ'+p+'位',diff:'先週との差',note:'▲▼は先週からの順位の変化、−は変化なし。点数の横の±は先週からの点数の差です。'},
 en:{rank:n=>'#'+n,up:p=>'Up from #'+p+' last week',down:p=>'Down from #'+p+' last week',same:p=>'Same as last week (#'+p+')',diff:'Change from last week',note:'▲▼ show the change in rank from last week; − means no change. The ± next to the score is the change in score from last week.'},
 ko:{rank:n=>n+'위',up:p=>'지난주 '+p+'위에서 상승',down:p=>'지난주 '+p+'위에서 하락',same:p=>'지난주와 같은 '+p+'위',diff:'지난주 대비',note:'▲▼는 지난주 대비 순위 변화, −는 변동 없음입니다. 점수 옆의 ±는 지난주 대비 점수 차이입니다.'}}[L];
const st=document.createElement('style');
st.textContent='.pc-rd-note{margin:0 0 6px;font-size:12px;line-height:1.5;color:#4b5563}.pc-rd-col{display:inline-flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;vertical-align:middle}.pc-rd-rank{display:inline-flex;align-items:center;font-size:11px;font-weight:700;line-height:1.3;white-space:nowrap;border-radius:999px;padding:1px 6px}.pc-rd-rank.pc-rd-up{background:#dcfce7}.pc-rd-rank.pc-rd-down{background:#fee2e2}.pc-rd-rank.pc-rd-same{background:#f3f4f6}.pc-rd-up{color:#15803d}.pc-rd-down{color:#c62828}.pc-rd-same{color:#6b7280}.pc-rd-diff{margin-left:6px;font-size:12px;font-weight:700;white-space:nowrap}.mc-score .pc-rd-diff{display:block;margin:2px 0 0;font-size:11px;line-height:1.1;text-align:right}';
document.head.appendChild(st);
const cls=v=>v>0?'pc-rd-up':v<0?'pc-rd-down':'pc-rd-same';
const fmt=v=>(v>0?'+':v<0?'\u2212':'\u00b1')+Math.abs(v).toFixed(2);
function rankEl(id){const r=R[id];const mv=r[1]-r[0];const s=document.createElement('span');s.className='pc-rd-rank '+cls(mv);
 s.textContent=mv>0?'\u25B2'+mv:mv<0?'\u25BC'+(-mv):'\u2212';
 const lab=(mv>0?T.up:mv<0?T.down:T.same)(r[1]);s.title=lab;s.setAttribute('aria-label',lab);return s}
function under(logo,id){if(!logo)return;let c=logo.parentElement;if(c&&c.classList.contains('pc-rd-col')){if(!c.querySelector('.pc-rd-rank'))c.appendChild(rankEl(id));return}
 c=document.createElement('span');c.className='pc-rd-col';logo.before(c);c.append(logo,rankEl(id))}
function diffEl(id){const r=R[id];const v=Math.round((r[2]-r[3])*100)/100;const s=document.createElement('span');
 s.className='pc-rd-diff '+cls(v);s.textContent=fmt(v);s.title=T.diff;s.setAttribute('aria-label',T.diff+' '+fmt(v));return s}
let busy=false;
function note(){const t=document.querySelector('#comparison-table');const sh=t&&t.closest('.table-shell');if(!sh)return;let n=document.querySelector('.pc-rd-note');if(n&&sh.previousElementSibling===n)return;if(!n){n=document.createElement('p');n.className='pc-rd-note';n.textContent=T.note}sh.before(n)}
function apply(){if(busy)return;busy=true;try{note();
 document.querySelectorAll('#comparison-table tr[data-company-id]').forEach(tr=>{const id=tr.dataset.companyId,r=R[id];if(!r)return;
  const cur=parseFloat(tr.dataset.referenceScore);const ok=isNaN(cur)||Math.abs(cur-r[2])<0.005;
  under(tr.querySelector('th .company-brand-logo'),id);
  under(tr.querySelector('.mc-logo'),id);
  tr.querySelectorAll('td[data-column="score"] .table-score, .mc-score').forEach(sc=>{const has=sc.querySelector('.pc-rd-diff');
   const num=parseFloat(sc.childNodes[0]&&sc.childNodes[0].textContent);const show=ok&&Math.abs(num-r[2])<0.005;
   if(show&&!has)sc.appendChild(diffEl(id));else if(!show&&has)has.remove();});
 });}finally{busy=false}}
let q=false;const sch=()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;apply()})};
apply();new MutationObserver(sch).observe(document.body,{childList:true,subtree:true});
})();

(()=>{const R=window.__pcRD,N=Object.keys(R).length,V='R4';
const st=document.createElement('style');st.textContent='.pc-rk.r4{display:block;font-size:12px;font-weight:700;color:#374151;margin:2px 0 4px}.pc-rk.r4m{display:block;font-size:10px;font-weight:700;color:#374151;text-align:right;line-height:1.2;margin-top:1px}';document.head.appendChild(st);
const mk=(id,cls,txt)=>{const s=document.createElement('span');s.className='pc-rk '+cls;s.textContent=txt;return s};
function run(){document.querySelectorAll('#comparison-table tr[data-company-id]').forEach(tr=>{const id=tr.dataset.companyId,r=R[id];if(!r)return;const n=r[0];
 const ts=tr.querySelector('td[data-column="score"] .table-score'),ms=tr.querySelector('.mc-score');
 if(V==='R1'){if(ts&&!ts.querySelector('.pc-rk'))ts.appendChild(mk(id,'r1',n+'/'+N+'位'));if(ms&&!ms.querySelector('.pc-rk'))ms.appendChild(mk(id,'r1m',n+'/'+N+'位'));}
 if(V==='R2'){if(ts&&!ts.parentElement.querySelector('.pc-rk'))ts.before(mk(id,'r2',n+'位'));if(ms&&!ms.querySelector('.pc-rk'))ms.prepend(mk(id,'r2m',n+'位'));}
 if(V==='R3'){const th=tr.querySelector('th .company-cell-layout');if(th&&!th.querySelector(':scope>.pc-rk'))th.prepend(mk(id,'r3',n+'位'));const mt=tr.querySelector('.mc-toggle');if(mt&&!mt.querySelector(':scope>.pc-rk'))mt.prepend(mk(id,'r3',n+'位'));}
 if(V==='R4'){if(ts&&!ts.parentElement.querySelector('.pc-rk'))ts.after(mk(id,'r4','総合 '+n+'位 / '+N+'社'));if(ms&&!ms.querySelector('.pc-rk'))ms.appendChild(mk(id,'r4m','総合 '+n+'位 / '+N+'社'));}
});}
let q=0;new MutationObserver(()=>{if(q)return;q=1;requestAnimationFrame(()=>{q=0;run()})}).observe(document.body,{childList:true,subtree:true});run();})();
