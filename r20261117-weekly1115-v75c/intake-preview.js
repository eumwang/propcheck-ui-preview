// Preview-only guard: localhost must not imply a real Netlify receipt.
if (['127.0.0.1','localhost'].includes(location.hostname)) {
 const f=document.querySelector('form[name="prop-check-incident-v2-ja"]');
 if(f){const p=document.createElement('p');p.id='preview-status';p.setAttribute('role','status');p.textContent='確認用プレビューです。ここでは送信されません。';f.prepend(p);f.addEventListener('submit',e=>{e.preventDefault();p.textContent='入力形式を確認しました。プレビューのため送信・保存はしていません。';p.scrollIntoView({block:'center'});});}
}
