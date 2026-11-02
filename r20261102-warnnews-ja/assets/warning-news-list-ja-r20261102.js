/* 業者一覧：warning_news のある会社だけに要注意ニュースを表示（文言は notice-data の warning_news をそのまま使用） */
(()=>{'use strict';
  const body=document.querySelector('#comparison-body');if(!body)return;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  fetch('/notice-data-v178-ja-dw20261102v5.json').then(r=>r.json()).then(data=>{
    const map={};
    for(const c of data.companies||[]){const w=(c.warning_news||[]).filter(x=>x&&x.text);if(w.length)map[c.service_id]=w;}
    const box=(id,w)=>`<div class="pc-wn" data-wn="${esc(id)}"><b class="pc-wn-flag">🚩 要注意ニュース</b>${w.map(x=>`<p>${esc(x.text)}</p>`).join('')}<a href="/companies/${encodeURIComponent(id)}/">業者詳細 →</a></div>`;
    function apply(){
      for(const row of body.querySelectorAll('tr[data-company-id]')){
        const id=row.dataset.companyId,w=map[id];if(!w)continue;
        const copy=row.querySelector('th .company-cell-copy');
        if(copy&&!copy.querySelector(':scope > .pc-wn')){const a=copy.querySelector(':scope > .company-actions');a?a.insertAdjacentHTML('beforebegin',box(id,w)):copy.insertAdjacentHTML('beforeend',box(id,w));}
        const mc=row.querySelector('th .mc-summary');
        if(mc&&!mc.querySelector(':scope > .pc-wn')){const b=mc.querySelector(':scope > .mc-bottom');b?b.insertAdjacentHTML('afterend',box(id,w)):mc.insertAdjacentHTML('beforeend',box(id,w));}
      }
    }
    apply();new MutationObserver(apply).observe(body,{childList:true,subtree:true});
  }).catch(()=>{});
})();
