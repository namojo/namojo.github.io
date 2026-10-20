/* AI Agent Guild — 하네스 핸즈온
   진행률 저장(localStorage), 코드 복사, OS 탭, 테마 토글. 의존성 0. */
(function () {
  'use strict';

  var KEY = 'aiguild.harness.progress.v1';
  var THEME_KEY = 'aiguild.harness.theme';

  /* ── 안전한 저장소 ───────────────────────────────────── */
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) { return {}; }
  }
  function save(state) {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* 사생활 보호 모드 등 */ }
  }

  /* ── 진행률 ──────────────────────────────────────────── */
  var boxes = Array.prototype.slice.call(document.querySelectorAll('.step input[type=checkbox][data-step]'));
  var fill = document.getElementById('progress-fill');
  var num = document.getElementById('progress-num');

  function paint() {
    var done = 0;
    boxes.forEach(function (b) {
      var card = b.closest('.step');
      if (card) card.classList.toggle('is-done', b.checked);
      if (b.checked) done++;
    });
    var pct = boxes.length ? Math.round((done / boxes.length) * 100) : 0;
    if (fill) fill.style.width = pct + '%';
    if (num) num.textContent = done + '/' + boxes.length;
    var bar = document.getElementById('progress-bar');
    if (bar) bar.setAttribute('aria-valuenow', String(pct));
  }

  var state = load();
  boxes.forEach(function (b) {
    if (state[b.dataset.step]) b.checked = true;
    b.addEventListener('change', function () {
      var s = load();
      if (b.checked) s[b.dataset.step] = 1; else delete s[b.dataset.step];
      save(s);
      paint();
    });
  });
  paint();

  var reset = document.getElementById('reset-progress');
  if (reset) {
    reset.addEventListener('click', function () {
      if (!window.confirm('체크한 진행 상황을 모두 지울까요?')) return;
      save({});
      boxes.forEach(function (b) { b.checked = false; });
      paint();
    });
  }

  /* ── 코드 복사 ───────────────────────────────────────── */
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.copy');
    if (!btn) return;
    var block = btn.closest('.code');
    var pre = block && block.querySelector('pre');
    if (!pre) return;
    var text = pre.innerText;
    var label = btn.textContent;

    function done(ok) {
      btn.textContent = ok ? '복사됨' : '복사 실패';
      btn.classList.toggle('ok', ok);
      setTimeout(function () { btn.textContent = label; btn.classList.remove('ok'); }, 1600);
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { fallback(); });
    } else { fallback(); }

    function fallback() {
      try {
        var ta = document.createElement('textarea');
        ta.value = text;
        ta.setAttribute('readonly', '');
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand('copy');
        document.body.removeChild(ta);
        done(ok);
      } catch (e) { done(false); }
    }
  });

  /* ── OS 탭 ───────────────────────────────────────────── */
  Array.prototype.forEach.call(document.querySelectorAll('.tabs'), function (tabs) {
    var btns = Array.prototype.slice.call(tabs.querySelectorAll('.tablist button'));
    var panels = Array.prototype.slice.call(tabs.querySelectorAll('.tabpanel'));

    function select(i) {
      btns.forEach(function (b, j) {
        b.setAttribute('aria-selected', String(j === i));
        b.tabIndex = j === i ? 0 : -1;
      });
      panels.forEach(function (p, j) { p.hidden = j !== i; });
    }

    btns.forEach(function (b, i) {
      b.addEventListener('click', function () { select(i); });
      b.addEventListener('keydown', function (e) {
        var d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        var n = (i + d + btns.length) % btns.length;
        select(n);
        btns[n].focus();
      });
    });
    select(0);
  });

  /* ── 테마 ────────────────────────────────────────────── */
  var toggle = document.getElementById('theme-toggle');
  function applyTheme(t) {
    if (t) document.documentElement.setAttribute('data-theme', t);
    else document.documentElement.removeAttribute('data-theme');
    if (toggle) {
      var dark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
      toggle.textContent = dark ? '☀' : '☾';
      toggle.setAttribute('aria-label', dark ? '밝은 테마로 전환' : '어두운 테마로 전환');
    }
  }
  var saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) {}
  applyTheme(saved);
  if (toggle) {
    toggle.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark' ||
        (!document.documentElement.hasAttribute('data-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
      var next = dark ? 'light' : 'dark';
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      applyTheme(next);
    });
  }
})();
