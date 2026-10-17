(()=>{'use strict';
const $=s=>document.querySelector(s);document.body.classList.add('hp-proposal');
function apply(){
 const hero=$('.evidence-hero');if(hero&&!hero.dataset.hpReady){hero.dataset.hpReady='true';const old=hero.querySelector('img');const img=old?.src;hero.className='evidence-hero hp-hero';hero.innerHTML='<div><p class="hp-kicker">PROP CHECK</p><h1>プロップ選びに、<br><em>根拠を。</em></h1><p>出金・口座に関する報告、口コミ、運営情報を31社で比較。</p><div class="hp-hero-actions"><a class="hp-primary" href="#comparison">31社を比較する →</a><a href="#reading">数字の読み方</a></div></div><div class="hp-hero-art" aria-hidden="true"></div>';hero.querySelector('.hp-hero-art').style.backgroundImage='url("'+img+'")';}
 const reading=$('#reading');if(reading&&!reading.dataset.hpReady){reading.dataset.hpReady='true';const cards=document.createElement('div');cards.className='hp-reading-cards';cards.innerHTML='<article class="hp-reading-card"><span>1</span><h3>総合参考点</h3><p>出金・口座の報告点50%、本人口コミ20%、運営基盤30%を組み合わせた参考値です。</p><small>100点満点の参考指標。出金成功率や安全確率ではありません。</small></article><article class="hp-reading-card"><span>2</span><h3>口コミの内訳</h3><p>原文を確認して採用した投稿を、好意的・賛否あり・否定的に分けています。</p><small>表示期間を切り替えると、この内訳が変わります。件数は利用者数ではありません。</small></article><article class="hp-reading-card"><span>3</span><h3>本人報告の内訳</h3><p>Xで確認できた本人の出金・口座トラブルの報告を数えています。</p><small>集めた報告内の割合。全利用者の出金成功率・トラブル発生率ではありません。</small></article>';reading.append(cards);const link=document.createElement('p');link.className='hp-guide-link';link.innerHTML='集計対象・タグの条件・確認できる範囲は、<a href="https://propchecklab.com/methodology/">評価方法と限界 →</a>で確認できます。';reading.append(link);}
}
apply();
})();

/* Preserve an already-requested #reading destination when the existing async
   comparison script later moves it into a newly created, closed details element.
   Observe only its original parent; stop once the wrapper arrives. Do not reopen
   a guide the reader subsequently closes, and do not change the data loading. */
(()=>{'use strict';
  const reading=document.getElementById('reading');
  if(!reading)return;
  const parent=reading.parentElement;
  function wrapperReady(){
    if(!reading.closest('details'))return false;
    if(location.hash==='#reading'){
      for(let node=reading;node;node=node.parentElement){
        if(node.tagName==='DETAILS')node.open=true;
      }
    }
    return true;
  }
  if(wrapperReady())return;
  const observer=new MutationObserver(()=>{
    if(wrapperReady())observer.disconnect();
  });
  observer.observe(parent,{childList:true});
})();
