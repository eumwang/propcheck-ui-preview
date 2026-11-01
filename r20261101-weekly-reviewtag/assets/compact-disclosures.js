(()=>{'use strict';
 const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
 const t={ja:{plan:'詳しい条件・図解を見る',foundation:'採点項目と出典を開く',reading:'数字・タグの詳しい読み方',close:'閉じる'},en:{plan:'Explore the conditions and diagrams',foundation:'View scoring criteria and sources',reading:'How to read the numbers and tags',close:'Close'},ko:{plan:'상세 조건·도표 보기',foundation:'평가 항목·출처 보기',reading:'숫자·태그 자세히 읽기',close:'접기'}}[lang];
 function wrap(nodes,label,kind=''){
  if(!nodes.length)return null;
  const d=document.createElement('details');d.className='pc-disclosure '+kind;
  const s=document.createElement('summary');s.textContent=label;d.append(s);nodes[0].before(d);
  const body=document.createElement('div');body.className='pc-disclosure-body';d.append(body);nodes.forEach(n=>body.append(n));
  return d;
 }
 function foundation(){
  document.querySelectorAll('.foundation-v194').forEach(el=>{
   if(el.dataset.compactFoundation)return;el.dataset.compactFoundation='1';
   wrap([...el.children].filter(n=>n.tagName==='DETAILS'),t.foundation,'pc-foundation-fold');
  });
 }
 function cards(selector){
  document.querySelectorAll(selector).forEach(box=>{
   const h=box.querySelector(':scope > h3');if(!h)return;
   const d=wrap([...box.children].filter(n=>n!==h),h.textContent,'pc-plan-card');
   if(d){d.querySelector('summary').replaceChildren(h);box.classList.add('pc-folded-card');}
  });
 }
 function section(id){
  const el=document.getElementById(id);if(!el)return;
  const children=[...el.children],h=el.querySelector(':scope > h2');
  const lead=children.slice(children.indexOf(h)+1).find(n=>n.tagName==='P'&&!n.matches('.note,.source'));
  // Keep the introduction, risk notices and suitability summaries above the fold.
  const keep=new Set(children.filter(n=>n===h||n===lead||n.matches('.num,.warm,.note')||n.querySelector('.preview')||(/^H/.test(n.tagName)&&n!==h)));
  children.filter(n=>n.matches('.box')&&/こんな人|Who|Suitable|이런|추천/.test(n.querySelector('h3')?.textContent||'')).forEach(n=>keep.add(n));
  // HIVE Instant's first box is its introduction, not a risk-free teaser.
  if(!lead){const intro=children.find(n=>n.matches('.box:not(.warm)'));if(intro)keep.add(intro);}
  // Preserve heading/body pairs inside the fold, rather than leaving orphan headings.
  children.filter(n=>n.tagName==='H3').forEach(n=>keep.delete(n));
  const moved=children.filter(n=>!keep.has(n));
  if(moved.length){const d=wrap(moved,t.plan,'pc-plan-section');el.append(d);}
 }
 function guides(){
  const path=location.pathname;
  if(/\/guides\/(?:hantec|rzr-funded)\//.test(path)){section('path');section('express');cards('#instant > .box');}
  if(/\/guides\/fundedhive\//.test(path)){section('classic');cards('#pfp > .box[id]');section('instant');}
  if(/\/guides\/(hypernova|propr)\//.test(path))cards('#choices > .box');
 }
 function reading(){
  const fold=document.querySelector('details.ux183-guide');if(!fold||fold.dataset.compactReading)return;
  fold.dataset.compactReading='1';
  const short=document.createElement('small');short.className='pc-reading-note';short.textContent={ja:'口コミの採点は直近730日が基準。表示期間を変えても総合点は変わりません。件数は利用者数ではありません。',en:'Review scores use 730 days. Changing the display period does not change the overall score. Post counts are not user counts.',ko:'후기 점수는 최근 730일 기준입니다. 표시 기간을 바꿔도 종합 점수는 변하지 않습니다. 게시물 수는 이용자 수가 아닙니다.'}[lang];
  (fold.querySelector('summary > span')||fold.querySelector('summary')).append(short);
 }
 function assessment(){
  if(!/\/assessment\//.test(location.pathname))return;
  document.querySelectorAll('article[id]').forEach(a=>{
   const h=a.querySelector(':scope > h2');if(!h)return;
   const d=wrap([...a.children].filter(n=>n!==h),h.textContent,'pc-assessment-fold');if(d)d.querySelector('summary').replaceChildren(h);
  });
 }
 function reveal(){
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  const target=document.getElementById(id);if(!target)return;
  if(target.matches('.pc-folded-card')){const d=target.querySelector(':scope > details');if(d)d.open=true;}
  let node=target;while(node){if(node.tagName==='DETAILS')node.open=true;node=node.parentElement;}
 }
 function start(){
  guides();reading();assessment();foundation();reveal();
  if(/\/companies\//.test(location.pathname)||document.querySelector('.reader-guide'))new MutationObserver(()=>{foundation();reading();}).observe(document.body,{childList:true,subtree:true});
  addEventListener('hashchange',reveal);
  document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;let id;try{id=decodeURIComponent(a.getAttribute('href').slice(1));}catch{return;}let n=document.getElementById(id);if(n?.matches('.pc-folded-card')){const d=n.querySelector(':scope > details');if(d)d.open=true;}while(n){if(n.tagName==='DETAILS')n.open=true;n=n.parentElement;}});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
