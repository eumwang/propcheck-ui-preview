/* All-company preview. Source rows and classifications come from saved report rows. */
(()=>{
  const companyId=null;
  const names={
    ja:{group:'',posted:'投稿日（UTC）',excerpt:'原文抜粋',missing:'原文は元投稿でご確認ください。',open:'抜粋を展開',link:'元投稿 ↗',heading:'最近の本人報告と元投稿',note:'同じ集約行でも元投稿の日付は異なる場合があります。原文は投稿者の主張で、事実認定ではありません。',types:{received:'受取',refused:'拒否',reentry_banned:'BAN',account_closed:'口座停止',profit_reduced:'利益減額',delayed:'遅延'}},
    en:{group:'Grouped date',posted:'Posted (UTC)',excerpt:'Saved original-language excerpt',missing:'The original text of this post was not retained. Open the source post to read it.',open:'Expand saved excerpt',link:'Source post ↗',heading:'Recent firsthand reports and source posts',note:'Posts in one grouped row may have different posting dates. Excerpts are author claims, not verified events.',types:{received:'Payout received',refused:'Payout refused',reentry_banned:'Re-entry ban',account_closed:'Account closed',profit_reduced:'Profit reduced',delayed:'Payout delayed'}},
    ko:{group:'집계 기준일',posted:'게시일(UTC)',excerpt:'저장된 원문 발췌',missing:'이 게시물의 원문은 저장 자료에 없습니다. 원본 게시물에서 확인하세요.',open:'저장된 발췌 펼치기',link:'원본 게시물 ↗',heading:'최근 본인 보고와 원본 게시물',note:'같은 집계 행의 게시물도 게시일은 다를 수 있습니다. 원문은 작성자의 주장으로 사실 확인 결과가 아닙니다.',types:{received:'출금 수령',refused:'출금 거절',reentry_banned:'재참여 금지',account_closed:'계정 정지',profit_reduced:'수익 감액',delayed:'지연'}}
  };
  // Exact post text and created_at_utc from the retained September classification queue.
  const retainedPosts=window.PROP_POST_ORIGINALS_V222||{};
  const esc=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const idOf=url=>String(url||'').match(/^https:\/\/(?:x\.com|twitter\.com)\/(?:i\/)?status\/(\d+)(?:[/?#].*)?$/)?.[1]||'';
  const sourceDate=url=>{
    const id=idOf(url);
    if(!id)return '';
    if(retainedPosts[id]?.created)return new Date(retainedPosts[id].created).toISOString();
    const ms=Number((BigInt(id)>>22n)+1288834974657n);
    const date=new Date(ms);
    return Number.isFinite(ms)&&ms>=1288834974657&&ms<=Date.now()+86400000&&!Number.isNaN(date.valueOf())?date.toISOString():'';
  };
  function sources(post){
    const map=new Map();
    const add=url=>{if(!idOf(url))return;const key=idOf(url);if(!map.has(key))map.set(key,{url,labels:new Set()});};
    for(const url of post.source_links||[])add(url);
    for(const url of Object.values(post.category_source_links||{}))add(url);
    add(post.source_url);
    for(const id of post.labels||[]){const url=post.category_source_links?.[id],key=idOf(url);if(key&&map.has(key))map.get(key).labels.add(id);}
    if(map.size===1){const one=map.values().next().value;for(const id of post.labels||[])one.labels.add(id);}
    return [...map.values()];
  }
  function excerptMarkup(text,t){
    // Keep source text intact; collapse author-inserted line breaks only in the rendered copy.
    const displayText=String(text||'').replace(/[\r\n\u2028\u2029]+/g,' ').replace(/[ \t\u00a0]{2,}/g,' ').trim();
    if(!displayText)return `<p class="fundedelite-evidence-missing">${esc(t.missing)}</p>`;
    if(displayText.length<=180)return `<p class="fundedelite-evidence-excerpt"><small>${esc(t.excerpt)}</small>${esc(displayText)}</p>`;
    return `<details class="fundedelite-evidence-expand"><summary>${esc(t.open)} <span>${esc(displayText.slice(0,140))}…</span></summary><p><small>${esc(t.excerpt)}</small>${esc(displayText)}</p></details>`;
  }
  function renderRow(post,lang='ja',excerpts={}){
    const t=names[lang]||names.ja;
    const entries=sources(post);
    const groupDate=String(post.date||'').replaceAll('-','/');
    const rows=entries.map(({url,labels})=>{
      const stamp=sourceDate(url),day=stamp?stamp.slice(0,10).replaceAll('-','/'):'—';
      const typeText=[...labels].map(id=>t.types[id]||id);
      const badges=labels.size?[...labels].map(id=>`<span class="fundedelite-evidence-type${['profit_reduced','refused','reentry_banned','account_closed','delayed'].includes(id)?' problem':''}">${esc(t.types[id]||id)}</span>`).join(''):`<span class="fundedelite-evidence-type">${esc(lang==='ja'?'種別未対応':lang==='ko'?'종류 미확인':'Type not mapped')}</span>`;
      const text=retainedPosts[idOf(url)]?.text||'';
      const aria=[...typeText,day,t.link].join(' · ');
      return `<div class="fundedelite-evidence-source" data-source-id="${esc(idOf(url))}"><div class="fundedelite-evidence-meta"><time datetime="${esc(stamp)}" title="${esc(stamp)}">${esc(t.posted)} ${esc(day)}</time><div class="fundedelite-evidence-types">${badges}</div></div><div class="fundedelite-evidence-body">${excerptMarkup(text,t)}</div><a class="fundedelite-evidence-link" href="${esc(url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(aria)}">${esc(t.link)}</a></div>`;
    }).join('');
    return `<article class="fundedelite-evidence-card" data-group-id="${esc(post.group_id)}"><div class="fundedelite-evidence-group"><span>${t.group?esc(t.group)+' ':''}${esc(groupDate||'—')}</span><small>${entries.length} ${esc(lang==='ja'?'元投稿':lang==='ko'?'원본 게시물':'source post'+(entries.length===1?'':'s'))}</small></div><div class="fundedelite-evidence-sources">${rows||`<p class="fundedelite-evidence-missing">${esc(t.missing)}</p>`}</div></article>`;
  }
  function renderSection(posts,lang='ja',excerpts={}){
    const t=names[lang]||names.ja;
    return `<section class="panel fundedelite-evidence-section"><h3>${esc(t.heading)}</h3><div class="fundedelite-evidence-list">${posts.map(p=>renderRow(p,lang,excerpts)).join('')}</div><p class="section-note">${esc(t.note)}</p></section>`;
  }
  window.PROP_ORDINARY_EVIDENCE_V222={companyId,sources,sourceDate,renderRow,renderSection};
})();
