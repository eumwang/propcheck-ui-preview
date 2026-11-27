/* PROP CHECK GA4 events (2026-11-26). Adds events only; does not change the page. */
(function(){'use strict';
if(window.__pcGa4Events)return;window.__pcGa4Events=1;
function send(name,params){try{if(typeof window.gtag==='function'){window.gtag('event',name,params);}else{(window.dataLayer=window.dataLayer||[]).push(['event',name,params]);}}catch(_e){}}
var path=location.pathname.replace(/^\/propcheck-ui-preview\/[^\/]+/,'')||'/';
function langOf(p){var m=/^\/(en|ko)(\/|$)/.exec(p||'');return m?m[1]:'ja';}
var language=langOf(path);
function pageType(p){p=p.replace(/^\/(en|ko|ja)(?=\/)/,'');if(p==='/'||p==='/index.html')return'home';var m=/^\/([^\/]+)\//.exec(p);if(!m)return'other';var k=m[1];return({companies:'company',guides:'guide',articles:'article',report:'report','report-error':'error_report','request-listing':'listing_request',contact:'contact',methodology:'methodology',alerts:'alerts'})[k]||'other';}
var page_type=pageType(path);
/* Referral links: only the firm and the domain are sent. The link URL (and its affiliateId) is never sent. */
var FIRMS=[{re:/(^|\.)rzrfunded\.com$/i,slug:'rzr-funded',name:'RZR Funded'},{re:/^hn\.xyz$/i,slug:'hypernova',name:'Hypernova'},{re:/(^|\.)propr\.xyz$/i,slug:'propr',name:'Propr'},{re:/(^|\.)fundedhive\.com$/i,slug:'fundedhive',name:'FundedHive'}];
function firmOf(host){for(var i=0;i<FIRMS.length;i++){if(FIRMS[i].re.test(host))return FIRMS[i];}return null;}
function isAffiliate(a,u){var rel=(a.getAttribute('rel')||'').toLowerCase();if(/\bsponsored\b/.test(rel))return true;if(a.getAttribute('data-affiliate')==='true')return true;return !!(firmOf(u.hostname)&&(/[?&]affiliateId=/i.test(u.search)||/^\/r\//i.test(u.pathname)));}
function placementOf(a){if(a.closest('#comparison,#comparison-table'))return'comparison_table';if(a.closest('#featured,#featured-grid'))return'featured';if(a.closest('#detail,#detail-root'))return'company_detail';if(a.closest('header,.site-header'))return'header';if(a.closest('footer'))return'footer';if(a.classList.contains('af-register')||a.closest('.af-register'))return'guide_cta';if(a.closest('article,main'))return page_type+'_body';return'other';}
function firmFromRow(a){var r=a.closest('[data-company-id]');if(!r)return null;var id=r.getAttribute('data-company-id');var m=window.PC_REFERRAL_CTA&&window.PC_REFERRAL_CTA[id];var nm=r.querySelector('.company-name-link,.mc-name');return{slug:(m&&m.slug)||id,name:nm?nm.textContent.trim():id};}
document.addEventListener('click',function(e){var a=e.target&&e.target.closest?e.target.closest('a[href]'):null;if(!a)return;var u;try{u=new URL(a.href,location.href);}catch(_e){return;}
if(/^(t\.me|telegram\.me|telegram\.org)$/i.test(u.hostname)){send('telegram_click',{link_url:u.origin+u.pathname,placement:placementOf(a),language:language});return;}
if(u.origin===location.origin)return;
if(!isAffiliate(a,u))return;
var f=firmOf(u.hostname)||firmFromRow(a)||{slug:'unknown',name:'unknown'};
send('affiliate_click',{firm_slug:f.slug,firm_name:f.name,link_domain:u.hostname,placement:placementOf(a),page_type:page_type,language:language});},true);
/* Thanks pages (shown after a form is sent). Fired once per page view. */
var p2=path.replace(/index\.html$/,'');var ref='';try{var r=new URL(document.referrer);if(r.origin===location.origin)ref=r.pathname.replace(/^\/propcheck-ui-preview\/[^\/]+/,'');}catch(_e){}
var T=[[/^\/(?:(en|ko)\/)?report\/thanks\/$/,'report_submit','prop-check-incident-v2-ja'],[/^\/(?:(ja|en|ko)\/)?request-listing\/thanks\/$/,'listing_request_submit','prop-check-listing-request'],[/^\/(?:(en|ko)\/)?report-error\/thanks\/$/,'error_report_submit','prop-check-error-report']];
for(var i=0;i<T.length;i++){var m=T[i][0].exec(p2);if(m){var lg=m[1]&&m[1]!=='ja'?m[1]:(m[1]==='ja'?'ja':(ref?langOf(ref):language));send(T[i][1],{form_name:T[i][2],language:lg});break;}}
window.pcTrackTelegram=function(url,placement){send('telegram_click',{link_url:String(url||''),placement:String(placement||'other'),language:language});};
})();
