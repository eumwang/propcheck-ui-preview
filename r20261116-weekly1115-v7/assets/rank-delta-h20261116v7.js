/* rank-delta-h20261116v7: 11/15 v7 31 firms. NEW, low-review, T provisional, isolation box. */
(()=>{'use strict';
const R={"hantec-fx-cfd":[1,2,75.87,74.57],"fundedhive-onchain":[2,1,73.76,74.64],"hypernova-onchain":[3,4,73.5,71.88],"propr-onchain":[4,5,70.91,70.56],"ftmo-fx-cfd":[5,3,70.58,72.03],"icfunded-fx-cfd":[6,6,68.55,68.55],"fxify-fx-cfd":[7,8,65.53,65.34],"e8-fx-cfd":[8,9,65.51,65.01],"monetafunded-fx-cfd":[9,7,64.4,66.4],"brightfunded-fx-cfd":[10,10,63.67,62.66],"fundedtradermarkets-fx-cfd":[11,11,62.88,61.69],"fundora-fx-cfd":[12,13,60.62,60.62],"fundednext-fx-cfd":[13,14,60.49,59.32],"tradeifyfx-fx-cfd":[14,null,58.71,null],"fintokei-fx-cfd":[15,16,58.68,56.84],"funded7-fx-cfd":[16,17,58.02,56.7],"blueguardian-fx-cfd":[17,19,54.91,52.98],"the5ers-fx-cfd":[18,21,54.69,52.69],"superfunded-fx-cfd":[19,18,54.26,54.26],"instantfunding-fx-cfd":[20,22,53.28,51.28],"tradingpit-fx-cfd":[21,20,52.92,52.92],"pipfarm-fx-cfd":[22,25,48.27,48.28],"fundingpips-fx-cfd":[23,23,47.94,49.94],"alpha-fx-cfd":[24,24,47.18,49.18],"goat-fx-cfd":[25,29,41.14,39.14],"blueberry-fx-cfd":[26,26,40.75,45.08],"eightcapchallenges-fx-cfd":[27,null,39.64,null],"fundedelite-fx-cfd":[28,28,38.67,40.67],"fundingtraders-fx-cfd":[29,30,36.57,38.57],"tradingcult-fx-cfd":[30,27,33.13,43.12],"upcomers-fx-cfd":[31,null,30.76,null]};
const NEW_IDS=["tradeifyfx-fx-cfd","eightcapchallenges-fx-cfd","upcomers-fx-cfd"];
const LOW=["eightcapchallenges-fx-cfd"];
const TIDS=["tradeifyfx-fx-cfd","upcomers-fx-cfd","eightcapchallenges-fx-cfd"];
const ISO=[{"service_id":"fundedtradingplus-fx-cfd","name":"Funded Trading Plus","overall_v6":61.13,"rank_v6":12,"penalty":0,"last_review_date":"2025-11-21","people_firsthand_90d":0,"return_threshold_people_90d":3,"wording":{"ja":"Funded Trading Plus：直近の口コミが少ないため、順位から外して別枠で表示しています（最後の口コミ：2025-11-21）。直近90日に本人の体験の口コミを書いた人が3人以上になったら順位に戻します。","en":"Funded Trading Plus: Shown separately and not ranked because there are few recent reviews (last review: 2025-11-21). It returns to the ranking once 3 or more people have posted first-hand reviews in the last 90 days.","ko":"Funded Trading Plus: 최근 리뷰가 적어 순위에서 제외하고 별도로 표시합니다(마지막 리뷰: 2025-11-21). 최근 90일 동안 직접 경험 리뷰를 쓴 사람이 3명 이상이 되면 순위로 돌아갑니다."},"last_review_label":{"ja":"最後の口コミ","en":"Last review","ko":"마지막 리뷰"},"score_shown":false},{"service_id":"thinkcapital-fx-cfd","name":"ThinkCapital","overall_v6":59.26,"rank_v6":15,"penalty":0,"last_review_date":"2026-02-09","people_firsthand_90d":0,"return_threshold_people_90d":3,"wording":{"ja":"ThinkCapital：直近の口コミが少ないため、順位から外して別枠で表示しています（最後の口コミ：2026-02-09）。直近90日に本人の体験の口コミを書いた人が3人以上になったら順位に戻します。","en":"ThinkCapital: Shown separately and not ranked because there are few recent reviews (last review: 2026-02-09). It returns to the ranking once 3 or more people have posted first-hand reviews in the last 90 days.","ko":"ThinkCapital: 최근 리뷰가 적어 순위에서 제외하고 별도로 표시합니다(마지막 리뷰: 2026-02-09). 최근 90일 동안 직접 경험 리뷰를 쓴 사람이 3명 이상이 되면 순위로 돌아갑니다."},"last_review_label":{"ja":"最後の口コミ","en":"Last review","ko":"마지막 리뷰"},"score_shown":false}];
const ISOTITLE={"ja":"口コミが少ないため順位から外している会社","en":"Firms not ranked due to few recent reviews","ko":"최근 리뷰가 적어 순위에서 제외한 회사"};
const NOTES={"NEW":{"ja":"NEW（今週から掲載。先週比なし）","en":"NEW (listed from this week; no weekly change)","ko":"NEW (이번 주부터 게재, 전주 대비 없음)"},"low":{"ja":"口コミ少：本人の体験の口コミがまだ少ないため、点が大きく動くことがあります","en":"Few reviews: first-hand reviews are still few, so the score may move a lot","ko":"리뷰 적음: 직접 경험 리뷰가 아직 적어 점수가 크게 변할 수 있습니다"},"T":{"ja":"透明性の点は仮置き（公開資料の確認を続けます）","en":"The transparency score is provisional (we are still checking public documents)","ko":"투명성 점수는 임시값입니다(공개 자료 확인 중)"}};
const L=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const T={ja:{rank:n=>n+'位',up:p=>'先週'+p+'位から上昇',down:p=>'先週'+p+'位から下降',same:p=>'先週と同じ'+p+'位',diff:'先週との差',pos:(n,t)=>n+'/'+t+'位',posLab:(n,t)=>'総合参考点の順位（'+t+'社中'+n+'位）',note:'▲▼は先週からの順位の変化、−は変化なし。点数の横の±は先週からの点数の差です。NEWはこの週からの掲載です。',neu:'NEW'},
 en:{rank:n=>'#'+n,up:p=>'Up from #'+p+' last week',down:p=>'Down from #'+p+' last week',same:p=>'Same as last week (#'+p+')',diff:'Change from last week',pos:(n,t)=>'#'+n+'/'+t,posLab:(n,t)=>'Overall reference score rank: #'+n+' of '+t,note:'▲▼ show the change in rank from last week; − means no change. The ± next to the score is the change in score from last week. NEW means listed from this week.',neu:'NEW'},
 ko:{rank:n=>n+'위',up:p=>'지난주 '+p+'위에서 상승',down:p=>'지난주 '+p+'위에서 하락',same:p=>'지난주와 같은 '+p+'위',diff:'지난주 대비',pos:(n,t)=>n+'/'+t+'위',posLab:(n,t)=>'종합 참고 점수 순위 ('+t+'개사 중 '+n+'위)',note:'▲▼는 지난주 대비 순위 변화, −는 변동 없음입니다. 점수 옆의 ±는 지난주 대비 점수 차이입니다. NEW는 이번 주부터 게재입니다.',neu:'NEW'}}[L];
const st=document.createElement('style');
st.textContent='.pc-rd-note{margin:0 0 6px;font-size:12px;line-height:1.5;color:#4b5563}.pc-rd-col{display:inline-flex;flex-direction:column;align-items:center;gap:3px;flex-shrink:0;vertical-align:middle}.pc-rd-rank{display:inline-flex;align-items:center;font-size:11px;font-weight:700;line-height:1.3;white-space:nowrap;border-radius:999px;padding:1px 6px}.pc-rd-rank.pc-rd-up{background:#dcfce7}.pc-rd-rank.pc-rd-down{background:#fee2e2}.pc-rd-rank.pc-rd-same{background:#f3f4f6}.pc-rd-rank.pc-rd-new{background:#dbeafe;color:#1d4ed8}.pc-rd-up{color:#15803d}.pc-rd-down{color:#c62828}.pc-rd-same{color:#6b7280}.pc-rd-diff{margin-left:6px;font-size:12px;font-weight:700;white-space:nowrap}.pc-rd-pos{display:inline-block;margin-left:10px;font-size:12px;font-weight:700;color:#374151;border:1px solid #9ca3af;border-radius:999px;padding:0 7px;line-height:1.5;white-space:nowrap;vertical-align:middle}.mc-score .pc-rd-pos{margin-left:4px;font-size:9.5px;padding:0 4px;line-height:1.35;vertical-align:2px}.mc-score .pc-rd-diff{display:block;margin:2px 0 0;font-size:11px;line-height:1.1;text-align:right}.pc-rd-sub{display:block;margin:2px 0 0;font-size:10px;line-height:1.3;font-weight:600;color:#6b7280;text-align:center}.pc-iso-box{margin:16px 0 24px;padding:14px 16px;border:1px solid #d1d5db;border-radius:10px;background:#f9fafb}.pc-iso-box h2{margin:0 0 8px;font-size:16px;font-weight:700}.pc-iso-box ul{margin:0;padding:0;list-style:none}.pc-iso-box li{margin:0 0 8px;font-size:13px;line-height:1.6;color:#374151}.pc-iso-box li:last-child{margin:0}.pc-iso-box a{font-weight:700;color:#111827}';
document.head.appendChild(st);
const cls=v=>v>0?'pc-rd-up':v<0?'pc-rd-down':'pc-rd-same';
const fmt=v=>(v>0?'+':v<0?'\u2212':'\u00b1')+Math.abs(v).toFixed(2);
const isNew=id=>NEW_IDS.includes(id);
function rankEl(id){const r=R[id];const s=document.createElement('span');
 if(isNew(id)){s.className='pc-rd-rank pc-rd-new';s.textContent='NEW';const lab=NOTES.NEW[L];s.title=lab;s.setAttribute('aria-label',lab);return s}
 const mv=r[1]-r[0];s.className='pc-rd-rank '+cls(mv);
 s.textContent=mv>0?'\u25B2'+mv:mv<0?'\u25BC'+(-mv):'\u2212';
 const lab=(mv>0?T.up:mv<0?T.down:T.same)(r[1]);s.title=lab;s.setAttribute('aria-label',lab);return s}
function under(logo,id){if(!logo)return;let c=logo.parentElement;if(c&&c.classList.contains('pc-rd-col')){if(!c.querySelector('.pc-rd-rank'))c.appendChild(rankEl(id));addSub(c,id);return}
 c=document.createElement('span');c.className='pc-rd-col';logo.before(c);c.append(logo,rankEl(id));addSub(c,id)}
function addSub(c,id){if(c.querySelector('.pc-rd-sub'))return;const bits=[];if(LOW.includes(id))bits.push(NOTES.low[L]);if(TIDS.includes(id))bits.push(NOTES.T[L]);if(!bits.length)return;const s=document.createElement('span');s.className='pc-rd-sub';s.textContent=bits.join(' / ');c.appendChild(s)}
function diffEl(id){const r=R[id];const s=document.createElement('span');
 if(isNew(id)){s.className='pc-rd-diff pc-rd-new';s.textContent='NEW';const lab=NOTES.NEW[L];s.title=lab;s.setAttribute('aria-label',lab);return s}
 const v=Math.round((r[2]-r[3])*100)/100;s.className='pc-rd-diff '+cls(v);s.textContent=fmt(v);s.title=T.diff;s.setAttribute('aria-label',T.diff+' '+fmt(v));return s}
const NT=Object.keys(R).length;
function posEl(id){const n=R[id][0];const s=document.createElement('span');s.className='pc-rd-pos';s.textContent=T.pos(n,NT);const l=T.posLab(n,NT);s.title=l;s.setAttribute('aria-label',l);return s}
let busy=false;
function note(){const t=document.querySelector('#comparison-table');const sh=t&&t.closest('.table-shell');if(!sh)return;let n=document.querySelector('.pc-rd-note');if(n&&sh.previousElementSibling===n)return;if(!n){n=document.createElement('p');n.className='pc-rd-note';n.textContent=T.note}sh.before(n)}
function isoBox(){const t=document.querySelector('#comparison-table');const sh=t&&t.closest('.table-shell');if(!sh)return;if(document.querySelector('.pc-iso-box'))return;
 const box=document.createElement('section');box.className='pc-iso-box';box.setAttribute('aria-label',ISOTITLE[L]);
 const h=document.createElement('h2');h.textContent=ISOTITLE[L];box.appendChild(h);
 const ul=document.createElement('ul');
 ISO.forEach(row=>{const li=document.createElement('li');const a=document.createElement('a');
  const path=(L==='en'?'/en':L==='ko'?'/ko':'')+'/companies/'+row.service_id+'/';
  a.href=path;a.textContent=row.name;li.appendChild(a);li.append(': ');
  li.appendChild(document.createTextNode(row.wording[L]));ul.appendChild(li)});
 box.appendChild(ul);sh.after(box)}
function hideIsolated(){document.querySelectorAll('#comparison-table tr[data-company-id], .mobile-comparison [data-company-id]').forEach(tr=>{if(ISO.some(x=>x.service_id===tr.dataset.companyId))tr.remove()})}
function apply(){if(busy)return;busy=true;try{note();hideIsolated();isoBox();
 document.querySelectorAll('#comparison-table tr[data-company-id]').forEach(tr=>{const id=tr.dataset.companyId,r=R[id];if(!r)return;
  const cur=parseFloat(tr.dataset.referenceScore);const ok=isNaN(cur)||Math.abs(cur-r[2])<0.005;
  under(tr.querySelector('th .company-brand-logo'),id);
  under(tr.querySelector('.mc-logo'),id);
  tr.querySelectorAll('td[data-column="score"] .table-score, .mc-score').forEach(sc=>{const has=sc.querySelector('.pc-rd-diff');
   const num=parseFloat(sc.childNodes[0]&&sc.childNodes[0].textContent);const show=ok&&(isNew(id)||Math.abs(num-r[2])<0.005);
   if(show&&!has)sc.appendChild(diffEl(id));else if(!show&&has)has.remove();
   const ps=sc.querySelector('.pc-rd-pos');if(show&&!ps){const e=posEl(id);if(sc.classList.contains('mc-score')){const sm=sc.querySelector('small');sm?sm.after(e):sc.appendChild(e)}else sc.appendChild(e)}else if(!show&&ps)ps.remove();});
 });
 const rc=document.querySelector('#result-count');if(rc){const map={ja:NT+'社',en:NT+' firms',ko:NT+'개사'};if(/^\d+/.test(rc.textContent))rc.textContent=map[L]||(NT+'');}
}finally{busy=false}}
let q=false;const sch=()=>{if(q)return;q=true;requestAnimationFrame(()=>{q=false;apply()})};
apply();new MutationObserver(sch).observe(document.body,{childList:true,subtree:true});
})();
