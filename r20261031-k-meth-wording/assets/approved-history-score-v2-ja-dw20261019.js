(()=>{'use strict';
const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
window.pcDataRequest('/data/overall-reference-v194.json').then(r=>r.json()).then(data=>{
 const detailId=()=>document.querySelector('#company-select')?.value||(x=>x==='rzr-funded'?'hantec-fx-cfd':x)(location.pathname.match(/\/companies\/([^/]+)/)?.[1]);
 function update(){
  const history=document.querySelector('#rh-panel');
  if(lang==='ja'&&detailId()==='fundednext-fx-cfd'&&history&&!history.querySelector('.approved-kpi-definition')){
   const n=document.createElement('p');n.className='section-note approved-kpi-definition';n.textContent='改悪件数は、変更ごとの判定に基づきます。警戒度は変更に含まれる不利益への注意を示すため、改悪件数とは一致しない場合があります。';history.prepend(n);
  }
  document.querySelectorAll('.detail-phase1-meta dt').forEach(dt=>{if(dt.textContent==='スコア集計日'&&dt.nextElementSibling&&dt.nextElementSibling.textContent!==data.as_of)dt.nextElementSibling.textContent=data.as_of;});
 }
 update();new MutationObserver(update).observe(document.body,{childList:true,subtree:true});
}).catch(e=>console.error('Approved history score:',e));
})();
