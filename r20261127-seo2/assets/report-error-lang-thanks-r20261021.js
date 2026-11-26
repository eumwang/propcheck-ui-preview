/* EN/KO report-error: Netlify は同名フォームの送信後に JA のお礼ページを返すため、
   バックグラウンド送信（同じフォーム名・lang 欄のまま）してから各言語のお礼ページへ移動する。
   失敗時は通常の送信に戻す。 */
(()=>{const f=document.querySelector('form[name="prop-check-error-report"]');if(!f)return;
let busy=false;
f.addEventListener('submit',async e=>{if(e.defaultPrevented||busy)return;if(!f.checkValidity())return;e.preventDefault();busy=true;
const btn=f.querySelector('[type=submit]');if(btn)btn.disabled=true;
const to=f.getAttribute('action')||'/';
try{const body=new URLSearchParams(new FormData(f)).toString();
const r=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body,credentials:'same-origin'});
if(!r.ok)throw new Error('ng');location.assign(to);}
catch(_){busy=false;if(btn)btn.disabled=false;HTMLFormElement.prototype.submit.call(f);}
});})();
