/* 本日のクーポン表示（rzr-daily-offer.js のデータを読むだけ。データが無ければ何も表示しない） */
(()=>{'use strict';
function pick(list,now){return (list||[]).filter(o=>o&&o.code&&Date.parse(o.start)<=now).sort((a,b)=>Date.parse(b.start)-Date.parse(a.start))[0]||null;}
function render(){
  const boxes=document.querySelectorAll('[data-rzr-daily-offer]'); if(!boxes.length)return;
  const o=pick(window.RZR_DAILY_OFFERS,Date.now());
  boxes.forEach(box=>{
    const lang=box.dataset.lang||'ja';
    if(!o){box.hidden=true;box.closest('.pc-ad-rzr')?.classList.remove('has-offer');return;}
    const L=lang==='en'?{h:"Today's coupon",copy:'Copy',copied:'Copied'}:{h:'本日のクーポン',copy:'コピー',copied:'コピーしました'};
    box.textContent='';
    const h=document.createElement('h3');h.textContent=L.h;box.append(h);
    if(o.image){const im=document.createElement('img');im.src=o.image;im.alt=o.alt||'';im.loading='lazy';im.className='rzr-offer-img';box.append(im);}
    const desc=o[lang]||o.ja||'';if(desc){const p=document.createElement('p');p.className='rzr-offer-desc';p.textContent=desc;box.append(p);}
    const row=document.createElement('div');row.className='rzr-offer-row';
    const code=document.createElement('code');code.className='rzr-offer-code';code.textContent=o.code;
    const btn=document.createElement('button');btn.type='button';btn.className='rzr-offer-copy';btn.textContent=L.copy;
    const st=document.createElement('span');st.className='rzr-offer-status';st.setAttribute('role','status');st.setAttribute('aria-live','polite');
    btn.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(o.code);}catch(_e){const r=document.createRange();r.selectNodeContents(code);const s=getSelection();s.removeAllRanges();s.addRange(r);document.execCommand&&document.execCommand('copy');}st.textContent=L.copied;setTimeout(()=>{st.textContent='';},2000);});
    row.append(code,btn,st);box.append(row);box.hidden=false;box.closest('.pc-ad-rzr')?.classList.add('has-offer');
  });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();
