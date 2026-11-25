/* /articles/borrowed-prop/ (JA/EN/KO): tap-to-enlarge for figures whose smallest text drops below 9px on phones.
   Opens the original-size SVG in a full-screen overlay (pan sideways/vertically). Close: button, backdrop tap, Esc.
   No JS = the shrunken figure stays as is. */
(function () {
  "use strict";
  var MIN_PX = 9;
  var L = (document.documentElement.lang || "ja").slice(0, 2);
  var T = {
    ja: { hint: "タップで拡大", close: "閉じる", label: "図を拡大" },
    en: { hint: "Tap to enlarge", close: "Close", label: "Enlarged figure" },
    ko: { hint: "탭하여 확대", close: "닫기", label: "도표 확대" }
  }[L] || { hint: "タップで拡大", close: "閉じる", label: "図を拡大" };

  var overlay = null, lastFocus = null;

  function minFontPx(svg) {
    var vb = svg.viewBox && svg.viewBox.baseVal;
    var w = svg.getBoundingClientRect().width;
    if (!vb || !vb.width || !w) return Infinity;
    var scale = w / vb.width, min = Infinity, ts = svg.querySelectorAll("text");
    for (var i = 0; i < ts.length; i++) {
      var fs = parseFloat(getComputedStyle(ts[i]).fontSize);
      if (fs) min = Math.min(min, fs * scale);
    }
    return min;
  }

  function close() {
    if (!overlay) return;
    document.removeEventListener("keydown", onKey, true);
    overlay.parentNode && overlay.parentNode.removeChild(overlay);
    overlay = null;
    document.documentElement.classList.remove("fz-lock");
    if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) {} }
  }
  function onKey(e) {
    if (e.key === "Escape" || e.key === "Esc") { e.preventDefault(); e.stopPropagation(); close(); }
    else if (e.key === "Tab" && overlay) {   // keep focus inside the dialog
      var f = overlay.querySelectorAll("button,[tabindex='0']");
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }

  function open(svg, opener) {
    if (overlay) return;
    lastFocus = opener;
    var vb = svg.viewBox.baseVal;
    var clone = svg.cloneNode(true);
    clone.removeAttribute("width"); clone.removeAttribute("height");
    clone.style.width = vb.width + "px";
    clone.style.minWidth = vb.width + "px";

    overlay = document.createElement("div");
    overlay.className = "fz-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", T.label);

    var panel = document.createElement("div"); panel.className = "fz-panel";
    var bar = document.createElement("div"); bar.className = "fz-bar";
    var btn = document.createElement("button"); btn.type = "button"; btn.className = "fz-close"; btn.textContent = T.close;
    btn.setAttribute("aria-label", T.close);
    bar.appendChild(btn);
    var sc = document.createElement("div"); sc.className = "fz-scroll"; sc.tabIndex = 0;
    sc.appendChild(clone);
    panel.appendChild(bar); panel.appendChild(sc);
    overlay.appendChild(panel);

    btn.addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });  // backdrop tap
    document.addEventListener("keydown", onKey, true);
    document.documentElement.classList.add("fz-lock");
    document.body.appendChild(overlay);
    btn.focus();
  }

  function enhance(fig) {
    var scroller = fig.querySelector(".fig-scroll");
    var svg = scroller && scroller.querySelector("svg");
    if (!svg) return;
    var need = minFontPx(svg) < MIN_PX;
    var hint = fig.querySelector(".fz-hint");
    if (need && !hint) {
      hint = document.createElement("button");
      hint.type = "button"; hint.className = "fz-hint"; hint.textContent = T.hint;
      hint.addEventListener("click", function () { open(svg, hint); });
      scroller.parentNode.insertBefore(hint, scroller.nextSibling);
      scroller.classList.add("fz-on");
      if (!scroller._fz) {
        scroller._fz = function (e) { if (scroller.classList.contains("fz-on") && !e.target.closest("a")) open(svg, hint); };
        scroller.addEventListener("click", scroller._fz);
        scroller.addEventListener("keydown", function (e) {
          if ((e.key === "Enter" || e.key === " ") && scroller.classList.contains("fz-on")) { e.preventDefault(); open(svg, hint); }
        });
      }
    } else if (!need && hint) {
      hint.parentNode.removeChild(hint);
      scroller.classList.remove("fz-on");
    }
  }

  function run() {
    var figs = document.querySelectorAll(".kp-article figure.fig");
    for (var i = 0; i < figs.length; i++) enhance(figs[i]);
  }
  var t;
  function later() { clearTimeout(t); t = setTimeout(run, 150); }
  function init() {
    run();
    window.addEventListener("resize", later);
    window.addEventListener("orientationchange", later);
    window.addEventListener("load", run);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(run);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
