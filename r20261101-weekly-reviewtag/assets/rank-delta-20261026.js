/* rank-delta-20261026: トップ比較表の今週の順位・先週からの順位変化・点数差（今週 2026-10-25 / 先週 2026-10-18）
   今週: /perf-data/66dd5bf15411201ce9817895.json (6ade5502)  先週: /perf-data/1657871162f0049e14d798fa.json (6addba2d)  値は [今週順位,先週順位,今週点,先週点] */
(()=>{'use strict';
const R={"hantec-fx-cfd":[1,1,74.68,74.68],"fundedhive-onchain":[2,2,74.1,73.92],"ftmo-fx-cfd":[3,3,71.93,71.9],"hypernova-onchain":[4,4,71.51,71.51],"propr-onchain":[5,5,70.74,70.41],"icfunded-fx-cfd":[6,7,68.55,68.55],"monetafunded-fx-cfd":[7,6,68.45,69.13],"fxify-fx-cfd":[8,8,64.79,64.79],"e8-fx-cfd":[9,9,64.68,64.68],"fundedtradermarkets-fx-cfd":[10,12,62.18,61.81],"brightfunded-fx-cfd":[11,10,62.11,61.92],"fundednext-fx-cfd":[12,11,61.93,61.84],"fundora-fx-cfd":[13,14,61,61.02],"fintokei-fx-cfd":[14,13,60.84,61.52],"fundedtradingplus-fx-cfd":[15,15,60.47,60.47],"thinkcapital-fx-cfd":[16,16,59.78,59.78],"the5ers-fx-cfd":[17,17,58.69,59.05],"funded7-fx-cfd":[18,18,56.58,56.58],"pipfarm-fx-cfd":[19,19,56.51,56.51],"blueguardian-fx-cfd":[20,20,54.61,56.12],"superfunded-fx-cfd":[21,22,54.26,54.26],"fundingpips-fx-cfd":[22,21,53.94,54.38],"tradingpit-fx-cfd":[23,24,53.24,53.24],"alpha-fx-cfd":[24,23,53.18,53.84],"instantfunding-fx-cfd":[25,25,52.18,52.18],"blueberry-fx-cfd":[26,26,50.7,50.7],"goat-fx-cfd":[27,29,45.36,45.04],"fundedelite-fx-cfd":[28,27,44.67,47.37],"tradingcult-fx-cfd":[29,28,43.32,45.8],"fundingtraders-fx-cfd":[30,30,41.74,41.74]};
const L=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const T={ja:{rank:n=>n+'位',up:p=>'先週'+p+'位から上昇',down:p=>'先週'+p+'位から下降',same:p=>'先週と同じ'+p+'位',diff:'先週との差'},
 en:{rank:n=>'#'+n,up:p=>'Up from #'+p+' last week',down:p=>'Down from #'+p+' last week',same:p=>'Same as last week (#'+p+')',diff:'Change from last week'},
 ko:{rank:n=>n+'위',up:p=>'지난주 '+p+'위에서 상승',down:p=>'지난주 '+p+'위에서 하락',same:p=>'지난주와 같은 '+p+'위',diff:'지난주 대비'}}[L];
const st=document.createElement('style');
st.textContent='.pc-rd-rank{display:inline-flex;align-items:center;gap:2px;margin-left:6px;font-size:12px;font-weight:700;color:#4b5563;white-space:nowrap;vertical-align:middle}.pc-rd-up{color:#15803d}.pc-rd-down{color:#c62828}.pc-rd-same{color:#6b7280}.pc-rd-diff{margin-left:6px;font-size:12px;font-weight:700;white-space:nowrap}.mc-score .pc-rd-diff{display:block;margin:2px 0 0;font-size:11px;line-height:1.1;text-align:right}.mc-name .pc-rd-rank{margin-left:5px;font-size:11px}';
document.head.appendChild(st);
const cls=v=>v>0?'pc-rd-up':v<0?'pc-rd-down':'pc-rd-same';
const fmt=v=>(v>0?'+':v<0?'\u2212':'\u00b1')+Math.abs(v).toFixed(2);
function rankEl(id){const r=R[id];const s=document.createElement('span');s.className='pc-rd-rank';
 const mv=r[1]-r[0];const a=document.createElement('span');a.className=cls(mv);a.textContent=mv>0?'\u2191':mv<0?'\u2193':'\u2192';
 const lab=(mv>0?T.up:mv<0?T.down:T.same)(r[1]);a.title=lab;a.setAttribute('aria-label',lab);
 const n=document.createElement('span');n.textContent=T.rank(r[0]);s.append(n,a);return s}
function diffEl(id){const r=R[id];const v=Math.round((r[2]-r[3])*100)/100;const s=document.createElement('span');
 s.className='pc-rd-diff '+cls(v);s.textContent=fmt(v);s.title=T.diff;s.setAttribute('aria-label',T.diff+' '+fmt(v));return s}
let busy=false;
function apply(){if(busy)return;busy=true;try{
 document.querySelectorAll('#comparison-table tr[data-company-id]').forEach(tr=>{const id=tr.dataset.companyId,r=R[id];if(!r)return;
  const cur=parseFloat(tr.dataset.referenceScore);const ok=isNaN(cur)||Math.abs(cur-r[2])<0.005;
  const nm=tr.querySelector('.homepage-company-heading .company-name');
  if(nm&&!(nm.nextElementSibling&&nm.nextElementSibling.classList.contains('pc-rd-rank')))nm.after(rankEl(id));
  const mn=tr.querySelector('.mc-name');
  if(mn&&!mn.querySelector('.pc-rd-rank'))mn.appendChild(rankEl(id));
  tr.querySelectorAll('td[data-column="score"] .table-score, .mc-score').forEach(sc=>{const has=sc.querySelector('.pc-rd-diff');
   const num=parseFloat(sc.childNodes[0]&&sc.childNodes[0].textContent);const show=ok&&Math.abs(num-r[2])<0.005;
   if(show&&!has)sc.appendChild(diffEl(id));else if(!show&&has)has.remove();});
 });}finally{busy=false}}
let q=false;const sch=()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;apply()})};
apply();new MutationObserver(sch).observe(document.body,{childList:true,subtree:true});
})();
