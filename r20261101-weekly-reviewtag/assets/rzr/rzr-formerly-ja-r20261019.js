/* JA only: show 「（旧Hantec Trader）」 next to RZR Funded in main visible spots (PONCHAI 2026-10-19 20:57 JST).
   Added with CSS ::after so element text (used by other scripts) is unchanged. */
(function(){
  var NAME='RZR Funded', C='pc-rzr-formerly';
  var css='.'+C+'--sub::after{content:"（旧Hantec Trader）";display:block;font-size:11px;font-weight:400;line-height:1.3;color:#72847e;margin-top:2px;white-space:nowrap;text-overflow:clip}'+
    '.'+C+'--title::after{content:"（旧Hantec Trader）";font-size:.62em;font-weight:600;color:#72847e;white-space:nowrap}';
  var st=document.createElement('style'); st.id='pc-rzr-formerly-style'; st.textContent=css; document.head.appendChild(st);
  function mark(el,kind){ if(el && !el.classList.contains(C+'--'+kind) && el.textContent.trim()===NAME) el.classList.add(C+'--'+kind); }
  function run(){
    var p=location.pathname;
    if(p==='/'||p==='/index.html'){
      document.querySelectorAll('.fc-company > strong, .company-name > a.company-name-link, .mc-toggle > .mc-name').forEach(function(e){ mark(e,'sub'); });
    } else if((p.indexOf('/companies/hantec-fx-cfd')===0||p.indexOf('/companies/rzr-funded')===0)){
      mark(document.getElementById('detail-title'),'title');
      document.querySelectorAll('h2').forEach(function(e){ if(e.parentElement && e.parentElement.querySelector('.detail-hero-tags')) mark(e,'title'); });
    } else if((p.indexOf('/guides/hantec')===0||p.indexOf('/guides/rzr-funded')===0)){
      mark(document.querySelector('.guide-company > span'),'sub');
    }
  }
  var q=false; function sched(){ if(q) return; q=true; requestAnimationFrame(function(){ q=false; run(); }); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
  new MutationObserver(sched).observe(document.documentElement,{childList:true,subtree:true});
})();
