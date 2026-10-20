(() => {
'use strict';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const selected=new Map(); let data, opener, previousOverflow;
function close(){const d=document.querySelector('.ux183-dialog');if(!d)return;d.close();d.remove();document.body.style.overflow=previousOverflow;opener?.focus();}
function dialog(title,html){close();opener=document.activeElement;previousOverflow=document.body.style.overflow;const d=document.createElement('dialog');d.className='ux183-dialog';d.setAttribute('aria-label',title);d.innerHTML=`<header><h2>${esc(title)}</h2><button class="ux183-close" aria-label="閉じる">×</button></header><div class="ux183-content">${html}</div>`;document.body.append(d);d.querySelector('.ux183-close').onclick=close;d.addEventListener('cancel',e=>{e.preventDefault();close();});d.onclick=e=>{if(e.target===d)close();};document.body.style.overflow='hidden';d.showModal();}
function plans(id){const f=k=>document.querySelector(`[data-plan-filter="${k}"]`)?.value||'';return(data.plans[id]||[]).filter(p=>p.initial_capital&&!p.display_excluded&&![16666,33333,66666,133333,266666].includes(+p.initial_capital)).filter(p=>(!f('category')||p.category===f('category'))&&(!f('currency')||(p.capital_currency==='USD_display'?'USD':p.capital_currency)===f('currency'))&&(!f('capital')||`${p.capital_currency==='USD_display'?'USD':p.capital_currency} ${p.initial_capital}`===f('capital')));}
const capital=p=>p.capital_currency==='JPY'?`${p.initial_capital/10000}万円`:`${p.capital_currency==='USD_display'||p.capital_currency==='USD'?'$':p.capital_currency+' '}${p.initial_capital/1000}K`;
const fee=p=>p.display_price==null?'—':`${p.price_currency==='USD_display'?'USD':p.price_currency} ${Number(p.display_price).toLocaleString('en-US')}`;
let compareLoading=false;
async function compare(){
 const ids=[...selected.keys()];if(ids.length<2||compareLoading)return;
 compareLoading=true;
 dialog("\u30d7\u30e9\u30f3\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026",'<p role="status">'+"\u30d7\u30e9\u30f3\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059\u2026"+'</p>');
 const loadingDialog=document.querySelector('.ux183-dialog');
 try{await Promise.all(ids.map(async id=>{data.plans[id]=await window.pcLoadCompanyPlans('ja',id);}));}
 catch(e){if(loadingDialog.isConnected)loadingDialog.querySelector('[role="status"]').textContent="\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093\u3067\u3057\u305f\u3002\u9589\u3058\u3066\u518d\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002";compareLoading=false;return;}
 compareLoading=false;
 if(!loadingDialog.isConnected)return;

 const choices=new Map();
 dialog('信頼性とプランを比較',`<p>点数・本人報告を先に確認し、その後でプランを選んでください。プラン候補には一覧の絞り込みを引き継ぎます。</p><p class="ux183-scroll-hint">← 横にスクロールして各社を比較 →</p><div class="ux183-scroll" tabindex="0" aria-label="比較表。横にスクロールできます"><table class="ux183-compare"></table></div><p class="ux183-muted">— は掲載できる確認済み情報がない項目です。制限なしを意味しません。報告件数は利用者数や実際の成功率ではありません。</p>`);
 const table=document.querySelector('.ux183-compare');
 const filters={category:document.querySelector('[data-plan-filter="category"]')?.value||'',currency:document.querySelector('[data-plan-filter="currency"]')?.value||'',capital:document.querySelector('[data-plan-filter="capital"]')?.value||''};
 const currency=p=>p.capital_currency==='USD_display'?'USD':p.capital_currency;
 const allPlans=id=>(data.plans[id]||[]).filter(p=>p.initial_capital&&!p.display_excluded&&![16666,33333,66666,133333,266666].includes(+p.initial_capital));
 const candidates=id=>allPlans(id).filter(p=>(!filters.category||p.category===filters.category)&&(!filters.currency||currency(p)===filters.currency)&&(!filters.capital||`${currency(p)} ${p.initial_capital}`===filters.capital));
 const controls=document.createElement('section');controls.className='ux184-controls';controls.setAttribute('aria-label','比較するプランの共通条件');table.closest('.ux183-scroll').before(controls);
 function renderControls(){
  const categories=['1STEP','2STEP','3STEP','INSTANT','合格後払い 1STEP','合格後払い 2STEP','合格後払い 3STEP'];
  const caps=[...new Map(ids.flatMap(allPlans).filter(p=>(!filters.category||p.category===filters.category)&&currency(p)===filters.currency).map(p=>[`${currency(p)} ${p.initial_capital}`,p])).entries()].sort((a,b)=>a[1].initial_capital-b[1].initial_capital);
  if(filters.capital&&!caps.some(([key])=>key===filters.capital))filters.capital='';
  for(const id of ids)if(choices.get(id)&&!candidates(id).includes(choices.get(id)))choices.delete(id);
  const opts=(list,value)=>list.map(([key,label])=>`<option value="${esc(key)}" ${key===value?'selected':''}>${esc(label)}</option>`).join('');
  controls.innerHTML=`<div class="ux184-controls-title"><strong>プランの比較条件をそろえる</strong><small>このウィンドウ内だけに適用</small></div><div class="ux184-fields"><label>STEP・購入方式<select data-align="category">${opts([['','すべて'],...categories.map(c=>[c,c])],filters.category)}</select></label><label>資金の通貨<select data-align="currency">${opts([['','選択してください'],['USD','USD'],['JPY','JPY']],filters.currency)}</select></label><label>初期資金<select data-align="capital" ${filters.currency?'':'disabled'}>${opts([['',filters.currency?'すべての金額':'通貨を選択'],...caps.map(([key,p])=>[key,capital(p)+' · '+ids.filter(id=>allPlans(id).some(x=>(!filters.category||x.category===filters.category)&&`${currency(x)} ${x.initial_capital}`===key)).length+'/'+ids.length+'社'])],filters.capital)}</select></label><button type="button" data-align-reset>条件を解除</button></div><p class="ux184-status" role="status"></p>`;
  controls.querySelectorAll('[data-align]').forEach(el=>el.onchange=()=>{filters[el.dataset.align]=el.value;if(el.dataset.align==='currency')filters.capital='';renderControls();render();controls.querySelector(`[data-align="${el.dataset.align}"]`).focus();});
  controls.querySelector('[data-align-reset]').onclick=()=>{filters.category='';filters.currency='';filters.capital='';renderControls();render();};
 }
 function updateConditionStatus(){
  const picked=ids.map(id=>choices.get(id)).filter(Boolean),missing=ids.filter(id=>!candidates(id).length);
  const mismatch=[['category','STEP・購入方式'],['initial_capital','初期資金'],['capital_currency','資金通貨'],['market','市場区分']].filter(([key])=>new Set(picked.map(p=>key==='capital_currency'?currency(p):p[key])).size>1).map(([,label])=>label);
  const el=controls.querySelector('.ux184-status');el.classList.toggle('different',!!(missing.length||mismatch.length));
  el.textContent=missing.length?'該当プランなし：'+missing.map(id=>selected.get(id)).join('・')+'。条件を変更してください。':mismatch.length?'比較条件が異なります：'+mismatch.join('・')+'。下のプラン条件を確認してください。':picked.length===ids.length?'選択したプランのSTEP・資金額・通貨・市場区分は一致しています。個別ルールは異なります。':'各社のプランを選択してください。条件を変更して該当しなくなった選択は解除されます。';
  if(new Set(picked.map(p=>p.price_currency)).size>1)el.textContent+=' 費用の通貨は異なります（為替換算なし）。';
 }
 renderControls();

 function render(){
 const row=(label,values)=>`<tr><th scope="row">${label}</th>${values.map(v=>`<td>${v}</td>`).join('')}</tr>`;
 const score=id=>data.scores.companies.find(c=>c.service_id===id)||{};const report=id=>data.reports.companies.find(c=>c.service_id===id)||{};
 const chosen=id=>choices.get(id);
 table.innerHTML=`<thead><tr><th>比較項目</th>${ids.map(id=>`<th scope="col">${esc(selected.get(id))}<br><a href="/companies/${encodeURIComponent(id)}/">詳細を見る ↗</a></th>`).join('')}</tr></thead><tbody>`+
 row('総合参考点',ids.map(id=>`<strong class="ux183-score">${esc(score(id).overall??'—')}</strong> / 100`))+
 [['出金可否 · 50%','payout_account'],['本人口コミ · 20%','experience'],['運営基盤 · 30%','transparency']].map(([label,key])=>row(label,ids.map(id=>`<b>${Number(score(id)[key]).toFixed(2)}</b> / 100`))).join('')+
 row('本人口コミの母数',ids.map(id=>`${score(id).x_posts??0}投稿・${score(id).x_authors??0}アカウント`))+
 row('出金・問題の本人報告',ids.map(id=>`全${report(id).report_count??0}件<br>出金報告 ${report(id).received_reports??0}件 ／ 問題報告 ${report(id).problem_report_count??0}件`))+
 row('重要なルール適用情報',ids.map(id=>{const n=data.notices.companies.find(c=>c.service_id===id);return n?`${esc(n.heading)}<br><small>${esc(n.evidence_label)}</small>`:'掲載対象なし（安全性の保証ではありません）';}))+
 row('比較するプラン',ids.map(id=>`<select aria-label="${esc(selected.get(id))}のプラン" data-ux-plan="${esc(id)}"><option value="">${candidates(id).length?'プランを選択':'現在の絞り込みに該当なし'}</option>${candidates(id).map((p,i)=>`<option value="${i}" ${p===chosen(id)?'selected':''}>${esc(p.plan_name)} / ${esc(capital(p))} / ${esc(fee(p))}</option>`).join('')}</select>`))+
 row('選択中の条件',ids.map(id=>{const p=chosen(id);return p?`<div class="ux184-condition"><b>${esc(p.category||'分類未確定')} · ${esc(capital(p))}</b>${esc(({FX_CFD:'FX・CFD',FUTURES:'先物',CRYPTO:'暗号資産',ONCHAIN:'オンチェーン'})[p.market]||p.market||'市場未確定')}</div>`:'—';}))+
 row('掲載価格',ids.map(id=>chosen(id)?esc(fee(chosen(id))):'—'))+
 [['利益目標','profit_target'],['最大DD・計算法','max_dd'],['日次DD・計算法','daily_dd'],['利益分配','profit_share'],['出金の申請間隔','payout_interval'],['一貫性ルール','consistency']].map(([label,key])=>row(label,ids.map(id=>(()=>{const f=chosen(id)?.approved_display?.[key];return f?.text_ja?esc(f.text_ja)+(f.sources?.length?'<details><summary>根拠・確認日</summary>'+f.sources.map(x=>`<a href="${esc(x.source_url)}" target="_blank" rel="noopener">${esc(x.checked_on||'公式資料')} ↗</a>`).join('<br>')+'</details>':''):'—';})()))).join('')+
 row('公式情報・確認日',ids.map(id=>{const p=chosen(id);return p?`<a target="_blank" rel="noopener" href="${esc(p.source_url)}">公式ページ ↗</a><br>${esc(p.checked_on||'—')}`:'—';}))+'</tbody>';
 updateConditionStatus();
 table.querySelectorAll('[data-ux-plan]').forEach(s=>s.onchange=()=>{choices.set(s.dataset.uxPlan,s.value===''?null:candidates(s.dataset.uxPlan)[+s.value]);const id=s.dataset.uxPlan;render();table.querySelector(`[data-ux-plan="${id}"]`).focus();});
 }render();
}
function tray(){const el=document.querySelector('.ux183-tray');el.hidden=!selected.size;el.innerHTML=`<div><strong>比較リスト ${selected.size}/3</strong><span>${[...selected].map(([id,name])=>`<button data-remove="${esc(id)}" aria-label="${esc(name)}を比較から外す">${esc(name)} ×</button>`).join('')}</span></div><button class="ux183-primary" data-compare ${selected.size<2?'disabled':''}>${selected.size<2?'あと1社を選択':'選んだ業者を比較 →'}</button><span role="status" class="ux183-status"></span>`;el.querySelector('[data-compare]').onclick=compare;el.querySelectorAll('[data-remove]').forEach(b=>b.onclick=()=>{selected.delete(b.dataset.remove);tray();enhance();});document.querySelectorAll('[data-ux-select]').forEach(b=>{b.setAttribute('aria-pressed',String(selected.has(b.dataset.uxSelect)));b.textContent=selected.has(b.dataset.uxSelect)?'✓ 比較中':'＋ 比較';});}
function enhance(){document.querySelectorAll('#comparison-body tr[data-company-id]').forEach(r=>{
 const id=r.dataset.companyId;if(r.querySelector('.ux183-row-tools'))return;
 const cell=r.querySelector('th')||r.firstElementChild;const name=cell.querySelector('.comparison-detail-link')?.textContent?.replace('詳細を見る','').trim()||data.notices.companies.find(c=>c.service_id===id)?.company||data.reports.companies.find(c=>c.service_id===id)?.name||id;
 const brand=cell.querySelector('.company-name, .company-name-link');const actualName=brand?.textContent.trim()||name;
 const wrap=document.createElement('div');wrap.className='ux183-row-tools';const b=document.createElement('button');b.dataset.uxSelect=id;b.textContent=selected.has(id)?'✓ 比較中':'＋ 比較';b.setAttribute('aria-pressed',String(selected.has(id)));b.onclick=()=>{if(selected.has(id))selected.delete(id);else if(selected.size<3)selected.set(id,actualName);else {document.querySelector('.ux183-status').textContent='比較は3社までです。1社外してから追加してください。';return;}tray();};wrap.append(b);
 const n=data.notices.companies.find(c=>c.service_id===id);if(n){const nb=document.createElement('button');nb.className='ux183-warning';nb.textContent='! 注意事項';nb.setAttribute('aria-label','ルール適用の重要情報を開く');nb.onclick=()=>dialog(n.company+'：ルール適用情報',`<p class="ux183-evidence">${esc(n.evidence_label)}</p><h3>${esc(n.heading)}</h3><p>${esc(n.text)}</p><ul>${n.sources.map((s,i)=>`<li><a href="${esc(s.url)}" target="_blank" rel="noopener">根拠 ${i+1}（${esc(s.kind)}）↗</a></li>`).join('')}</ul><a href="/companies/${encodeURIComponent(id)}/">業者詳細・問題報告を確認 →</a>`);wrap.append(nb);}const score=r.querySelector('[data-column=score]');const evidence=cell.querySelector('.transparency-summary-button');if(evidence){evidence.querySelector('span').textContent='採点根拠';wrap.prepend(evidence);}(score||cell).append(wrap);if(cell.querySelector('.tag-broker_backed'))cell.querySelector('.tag-traditional')?.remove();const market=cell.querySelector('.market-chip');if(market)market.textContent=market.textContent.replace(/サービス$/,'');const smart=r.querySelector('.tag-smart_contract');const detail=cell.querySelector('.comparison-detail-link');if(smart&&detail){let tags=cell.querySelector('.signal-tags-company');if(!tags){tags=document.createElement('div');tags.className='signal-tags signal-tags-company';detail.before(tags);}const old=smart.parentElement;tags.append(smart);if(!old.children.length)old.remove();}
 const p=data.reports.companies.find(c=>c.service_id===id);const tag=document.createElement('span');tag.className='ux185-count-tag';tag.textContent=`対象${p?.report_count??0}件`;tag.title='出金・問題に関する本人報告の集計対象件数です。口コミ評価の投稿数・アカウント数とは異なります。';tag.setAttribute('aria-label',`本人報告の集計対象${p?.report_count??0}件`);(r.querySelector('.signal-tags-report')||r.lastElementChild).append(tag);
 });}
function enhanceFeatured(){
 const grid=document.querySelector('#featured-grid');if(!grid)return;
 grid.querySelectorAll('.featured-card:not(.ux184-card)').forEach(card=>{
 const s=data.scores.companies.find(c=>c.service_id===card.dataset.companyId),r=data.reports.companies.find(c=>c.service_id===card.dataset.companyId);if(!s)return;
 card.classList.add('ux184-card');
 const title=card.querySelector('h3'),market=card.querySelector('.market'),sentiment=card.querySelector('.ai-sentiment'),headline=card.querySelector('.structural-headline'),detail=card.querySelector('.detail-link'),links=card.querySelector('.link-row');
 const header=document.createElement('header');header.className='ux184-card-head';header.append(title,market);card.querySelector('.status-chip')?.remove();card.querySelector('.overall-featured-score')?.remove();card.prepend(header);
 const scoreBlock=document.createElement('div');scoreBlock.className='ux184-score-block';scoreBlock.innerHTML=`<div class="ux184-total"><span>総合参考点</span><div><strong>${Number(s.overall).toFixed(2)}</strong><small> / 100</small></div></div><div class="ux184-components">${[['出金可否','payout_account','50%'],['本人口コミ','experience','20%'],['運営基盤','transparency','30%']].map(([label,key,weight])=>`<div><span>${label}<small> ${weight}</small></span><b>${Number(s[key]).toFixed(2)}</b><div class="ux184-track"><i style="width:${Math.min(100,Math.max(0,Number(s[key])))}%"></i></div></div>`).join('')}</div><p class="ux184-account-count">本人口コミ ${s.x_posts}投稿・${s.x_authors}アカウント${s.x_authors<20?' <span>少数参考</span>':''}</p>`;header.after(scoreBlock);
 const featureTags={'propr-onchain':['オンチェーン型','運営データ公開'],'hypernova-onchain':['スマートコントラクト'],'hantec-fx-cfd':['ブローカーバック'],'fundedhive-onchain':['スマートコントラクト']}[card.dataset.companyId]||[];
 const tags=document.createElement('div');tags.className='ux186-feature-tags';for(const label of featureTags){const tag=document.createElement('span');tag.textContent=label;tags.append(tag);}header.append(tags);
 const reports=document.createElement('div');reports.className='ux184-reports';reports.innerHTML=`<span>本人報告 <b>${r?.report_count??0}件</b></span><span>出金 <b>${r?.received_reports??0}</b> ／ 問題 <b>${r?.problem_report_count??0}</b></span>`;scoreBlock.after(reports);
 if(sentiment){sentiment.querySelector('h4').textContent='口コミの内訳';const period=document.createElement('p');period.className='ux184-period';period.textContent='直近6か月・公式投稿を除外';sentiment.querySelector('h4').after(period);}
 headline?.remove();
 if(detail){detail.classList.add('ux184-detail');detail.textContent='評価の根拠・プランを見る →';card.append(detail);}
 if(links)card.append(links);
 });
 const desc=[...document.querySelectorAll('#featured p')].find(p=>p.textContent==='4社は紹介リンクとNOTEから詳しい情報を確認できます。');if(desc&&!desc.dataset.ux184){desc.dataset.ux184='1';desc.textContent='注目の4社を、総合点・3つの評価軸・本人報告からチェック。点数順のランキングではありません。';}
}

Promise.all(['ja-v204/data/overall-reference-v194.json','ja-v204/data/normal-report-ratios-v143.json','ja-v204/plan-options-v168.json','rule-history-v182-ja.json'].map(u=>window.pcDataRequest('/'+u).then(r=>{if(!r.ok)throw Error(u);return r.json();}))).then(([scores,reports,plans,notices])=>{
 data={scores,reports,plans,notices};
 enhanceFeatured();const fg=document.querySelector('#featured-grid');if(fg)new MutationObserver(enhanceFeatured).observe(fg,{childList:true});
 const reading=document.querySelector('#reading'),scope=document.querySelector('#publication-scope');if(reading&&!reading.matches('details.ux183-guide')){const fold=document.createElement('details');fold.className='ux183-guide';fold.innerHTML='<summary><span><small>はじめての方へ</small><strong>点数だけで決めない。件数と報告内容も確認。</strong></span><b>数字の読み方を見る ＋</b></summary><div class="ux183-guide-body"></div>';reading.before(fold);fold.lastElementChild.append(reading);if(scope)fold.lastElementChild.append(scope);fold.ontoggle=()=>fold.querySelector('summary b').textContent=fold.open?'説明を閉じる −':'数字の読み方を見る ＋';}
 const comparison=document.querySelector('#comparison');if(comparison){const dates=document.createElement('div');dates.className='ux183-dates';const ds=[...new Set(Object.values(plans).flat().map(p=>p.checked_on).filter(Boolean))].sort();dates.innerHTML=`<strong>データの時点</strong><span>本人報告の観測：${esc(reports.snapshot_period_utc.start_inclusive)} ～ ${esc(reports.snapshot_period_utc.end_exclusive)}未満（UTC）</span><span>採点データ基準：${esc(scores.as_of)}</span><span>公式プラン確認：${esc(ds[0])} ～ ${esc(ds.at(-1))}（項目ごとに異なります）</span>`;comparison.prepend(dates);}
 const bar=document.createElement('aside');bar.className='ux183-tray';bar.setAttribute('aria-label','業者比較リスト');bar.hidden=true;document.body.append(bar);tray();enhance();const body=document.querySelector('#comparison-body');if(body)new MutationObserver(()=>enhance()).observe(body,{childList:true});
}).catch(e=>{console.error('Comparison preview:',e);});
})();
