(() => {
'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const selected=new Map(); let data, opener, previousOverflow;
function close(){const d=document.querySelector('.ux183-dialog');if(!d)return;d.close();d.remove();document.body.style.overflow=previousOverflow;opener?.focus();}
function dialog(title,html){close();opener=document.activeElement;previousOverflow=document.body.style.overflow;const d=document.createElement('dialog');d.className='ux183-dialog';d.setAttribute('aria-label',title);d.innerHTML=`<header><h2>${esc(title)}</h2><button class="ux183-close" aria-label="닫기">×</button></header><div class="ux183-content">${html}</div>`;document.body.append(d);d.querySelector('.ux183-close').onclick=close;d.addEventListener('cancel',e=>{e.preventDefault();close();});d.onclick=e=>{if(e.target===d)close();};document.body.style.overflow='hidden';d.showModal();}
function plans(id){const f=k=>document.querySelector(`[data-plan-filter="${k}"]`)?.value||'';return(data.plans[id]||[]).filter(p=>p.initial_capital&&!p.display_excluded&&![16666,33333,66666,133333,266666].includes(+p.initial_capital)).filter(p=>(!f('category')||p.category===f('category'))&&(!f('currency')||(p.capital_currency==='USD_display'?'USD':p.capital_currency)===f('currency'))&&(!f('capital')||`${p.capital_currency==='USD_display'?'USD':p.capital_currency} ${p.initial_capital}`===f('capital')));}
const capital=p=>p.capital_currency==='JPY'?`${p.initial_capital/10000}만 엔`:`${p.capital_currency==='USD_display'||p.capital_currency==='USD'?'$':p.capital_currency+' '}${p.initial_capital/1000}K`;
const fee=p=>p.display_price==null?'—':`${p.price_currency==='USD_display'?'USD':p.price_currency} ${Number(p.display_price).toLocaleString('en-US')}`;
let compareLoading=false;
async function compare(){
 const ids=[...selected.keys()];if(ids.length<2||compareLoading)return;
 compareLoading=true;
 dialog("\ud50c\ub79c\uc744 \ubd88\ub7ec\uc624\ub294 \uc911\u2026",'<p role="status">'+"\ud50c\ub79c\uc744 \ubd88\ub7ec\uc624\ub294 \uc911\u2026"+'</p>');
 const loadingDialog=document.querySelector('.ux183-dialog');
 try{await Promise.all(ids.map(async id=>{data.plans[id]=await window.pcLoadCompanyPlans('ko',id);}));}
 catch(e){if(loadingDialog.isConnected)loadingDialog.querySelector('[role="status"]').textContent="\ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub2eb\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.";compareLoading=false;return;}
 compareLoading=false;
 if(!loadingDialog.isConnected)return;

 const choices=new Map();
 dialog('신뢰성과 플랜 비교',`<p>먼저 점수와 본인 보고를 확인한 후 플랜을 선택하세요. 목록 필터가 플랜 선택에 적용됩니다.</p><p class="ux183-scroll-hint">← 좌우로 스크롤하여 업체 비교 →</p><div class="ux183-scroll" tabindex="0" aria-label="비교표. 좌우로 스크롤할 수 있습니다"><table class="ux183-compare"></table></div><p class="ux183-muted">—는 표시할 수 있는 확인된 정보가 없다는 뜻이며, 제한이 없다는 의미가 아닙니다. 보고 건수는 이용자 수나 실제 성공률이 아닙니다.</p>`);
 const table=document.querySelector('.ux183-compare');
 function render(){
 const row=(label,values)=>`<tr><th scope="row">${label}</th>${values.map(v=>`<td>${v}</td>`).join('')}</tr>`;
 const score=id=>data.scores.companies.find(c=>c.service_id===id)||{};const report=id=>data.reports.companies.find(c=>c.service_id===id)||{};
 const chosen=id=>choices.get(id);
 table.innerHTML=`<thead><tr><th>비교 항목</th>${ids.map(id=>`<th scope="col">${esc(selected.get(id))}<br><a href="/ko/companies/${((encodeURIComponent(id))==='hantec-fx-cfd'?'rzr-funded':(encodeURIComponent(id)))}/">상세 보기 ↗</a></th>`).join('')}</tr></thead><tbody>`+
 row('종합 참고 점수',ids.map(id=>`<strong class="ux183-score">${esc(score(id).overall??'—')}</strong> / 100`))+
 row('본인 후기 표본',ids.map(id=>`${score(id).x_posts??0}개 게시물 · ${score(id).x_authors??0}개 계정`))+
 row('출금·문제 관련 본인 보고',ids.map(id=>`전체 ${report(id).report_count??0}건<br>출금 보고 ${report(id).received_reports??0}건 ／ 문제 보고 ${report(id).problem_report_count??0}건`))+
 row('주요 규칙 적용 정보',ids.map(id=>{const n=data.notices.companies.find(c=>c.service_id===id);return n?`${esc(n.heading)}<br><small>${esc(n.evidence_label)}</small>`:'표시 대상 안내 없음 (안전성 보장이 아님)';}))+
 row('비교할 플랜',ids.map(id=>`<select aria-label="${esc(selected.get(id))} 플랜" data-ux-plan="${esc(id)}"><option value="">${plans(id).length?'플랜 선택':'현재 필터에 해당하는 플랜 없음'}</option>${plans(id).map((p,i)=>`<option value="${i}" ${p===chosen(id)?'selected':''}>${esc(p.plan_name)} / ${esc(capital(p))} / ${esc(fee(p))}</option>`).join('')}</select>`))+
 row('표시 가격',ids.map(id=>chosen(id)?esc(fee(chosen(id))):'—'))+
 [['수익 목표','profit_target'],['최대 DD·계산 방식','max_dd'],['일일 DD·계산 방식','daily_dd'],['수익 배분','profit_share'],['출금 신청 주기','payout_interval'],['일관성 규칙','consistency']].map(([label,key])=>row(label,ids.map(id=>(()=>{const f=chosen(id)?.approved_display?.[key];return f?.text_ko?esc(f.text_ko)+(f.sources?.length?'<details><summary>근거·확인일</summary>'+f.sources.map(x=>`<a href="${esc(x.source_url)}" target="_blank" rel="noopener">${esc(x.checked_on||'공식 자료')} ↗</a>`).join('<br>')+'</details>':''):'—';})()))).join('')+
 row('공식 정보·확인일',ids.map(id=>{const p=chosen(id);return p?`<a target="_blank" rel="noopener" href="${esc(p.source_url)}">공식 페이지 ↗</a><br>${esc(p.checked_on||'—')}`:'—';}))+'</tbody>';
 table.querySelectorAll('[data-ux-plan]').forEach(s=>s.onchange=()=>{choices.set(s.dataset.uxPlan,s.value===''?null:plans(s.dataset.uxPlan)[+s.value]);const id=s.dataset.uxPlan;render();table.querySelector(`[data-ux-plan="${id}"]`).focus();});
 }render();
}
function tray(){const el=document.querySelector('.ux183-tray');el.hidden=!selected.size;el.innerHTML=`<div><strong>비교 목록 ${selected.size}/3</strong><span>${[...selected].map(([id,name])=>`<button data-remove="${esc(id)}" aria-label="${esc(name)} — 비교에서 제외">${esc(name)} ×</button>`).join('')}</span></div><button class="ux183-primary" data-compare ${selected.size<2?'disabled':''}>${selected.size<2?'업체 1개 더 선택':'선택한 업체 비교 →'}</button><span role="status" class="ux183-status"></span>`;el.querySelector('[data-compare]').onclick=compare;el.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{selected.delete(b.dataset.remove);tray();enhance();});document.querySelectorAll('[data-ux-select]').forEach(b=>{b.setAttribute('aria-pressed',String(selected.has(b.dataset.uxSelect)));b.textContent=selected.has(b.dataset.uxSelect)?'✓ 비교에 추가됨':'＋ 비교하기';});}
function enhance(){document.querySelectorAll('#comparison-body tr[data-company-id]').forEach(r=>{
 const id=r.dataset.companyId;if(r.querySelector('.ux183-row-tools'))return;
 const cell=r.querySelector('th')||r.firstElementChild;const name=cell.querySelector('.comparison-detail-link')?.textContent?.replace('詳細を見る','').trim()||data.notices.companies.find(c=>c.service_id===id)?.company||data.reports.companies.find(c=>c.service_id===id)?.name||id;
 const brand=cell.querySelector('.company-name, .company-name-link');const actualName=brand?.textContent.trim()||name;
 const wrap=document.createElement('div');wrap.className='ux183-row-tools';const b=document.createElement('button');b.dataset.uxSelect=id;b.textContent=selected.has(id)?'✓ 비교에 추가됨':'＋ 비교하기';b.setAttribute('aria-pressed',String(selected.has(id)));b.onclick=()=>{if(selected.has(id))selected.delete(id);else if(selected.size<3)selected.set(id,actualName);else {document.querySelector('.ux183-status').textContent='최대 3개 업체를 비교할 수 있습니다. 하나를 제외한 후 추가하세요.';return;}tray();};wrap.append(b);
 const n=data.notices.companies.find(c=>c.service_id===id);if(n){const nb=document.createElement('button');nb.className='ux183-warning';nb.textContent='! 주요 규칙 적용 정보';nb.onclick=()=>dialog(n.company+': 규칙 적용 정보',`<p class="ux183-evidence">${esc(n.evidence_label)}</p><h3>${esc(n.heading)}</h3><p>${esc(n.text)}</p><ul>${n.sources.map((s,i)=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">근거 ${i+1}（${esc(s.kind)}）↗</a></li>`).join('')}</ul><a href="/ko/companies/${((encodeURIComponent(id))==='hantec-fx-cfd'?'rzr-funded':(encodeURIComponent(id)))}/">업체 상세 및 문제 보고 확인 →</a>`);wrap.append(nb);}const score=r.querySelector('[data-column=score]');const evidence=cell.querySelector('.transparency-summary-button');if(evidence){evidence.querySelector('span').textContent='평가 근거';wrap.prepend(evidence);}(score||cell).append(wrap);if(cell.querySelector('.tag-broker_backed'))cell.querySelector('.tag-traditional')?.remove();const market=cell.querySelector('.market-chip');if(market)market.textContent=market.textContent.replace(/ 서비스$/,'');const smart=r.querySelector('.tag-smart_contract');const detail=cell.querySelector('.comparison-detail-link');if(smart&&detail){let tags=cell.querySelector('.signal-tags-company');if(!tags){tags=document.createElement('div');tags.className='signal-tags signal-tags-company';detail.before(tags);}const old=smart.parentElement;tags.append(smart);if(!old.children.length)old.remove();}
 const p=data.reports.companies.find(c=>c.service_id===id);const tag=document.createElement('span');tag.className='ux185-count-tag';tag.textContent=`대상 ${p?.report_count??0}건`;tag.title='출금·문제에 관한 본인 보고의 집계 건수입니다. 후기 점수의 게시물·계정 수와 다릅니다.';tag.setAttribute('aria-label',`본인 보고 집계 대상 ${p?.report_count??0}건`);(r.querySelector('.signal-tags-report')||r.lastElementChild).append(tag);
 });}
function enhanceFeatured(){
 const grid=document.querySelector('#featured-grid');if(!grid)return;
 grid.querySelectorAll('.featured-card:not(.ux184-card)').forEach(card=>{
 const s=data.scores.companies.find(c=>c.service_id===card.dataset.companyId),r=data.reports.companies.find(c=>c.service_id===card.dataset.companyId);if(!s)return;
 card.classList.add('ux184-card');
 const title=card.querySelector('h3'),market=card.querySelector('.market'),sentiment=card.querySelector('.ai-sentiment'),headline=card.querySelector('.structural-headline'),detail=card.querySelector('.detail-link'),links=card.querySelector('.link-row');
 const header=document.createElement('header');header.className='ux184-card-head';header.append(title,market);card.querySelector('.status-chip')?.remove();card.querySelector('.overall-featured-score')?.remove();card.prepend(header);
 const scoreBlock=document.createElement('div');scoreBlock.className='ux184-score-block';scoreBlock.innerHTML=`<div class="ux184-total"><span>종합 참고점</span><div><strong>${Number(s.overall).toFixed(2)}</strong><small> / 100</small></div></div><div class="ux184-components">${[['출금 가능성','payout_account','50%'],['본인 후기','experience','20%'],['운영 기반','transparency','30%']].map(([label,key,weight])=>`<div><span>${label}<small> ${weight}</small></span><b>${Number(s[key]).toFixed(2)}</b><div class="ux184-track"><i style="width:${Math.min(100,Math.max(0,Number(s[key])))}%"></i></div></div>`).join('')}</div><p class="ux184-account-count">본인 후기 ${s.x_posts}개 게시물 · ${s.x_authors}개 계정${s.x_authors<20?' <span>후기 적음</span>':''}</p>`;header.after(scoreBlock);
 const featureTags={'propr-onchain':['온체인형','운영 데이터 공개'],'hypernova-onchain':['스마트 계약'],'hantec-fx-cfd':['브로커 지원'],'fundedhive-onchain':['스마트 계약']}[card.dataset.companyId]||[];
 const tags=document.createElement('div');tags.className='ux186-feature-tags';for(const label of featureTags){const tag=document.createElement('span');tag.textContent=label;tags.append(tag);}header.append(tags);
 const reports=document.createElement('div');reports.className='ux184-reports';reports.innerHTML=`<span>본인 보고 <b>${r?.report_count??0}건</b></span><span>출금 <b>${r?.received_reports??0}</b> ／ 문제 <b>${r?.problem_report_count??0}</b></span>`;scoreBlock.after(reports);
 if(sentiment){sentiment.querySelector('h4').textContent='후기 구성';const period=document.createElement('p');period.className='ux184-period';period.textContent='최근 6개월 · 공식 게시물 제외';sentiment.querySelector('h4').after(period);}
 headline?.remove();
 if(detail){detail.classList.add('ux184-detail');detail.textContent='평가 근거·플랜 보기 →';card.append(detail);}
 if(links)card.append(links);
 });
}

Promise.all(['data/overall-reference-v194.json','data/normal-report-ratios-v143.json','plan-options-v179-ko.json','rule-history-v182-ko-r20261019.json'].map(u=>window.pcDataRequest('/'+u).then(r=>{if(!r.ok)throw Error(u);return r.json();}))).then(([scores,reports,plans,notices])=>{
 data={scores,reports,plans,notices};
 enhanceFeatured();const fg=document.querySelector("#featured-grid");if(fg)new MutationObserver(enhanceFeatured).observe(fg,{childList:true});
 const reading=document.querySelector('#reading'),scope=document.querySelector('#publication-scope');if(reading&&!reading.matches('details.ux183-guide')){const fold=document.createElement('details');fold.className='ux183-guide';fold.innerHTML='<summary><span><small>처음 오신 분께</small><strong>점수만으로 정하지 마세요. 건수와 보고 내용도 확인하세요.</strong></span><b>숫자 읽는 법 보기</b></summary><div class="ux183-guide-body"></div>';reading.before(fold);fold.lastElementChild.append(reading);if(scope)fold.lastElementChild.append(scope);fold.ontoggle=()=>fold.querySelector('summary b').textContent=fold.open?'숫자 읽는 법 보기':'숫자 읽는 법 보기';}
 const comparison=document.querySelector('#comparison');if(comparison){const jd=(v,off=0)=>{const m=String(v||'').match(/^(\d{4})-(\d{2})-(\d{2})/);if(!m)return String(v||'');const d=new Date(Date.UTC(+m[1],+m[2]-1,+m[3]+off));return `${d.getUTCFullYear()}년 ${d.getUTCMonth()+1}월 ${d.getUTCDate()}일`;};const dates=document.createElement('div');dates.className='ux183-dates';const ds=[...new Set(Object.values(plans).flat().map(p=>p.checked_on).filter(Boolean))].sort();dates.innerHTML=`<strong>데이터 기간</strong><span>본인 보고: ${esc(jd(reports.snapshot_period_utc.start_inclusive))}~${esc(jd(reports.snapshot_period_utc.end_exclusive,-1))}</span><span>채점 데이터: ${esc(jd(scores.as_of))} 기준</span><span>공식 플랜 확인: ${esc(ds[0])} ～ ${esc(ds.at(-1))} (항목별로 다름)</span>`;comparison.prepend(dates);fetch('/ja-v204/data/site-dates.json').then(r=>r.ok?r.json():null).catch(()=>null).then(sd=>{const iso=v=>/^\d{4}-\d{2}-\d{2}$/.test(String(v||''));const sp=dates.querySelectorAll('span'),rp=sd&&sd.report_period||{},pc=sd&&sd.plans_checked||{};if(iso(rp.start)&&iso(rp.end))sp[0].textContent=`본인 보고: ${jd(rp.start)}~${jd(rp.end)}`;if(iso(pc.start)&&iso(pc.end))sp[2].textContent=`공식 플랜 확인: ${pc.start} ～ ${pc.end} (항목별로 다름)`;});}
 const bar=document.createElement('aside');bar.className='ux183-tray';bar.setAttribute('aria-label','업체 비교 목록');bar.hidden=true;document.body.append(bar);tray();enhance();const body=document.querySelector('#comparison-body');if(body)new MutationObserver(()=>enhance()).observe(body,{childList:true});
}).catch(e=>{console.error('Comparison preview:',e);});
})();
