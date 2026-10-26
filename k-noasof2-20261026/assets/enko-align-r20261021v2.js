/* PROP CHECK en/ko r20261021v2: align JS-rendered parts with the ja production layout (same parts, words only differ). */
(()=>{
const lang=/^(?:\/propcheck-ui-preview\/[^/]+)?\/(en|ko)\//.exec(location.pathname)?.[1];if(!lang)return;
const ST={en:{
 'fundedhive-onchain':[['Automatic approval once payout conditions are met','Public material: once payout conditions are met, the program approves the payout automatically. We have not finished checking the full range of operator powers to stop or change this.'],['Design material on market operations and loss control','Official design description: the market operations of AADS and its switch on losses are confirmed in saved material. Realized profits and costs have not been verified.']],
 'hantec-fx-cfd':[['Operational support from Hantec Markets Mauritius','Public material: official material confirms operational support and the trading infrastructure from Hantec Markets Mauritius. This does not mean that the group’s assets or the regulation of its UK entity apply directly as a payout guarantee for this service.']],
 'hypernova-onchain':[['Public material on reserves and payout status','Public material: material on reserves and payout status is available. We have not independently recalculated the balances in the saved material, and whether they are sufficient for current payout obligations is unconfirmed.'],['Automatic approval once payout conditions are met','Public material: once payout conditions are met, the program approves the payout automatically. We have not finished checking the full range of operator powers to stop or change this.']],
 'propr-onchain':[['One transfer record matched','Individual record matched: we matched one transfer in the official public list against an external record. We did not examine every payout or verify the recipients’ identities.'],['Public material on revenue, payouts and hedge P&L','Public material: material on revenue, payouts and realized hedge P&L is available. Company-wide profit including costs and unpaid rewards, and freely usable cash, are unconfirmed.']]},
ko:{
 'fundedhive-onchain':[['출금 조건 충족 시 자동 승인','공개 자료 있음: 출금 조건을 충족하면 프로그램이 출금을 자동으로 승인하는 구조입니다. 이를 중지·변경할 수 있는 운영 권한 전체는 확인을 마치지 않았습니다.'],['시장 운용·손실 제어 설계 자료','공식 설계 설명: AADS의 시장 운용과 손실 시 전환을 보존 자료로 확인했습니다. 실현된 흑자·비용의 검증은 끝나지 않았습니다.']],
 'hantec-fx-cfd':[['Hantec Markets Mauritius의 운영 지원','공개 자료 있음: Hantec Markets Mauritius의 운영 지원과 거래 기반을 공식 자료로 확인할 수 있습니다. 그룹의 자산이나 영국 법인에 대한 규제가 이 서비스의 지급 보증에 그대로 적용된다는 뜻은 아닙니다.']],
 'hypernova-onchain':[['준비금·지급 현황 공개 자료','공개 자료 있음: 준비금과 지급 현황의 공개 자료를 확인할 수 있습니다. 보존 자료의 잔액은 독립적으로 재계산하지 않았으며, 현재 지급 의무에 충분한지는 확인되지 않았습니다.'],['출금 조건 충족 시 자동 승인','공개 자료 있음: 출금 조건을 충족하면 프로그램이 출금을 자동으로 승인하는 구조입니다. 이를 중지·변경할 수 있는 운영 권한 전체는 확인을 마치지 않았습니다.']],
 'propr-onchain':[['송금 기록 1건 대조','개별 기록 대조: 공식 공개 목록의 송금 1건을 외부 기록과 대조했습니다. 모든 출금이나 수취인의 본인 확인까지 조사한 것은 아닙니다.'],['매출·지급·헤지 손익 공개 자료','공개 자료 있음: 매출·지급·실현 헤지 손익의 공개 자료가 있습니다. 비용과 미지급 보상을 포함한 회사 전체 이익, 자유롭게 쓸 수 있는 현금은 확인되지 않았습니다.']]}}[lang];
const AR={en:'Confirmed structures and support',ko:'확인된 구조·지원'}[lang];
const EX={en:'Excerpt (translated)',ko:'발췌(번역)'}[lang];
const sid=()=>document.body.dataset.initialCompany||(location.pathname.match(/companies\/([^/]+)/)||[])[1];
let busy=false;
function run(){if(busy)return;busy=true;try{
 const root=document.querySelector('#detail-root');const id=sid();
 if(root&&id){
  const hero=root.querySelector('.detail-phase1-hero');
  if(hero){
   const btn=hero.querySelector('.transparency-summary-button');
   if(ST[id]&&btn&&!hero.querySelector('.company-structure-tags')){const w=document.createElement('span');w.className='company-structure-tags';w.setAttribute('aria-label',AR);for(const [t,ti] of ST[id]){const s=document.createElement('span');s.className='structure-tag';s.title=ti;s.textContent=t;w.append(s)}btn.before(w)}
   if(id==='hantec-fx-cfd')hero.querySelectorAll('.signal-tag.tag-traditional').forEach(e=>e.remove());
  }
  const cp=root.querySelector('.pc-provider-coupons.pc19-coupon'),act=root.querySelector('.detail-phase1-actions');
  if(cp&&act&&cp.parentElement!==act){act.classList.add('pc19-has-coupon');act.prepend(cp)}
 }
}finally{busy=false}}
run();new MutationObserver(()=>{clearTimeout(run.t);run.t=setTimeout(run,60)}).observe(document.documentElement,{childList:true,subtree:true});
})();
