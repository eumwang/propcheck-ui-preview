/* PROP CHECK en/ko home: Featured 4 cards in the JA layout (featured-reference-card), 2026-10-21. Text translated from the JA page; codes = JA production. Sign-up URLs stay as rendered for this language. */
(()=>{'use strict';
const L=(document.documentElement.lang||'').toLowerCase().startsWith('ko')?'ko':'en',P='/'+L;
const NF=new Intl.NumberFormat(L==='ko'?'ko-KR':'en-US');const number=v=>NF.format(Number(v||0));
const score=v=>v===null||v===undefined||v===''?'—':Number(v).toFixed(2);
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const T={en:{m:['Payout','Firsthand reviews','Operational foundation'],ms:['Payout','Reviews','Operations'],overall:'Overall reference score',few:'Few reviews',offer:'Perk',code:'Code',seeGuide:'See the guide',signup:'Sign up ↗',evid:'Evidence & plans',guide:'Firm guide',
 ev:(p,a,r,rc,pr)=>`Firsthand reviews: ${p} posts · ${a} accounts<br>Firsthand reports: ${r} · payouts ${rc} · problems ${pr}`,rep:n=>`${n} reports`,
 offers:{'hantec-fx-cfd':['35% off your first purchase','35% off first purchase','NEW35'],'fundedhive-onchain':['20% off PFP plans / 10% off Classic & Instant','20% off PFP plans','PONCHAI'],'hypernova-onchain':['Discount on Nova Score purchases','Discount on Nova Score',null]}},
ko:{m:['출금 가능성','본인 후기','운영 기반'],ms:['출금','후기','운영'],overall:'종합 참고 점수',few:'건수 적음',offer:'혜택',code:'코드',seeGuide:'소개 글에서 확인',signup:'가입하기 ↗',evid:'근거·플랜',guide:'소개 글',
 ev:(p,a,r,rc,pr)=>`본인 후기 ${p}개 게시물·${a}개 계정<br>본인 보고 ${r}건·출금 ${rc}·문제 ${pr}`,rep:n=>`보고 ${n}건`,
 offers:{'hantec-fx-cfd':['첫 구매 35% 할인','첫 구매 35% 할인','NEW35'],'fundedhive-onchain':['PFP 플랜 20% 할인 / Classic·Instant 10% 할인','PFP 플랜 20% 할인','PONCHAI'],'hypernova-onchain':['Nova Score 구매 할인','Nova Score 구매 할인',null]}}}[L];
const guides={'fundedhive-onchain':'fundedhive','hantec-fx-cfd':'rzr-funded','hypernova-onchain':'hypernova','propr-onchain':'propr'};
let D=null,busy=false;
const get=u=>fetch(u).then(r=>{if(!r.ok)throw new Error(u);return r.json()});
function load(){return D?Promise.resolve(D):Promise.all([get('/ja-v204/data/overall-reference-v194.json'),get('/ja-v204/data/normal-report-ratios-v143.json')]).then(([o,r])=>D={o:new Map(o.companies.map(c=>[c.service_id,c])),r:new Map(r.companies.map(c=>[c.service_id,c]))});}
function card(old,i){const id=old.dataset.companyId,v=D.o.get(id)||{},rp=D.r.get(id)||{},e=rp.event_counts||{};
 const name=rp.name||old.querySelector('h3 img')?.alt||id,market=old.querySelector('.market')?.textContent||'',logo=old.querySelector('h3 img');
 const su=old.querySelector('a.af-register');const few=Number(v.x_authors||0)<20?`<small>${esc(T.few)}</small>`:'';
 const o=T.offers[id];const vals=[v.payout_account,v.experience,v.transparency],keys=['payout','experience','foundation'],w=['50%','20%','30%'];
 const offer=o?`<div class="fc-offer"><span class="fc-offer-content"><small>${esc(T.offer)}</small><span class="fc-offer-label">${esc(o[0])}</span><span class="fc-offer-short">${esc(o[1])}</span></span><span class="fc-offer-code"><small>${esc(T.code)}</small><strong>${esc(o[2]||T.seeGuide)}</strong></span></div>`:'<div class="fc-offer fc-offer-empty" aria-hidden="true"></div>';
 const signup=su?`<a class="fc-signup" href="${esc(su.href)}" target="_blank" rel="${esc(su.rel||'sponsored noopener noreferrer')}"${su.dataset.affiliate?' data-affiliate="true"':''}>${esc(T.signup)}</a>`:'';
 const a=document.createElement('article');a.className='featured-card featured-reference-card ux184-card';a.dataset.surface='featured';a.dataset.companyId=id;a.dataset.enkoRef='1';
 a.innerHTML=`<div class="fc-heading"><span class="fc-rank-mobile" aria-hidden="true">${i+1}</span><h3><span class="company-brand-logo">${logo?`<img src="${esc(logo.getAttribute('src'))}" alt="${esc(logo.alt||name)}">`:''}</span><span class="fc-company"><strong>${esc(name)}</strong><small>${esc(market)}</small></span></h3><span class="fc-rank">#${i+1}</span><div class="fc-score-mobile"><strong>${score(v.overall)}</strong>${few}</div></div>
<div class="fc-score-desktop"><strong>${score(v.overall)}</strong><span>/100</span><div>${esc(T.overall)} ${few}</div></div>
<div class="fc-components">${vals.map((x,k)=>`<div class="fc-component fc-${keys[k]}"><span>${esc(T.m[k])} <small>${w[k]}</small></span><span class="fc-track"><i style="width:${Math.max(0,Math.min(100,Number(x)||0))}%"></i></span><b>${score(x)}</b></div>`).join('')}</div>
<div class="fc-mobile-bar" role="img" aria-label="${esc(T.m.map((m,k)=>m+' '+score(vals[k])).join(', '))}"><i></i><i></i><i></i></div>
<p class="fc-mobile-summary">${T.ms.map((m,k)=>esc(m)+' '+score(vals[k])).join(' · ')} <span>${esc(T.rep(number(rp.report_count)))}</span></p>
<p class="fc-evidence">${T.ev(number(v.x_posts),number(v.x_authors),number(rp.report_count),number(e.received),number(rp.problem_report_count))}</p>
${offer}<div class="fc-actions">${signup}<a class="fc-evidence-link" href="${P}/companies/${((esc(id))==='hantec-fx-cfd'?'rzr-funded':(esc(id)))}/">${esc(T.evid)}</a><a class="fc-guide-link" href="${P}/guides/${esc(guides[id]||'')}/">${esc(T.guide)}</a></div>`;
 return a;}
function apply(){const g=document.querySelector('#featured-grid');if(!g)return;const olds=[...g.querySelectorAll(':scope>.featured-card:not([data-enko-ref])')];if(!olds.length||olds.some(c=>!c.classList.contains('af-ready')))return;
 const sorted=olds.slice().sort((a,b)=>Number(D.o.get(b.dataset.companyId)?.overall||0)-Number(D.o.get(a.dataset.companyId)?.overall||0));
 const fr=document.createDocumentFragment();sorted.forEach((c,i)=>fr.append(card(c,i)));g.replaceChildren(fr);}
let t=0;const sch=()=>{clearTimeout(t);t=setTimeout(()=>{if(busy)return;busy=true;load().then(apply).catch(e=>console.warn('enko featured',e)).finally(()=>busy=false);},80);};
const start=()=>{const g=document.querySelector('#featured-grid');if(!g)return;new MutationObserver(sch).observe(g,{childList:true,subtree:true});sch();};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
