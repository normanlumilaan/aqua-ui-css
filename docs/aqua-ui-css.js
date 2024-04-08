(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    u(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && u(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function u(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
})();
function s(o) {
  if (o === null)
    return;
  function r() {
    const n = (/* @__PURE__ */ new Date()).toLocaleString("en-US", {
      weekday: "short",
      hour: "numeric",
      minute: "2-digit",
      hour12: !0
    });
    o && (o.textContent = n);
  }
  r(), setInterval(r, 6e4);
}
s(document.querySelector("#menubar-clock"));
