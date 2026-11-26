/* brand-marks-r20261116: placeholder marks for 3 new firms (not official logos) */
(()=>{const M={"tradeifyfx-fx-cfd":"/assets/company-marks-r20261116/tradeifyfx-fx-cfd.svg","eightcapchallenges-fx-cfd":"/assets/company-marks-r20261116/eightcapchallenges-fx-cfd.svg","upcomers-fx-cfd":"/assets/company-marks-r20261116/upcomers-fx-cfd.svg"};
function fix(root){(root||document).querySelectorAll('tr[data-company-id], [data-initial-company]').forEach(el=>{
  const sid=el.dataset.companyId||el.dataset.initialCompany;
  if(!sid||!M[sid])return;
  el.querySelectorAll('img').forEach(img=>{
    if((img.getAttribute('src')||'').indexOf(M[sid])>=0)return;
    if((img.getAttribute('src')||'').indexOf('propcheck-logo')>=0)return;
    if((img.getAttribute('alt')||'')==='PROP CHECK')return;
    img.src=M[sid];img.removeAttribute('data-fallback');img.onerror=null;
  });
});}
fix();new MutationObserver(()=>fix()).observe(document.body,{childList:true,subtree:true});
})();
