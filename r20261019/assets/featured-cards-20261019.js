/* PROP CHECK preview 2026-10-19: 注目4社 card redesign (PC = Option A, mobile = Option B).
   Used only by r20261017/featured-20261019.html. Reads the cards that app.js renders into
   #featured-grid (real page data) and re-presents them in #fc19-root. The original grid stays
   in the DOM (hidden) so the period selector and other scripts keep working; every change to it
   triggers a re-render. Affiliate / register / guide anchors are cloned, so hrefs stay identical. */
(()=>{'use strict';
const section=document.getElementById('featured');
const grid=document.getElementById('featured-grid');
if(!section||!grid)return;
/* PONCHAI 2026-10-19: Hypernova currently has no coupon, so its 特典 box is not shown. */
const NO_OFFER=new Set(['hypernova-onchain']);
const SVG_COPY='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true" focusable="false"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';
const SVG_OK='<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
const el=(tag,cls,text)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(text!=null)n.textContent=text;return n;};
const txt=n=>n?n.textContent.replace(/\s+/g,' ').trim():'';

const root=el('div','fc19');root.id='fc19-root';
const live=el('p','fc19-sr');live.setAttribute('aria-live','polite');
grid.after(root);
section.classList.add('fc19-on');

function cloneLink(a,cls,label){
  if(!a)return null;
  const c=a.cloneNode(false);           // keeps href/target/rel/data-* exactly
  c.className=cls;c.textContent=label;
  return c;
}
function read(card){
  const q=s=>card.querySelector(s);
  const offerEl=q('.fc-offer:not(.fc-offer-empty)');
  const id=card.dataset.companyId||'';
  let offer=null;
  if(offerEl&&!NO_OFFER.has(id)){
    const code=txt(offerEl.querySelector('.fc-offer-code strong'));
    offer={label:txt(offerEl.querySelector('.fc-offer-label')),code:/^[A-Za-z0-9_-]+$/.test(code)?code:''};
  }
  const evidence=q('.fc-evidence');
  return {
    id,
    logo:q('.fc-heading .company-brand-logo'),
    name:txt(q('.fc-company strong')),
    market:txt(q('.fc-company small')),
    rank:txt(q('.fc-rank')),
    score:txt(q('.fc-score-desktop > strong')),
    outOf:txt(q('.fc-score-desktop > span'))||'/100',
    few:txt(q('.fc-score-desktop div small')),
    comps:[...card.querySelectorAll('.fc-components .fc-component')].map(c=>{
      const label=c.querySelector('span');
      return {key:[...c.classList].find(k=>k!=='fc-component')||'',
        name:label?txt(label.firstChild):'',weight:txt(label&&label.querySelector('small')),
        width:(c.querySelector('.fc-track i')||{}).style?.width||'0%',value:txt(c.querySelector('b'))};
    }),
    evidence:evidence?evidence.innerHTML.split(/<br\s*\/?>/i).map(s=>{const d=el('div');d.innerHTML=s;return txt(d);}).filter(Boolean):[],
    offer,
    signup:q('.fc-actions .fc-signup'),
    evidenceLink:q('.fc-actions .fc-evidence-link'),
    guideLink:q('.fc-actions .fc-guide-link')
  };
}
function codeButton(code){
  const b=el('button','fc19-code');b.type='button';b.dataset.code=code;
  b.setAttribute('aria-label','クーポンコード '+code+' をコピー');b.title='クリックでコピー';
  const s=el('span','fc19-code-text',code);b.append(s);b.insertAdjacentHTML('beforeend','<span class="fc19-code-icon">'+SVG_COPY+'</span>');
  return b;
}
function buildCard(d,i){
  const card=el('article','fc19-card');card.id='fc19-card-'+d.id;card.dataset.companyId=d.id;card.dataset.index=String(i);
  card.setAttribute('aria-label',d.rank+' '+d.name);
  const head=el('header','fc19-head');
  if(d.logo){const lg=d.logo.cloneNode(true);lg.className='fc19-logo';head.append(lg);}
  const nm=el('div','fc19-name');nm.append(el('h3','',d.name),el('small','',d.market));
  head.append(nm,el('span','fc19-rank',d.rank));
  const sc=el('div','fc19-score');
  const total=el('p','fc19-total');total.append(el('strong','',d.score),el('span','',d.outOf));
  const lbl=el('p','fc19-label');lbl.append(el('span','fc19-label-text','総合参考点'));
  if(d.few)lbl.append(el('span','fc19-few',d.few));
  sc.append(total,lbl);
  const comps=el('div','fc19-comps');
  d.comps.forEach(c=>{
    const row=el('div','fc19-comp fc19-'+c.key.replace(/^fc-/,''));
    const name=el('span','fc19-comp-name',c.name+' ');name.append(el('small','',c.weight));
    const track=el('span','fc19-bar');const bar=el('i');bar.style.width=c.width;track.append(bar);
    row.append(name,track,el('b','',c.value));comps.append(row);
  });
  const ev=el('p','fc19-evidence');d.evidence.forEach((line,k)=>{if(k)ev.append(el('br'));ev.append(document.createTextNode(line));});
  let offer;
  if(d.offer){
    offer=el('div','fc19-offer');
    offer.append(el('small','fc19-offer-kicker','特典'));
    const label=el('p','fc19-offer-label');
    d.offer.label.split(/\s+\/\s+/).forEach((part,k)=>{if(k)label.append(el('br'));label.append(document.createTextNode(part));});
    offer.append(label);
    if(d.offer.code){const w=el('div','fc19-offer-code');w.append(codeButton(d.offer.code),el('span','fc19-copied','コピーしました'));offer.append(w);}
  }else{
    offer=el('div','fc19-offer fc19-offer-none');offer.setAttribute('aria-hidden','true');
  }
  const cta=el('div','fc19-cta');const su=cloneLink(d.signup,'fc19-signup','登録する ↗');if(su)cta.append(su);
  const links=el('div','fc19-links');
  [cloneLink(d.evidenceLink,'fc19-textlink','根拠・プラン ›'),cloneLink(d.guideLink,'fc19-textlink','紹介記事 ›')].forEach(a=>a&&links.append(a));
  card.append(head,sc,comps,ev,offer,cta,links);
  return card;
}
let current=0;
function render(){
  const cards=[...grid.querySelectorAll('.featured-reference-card')];
  if(!cards.length){root.replaceChildren();return;}
  const data=cards.map(read);
  const keepScroll=root.querySelector('.fc19-track')?.scrollLeft||0;
  const tabs=el('div','fc19-tabs');tabs.setAttribute('aria-label','注目4社を選ぶ');
  const track=el('div','fc19-track');track.tabIndex=0;track.setAttribute('aria-label','注目4社のカード（横にスワイプして比較）');
  const dots=el('div','fc19-dots');
  data.forEach((d,i)=>{
    const t=el('button','fc19-tab',(i+1)+'. '+d.name);t.type='button';t.dataset.index=String(i);t.setAttribute('aria-controls','fc19-card-'+d.id);tabs.append(t);
    track.append(buildCard(d,i));
    const dot=el('button','fc19-dot');dot.type='button';dot.dataset.index=String(i);dot.setAttribute('aria-label',d.name+'を表示（'+(i+1)+'/'+data.length+'）');dots.append(dot);
  });
  const hint=el('p','fc19-hint','← スワイプで比較 →');hint.setAttribute('aria-hidden','true');
  root.replaceChildren(tabs,track,dots,hint,live);
  track.scrollLeft=keepScroll;
  track.addEventListener('scroll',onScroll,{passive:true});
  setActive(Math.min(current,data.length-1),false);
}
function cardsOf(){return [...root.querySelectorAll('.fc19-card')];}
function setActive(i,scrollTabs=true){
  current=i;
  root.querySelectorAll('.fc19-tab,.fc19-dot').forEach(b=>{
    const on=Number(b.dataset.index)===i;
    if(on)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');
    b.classList.toggle('is-active',on);
  });
  if(scrollTabs){const tab=root.querySelector('.fc19-tab.is-active'),bar=root.querySelector('.fc19-tabs');
    if(tab&&bar&&bar.scrollWidth>bar.clientWidth)bar.scrollTo({left:tab.offsetLeft-bar.clientWidth/2+tab.offsetWidth/2,behavior:'smooth'});}
}
let raf=0;
function onScroll(){
  if(raf)return;raf=requestAnimationFrame(()=>{raf=0;
    const track=root.querySelector('.fc19-track');if(!track)return;
    const cs=cardsOf();if(!cs.length)return;
    const base=cs[0].offsetLeft;let best=0,dist=Infinity;
    cs.forEach((c,i)=>{const d2=Math.abs((c.offsetLeft-base)-track.scrollLeft);if(d2<dist){dist=d2;best=i;}});
    if(track.scrollLeft+track.clientWidth>=track.scrollWidth-2)best=cs.length-1;
    if(best!==current)setActive(best);
  });
}
function goTo(i){
  const track=root.querySelector('.fc19-track'),cs=cardsOf();if(!track||!cs[i])return;
  track.scrollTo({left:cs[i].offsetLeft-cs[0].offsetLeft,behavior:'smooth'});setActive(i);
}
async function copy(code){
  try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(code);return true;}}catch(_e){}
  const ta=el('textarea');ta.value=code;ta.setAttribute('readonly','');ta.style.cssText='position:fixed;top:-1000px;opacity:0';
  document.body.append(ta);ta.select();let ok=false;try{ok=document.execCommand('copy');}catch(_e){}ta.remove();return ok;
}
root.addEventListener('click',async ev=>{
  const nav=ev.target.closest('.fc19-tab,.fc19-dot');
  if(nav){goTo(Number(nav.dataset.index));return;}
  const btn=ev.target.closest('.fc19-code');
  if(!btn)return;
  const code=btn.dataset.code;const ok=await copy(code);
  const wrap=btn.parentElement,msg=wrap.querySelector('.fc19-copied');
  msg.textContent=ok?'コピーしました':'コピーできませんでした';
  wrap.classList.add('is-copied');btn.classList.toggle('is-ok',ok);
  btn.querySelector('.fc19-code-icon').innerHTML=ok?SVG_OK:SVG_COPY;
  live.textContent=ok?'クーポンコード '+code+' をコピーしました':'コピーできませんでした。コード '+code+' を手入力してください';
  clearTimeout(btn._t);btn._t=setTimeout(()=>{wrap.classList.remove('is-copied');btn.classList.remove('is-ok');btn.querySelector('.fc19-code-icon').innerHTML=SVG_COPY;},1800);
});
root.addEventListener('keydown',ev=>{
  if(!ev.target.classList.contains('fc19-track'))return;
  if(ev.key==='ArrowRight'){ev.preventDefault();goTo(Math.min(current+1,cardsOf().length-1));}
  if(ev.key==='ArrowLeft'){ev.preventDefault();goTo(Math.max(current-1,0));}
});
let pending=false;
const schedule=()=>{if(pending)return;pending=true;setTimeout(()=>{pending=false;render();},30);};
new MutationObserver(schedule).observe(grid,{childList:true,subtree:true,characterData:true});
render();
})();
