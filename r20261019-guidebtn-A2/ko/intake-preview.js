// Preview-only guard: localhost must not imply a real Netlify receipt.
if (['127.0.0.1','localhost'].includes(location.hostname)) {
 const f=document.querySelector('form[name="prop-check-incident-v142"]');
 if(f){const p=document.createElement('p');p.id='preview-status';p.setAttribute('role','status');p.textContent='미리보기입니다. 여기에서는 전송되지 않습니다.';f.prepend(p);f.addEventListener('submit',e=>{e.preventDefault();p.textContent='입력 형식을 확인했습니다. 미리보기이므로 제보를 전송하거나 저장하지 않았습니다.';p.scrollIntoView({block:'center'});});}
}
