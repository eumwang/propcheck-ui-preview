/* Private static translation display. It never sends text or calls a translation API. */
(()=>{
  const lang=(document.documentElement.lang||'ja').slice(0,2);
  const copy={
    ja:{translated:'AI翻訳案（原文を確認）',reviewed:'AI翻訳（原文を確認）',original:'原文を見る',back:'翻訳を見る'},
    en:{translated:'AI translation draft (check original)',reviewed:'AI translation (check original)',original:'Show original',back:'Show translation'},
    ko:{translated:'AI 번역 초안 (원문 확인)',reviewed:'AI 번역 (원문 확인)',original:'원문 보기',back:'번역 보기'}
  }[lang]||{translated:'AI translation draft (check original)',reviewed:'AI translation (check original)',original:'Show original',back:'Show translation'};
  const fold=s=>String(s||'').replace(/[\r\n\u2028\u2029]+/g,' ').replace(/[ \t\u00a0]{2,}/g,' ').trim();
  const mapPromise=window.pcDataRequest('/translation-v227/'+lang+'.json',{cache:'no-store'}).then(r=>r.ok?r.json():null).then(data=>{
    if(!data||data.schema_version!=='propcheck-static-translation-v227-1')return new Map();
    return new Map((data.records||[]).filter(x=>x.language===lang&&/^\d+$/.test(x.post_id||'')&&/^[a-f0-9]{64}$/.test(x.original_sha256||'')&&typeof x.translated_text==='string'&&x.translated_text.trim()).map(x=>[x.post_id+'|'+x.original_sha256,x]));
  }).catch(()=>new Map());
  async function digest(text){
    if(!crypto?.subtle)return null;
    const bytes=new TextEncoder().encode(text);
    return [...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(x=>x.toString(16).padStart(2,'0')).join('');
  }
  async function mount(target,{postId,original,expectedSha,mode='plain'}){
    if(!target||target.dataset.translationV227)return;
    target.dataset.translationV227='pending';
    const exact=String(original||''),hash=await digest(exact),records=await mapPromise;
    if(!hash||expectedSha&&expectedSha!==hash){target.dataset.translationV227='hash_mismatch';return}
    const item=records.get(String(postId)+'|'+hash);
    if(!item){target.dataset.translationV227='original_only';return}
    const holder=mode==='evidence'?target:target.parentElement;
    if(!holder?.isConnected)return;
    const originalHtml=mode==='evidence'?target.innerHTML:null;
    const originalDisplay=fold(exact);
    const translatedDisplay=fold(item.translated_text);
    const note=document.createElement('small');note.className='translation-v227-note';note.textContent=['bilingual_reviewed','source_compared_by_root'].includes(item.review_status)?copy.reviewed:copy.translated;
    const button=document.createElement('button');button.type='button';button.className='translation-v227-toggle';button.textContent=copy.original;
    let showingOriginal=false;
    const render=()=>{
      if(mode==='evidence'){
        if(showingOriginal)target.innerHTML=originalHtml;
        else{target.replaceChildren();const p=document.createElement('p');p.className='fundedelite-evidence-excerpt';p.textContent=translatedDisplay;target.append(p)}
      }else target.textContent=showingOriginal?originalDisplay:translatedDisplay;
      button.textContent=showingOriginal?copy.back:copy.original;
      note.hidden=showingOriginal;
    };
    holder.append(note,button);button.addEventListener('click',()=>{showingOriginal=!showingOriginal;render()});
    render();target.dataset.translationV227='ready';
  }
  function scanEvidence(){
    for(const source of document.querySelectorAll('.fundedelite-evidence-source[data-source-id]')){
      const id=source.dataset.sourceId,original=window.PROP_POST_ORIGINALS_V222?.[id]?.text;
      const body=source.querySelector('.fundedelite-evidence-body');
      if(body&&original)mount(body,{postId:id,original,mode:'evidence'});
    }
  }
  function showCandidateNotice(){
    if(document.querySelector('.candidate-v227-notice'))return;
    const messages={"ja":{"text":"原文点検 15459 / 15459 候補。掲載分の翻訳照合まで完了した非公開候補です。本番公開は確認後に行います。","link":"確認用・31社の変更一覧"},"en":{"text":"Original review: 15459 / 15459 candidates. Published selections have completed independent translation review. This private candidate requires your approval before publication.","link":"Private review · Changes across 31 firms"},"ko":{"text":"원문 검토 15459 / 15459 후보. 게시 대상 번역의 독립 대조 검토를 완료한 비공개 후보입니다. 확인 후에만 본 사이트에 게시합니다.","link":"검토용 · 31개 업체 변경 내역"}}[lang]||{text:'Private provisional score preview.',link:'Score comparison'};
    const box=document.createElement('aside');box.className='candidate-v227-notice';box.setAttribute('role','note');
    const span=document.createElement('span');span.textContent=messages.text;
    const a=document.createElement('a');a.href=(lang==='ja'?'/':'/'+lang+'/')+'score-candidate-v227.html';a.textContent=messages.link;
    box.append(span,a);document.body.prepend(box);
  }
  let queued=false;function schedule(){if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;scanEvidence()})}
  document.addEventListener('DOMContentLoaded',()=>{scanEvidence();new MutationObserver(schedule).observe(document.body,{childList:true,subtree:true})});
  window.PROP_TRANSLATE_V227={mount,scanEvidence};
})();
