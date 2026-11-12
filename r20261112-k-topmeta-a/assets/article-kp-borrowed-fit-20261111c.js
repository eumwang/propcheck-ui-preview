/* Mobile overlay-scrollbar fallback for /articles/borrowed-prop/ tables.
   If the browser does not reserve space for ::-webkit-scrollbar (iOS Safari etc.),
   add a thin always-visible scroll-position bar under each overflowing .table-scroll.
   No-op at 681px and up, and when a native scrollbar is already visible. */
(function () {
  var MQ = "(max-width: 680px)";

  function nativeScrollbarHeight(el) {
    return el.offsetHeight - el.clientHeight;
  }

  function updateHint(wrap, hint) {
    var sw = wrap.scrollWidth;
    var cw = wrap.clientWidth;
    var tw = hint.clientWidth;
    var thumb = hint.querySelector(".table-scroll-hint-thumb");
    if (!thumb) return;
    if (sw <= cw + 1 || tw <= 0) {
      hint.hidden = true;
      return;
    }
    hint.hidden = false;
    var w = Math.max(24, (cw / sw) * tw);
    var max = tw - w;
    var left = sw - cw <= 0 ? 0 : (wrap.scrollLeft / (sw - cw)) * max;
    thumb.style.width = w + "px";
    thumb.style.left = left + "px";
  }

  function enhance(wrap) {
    if (!window.matchMedia(MQ).matches) return;
    if (wrap.scrollWidth <= wrap.clientWidth + 1) return;
    if (nativeScrollbarHeight(wrap) >= 4) return;
    if (wrap.dataset.tableScrollHint === "1") {
      var existing = wrap.nextElementSibling;
      if (existing && existing.classList.contains("table-scroll-hint")) {
        updateHint(wrap, existing);
      }
      return;
    }
    var hint = document.createElement("div");
    hint.className = "table-scroll-hint";
    hint.setAttribute("aria-hidden", "true");
    var thumb = document.createElement("span");
    thumb.className = "table-scroll-hint-thumb";
    hint.appendChild(thumb);
    wrap.insertAdjacentElement("afterend", hint);
    wrap.dataset.tableScrollHint = "1";
    var sync = function () { updateHint(wrap, hint); };
    wrap.addEventListener("scroll", sync, { passive: true });
    sync();
  }

  function watch(wrap) {
    if (wrap.dataset.tableScrollWatch !== "1") {
      wrap.dataset.tableScrollWatch = "1";
      if (typeof ResizeObserver !== "undefined") {
        var ro = new ResizeObserver(function () { enhance(wrap); });
        ro.observe(wrap);
        var table = wrap.querySelector("table");
        if (table) ro.observe(table);
      }
    }
    enhance(wrap);
  }

  function clearHints() {
    document.querySelectorAll(".kp-article .table-scroll-hint").forEach(function (el) {
      var prev = el.previousElementSibling;
      if (prev && prev.classList.contains("table-scroll")) {
        delete prev.dataset.tableScrollHint;
      }
      el.remove();
    });
  }

  function run() {
    if (!window.matchMedia(MQ).matches) {
      clearHints();
      return;
    }
    document.querySelectorAll(".kp-article .table-scroll").forEach(watch);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
  window.addEventListener("resize", run);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(run);
  }
  setTimeout(run, 50);
  setTimeout(run, 400);
})();
