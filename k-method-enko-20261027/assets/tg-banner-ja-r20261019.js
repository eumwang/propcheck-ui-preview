/* トップ（ja）の Telegram 案内カードと登録方法の小窓 */
(()=>{
 if(window.__tgbR20261019)return;window.__tgbR20261019=true;
 const root=document.documentElement;root.classList.add('tgb-js');
 const hide=document.createElement('style');hide.textContent='html.tgb-js .alerts159.pc-alert-preparing{visibility:hidden}';document.head.appendChild(hide);
 const css=document.createElement('link');css.rel='stylesheet';css.href='/propcheck-ui-preview/k-method-enko-20261027/assets/tg-banner-ja-r20261019.css';document.head.appendChild(css);
 const unhide=()=>root.classList.remove('tgb-js');
 const BOT='https://t.me/PropCheckNewsBot';
 const IMG={rule:'/assets/tg-sample-rule-ja-r20261019.png',ban:'/assets/tg-sample-ban-ja-r20261019.png',coupon:'/assets/tg-sample-coupon-ja-r20261019.png'};
 const CARD='<div class="action-copy159">'
  +'<h2><span class="tgb-h">業者の動きを、<span class="tgb-nb">Telegramで受け取る</span></span></h2>'
  +'<p class="action-mobile-summary">ルール変更・BAN・口コミの要点をTelegramで</p>'
  +'<p class="body159">告知のないルール変更、BAN・出金拒否の情報、口コミの要点。選んだ業者と種類に合うものを、1通にまとめてお届けします。</p>'
  +'<button type="button" class="button159 tgb-trigger" aria-haspopup="dialog" aria-controls="tgb-dialog"><span class="action-desktop-label">登録方法を見る <span aria-hidden="true">→</span></span><span class="action-mobile-label">登録方法を見る</span></button>'
  +'</div>'
  +'<div class="notification-art159"><img src="'+IMG.rule+'" alt="ルール変更のお知らせの見本（架空の例）" width="960" height="826" loading="lazy"><small>※イメージ（架空の例です）</small></div>';
 const OPEN='<a class="tgb-open" href="'+BOT+'" target="_blank" rel="noopener noreferrer">Telegramで開く <span aria-hidden="true">↗</span></a>';
 const DLG='<div class="tgb-head"><h2 id="tgb-title">PROPCHECK News（Telegram）の登録方法</h2><button type="button" class="tgb-x" aria-label="閉じる">×</button></div>'
  +'<div class="tgb-body">'
  +'<section aria-labelledby="tgb-s1"><h3 id="tgb-s1">届く内容</h3><ul>'
  +'<li><b>ルール変更</b>：告知のない変更などを、重要度のランク、変更前と変更後、出典のリンクを付けてお知らせします。</li>'
  +'<li><b>BAN・出金拒否</b>：口座停止や出金拒否についての情報をお知らせします。</li>'
  +'<li><b>口コミの要点</b>：口コミのポイントをまとめてお知らせします。</li>'
  +'<li><b>クーポン情報</b>：6社（RZR Funded・FundedHive・Hypernova・Propr・Moneta Funded・FUNDORA）のクーポン情報です。最初は「受け取らない」になっていて、受け取ると選んだ場合だけ届きます。</li>'
  +'</ul><p class="tgb-note">選んだ業者と種類に合うものを、1通にまとめてお届けします。投稿がある日にだけ届きます。</p></section>'
  +'<section aria-labelledby="tgb-s2"><h3 id="tgb-s2">届くメッセージの見本</h3><div class="tgb-samples">'
  +'<figure><img src="'+IMG.rule+'" alt="ルール変更のお知らせの見本（架空の例）" width="960" height="826" loading="lazy"><figcaption>ルール変更</figcaption></figure>'
  +'<figure><img src="'+IMG.ban+'" alt="出金拒否の報告のお知らせの見本（架空の例）" width="960" height="732" loading="lazy"><figcaption>BAN・出金拒否</figcaption></figure>'
  +'<figure><img src="'+IMG.coupon+'" alt="クーポン情報のお知らせの見本（架空の例）" width="960" height="640" loading="lazy"><figcaption>クーポン情報</figcaption></figure>'
  +'</div><p>※イメージ（架空の例です）</p></section>'
  +'<section aria-labelledby="tgb-s3"><h3 id="tgb-s3">登録のしかた</h3><ol>'
  +'<li>下の「Telegramで開く」を押して、「PROPCHECK News」を開きます。</li>'
  +'<li>Telegramで「開始」（<span class="tgb-cmd">/start</span>）を押すと、初期設定が始まります。</li>'
  +'</ol><p>'+OPEN+'</p></section>'
  +'<section aria-labelledby="tgb-s4"><h3 id="tgb-s4">初期設定</h3><ol>'
  +'<li>言語を選ぶ（日本語・English・한국어）</li>'
  +'<li>業者を選ぶ（「すべての業者」か、30社から「業者を選ぶ」）</li>'
  +'<li>ニュースの種類を選ぶ（BAN・出金拒否／ルール変更／口コミの要点。いくつでも選べます。最初はすべてにチェックが付いています）</li>'
  +'<li>クーポン情報を受け取るか選ぶ（「🎟 受け取る」／「受け取らない」。受け取る場合は6社から選べます）</li>'
  +'<li>内容を確かめて「この内容で始める」を押す</li>'
  +'</ol></section>'
  +'<section aria-labelledby="tgb-s5"><h3 id="tgb-s5">設定を変える</h3>'
  +'<p>届いたメッセージの「⚙️ 設定」ボタンを押すか、<span class="tgb-cmd">/settings</span> を送ると設定が開きます。</p><ul>'
  +'<li>「🌐 言語」「🏢 業者」「📰 ニュースの種類」「🎟 クーポン情報」を、1つずつ変えられます。</li>'
  +'<li>「⏸ 配信を止める」「▶ 配信を再開」もここから選べます。</li>'
  +'<li>終わったら「閉じる」を押します。</li>'
  +'</ul></section>'
  +'<section aria-labelledby="tgb-s6"><h3 id="tgb-s6">止める・再開する・やめる</h3><ul>'
  +'<li><span class="tgb-cmd">/stop</span> を送ると配信が止まります。返事に出る「▶ 配信を再開」を押すと、また届くようになります。</li>'
  +'<li>完全にやめるときは、Telegramでこのボットをブロックしてください。</li>'
  +'<li>使い方は <span class="tgb-cmd">/help</span> で確かめられます。</li>'
  +'</ul></section>'
  +'</div>';
 let dlg,lastFocus;
 const focusables=()=>[...dlg.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(e=>e.offsetParent!==null||e===document.activeElement);
 function build(){
  const card=document.querySelector('#participate article.alerts159');
  if(!card){unhide();return;}
  card.classList.remove('pc-alert-preparing');card.classList.add('tgb-card');
  card.innerHTML=CARD;
  dlg=document.createElement('dialog');dlg.id='tgb-dialog';dlg.className='tgb-dialog';
  dlg.setAttribute('aria-modal','true');dlg.setAttribute('aria-labelledby','tgb-title');
  dlg.innerHTML=DLG;document.body.appendChild(dlg);
  const close=()=>{if(dlg.open)dlg.close();};
  dlg.querySelector('.tgb-x').addEventListener('click',close);
  dlg.addEventListener('click',e=>{if(e.target===dlg)close();});
  dlg.addEventListener('cancel',e=>{e.preventDefault();close();});
  dlg.addEventListener('close',()=>{document.documentElement.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus();});
  dlg.addEventListener('keydown',e=>{
   if(e.key==='Escape'){e.preventDefault();close();return;}
   if(e.key!=='Tab')return;
   const f=focusables();if(!f.length)return;
   const first=f[0],last=f[f.length-1];
   if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
   else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  });
  card.querySelector('.tgb-trigger').addEventListener('click',e=>{
   lastFocus=e.currentTarget;
   if(typeof dlg.showModal==='function')dlg.showModal();else dlg.setAttribute('open','');
   document.documentElement.style.overflow='hidden';
   dlg.querySelector('.tgb-body').scrollTop=0;
   dlg.querySelector('.tgb-x').focus();
  });
  unhide();
 }
 const run=()=>{try{build();}catch(err){unhide();}};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
 setTimeout(unhide,4000);
})();
