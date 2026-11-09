(()=>{const m={"end":"2026-10-10T15:00:00+00:00","reviewed_companies":28,"new_x":93,"new_events":29,"held_companies":["fundedtradermarkets"]},lang=(document.documentElement.lang||'ja').slice(0,2);
const labels={ja:'週次データの対象期間 / 締め UTC: ',en:'Weekly data cutoff (UTC): ',ko:'주간 데이터 마감(UTC): '};
const old={ja:'前回基礎データ: ',en:'Previous baseline: ',ko:'이전 기준 데이터: '};
function refresh(){const a=document.querySelector('#as-of'),text=(labels[lang]||labels.en)+m.end;
if(a&&a.textContent!==text){a.textContent=text;a.title=({ja:`口コミ${m.new_x}件・報告${m.new_events}件追加。保留社は前回値を維持。全社の収集完了ではありません。`,en:`Adds ${m.new_x} reviewed posts and ${m.new_events} reports. Held firms retain previous values; collection is incomplete.`,ko:`후기 ${m.new_x}건·보고 ${m.new_events}건 추가. 보류 업체는 이전 값을 유지하며 전체 수집 완료가 아닙니다.`})[lang]||'';}
const ds=document.querySelector('#comparison .ux183-dates');if(ds)for(const [i,n]of [...ds.querySelectorAll('span')].entries())if(i!==2&&!n.dataset.weeklyBaseline){n.dataset.weeklyBaseline='1';n.textContent=(old[lang]||old.en)+n.textContent;}
for(const n of document.querySelectorAll('.monthly-v62-panel h3,.monthly-sentiment-panel h3'))if(!n.dataset.weeklyLegacy){n.dataset.weeklyLegacy='1';n.title=({ja:'旧AI分類の月別記録。今回の原文点検採用数とは母集団が異なります。',en:'Earlier AI-classified monthly records; different population from newly reviewed posts.',ko:'이전 AI 분류 월별 기록이며 이번 원문 검토 채택 후기와 모집단이 다릅니다.'})[lang]||'';}}
let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}
new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true});schedule();})();
