/* PROP CHECK × RZR Funded giveaway modal (stage3). ESC / backdrop / close button / focus trap / focus return. */
(()=>{'use strict';
const FOCUSABLE='a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])';
let lastFocus=null;
const getModal=()=>document.getElementById('rzr-ad-modal');
function open(){const m=getModal();if(!m)return;lastFocus=document.activeElement;m.hidden=false;document.documentElement.classList.add('rzr-modal-open');
  document.querySelectorAll('[data-rzr-modal-open]').forEach(b=>b.setAttribute('aria-expanded','true'));
  const c=m.querySelector('.rzr-modal-close');(c||m.querySelector(FOCUSABLE))?.focus();}
function close(){const m=getModal();if(!m||m.hidden)return;m.hidden=true;document.documentElement.classList.remove('rzr-modal-open');
  document.querySelectorAll('[data-rzr-modal-open]').forEach(b=>b.setAttribute('aria-expanded','false'));
  if(lastFocus&&document.contains(lastFocus))lastFocus.focus();}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-rzr-modal-open]')){e.preventDefault();open();return;}
  if(e.target.closest('[data-rzr-modal-close]')){e.preventDefault();close();}
});
document.addEventListener('keydown',e=>{const m=getModal();if(!m||m.hidden)return;
  if(e.key==='Escape'){e.preventDefault();close();return;}
  if(e.key==='Tab'){const f=[...m.querySelectorAll(FOCUSABLE)].filter(x=>x.offsetParent!==null);if(!f.length)return;
    const first=f[0],last=f[f.length-1];
    if(!m.contains(document.activeElement)){e.preventDefault();first.focus();return;}
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}
});
window.addEventListener('resize',()=>{if(window.matchMedia('(min-width:768px)').matches)close();});
})();
