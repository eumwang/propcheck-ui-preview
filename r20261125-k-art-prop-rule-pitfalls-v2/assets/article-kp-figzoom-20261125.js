/* article-kp-figzoom-20261125.js ― 図のタップ拡大（再利用可。CSSは article-kp-figzoom-20261125.css）
   - 680px以下で、図（.fig 内の .fig-scroll > svg）の最小の文字が MIN_PX 未満の図だけに「タップで拡大」を出す。
   - 拡大は全画面の重ね表示。図を元の大きさ（viewBox の幅）で出し、横・縦に動かせる。
     閉じる：ボタン、背景（図の外）のタップ、Esc。
   - 個別に切り替える：<figure class="fig" data-figzoom="on|off">（on＝常に出す、off＝出さない）。
   - 文言は <html lang> / 記事の lang（ja・en・ko）で切り替わる。JSが動かないときは縮小表示のまま。 */
(function () {
  'use strict';
  var MIN_PX = 9;
  var MQ = window.matchMedia ? window.matchMedia('(max-width: 680px)') : null;
  var L = {
    ja: { open: 'タップで拡大', close: '閉じる', label: '図の拡大表示' },
    en: { open: 'Tap to enlarge', close: 'Close', label: 'Enlarged figure' },
    ko: { open: '탭하여 확대', close: '닫기', label: '그림 확대 보기' }
  };
  function lang(el) {
    var n = el.closest ? el.closest('[lang]') : null;
    var v = ((n && n.getAttribute('lang')) || document.documentElement.lang || 'ja').slice(0, 2).toLowerCase();
    return L[v] ? L[v] : L.ja;
  }
  function vbWidth(svg) {
    var vb = svg.viewBox && svg.viewBox.baseVal;
    return vb && vb.width ? vb.width : (parseFloat(svg.getAttribute('width')) || 0);
  }
  /* 今の表示サイズでの最小の文字（CSS px） */
  function minFont(svg) {
    var w = svg.getBoundingClientRect().width, vw = vbWidth(svg);
    if (!w || !vw) return null;
    var scale = w / vw, min = Infinity, ts = svg.querySelectorAll('text');
    for (var i = 0; i < ts.length; i++) {
      if (!ts[i].textContent.trim()) continue;
      var fs = parseFloat(window.getComputedStyle(ts[i]).fontSize);
      if (fs && fs * scale < min) min = fs * scale;
    }
    return min === Infinity ? null : min;
  }

  var overlay = null, lastFocus = null;
  function close() {
    if (!overlay) return;
    document.removeEventListener('keydown', onKey, true);
    overlay.parentNode && overlay.parentNode.removeChild(overlay);
    overlay = null;
    document.documentElement.classList.remove('figzoom-open');
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }
  function onKey(e) {
    if (!overlay) return;
    if (e.key === 'Escape' || e.key === 'Esc') { e.preventDefault(); close(); return; }
    if (e.key === 'Tab') { /* フォーカスを重ね表示の中に閉じ込める */
      var f = [overlay.querySelector('.figzoom-close'), overlay.querySelector('.figzoom-scroll')];
      var i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? f.length - 1 : 1)) % f.length].focus();
    }
  }
  function open(fig, trigger) {
    var svg = fig.querySelector('.fig-scroll svg');
    if (!svg || overlay) return;
    var t = lang(fig), vw = vbWidth(svg);
    lastFocus = trigger || document.activeElement;
    var clone = svg.cloneNode(true);
    /* id の重複を避ける（marker など） */
    var ids = clone.querySelectorAll('[id]'), map = {};
    for (var i = 0; i < ids.length; i++) { map[ids[i].id] = ids[i].id + '-zoom'; ids[i].id = map[ids[i].id]; }
    var html = clone.outerHTML;
    Object.keys(map).forEach(function (k) { html = html.split('url(#' + k + ')').join('url(#' + map[k] + ')'); });
    var holder = document.createElement('div'); holder.innerHTML = html;
    clone = holder.firstChild;
    clone.removeAttribute('width'); clone.removeAttribute('height');
    clone.style.width = vw + 'px'; clone.style.minWidth = vw + 'px'; clone.style.maxWidth = 'none';

    overlay = document.createElement('div');
    overlay.className = 'figzoom-overlay'; overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', svg.getAttribute('aria-label') || t.label);
    var bar = document.createElement('div'); bar.className = 'figzoom-bar';
    var btn = document.createElement('button'); btn.type = 'button'; btn.className = 'figzoom-close'; btn.textContent = t.close + ' ✕';
    btn.setAttribute('aria-label', t.close);
    bar.appendChild(btn);
    var sc = document.createElement('div'); sc.className = 'figzoom-scroll'; sc.tabIndex = 0;
    var inner = document.createElement('div'); inner.className = 'figzoom-inner'; inner.appendChild(clone); sc.appendChild(inner);
    overlay.appendChild(bar); overlay.appendChild(sc);
    btn.addEventListener('click', close);
    /* 背景（図の外）のタップで閉じる */
    sc.addEventListener('click', function (e) { if (!inner.contains(e.target)) close(); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    document.body.appendChild(overlay);
    document.documentElement.classList.add('figzoom-open');
    document.addEventListener('keydown', onKey, true);
    btn.focus();
    /* 図が画面より広いとき、左端から見せる */
    sc.scrollLeft = 0;
  }

  function sync(fig) {
    var svg = fig.querySelector('.fig-scroll svg'), sc = fig.querySelector('.fig-scroll');
    if (!svg || !sc) return;
    var mode = fig.getAttribute('data-figzoom');
    var want = false, min = null;
    if (MQ && MQ.matches && mode !== 'off') {
      min = minFont(svg);
      want = mode === 'on' || (min !== null && min < MIN_PX);
    }
    var btn = fig.querySelector('.figzoom-btn');
    if (min !== null) fig.setAttribute('data-figzoom-min', (Math.round(min * 10) / 10).toString()); else fig.removeAttribute('data-figzoom-min');
    if (want && !btn) {
      btn = document.createElement('button'); btn.type = 'button'; btn.className = 'figzoom-btn';
      btn.textContent = lang(fig).open;
      btn.addEventListener('click', function () { open(fig, btn); });
      sc.parentNode.insertBefore(btn, sc.nextSibling);
      fig.classList.add('is-zoomable');
      if (!sc.__figzoom) { sc.__figzoom = true; sc.addEventListener('click', function () { if (fig.classList.contains('is-zoomable')) open(fig, fig.querySelector('.figzoom-btn')); }); }
    } else if (!want && btn) {
      btn.parentNode.removeChild(btn); fig.classList.remove('is-zoomable');
    }
  }
  function syncAll() {
    var figs = document.querySelectorAll('.kp-article .fig, .fig');
    var seen = [];
    for (var i = 0; i < figs.length; i++) { if (seen.indexOf(figs[i]) < 0) { seen.push(figs[i]); sync(figs[i]); } }
    if (overlay && MQ && !MQ.matches) close();
  }
  var tm;
  function later() { clearTimeout(tm); tm = setTimeout(syncAll, 80); }
  function init() {
    syncAll();
    window.addEventListener('resize', later); window.addEventListener('orientationchange', later);
    if (MQ && MQ.addEventListener) MQ.addEventListener('change', syncAll);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(syncAll);
    window.addEventListener('load', syncAll);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
