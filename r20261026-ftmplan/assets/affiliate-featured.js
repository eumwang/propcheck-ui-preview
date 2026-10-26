(()=>{'use strict';
const lang=document.documentElement.lang.slice(0,2),prefix=lang==='ja'?'':'/'+lang;
const t=({ja:['紹介記事を読む →','登録する ↗','評価の詳細','紹介リンクを含みます。申込条件は公式サイトでご確認ください。','公式サイトで登録する ↗'],en:['Read guide →','Sign up ↗','Rating details','Contains referral links. Check the terms on the official site.','Sign up on the official site ↗'],ko:['소개 글 읽기 →','가입하기 ↗','평가 상세','제휴 링크가 포함되어 있습니다. 신청 조건은 공식 사이트에서 확인하세요.','공식 사이트에서 가입하기 ↗']})[lang];if(!t)return;
const map=window.PC_REFERRAL_CTA;
const lines={ja:['豊富なプランから、自分に合う挑戦を。','即時出金と、透明性にこだわる仕組み。','プランとルールを、購入前にチェック。','オンチェーンの仕組みを、わかりやすく。'],en:['Find your fit across a wide range of plans.','Instant payouts with a focus on transparency.','Explore the plans and rules before you buy.','Understand how on-chain trading works.'],ko:['다양한 플랜에서 나에게 맞는 도전을.','즉시 출금과 투명성을 추구하는 구조.','구매 전에 플랜과 규칙을 확인하세요.','온체인 구조를 쉽게 알아보세요.']};
const ids=['hantec-fx-cfd','fundedhive-onchain','hypernova-onchain','propr-onchain'];
function node(tag,cls,text){const n=document.createElement(tag);n.className=cls;if(text)n.textContent=text;return n;}
function link(text,url,paid,affiliate=paid){const a=node('a',paid?'af-register':'af-guide',text);a.href=url;if(paid){a.target='_blank';a.rel=affiliate?'sponsored noopener noreferrer':'noopener noreferrer';if(affiliate)a.dataset.affiliate='true';}return a;}
function actions(item,full=false){const box=node('div','af-cta');const row=node('div','af-buttons');row.append(link(t[0],prefix+'/guides/'+item.slug+'/',false),link(t[full?4:1],item.url,true,item.affiliate!==false));box.append(row,node('small','af-disclosure',item.affiliate===false?{ja:'公式サイトへのリンクです。',en:'Link to the official website.',ko:'공식 사이트 링크입니다.'}[lang]:t[3]));return box;}
function enhance(){
 document.querySelectorAll('.featured-card.ux184-card').forEach(card=>{
  const item=map[card.dataset.companyId];if(!item)return;
  const total=card.querySelector('.ux184-total strong');const header=card.querySelector('.ux184-card-head');if(!header||!total)return;
  if(!card.classList.contains('af-ready')){
   const score=node('span','af-mobile-score',total.textContent);header.append(score);
   header.after(node('p','af-tagline',lines[lang][ids.indexOf(card.dataset.companyId)]));
   const cta=actions(item);card.querySelector('.af-tagline').after(cta);
   const button=node('button','af-toggle',t[2]+' ⌄');button.type='button';button.setAttribute('aria-expanded','false');button.setAttribute('aria-controls','af-panel-'+item.slug);
   const panel=node('div','af-panel');panel.id='af-panel-'+item.slug;
   [...card.children].filter(e=>!['af-cta','af-tagline','ux184-card-head'].some(c=>e.classList.contains(c))).forEach(e=>panel.append(e));
   card.append(button,panel);card.classList.add('af-ready');
   button.addEventListener('click',()=>{const open=card.classList.toggle('af-open');button.setAttribute('aria-expanded',String(open));button.textContent=t[2]+(open?' ⌃':' ⌄');});
   panel.querySelector('.link-row')?.remove();
  }
  const shown=header.querySelector('.af-mobile-score');if(shown.textContent!==total.textContent)shown.textContent=total.textContent;
 });
 const sid=location.pathname.match(/\/companies\/([^/]+)/)?.[1],item=map[sid],root=document.querySelector('#detail-root');
 if(item&&root){const anchor=root.querySelector('.detail-tabs');if(anchor&&!root.querySelector('.af-detail-top')){const top=actions(item,true);top.classList.add('af-detail-top');anchor.before(top);}if(!root.querySelector('.af-detail-bottom')){const end=actions(item,true);end.classList.add('af-detail-bottom');root.append(end);}}
}
let pending=false;const schedule=()=>{if(!pending){pending=true;queueMicrotask(()=>{pending=false;enhance();});}};
for(const target of [document.querySelector('#featured-grid'),document.querySelector('#detail-root')].filter(Boolean))new MutationObserver(schedule).observe(target,{childList:true,subtree:true,characterData:true});enhance();
})();
