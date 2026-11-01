// Preview-only guard: localhost must not imply a real Netlify receipt.
if (['127.0.0.1','localhost'].includes(location.hostname)) {
 const f=document.querySelector('form[name="prop-check-incident-v142"]');
 if(f){const p=document.createElement('p');p.id='preview-status';p.setAttribute('role','status');p.textContent='Preview only. Nothing is sent here.';f.prepend(p);f.addEventListener('submit',e=>{e.preventDefault();p.textContent='Input validated. This preview has not sent or saved your report.';p.scrollIntoView({block:'center'});});}
}
