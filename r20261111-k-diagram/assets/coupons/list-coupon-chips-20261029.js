/* 業者一覧（比較表）：今クーポンがある提携業者だけ、コードを1行のチップで出す（割引はチップの title）（2026-10-29 PONCHAI 依頼・未承認）
   対象：RZR Funded・FundedHive・Moneta Funded・IC Funded。期限を過ぎたチップは出さない。行の高さを変えないよう1行・入らない幅では出さない。 */
(()=>{'use strict';
const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
const RZR_SHORT={RZRNOLIMITS:{ja:'25%OFF',en:'25% OFF',ko:'25% 할인'}};
function rzr(){const now=Date.now();const o=(window.RZR_DAILY_OFFERS||[]).filter(x=>x&&x.code&&Date.parse(x.start)<=now).sort((a,b)=>Date.parse(b.start)-Date.parse(a.start))[0];
 if(!o)return null;return {code:o.code,label:(RZR_SHORT[o.code]||{})[lang]||''};}
const LIST={
 'hantec-fx-cfd':()=>rzr(),
 'fundedhive-onchain':()=>({code:'PONCHAI',label:{ja:'PFPプラン 20%OFF',en:'PFP plans 20% OFF',ko:'PFP 플랜 20% 할인'}[lang]}),
 'monetafunded-fx-cfd':()=>Date.now()<Date.parse('2026-11-01T00:00:00+09:00')?{code:'TRADE55',label:{ja:'55%OFF',en:'55% OFF',ko:'55% 할인'}[lang]}:{code:'ponchai42',label:{ja:'42%OFF',en:'42% OFF',ko:'42% 할인'}[lang]},
 'icfunded-fx-cfd':()=>Date.now()<Date.parse('2026-11-01T07:59:00+09:00')?{code:'TREAT40',label:{ja:'40%OFF',en:'40% OFF',ko:'40% 할인'}[lang]}:null
};
const T={ja:'クーポン',en:'Coupon',ko:'쿠폰'}[lang];
function chipFor(o){const chip=document.createElement('span');chip.className='market-chip pc-coupon-chip';
 const c=document.createElement('code');c.textContent=o.code;chip.append(c);if(o.label)chip.append(' · '+o.label);chip.title=T+': '+o.code+(o.full?' · '+o.full:'');return chip;}
function place(host,o,key){if(!host)return;const old=host.querySelector(':scope > .pc-coupon-chip');
 if(!o){if(old)old.remove();return;}const text=o.code+(o.label?' · '+o.label:'');
 if(old&&old.dataset.text===text)return;const chip=chipFor(o);chip.dataset.text=text;if(old)old.replaceWith(chip);else host.append(chip);}
/* 入らないとき（ほかの文字に重なる・列からはみ出す）は出さない＝行の高さ・ほかの表示を変えない */
function fit(){document.querySelectorAll('.comparison-table .pc-coupon-chip').forEach(c=>{c.classList.remove('pc-chip-nofit');if(!c.offsetParent)return;
 const r=c.getBoundingClientRect(),cell=c.closest('td,th').getBoundingClientRect();
 const ov=[...c.parentElement.children].some(x=>{if(x===c||!x.offsetParent)return false;const q=x.getBoundingClientRect();return q.right>r.left+0.5&&q.left<r.right-0.5&&q.bottom>r.top&&q.top<r.bottom});
 if(ov||r.left<cell.left||r.right>cell.right+0.5)c.classList.add('pc-chip-nofit');});}
addEventListener('resize',()=>requestAnimationFrame(fit));
function update(){
 document.querySelectorAll('table.comparison-table tr[data-company-id]').forEach(tr=>{
  const f=LIST[tr.dataset.companyId];if(!f)return;const o=f();
  place(tr.querySelector('.overall-score-compact .table-score'),o&&{code:o.code,label:'',full:o.label});   /* PC：点数の行の右端にコードだけ（割引は title） */
  const m=tr.querySelector('.mc-bottom .mc-meta');if(m)place(m,o&&{code:o.code,label:'',full:o.label}); /* スマホ：種類の文字の後ろにコードだけ */
 });
 requestAnimationFrame(fit);
}
let q=false;function schedule(){if(q)return;q=true;requestAnimationFrame(()=>{q=false;update();});}
new MutationObserver(schedule).observe(document.documentElement,{childList:true,subtree:true});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update);else update();
})();
