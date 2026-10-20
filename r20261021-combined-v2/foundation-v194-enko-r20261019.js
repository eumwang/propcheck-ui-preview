/* PROP CHECK en/ko copy of foundation-v194-ja-dw20261019.js (en/ko wording aligned 2026-10-19). */
window.FOUNDATION194_COPY={
  ja:{
    title:'運営基盤の採点根拠',
    intro:'出金の仕組み25・公開収支25・運営体制30・支援元の規模20。',
    groups:['出金の仕組み','公開収支','運営体制','支援元の規模'],
    source:'出典',originalRule:'',criteria:'採点基準',unknown:'確認できる資料がなかったため、加点していません。',
    scope:'',
    penalty:'減点：未確認',
    method:'評価方法',date:'',
    generic:'確認できる資料がなかったため、加点していません。',
    g:{
      'ftmo-fx-cfd':'OMHC親グループの2025年監査済連結自己資本を確認。',
      'hantec-fx-cfd':'Hantec Marketsブランドの2025年通期実取引高（企業公表値）を確認。',
      'icfunded-fx-cfd':'IC Marketsブランドの2024年Q3月平均実取引高（企業公表値）を確認。',
      'propr-onchain':'SwissBorgの2026年10月5日時点の認証済み会員921,214人を確認。',
      'monetafunded-fx-cfd':'Moneta Markets Capital Ltd（英国法人08279988）の2026年3月期監査済単体決算で、売上780,000 GBP、純利益77,386 GBP、自己資本931,586 GBPを確認。',
      'blueberry-fx-cfd':'確認できる資料がなかったため、加点していません。',
      'fxify-fx-cfd':'現行運営法人を保有するFDCTechの2025年監査済連結売上・総資本を確認。'
    }
  },
  en:{
    title:'Operational foundation evidence',
    intro:'Payout process 25, financial disclosure 25, operating structure 30, support source scale 20.',
    groups:['Payout process','Financial disclosure','Operating structure','Support source scale'],
    source:'Source',originalRule:'',criteria:'Criterion',unknown:'No supporting documents were found, so no points were added.',
    scope:'',
    penalty:'Deductions: not confirmed',
    method:'Evaluation method',date:'',
    generic:'No supporting documents were found, so no points were added.',
    g:{
      'ftmo-fx-cfd':'Confirmed: 2025 audited consolidated equity of OMHC, the parent group.',
      'hantec-fx-cfd':'Confirmed: Hantec Markets brand full-year 2025 actual trading volume (as reported by the company).',
      'icfunded-fx-cfd':'Confirmed: IC Markets brand Q3 2024 average monthly actual trading volume (as reported by the company).',
      'propr-onchain':'Confirmed: 921,214 SwissBorg verified members as of 5 October 2026.',
      'monetafunded-fx-cfd':'Confirmed in the audited standalone accounts of Moneta Markets Capital Ltd (UK company 08279988) for the year ended March 2026: revenue GBP 780,000, net profit GBP 77,386 and equity GBP 931,586.',
      'blueberry-fx-cfd':'No supporting documents were found, so no points were added.',
      'fxify-fx-cfd':'Confirmed: 2025 audited consolidated revenue and total equity of FDCTech, which owns the current operating company.'
    }
  },
  ko:{
    title:'운영 기반 평가 근거',
    intro:'출금 절차 25·공개 수지 25·운영 체계 30·지원 주체 규모 20점.',
    groups:['출금 절차','공개 수지','운영 체계','지원 주체 규모'],
    source:'출처',originalRule:'',criteria:'기준',unknown:'확인할 수 있는 자료가 없어 가점하지 않았습니다.',
    scope:'',
    penalty:'감점: 미확인',
    method:'산정 방법',date:'',
    generic:'확인할 수 있는 자료가 없어 가점하지 않았습니다.',
    g:{
      'ftmo-fx-cfd':'모회사 그룹 OMHC의 2025년 감사 연결 자기자본을 확인.',
      'hantec-fx-cfd':'Hantec Markets 브랜드의 2025년 연간 실제 거래량(기업 공표치)을 확인.',
      'icfunded-fx-cfd':'IC Markets 브랜드의 2024년 3분기 월평균 실제 거래량(기업 공표치)을 확인.',
      'propr-onchain':'2026년 10월 5일 기준 SwissBorg 인증 회원 921,214명을 확인.',
      'monetafunded-fx-cfd':'Moneta Markets Capital Ltd(영국 법인 08279988)의 2026년 3월 결산 감사 완료 단독 재무제표에서 매출 780,000 GBP, 순이익 77,386 GBP, 자기자본 931,586 GBP를 확인.',
      'blueberry-fx-cfd':'확인할 수 있는 자료가 없어 가점하지 않았습니다.',
      'fxify-fx-cfd':'현 운영 법인을 보유한 FDCTech의 2025년 감사 연결 매출·총자본을 확인.'
    }
  }
};
window.foundation194=function(id){
  const lang=document.documentElement.lang.startsWith('ko')?'ko':document.documentElement.lang.startsWith('en')?'en':'ja';
  const t=window.FOUNDATION194_COPY[lang];
  const original=window.FOUNDATION194?.[lang]?.[id]||[];
  const model=window.PROP_V3_FOUNDATION?.[id];
  const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const fmt=x=>String(Number(Number(x||0).toFixed(3)));
  if(!model)return `<section id="transparency" class="panel foundation-v194"><h3>${t.title}</h3><p>${t.unknown}</p></section>`;
  const sections=[['A',model.A,25],['B',model.B,25],['C',model.C,30],['G',model.G,20]];
  const byGroup=g=>original.filter(x=>g==='C'?/^C[1-4]$/.test(x.item):x.item.startsWith(g));
  const details=['A','B','C'].flatMap(g=>byGroup(g).map(x=>{
    const multiplier=g==='A'||g==='B'?1.25:1;
    const pts=fmt(x.points*multiplier),max=fmt(x.max*multiplier);
    const urls=Array.isArray(x.urls)?x.urls:[];
    return `<details><summary><span>${esc(x.label)}</span><b>${pts} / ${max}</b></summary><p>${esc(x.reason||t.unknown)}</p>${t.originalRule?`<p>${t.originalRule}: ${esc(x.rule||'')}</p>`:''}<div class="foundation-v194-sources">${urls.map((u,i)=>`<a target="_blank" rel="noopener noreferrer" href="${esc(u)}">${t.source} ${i+1} ↗</a>`).join('')}</div></details>`;
  }));
  const gText=t.g[id]||t.generic;
  const gSources=[...(model.G>0||id==='monetafunded-fx-cfd'||id==='blueberry-fx-cfd'?model.G_sources||[]:[])];
  if(id==='monetafunded-fx-cfd')gSources.push('https://find-and-update.company-information.service.gov.uk/company/08279988/filing-history/MzUzMjkxMjY0OWFkaXF6a2N4/document?format=pdf&download=0');
  const gDetail=`<details><summary><span>${t.groups[3]}</span><b>${fmt(model.G)} / 20</b></summary><p>${esc(gText)}</p>${model.G===0&&gText!==t.unknown?`<p>${t.unknown}</p>`:''}<div class="foundation-v194-sources">${gSources.map((u,i)=>`<a target="_blank" rel="noopener noreferrer" href="${esc(u)}">${t.source} ${i+1} ↗</a>`).join('')}</div></details>`;
  return `<section id="transparency" class="panel foundation-v194"><header><h3>${t.title}</h3><strong>${fmt(model.F)} / 100</strong></header><p>${t.intro}</p><div class="foundation-v194-groups">${sections.map(([g,value,max],i)=>`<div>${t.groups[i]}<b>${fmt(value)} / ${max}</b></div>`).join('')}</div>${t.scope?`<p>${t.scope}</p>`:''}${details.join('')}${gDetail}<p>${t.penalty}</p><small>${t.date}</small><p><a href="${lang==='ja'?'':'/'+lang}/methodology/">${t.method} →</a></p></section>`;
};
(()=>{const L=(document.documentElement.lang||'en').slice(0,2)==='ko'?'ko':'en';const c=window.FOUNDATION194_COPY&&window.FOUNDATION194_COPY[L];if(!c)return;let none=false;
const fill=()=>{for(const n of document.querySelectorAll('section.foundation-v194>small')){if(none){if(!n.hidden){n.textContent='';n.hidden=true;}}else if(c.date&&n.textContent!==c.date)n.textContent=c.date;}};
fetch('/ja-v204/data/site-dates.json').then(r=>r.ok?r.json():null).catch(()=>null).then(d=>{const m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(String(d&&d.foundation_basis_date||''));if(m)c.date=L==='ko'?`채점 기준일: ${+m[1]}년 ${+m[2]}월 ${+m[3]}일`:`Scoring basis date: ${['January','February','March','April','May','June','July','August','September','October','November','December'][+m[2]-1]} ${+m[3]}, ${m[1]}`;else none=true;fill();new MutationObserver(fill).observe(document.documentElement,{childList:true,subtree:true});});})();
