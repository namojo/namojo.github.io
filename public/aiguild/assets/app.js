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

  /* ── 일의 단계 판정기 ────────────────────────────────── */
  var lvOut = document.getElementById('lv-out');
  if (lvOut) {
    var lvIds = ['lv-freq', 'lv-qual', 'lv-people'];
    var judge = function () {
      var sum = lvIds.reduce(function (s, id) { return s + (+document.getElementById(id).value); }, 0);
      var msg;
      if (sum <= 4) msg = '<b>' + sum + '점 · L1 혼자</b> — 단일 에이전트에게 그때그때 시키는 것이 가장 빠릅니다. 하네스를 만들면 설계 비용이 더 큽니다.';
      else if (sum <= 7) msg = '<b>' + sum + '점 · L2 팀</b> — 깊이나 검증이 필요할 때만 나눠 맡기세요. 같은 모양으로 자주 반복되기 시작하면 하네스로 굳힐 때입니다.';
      else msg = '<b>' + sum + '점 · L3 시스템(하네스)</b> — 역할·절차·검증을 파일로 남길 가치가 큽니다. 처음 설계에 든 시간을 반복으로 회수할 수 있습니다.';
      lvOut.innerHTML = msg;
    };
    lvIds.forEach(function (id) { document.getElementById(id).addEventListener('change', judge); });
    judge();
  }

  /* ── 패턴 퀴즈 ───────────────────────────────────────── */
  var quiz = document.getElementById('pattern-quiz');
  if (quiz) {
    var PATTERNS = [
      ['', '— 고르세요 —'], ['pipeline', '파이프라인'], ['fanout', '팬아웃 · 팬인'], ['pool', '전문가 풀'],
      ['review', '생성 · 검증'], ['supervisor', '감독자'], ['hier', '계층적 위임']
    ];
    var items = Array.prototype.slice.call(quiz.querySelectorAll('.quiz li'));
    items.forEach(function (li) {
      var sel = li.querySelector('select');
      PATTERNS.forEach(function (p) {
        var o = document.createElement('option');
        o.value = p[0]; o.textContent = p[1];
        sel.appendChild(o);
      });
      sel.addEventListener('change', function () {
        li.classList.remove('graded');
        var r = li.querySelector('.res'); r.textContent = ''; r.className = 'res';
      });
    });
    var score = document.getElementById('quiz-score');
    document.getElementById('quiz-grade').addEventListener('click', function () {
      var right = 0;
      items.forEach(function (li) {
        var v = li.querySelector('select').value;
        var r = li.querySelector('.res');
        var ok = v === li.dataset.answer;
        if (ok) right++;
        r.textContent = !v ? '안 고름' : ok ? '✓ 맞음' : '✗ 다시 보기';
        r.className = 'res ' + (ok ? 'ok' : 'no');
        li.classList.add('graded');
      });
      score.textContent = items.length + '문제 중 ' + right + '개 맞음';
    });
    document.getElementById('quiz-reset').addEventListener('click', function () {
      items.forEach(function (li) {
        li.querySelector('select').value = '';
        li.classList.remove('graded');
        var r = li.querySelector('.res'); r.textContent = ''; r.className = 'res';
      });
      score.textContent = '';
    });
  }

  /* ── showreel 의뢰서(brief) 생성기 ───────────────────── */
  var briefOut = document.getElementById('brief-out');
  if (briefOut) {
    var BRIEF_KEY = 'aiguild.reel.brief.v1';
    var EXAMPLE = {
      type: '도서', len: '15초', title: '생존을 위한 최소한의 AI 교양', maker: '조남호 (저자)',
      must: 'AI Agent Guild 10월 세미나 북토크, 2026년 10월 29일(목) 19:00, 온라인',
      aud: 'AI를 써 보고 싶지만 어디서 시작할지 모르는 직장인', mood: '미니멀하고 또렷하게', cta: '북토크에서 만나요'
    };
    var HINTS = {
      '도서': ['저자 · 옮긴이 · 출판사', '출간일, 출판사, 북토크·사인회 일정, 구매 링크'],
      '영화': ['감독 · 주연 · 배급사', '개봉일, 상영관 또는 OTT, 관람 등급'],
      '행사': ['주최 · 주관 · 연사', '일시(요일까지), 장소 또는 온라인, 신청 방법·링크, 참가비'],
      '게임': ['개발사 · 배급사', '출시일, 플랫폼, 장르, 사전 예약·체험판 여부']
    };
    var F = {
      type: 'bf-type', len: 'bf-len', title: 'bf-title', maker: 'bf-maker',
      must: 'bf-must', aud: 'bf-aud', mood: 'bf-mood', cta: 'bf-cta'
    };
    var el = {};
    Object.keys(F).forEach(function (k) { el[k] = document.getElementById(F[k]); });

    var readSaved = function () {
      try { var raw = localStorage.getItem(BRIEF_KEY); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
    };
    var writeSaved = function (v) { try { localStorage.setItem(BRIEF_KEY, JSON.stringify(v)); } catch (e) {} };

    var fillForm = function (v) {
      Object.keys(F).forEach(function (k) { if (v[k] !== undefined) el[k].value = v[k]; });
    };
    var current = function () {
      var v = {};
      Object.keys(F).forEach(function (k) { v[k] = el[k].value.trim(); });
      return v;
    };
    var line = function (label, value) { return '- ' + label + ': ' + (value || '(비움 — 조사로 찾기)'); };
    var renderBrief = function () {
      var v = current();
      var h = HINTS[v.type] || HINTS['도서'];
      el.maker.placeholder = h[0];
      el.must.placeholder = h[1];
      document.getElementById('bf-maker-hint').textContent = '예: ' + h[0];
      document.getElementById('bf-must-hint').textContent = '예: ' + h[1] + ' — 모르면 비워 두세요';
      briefOut.textContent = [
        '아래 내용 그대로 brief.md 파일을 만들어줘. 내용은 고치지 마.',
        '',
        '# brief — showreel 의뢰서',
        '',
        line('유형', v.type),
        line('제목', v.title),
        line('만든 이', v.maker),
        line('꼭 넣을 정보', v.must.replace(/\s*\n\s*/g, ', ')),
        line('보는 사람', v.aud),
        line('분위기', v.mood),
        line('길이', v.len),
        line('끝 화면 문구(CTA)', v.cta),
        '- 하지 말 것: 줄거리 반전·결말, 포스터·표지·스틸·로고 같은 저작물 이미지'
      ].join('\n');
      writeSaved(v);
    };

    fillForm(readSaved() || EXAMPLE);
    Object.keys(F).forEach(function (k) {
      el[k].addEventListener('input', renderBrief);
      el[k].addEventListener('change', renderBrief);
    });
    document.getElementById('bf-reset').addEventListener('click', function () { fillForm(EXAMPLE); renderBrief(); });
    renderBrief();
  }

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
