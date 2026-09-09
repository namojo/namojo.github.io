/* ============================================================
   TOOLKIT 허브 — 검색 / 태그 / 즐겨찾기 / 격리 뷰어 (의존성 0)
   ============================================================

   설계 원칙
   1. 카드 마크업은 빌드 시점에 정적으로 박혀 있다. 이 스크립트는 그걸 걸러내고
      순서만 바꾼다. JS 가 죽어도 목록과 링크는 살아 있다(그리고 크롤러도 본다).
   2. 어떤 경우에도 innerHTML 을 쓰지 않는다. 모든 텍스트는 textContent.
   3. 도구는 sandbox iframe(불투명 오리진) 안에서 돌고,
      저장소가 필요하면 postMessage 로 허브에 요청한다. 허브가 문지기다.
*/

(function () {
  'use strict';

  const $  = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];

  const FAV_KEY = 'tk:favorites';
  const MAX_VALUE_BYTES = 32 * 1024;
  const KEY_RE = /^[a-z0-9][a-z0-9_-]{0,39}$/;

  /* ── 즐겨찾기 저장소 (localStorage 없으면 메모리로 동작) ── */

  let store = null;
  try { window.localStorage.getItem('__probe__'); store = window.localStorage; } catch (_) { store = null; }

  const readJSON = (key, fallback) => {
    if (!store) return fallback;
    try {
      const v = JSON.parse(store.getItem(key));
      return v === null || v === undefined ? fallback : v;
    } catch (_) { return fallback; }
  };
  const writeJSON = (key, value) => {
    if (!store) return false;
    try { store.setItem(key, JSON.stringify(value)); return true; } catch (_) { return false; }
  };

  let favs = new Set(Array.isArray(readJSON(FAV_KEY, [])) ? readJSON(FAV_KEY, []) : []);
  const saveFavs = () => writeJSON(FAV_KEY, [...favs]);

  /* ── 상태 ────────────────────────────────────────────── */

  const state = { q: '', cat: '*', tags: new Set() };

  const cards = $$('.card').map((el) => ({
    el,
    id: el.dataset.id,
    cat: el.dataset.cat,
    tags: (el.dataset.tags || '').split('|').filter(Boolean),
    search: el.dataset.search || '',
    path: el.dataset.path,
    title: ($('.card-title', el)?.textContent || '').trim(),
  }));
  const cardById = new Map(cards.map((c) => [c.id, c]));

  const grid       = $('#grid');
  const emptyEl    = $('#empty');
  const noteEl     = $('#filter-note');
  const searchEl   = $('#q');
  const clearEl    = $('#q-clear');
  const favCountEl = $('[data-fav-count]');

  /* ── 렌더 ────────────────────────────────────────────── */

  function render() {
    const q = state.q.trim().toLowerCase();
    const terms = q ? q.split(/\s+/) : [];
    let shown = 0;

    for (const c of cards) {
      const isFav = favs.has(c.id);
      let ok = true;

      if (state.cat === '@fav') ok = isFav;
      else if (state.cat !== '*') ok = c.cat === state.cat;

      if (ok && state.tags.size) ok = [...state.tags].every((t) => c.tags.includes(t));
      if (ok && terms.length) ok = terms.every((t) => c.search.includes(t));

      c.el.hidden = !ok;
      // 즐겨찾기를 맨 위로. CSS order 만 바꿔 DOM 을 재배치하지 않는다.
      c.el.style.setProperty('order', isFav ? '0' : '1');
      if (ok) shown++;
    }

    emptyEl.hidden = shown > 0;
    favCountEl.textContent = String(favs.size);

    const bits = [];
    if (state.cat === '@fav') bits.push('즐겨찾기');
    else if (state.cat !== '*') {
      const label = $(`.chip[data-cat="${state.cat}"]`)?.textContent.replace(/\d+$/, '').trim();
      if (label) bits.push(label);
    }
    for (const t of state.tags) bits.push('#' + t);
    if (q) bits.push(`"${state.q.trim()}"`);
    noteEl.textContent = bits.length
      ? `${bits.join(' · ')} — ${shown}개`
      : `${shown}개의 도구 · 별표를 누르면 다음 방문 때 맨 위에 표시됩니다`;

    for (const el of $$('.star')) {
      const id = el.closest('.card').dataset.id;
      const on = favs.has(id);
      el.setAttribute('aria-pressed', String(on));
      $('span', el).textContent = on ? '★' : '☆';
    }
  }

  /* ── 입력 배선 ───────────────────────────────────────── */

  const debounce = (fn, ms) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };

  searchEl.addEventListener('input', debounce(() => { state.q = searchEl.value; render(); }, 120));
  clearEl.addEventListener('click', () => { searchEl.value = ''; state.q = ''; searchEl.focus(); render(); });

  for (const chip of $$('.chip[data-cat]')) {
    chip.addEventListener('click', () => {
      state.cat = chip.dataset.cat;
      for (const c of $$('.chip[data-cat]')) c.classList.toggle('is-on', c === chip);
      render();
    });
  }

  for (const chip of $$('.chip[data-tag]')) {
    chip.addEventListener('click', () => {
      const t = chip.dataset.tag;
      if (state.tags.has(t)) state.tags.delete(t); else state.tags.add(t);
      chip.classList.toggle('is-on', state.tags.has(t));
      render();
    });
  }

  grid.addEventListener('click', (e) => {
    const star = e.target.closest('.star');
    if (star) {
      const id = star.closest('.card').dataset.id;
      if (favs.has(id)) favs.delete(id); else favs.add(id);
      saveFavs();
      render();
      return;
    }
    // 카드 제목 클릭 → 기본 이동 대신 격리 뷰어로 (JS 꺼져 있으면 그냥 링크로 이동)
    const link = e.target.closest('.card-title a');
    if (link && !e.metaKey && !e.ctrlKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      location.hash = '#/t/' + link.closest('.card').dataset.id;
    }
  });

  /* ── 격리 뷰어 ───────────────────────────────────────── */

  const dlg      = $('#viewer');
  const frame    = $('#viewer-frame');
  const titleEl  = $('#viewer-title');
  const openEl   = $('#viewer-open');
  const closeEl  = $('#viewer-close');

  let active = null; // 현재 열린 도구 id — 저장소 네임스페이스의 유일한 출처

  function openTool(id) {
    const c = cardById.get(id);
    if (!c) { closeTool(); return; }
    active = id;
    titleEl.textContent = c.title;
    openEl.href = c.path;
    frame.src = c.path;
    if (!dlg.open) dlg.showModal();
  }

  function closeTool() {
    active = null;
    frame.removeAttribute('src'); // 도구 실행을 확실히 끊는다
    if (dlg.open) dlg.close();
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
  }

  closeEl.addEventListener('click', closeTool);
  dlg.addEventListener('cancel', (e) => { e.preventDefault(); closeTool(); });

  function syncHash() {
    const m = /^#\/t\/([a-z0-9][a-z0-9-]*)$/.exec(location.hash);
    if (m) openTool(m[1]);
    else if (dlg.open) closeTool();
  }
  window.addEventListener('hashchange', syncHash);

  /* ── 도구 ↔ 허브 스토리지 브리지 ─────────────────────── */

  frame.addEventListener('load', () => {
    if (!active || !frame.contentWindow) return;
    // 핸드셰이크: 도구는 여기서 받은 origin 으로만 회신한다.
    frame.contentWindow.postMessage({ __tk: 1, op: 'hello' }, '*');
  });

  window.addEventListener('message', (e) => {
    // 1. 지금 열려 있는 그 iframe 이 보낸 것인가
    if (!active || !frame.contentWindow || e.source !== frame.contentWindow) return;
    const m = e.data;
    if (!m || m.__tk !== 1 || typeof m.id !== 'number') return;

    const reply = (ok, value) =>
      e.source.postMessage({ __tk: 1, op: 'reply', id: m.id, ok, value }, '*');
    // targetOrigin '*' — 샌드박스 문서의 오리진은 "null" 이라 지정할 수 없다.
    // 대신 e.source 로 목적지 창을 특정했고, 실어 보내는 건 그 도구 자신의 데이터뿐이다.

    // 2. 키 형식 검증 (경로 조작·네임스페이스 탈출 차단)
    if (typeof m.key !== 'string' || !KEY_RE.test(m.key)) return reply(false, null);

    // 3. 네임스페이스는 허브가 결정한다. 도구가 보낸 값은 쓰지 않는다.
    const k = 'tk:tool:' + active + ':' + m.key;

    if (m.op === 'get')    return reply(true, readJSON(k, null));
    if (m.op === 'remove') { if (store) { try { store.removeItem(k); } catch (_) {} } return reply(true, true); }
    if (m.op === 'set') {
      let raw;
      try { raw = JSON.stringify(m.value); } catch (_) { return reply(false, null); }
      // 4. 용량 상한 — 도구가 오리진 저장소를 채워 다른 페이지를 망가뜨리지 못하게
      if (raw.length > MAX_VALUE_BYTES) return reply(false, null);
      return reply(writeJSON(k, m.value), true);
    }
    return reply(false, null);
  });

  /* ── 시작 ────────────────────────────────────────────── */

  document.documentElement.classList.add('js');
  render();
  syncHash();
})();
