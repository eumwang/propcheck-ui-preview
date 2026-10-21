/* Isolated locale sender delta. Disabled unless exact verified configuration is supplied. */
(()=>{'use strict';
 const form=document.querySelector('form[data-v2-candidate]');if(!form)return;
 const lang=form.dataset.v2Candidate;
 const T={
  en:{choose:'Choose a report type first.',newHelp:'Describe a new incident below.',followHelp:'Enter the previous reference ID and what has changed.',validated:'Input checked in this private candidate. Nothing was sent or saved; this is not a receipt.',files:'Paste an image or choose files',attached:' attached',badFile:'Choose an image or PDF.',tooMany:'Up to 10 attachments.',tooLarge:'Keep attachments within 7.5 MB in total.',remove:'Remove ',other:'Enter the firm name.',newButton:'Review new report',followButton:'Review follow-up'},
  ko:{choose:'먼저 제보 유형을 선택해 주세요.',newHelp:'새 사례의 경위를 아래에 적어 주세요.',followHelp:'이전 접수 번호와 달라진 상황을 적어 주세요.',validated:'이 비공개 후보에서 입력만 확인했습니다. 전송·저장되지 않았으며 접수증이 아닙니다.',files:'이미지를 붙여넣거나 파일을 선택하세요',attached:'개 첨부',badFile:'이미지 또는 PDF를 선택하세요.',tooMany:'첨부는 최대 10개입니다.',tooLarge:'첨부 합계는 7.5 MB 이내로 해 주세요.',remove:'삭제: ',other:'업체명을 입력해 주세요.',newButton:'새 제보 내용 확인',followButton:'후속 제보 내용 확인'}
 }[lang];if(!T)return;
 const newBlock=form.querySelector('[data-new-report]'),followBlock=form.querySelector('[data-followup-report]');
 const buttons=[...form.querySelectorAll('[data-report-kind-choice]')];
 const kind=form.elements.namedItem('report_kind'),preference=form.elements.namedItem('publication_preference');
 const status=form.querySelector('[data-candidate-status]'),help=form.querySelector('[data-mode-help]'),submit=form.querySelector('[data-v2-submit]');
 const company=form.elements.namedItem('name'),other=form.elements.namedItem('company_other'),otherWrap=form.querySelector('[data-other-company]');
 const del=form.elements.namedItem('deletion_request'),delWrap=form.querySelector('[data-deletion-context]');
 let mode='';
 const fields=block=>[...block.querySelectorAll('input,select,textarea,button')];
 function syncOther(){const on=mode==='new'&&company.value==='その他';otherWrap.hidden=!on;other.disabled=!on;other.required=on;other.setCustomValidity(on&&!other.value.trim()?T.other:'')}
 function syncDeletion(){const on=mode==='new'&&del.value==='求められた';delWrap.hidden=!on;for(const field of fields(delWrap))field.disabled=!on}
 function setMode(next){mode=next;kind.value=next;for(const [block,on] of [[newBlock,next==='new'],[followBlock,next==='followup']]){block.hidden=!on;for(const field of fields(block))field.disabled=!on}
  syncOther();syncDeletion();buttons.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.reportKindChoice===next)));
  help.textContent=next==='new'?T.newHelp:T.followHelp;submit.textContent=next==='new'?T.newButton:T.followButton;submit.disabled=false;status.textContent='';}
 for(const block of [newBlock,followBlock]){block.hidden=true;for(const field of fields(block))field.disabled=true}
 buttons.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.reportKindChoice)));
 company.addEventListener('change',syncOther);other.addEventListener('input',syncOther);del.addEventListener('change',syncDeletion);
 const cid=new URLSearchParams(location.search).get('company');const opt=[...company.options].find(o=>o.dataset.companyId===cid);if(opt)company.value=opt.value;
 function picker(block){const zone=block.querySelector('[data-paste-zone]'),label=block.querySelector('[data-paste-status]'),previews=block.querySelector('[data-evidence-previews]'),inputs=[...block.querySelectorAll('input[type=file][data-evidence-file]')];
  const picked=()=>inputs.map(i=>i.files?.[0]).filter(Boolean);
  function render(message=''){previews.replaceChildren();for(const input of inputs){const file=input.files?.[0];if(!file)continue;const chip=document.createElement('div');chip.className='evidence-file-chip';const name=document.createElement('span');name.textContent=file.name;const size=document.createElement('small');size.textContent=(file.size/1048576).toFixed(2)+' MB';const remove=document.createElement('button');remove.type='button';remove.textContent='×';remove.setAttribute('aria-label',T.remove+file.name);remove.addEventListener('click',()=>{input.value='';render()});chip.append(name,size,remove);previews.append(chip)}label.textContent=message||(picked().length?picked().length+(lang==='ko'?T.attached:'/10'+T.attached):T.files)}
  function add(list){let total=picked().reduce((n,f)=>n+f.size,0),message='';for(const file of list){if(!(file.type.startsWith('image/')||file.type==='application/pdf')){message=T.badFile;continue}const slot=inputs.find(i=>!i.files?.length);if(!slot){message=T.tooMany;break}if(total+file.size>7.5*1048576){message=T.tooLarge;break}try{const transfer=new DataTransfer();transfer.items.add(file);slot.files=transfer.files;total+=file.size}catch{message=T.badFile;break}}render(message)}
  const choose=()=>{const slot=inputs.find(i=>!i.files?.length);if(slot)slot.click();else render(T.tooMany)};
  zone.querySelector('.evidence-select-button').addEventListener('click',choose);
  zone.addEventListener('click',e=>{if(!e.target.closest('button,input,a'))choose()});
  zone.addEventListener('keydown',e=>{if(e.target===zone&&(e.key==='Enter'||e.key===' ')){e.preventDefault();choose()}});
  zone.addEventListener('dragover',e=>e.preventDefault());zone.addEventListener('drop',e=>{e.preventDefault();add([...e.dataTransfer.files])});
  block.addEventListener('paste',e=>{const files=[...(e.clipboardData?.items||[])].filter(x=>x.kind==='file').map(x=>x.getAsFile()).filter(Boolean);if(files.length){e.preventDefault();add(files)}});
  inputs.forEach(i=>i.addEventListener('change',()=>{const file=i.files?.[0];if(file&&!(file.type.startsWith('image/')||file.type==='application/pdf')){i.value='';render(T.badFile);return}if(picked().reduce((n,f)=>n+f.size,0)>7.5*1048576){i.value='';render(T.tooLarge);return}render()}));render();
 }
 picker(newBlock);picker(followBlock);
 // One locale-aware transport; the shipped binding is disabled/unset.
 const C={en:{send:'Send report',follow:'Send follow-up',working:'Sending once. Please keep this page open.',ack:'The form service returned a successful response. Keep this reference for follow-up. Review and previous-reference matching are not completed at submission.',unknown:'The submission outcome is unknown. It may have been received. Your input and reference are kept on this page. There is no automatic retry. Check with the operator before manually retrying; a retry can create a duplicate.',blocked:'This form connection is not enabled or verified. Nothing was sent by this page.',invalid:'Check the required fields.',retry:'Retry manually with the same reference',prior:'Enter the previous reference and the update. The previous reference is not verified at submission.'},ko:{send:'제보 보내기',follow:'후속 제보 보내기',working:'한 번 전송 중입니다. 이 페이지를 열어 두세요.',ack:'폼 서비스가 성공 응답을 반환했습니다. 후속 문의를 위해 이 번호를 보관하세요. 검토와 이전 번호 대조는 제출 시 완료되지 않습니다.',unknown:'전송 결과를 확인할 수 없습니다. 이미 접수되었을 수도 있습니다. 입력 내용과 번호는 이 페이지에 유지됩니다. 자동 재시도하지 않습니다. 수동 재시도 전에 운영자에게 확인하세요. 다시 보내면 중복 접수가 생길 수 있습니다.',blocked:'폼 연결이 활성화되거나 검증되지 않았습니다. 이 페이지에서 전송하지 않았습니다.',invalid:'필수 항목을 확인하세요.',retry:'같은 번호로 수동 재시도',prior:'이전 번호와 변경 내용을 입력하세요. 제출 시 이전 번호를 검증하지 않습니다.'}}[lang];
 T.newButton=C.send;T.followButton=C.follow;T.followHelp=C.prior;
 let busy=false,finished=false,receipt='';
 const show=(state,message)=>{status.dataset.sendState=state;status.setAttribute('role','status');status.setAttribute('aria-live','polite');status.style.overflowWrap='anywhere';status.textContent=message+(receipt?' '+receipt:'')};
 function binding(){
  const c=window.PROP_CHECK_V2_CONNECTION?.[lang];
  if(!c||c.enabled!==true||c.providerReadbackVerified!==true||c.origin!==location.origin||c.endpoint!=='/'||c.formName!=='prop-check-incident-v2-'+lang||!/^[a-f0-9]{24}$/.test(c.formId||''))return null;
  return c;
 }
 form.noValidate=true;
 form.addEventListener('submit',async event=>{
  event.preventDefault();event.stopImmediatePropagation();
  if(busy||finished)return;
  if(!mode){show('invalid',T.choose);return}
  preference.value=form.elements.namedItem('publication_consent').checked?'anonymous_summary_allowed':'private_review_only';
  if(!form.checkValidity()){show('invalid',C.invalid);form.reportValidity();return}
  const cfg=binding();if(!cfg||!crypto.randomUUID){show('blocked',C.blocked);return}
  if(!receipt){receipt='PC-'+crypto.randomUUID();buttons.forEach(b=>b.disabled=true)}
  form.elements.namedItem('client_receipt_id').value=receipt;
  const data=new FormData(form);data.set('form-name',cfg.formName);data.set('submission_language',lang);
  busy=true;submit.disabled=true;show('pending',C.working);
  const controller=new AbortController();
  const timeout=Number.isFinite(cfg.timeoutMs)?Math.max(100,Math.min(cfg.timeoutMs,120000)):25000;
  const timer=setTimeout(()=>controller.abort(),timeout);
  try{
   const answer=await fetch(cfg.endpoint,{method:'POST',body:data,credentials:'omit',redirect:'error',cache:'no-store',signal:controller.signal});
   if(!answer.ok)throw new Error('Unconfirmed outcome');
   finished=true;show('acknowledged',C.ack);
  }catch{show('unknown',C.unknown)}
  finally{clearTimeout(timer);busy=false;if(!finished){submit.disabled=false;submit.textContent=C.retry}}
 });
})();
