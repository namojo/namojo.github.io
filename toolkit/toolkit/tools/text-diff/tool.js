/* 텍스트 비교 — 줄 단위 LCS diff. 외부 의존성 없음, 네트워크 없음. */
(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);

  const A = $('#a'), B = $('#b'), OUT = $('#out');
  const opt = {
    trim:     $('#opt-trim'),
    case:     $('#opt-case'),
    blank:    $('#opt-blank'),
    collapse: $('#opt-collapse'),
  };

  const MAX_LINES = 4000;   // LCS 는 O(n·m) — 상한을 두고 정직하게 알린다
  const CONTEXT = 3;

  let unified = '';

  /* ── 정규화 ─────────────────────────────────────────── */

  const split = (t) => t.replace(/\r\n?/g, '\n').split('\n');

  function prep(text) {
    let lines = split(text);
    if (opt.blank.checked) lines = lines.filter((l) => l.trim() !== '');
    const keyOf = (l) => {
      let k = l;
      if (opt.trim.checked) k = k.trim();
      if (opt.case.checked) k = k.toLowerCase();
      return k;
    };
    return { lines, keys: lines.map(keyOf) };
  }

  /* ── LCS diff ───────────────────────────────────────── */

  function diff(aKeys, bKeys) {
    // 공통 접두/접미를 먼저 잘라내면 DP 크기가 크게 줄어든다
    let head = 0;
    while (head < aKeys.length && head < bKeys.length && aKeys[head] === bKeys[head]) head++;
    let tail = 0;
    while (
      tail < aKeys.length - head &&
      tail < bKeys.length - head &&
      aKeys[aKeys.length - 1 - tail] === bKeys[bKeys.length - 1 - tail]
    ) tail++;

    const a = aKeys.slice(head, aKeys.length - tail);
    const b = bKeys.slice(head, bKeys.length - tail);
    const n = a.length, m = b.length;

    const ops = [];
    for (let i = 0; i < head; i++) ops.push({ t: 'eq', ai: i, bi: i });

    if (n === 0 || m === 0) {
      for (let i = 0; i < n; i++) ops.push({ t: 'del', ai: head + i, bi: -1 });
      for (let j = 0; j < m; j++) ops.push({ t: 'add', ai: -1, bi: head + j });
    } else {
      const W = m + 1;
      const dp = new Uint32Array((n + 1) * W);
      for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
          dp[i * W + j] = a[i] === b[j]
            ? dp[(i + 1) * W + (j + 1)] + 1
            : Math.max(dp[(i + 1) * W + j], dp[i * W + (j + 1)]);
        }
      }
      let i = 0, j = 0;
      while (i < n && j < m) {
        if (a[i] === b[j]) { ops.push({ t: 'eq', ai: head + i, bi: head + j }); i++; j++; }
        else if (dp[(i + 1) * W + j] >= dp[i * W + (j + 1)]) { ops.push({ t: 'del', ai: head + i, bi: -1 }); i++; }
        else { ops.push({ t: 'add', ai: -1, bi: head + j }); j++; }
      }
      while (i < n) { ops.push({ t: 'del', ai: head + i, bi: -1 }); i++; }
      while (j < m) { ops.push({ t: 'add', ai: -1, bi: head + j }); j++; }
    }

    for (let k = 0; k < tail; k++) {
      ops.push({ t: 'eq', ai: aKeys.length - tail + k, bi: bKeys.length - tail + k });
    }
    return ops;
  }

  /* ── 렌더 (DOM API 전용, innerHTML 미사용) ──────────── */

  function row(cls, la, lb, text) {
    const el = document.createElement('div');
    el.className = 'diff-row ' + cls;
    const a = document.createElement('span'); a.className = 'ln'; a.textContent = la;
    const b = document.createElement('span'); b.className = 'ln'; b.textContent = lb;
    const t = document.createElement('span'); t.className = 'tx'; t.textContent = text;
    el.append(a, b, t);
    return el;
  }

  function render(ops, aLines, bLines) {
    OUT.textContent = '';

    // 접어 보기: 변경점 주변 CONTEXT 줄만 남긴다
    let keep;
    if (opt.collapse.checked) {
      keep = new Array(ops.length).fill(false);
      ops.forEach((o, i) => {
        if (o.t === 'eq') return;
        for (let k = Math.max(0, i - CONTEXT); k <= Math.min(ops.length - 1, i + CONTEXT); k++) keep[k] = true;
      });
    } else {
      keep = new Array(ops.length).fill(true);
    }

    const frag = document.createDocumentFragment();
    let skipped = 0;
    const flushSkip = () => {
      if (!skipped) return;
      const s = document.createElement('div');
      s.className = 'diff-skip';
      s.textContent = `⋯ 동일한 ${skipped}줄 생략`;
      frag.appendChild(s);
      skipped = 0;
    };

    for (let i = 0; i < ops.length; i++) {
      const o = ops[i];
      if (!keep[i]) { skipped++; continue; }
      flushSkip();
      if (o.t === 'eq')      frag.appendChild(row('diff-eq',  o.ai + 1, o.bi + 1, aLines[o.ai] ?? ''));
      else if (o.t === 'del') frag.appendChild(row('diff-del', o.ai + 1, '',       aLines[o.ai] ?? ''));
      else                    frag.appendChild(row('diff-add', '',       o.bi + 1, bLines[o.bi] ?? ''));
    }
    flushSkip();

    if (!ops.length) {
      const p = document.createElement('p');
      p.className = 'diff-skip';
      p.textContent = '비교할 내용이 없습니다.';
      frag.appendChild(p);
    }
    OUT.appendChild(frag);
  }

  function toUnified(ops, aLines, bLines) {
    const out = ['--- 원본', '+++ 변경본'];
    for (const o of ops) {
      if (o.t === 'eq')       out.push(' ' + (aLines[o.ai] ?? ''));
      else if (o.t === 'del') out.push('-' + (aLines[o.ai] ?? ''));
      else                    out.push('+' + (bLines[o.bi] ?? ''));
    }
    return out.join('\n');
  }

  /* ── 실행 ───────────────────────────────────────────── */

  function counts(el, text) {
    const lines = text === '' ? 0 : split(text).length;
    document.querySelector(el + '-lines').textContent = String(lines);
    document.querySelector(el + '-chars').textContent = String(text.length);
  }

  function run() {
    const pa = prep(A.value), pb = prep(B.value);

    if (pa.lines.length > MAX_LINES || pb.lines.length > MAX_LINES) {
      OUT.textContent = '';
      const p = document.createElement('p');
      p.className = 'diff-skip';
      p.textContent = `한쪽이 ${MAX_LINES}줄을 넘어 비교를 중단했습니다. ` +
        '줄 단위 LCS 는 두 입력 길이의 곱만큼 메모리를 쓰기 때문에, 브라우저가 멈추는 것을 막기 위한 상한입니다.';
      OUT.appendChild(p);
      $('#copy').disabled = $('#save').disabled = true;
      return;
    }

    const ops = diff(pa.keys, pb.keys);
    render(ops, pa.lines, pb.lines);
    unified = toUnified(ops, pa.lines, pb.lines);

    const nAdd = ops.filter((o) => o.t === 'add').length;
    const nDel = ops.filter((o) => o.t === 'del').length;
    const nEq  = ops.length - nAdd - nDel;
    $('#n-add').textContent = String(nAdd);
    $('#n-del').textContent = String(nDel);
    $('#n-eq').textContent  = String(nEq);
    $('#n-sim').textContent = ops.length ? Math.round((nEq * 2 * 100) / (pa.lines.length + pb.lines.length || 1)) + '%' : '—';

    const has = ops.length > 0;
    $('#copy').disabled = $('#save').disabled = !has;
  }

  const runSoon = TK.debounce(run, 220);

  /* ── 배선 ───────────────────────────────────────────── */

  for (const el of [A, B]) {
    el.addEventListener('input', () => {
      counts(el === A ? '#a' : '#b', el.value);
      runSoon();
    });
  }
  for (const k of Object.keys(opt)) {
    opt[k].addEventListener('change', () => { saveOpts(); run(); });
  }
  $('#run').addEventListener('click', run);
  $('#swap').addEventListener('click', () => {
    const t = A.value; A.value = B.value; B.value = t;
    counts('#a', A.value); counts('#b', B.value);
    run();
  });
  $('#clear-a').addEventListener('click', () => { A.value = ''; counts('#a', ''); run(); A.focus(); });
  $('#clear-b').addEventListener('click', () => { B.value = ''; counts('#b', ''); run(); B.focus(); });
  $('#copy').addEventListener('click', () => TK.copy(unified));
  $('#save').addEventListener('click', () => TK.saveText('compare.diff', unified, 'text/plain'));

  /* ── 옵션만 저장 (입력 내용은 절대 저장하지 않는다) ── */

  const saveOpts = () => TK.storage.set('opts', {
    trim: opt.trim.checked, case: opt.case.checked,
    blank: opt.blank.checked, collapse: opt.collapse.checked,
  });

  TK.storage.get('opts').then((v) => {
    if (!v || typeof v !== 'object') return;
    if (typeof v.trim === 'boolean')     opt.trim.checked = v.trim;
    if (typeof v.case === 'boolean')     opt.case.checked = v.case;
    if (typeof v.blank === 'boolean')    opt.blank.checked = v.blank;
    if (typeof v.collapse === 'boolean') opt.collapse.checked = v.collapse;
  });

  run();
})();
