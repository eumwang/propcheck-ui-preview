(()=>{
 const form=document.querySelector('form[name="prop-check-incident-v2-ja"]');if(!form)return;
 const lang=document.documentElement.lang.split('-')[0];
 const copy={ja:['送信中です…','送信結果を確認できませんでした。入力内容は残っています。重複送信を避けるため、控え番号を保管して受付状況をお問い合わせください。'],en:['Sending…','We could not confirm the result. Your entries are still here. Keep your reference ID and ask us to check receipt before submitting again.'],ko:['전송 중…','전송 결과를 확인할 수 없습니다. 입력 내용은 남아 있습니다. 중복 제출을 피하려면 참조 번호를 보관하고 접수 여부를 문의해 주세요.']}[lang]||[];
 let busy=false;
 form.addEventListener('submit',async event=>{
  if(event.defaultPrevented)return;
  if(['localhost','127.0.0.1'].includes(location.hostname)) {event.preventDefault();return;}
  event.preventDefault();if(busy||!form.checkValidity())return;
  busy=true;const button=form.querySelector('[type="submit"],button.report-submit-button');
  const status=form.querySelector('[data-receipt-status]');const reference=form.elements.namedItem('client_receipt_id').value;
  if(button)button.disabled=true;if(status)status.textContent=copy[0];
  try{
   const response=await fetch('/',{method:'POST',body:new FormData(form),credentials:'same-origin'});
   if(!response.ok)throw new Error('Submission not confirmed');
   sessionStorage.setItem('propcheck-last-receipt',reference);
   const destination=new URL(form.getAttribute('action'),location.origin);
   destination.searchParams.set('submitted','1');location.assign(destination.href);
  }catch{
   if(status)status.textContent=copy[1]+' '+reference;
   // No automatic retry after an ambiguous response; retain the original reference.
  }
 });
})();
