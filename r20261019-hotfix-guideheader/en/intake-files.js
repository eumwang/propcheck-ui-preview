(()=>{
  'use strict';
  const MAX_FILES=10;
  const MAX_TOTAL=7.5*1024*1024;
  const forms=document.querySelectorAll('[data-evidence-paste-form]');
  const pretty=n=>n<1024?`${n} B`:n<1024*1024?`${(n/1024).toFixed(1)} KB`:`${(n/1024/1024).toFixed(1)} MB`;
  forms.forEach(form=>{
    const zone=form.querySelector('[data-paste-zone]');
    const status=form.querySelector('[data-paste-status]');
    const previews=form.querySelector('[data-evidence-previews]');
    const inputs=[...form.querySelectorAll('input[type=file][data-evidence-file]')];
    if(!zone||!inputs.length)return;

    const currentFiles=()=>inputs.map(i=>i.files?.[0]).filter(Boolean);
    const render=(message="")=>{
      const files=currentFiles();
      previews.innerHTML=files.map((f,idx)=>`<div class="evidence-file-chip"><span>${escapeHtml(f.name)}</span><small>${pretty(f.size)}</small><button type="button" data-remove-evidence="${idx}" aria-label="Remove ${escapeHtml(f.name)}">×</button></div>`).join('');
      status.textContent=message||(files.length?`${files.length}/${MAX_FILES} attached`:'Paste an image or choose a file');
    };
    const escapeHtml=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const setInputFile=(input,file)=>{
      try{const dt=new DataTransfer();dt.items.add(file);input.files=dt.files;return true}catch(e){return false}
    };
    const addFiles=(incoming)=>{
      const files=[...incoming].filter(f=>f && (f.type.startsWith('image/')||f.type==='application/pdf'));
      if(!files.length){status.textContent='Add an image or PDF.';return;}
      let message="";
      let total=currentFiles().reduce((s,f)=>s+f.size,0);
      for(const file of files){
        const slot=inputs.find(i=>!i.files?.length);
        if(!slot){message="Up to 10 attachments. Remove a file before adding another.";break;}
        if(total+file.size>MAX_TOTAL){message='Keep attachments within 7.5 MB in total.';break;}
        if(setInputFile(slot,file)) total+=file.size;else message="Pasting is not supported here. Use the file picker.";
      }
      render(message);
    };

    zone.addEventListener('click',e=>{if(e.target.closest('button,input,a'))return;const slot=inputs.find(i=>!i.files?.length)||inputs[0];slot.click();});
    zone.addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&!e.metaKey&&!e.ctrlKey){e.preventDefault();const slot=inputs.find(i=>!i.files?.length)||inputs[0];slot.click();}});
    zone.addEventListener('dragover',e=>{e.preventDefault();zone.classList.add('is-dragover')});
    zone.addEventListener('dragleave',()=>zone.classList.remove('is-dragover'));
    zone.addEventListener('drop',e=>{e.preventDefault();zone.classList.remove('is-dragover');addFiles(e.dataTransfer.files)});
    form.addEventListener('paste',e=>{
      const files=[...e.clipboardData.items].filter(x=>x.kind==='file').map(x=>x.getAsFile()).filter(Boolean);
      if(files.length){e.preventDefault();addFiles(files)}
    });
    inputs.forEach(input=>input.addEventListener('change',()=>{
      const total=currentFiles().reduce((s,f)=>s+f.size,0);
      if(total>MAX_TOTAL){input.value='';render('Keep attachments within 7.5 MB in total.');return;}
      render();
    }));
    previews.addEventListener('click',e=>{
      const btn=e.target.closest('[data-remove-evidence]');if(!btn)return;
      const idx=Number(btn.dataset.removeEvidence);const occupied=inputs.filter(i=>i.files?.length);if(occupied[idx])occupied[idx].value='';render();
    });
    render();
  });
})();
