/* ============================================================
   TK SDK — 도구 페이지가 쓰는 최소 런타임 (의존성 0)
   ============================================================

   왜 이런 게 필요한가:
   허브는 도구를 <iframe sandbox="allow-scripts"> 로 띄운다. allow-same-origin 이
   없으므로 그 문서는 "불투명 오리진(opaque origin)" 을 받는다. 결과적으로
     · 도구에서 XSS 가 터져도 namojo.github.io 의 localStorage·쿠키에 손댈 수 없다
     · 대신 도구 자신도 localStorage 를 쓸 수 없다  ← 이걸 이 SDK 가 메운다

   그래서 TK.storage 는 두 가지 모드로 동작한다:
     · 직접 접속(표준 페이지)  → localStorage 직접 사용
     · 격리 실행(샌드박스)     → postMessage 로 허브에 위임

   신뢰 모델:
     허브가 먼저 hello 핸드셰이크를 보낸다. 그 event.origin 은 브라우저가
     보증하는 값이므로, 이후 모든 응답을 그 오리진으로만 보낸다.
     네임스페이스(어느 도구의 저장소인지)는 허브가 자기 상태로 결정한다.
     도구가 보낸 값을 네임스페이스로 쓰지 않는다 — 도구는 남의 서랍을 열 수 없다.
*/

window.TK = (function () {
  'use strict';

  const toolId = document.documentElement.dataset.toolId || 'unknown';

  /* ── 저장소 백엔드 판별 ─────────────────────────────── */

  let ls = null;
  try {
    window.localStorage.getItem('__tk_probe__');
    ls = window.localStorage;
  } catch (_) {
    ls = null; // 샌드박스이거나 사용자가 저장소를 차단한 상태
  }

  const embedded = window.parent !== window;
  const isolated = ls === null && embedded;

  // 격리 뷰어 안에서는 사이트 헤더를 숨긴다(뷰어 상단 바와 중복)
  document.documentElement.classList.add(embedded ? 'tk-embedded' : 'tk-standalone');

  const nsKey = (key) => 'tk:tool:' + toolId + ':' + key;

  /* ── 부모(허브) 브리지 ──────────────────────────────── */

  let hostOrigin = null;
  let seq = 0;
  const pending = new Map();

  if (embedded) {
    window.addEventListener('message', (e) => {
      if (e.source !== window.parent) return;
      const m = e.data;
      if (!m || m.__tk !== 1) return;

      if (m.op === 'hello') {
        hostOrigin = e.origin; // 브라우저가 보증한 값만 신뢰
        return;
      }
      if (m.op === 'reply' && pending.has(m.id)) {
        const resolve = pending.get(m.id);
        pending.delete(m.id);
        resolve(m.ok ? m.value : null);
      }
    });
  }

  function rpc(op, key, value) {
    if (!hostOrigin) return Promise.resolve(null);
    return new Promise((resolve) => {
      const id = ++seq;
      pending.set(id, resolve);
      window.parent.postMessage({ __tk: 1, id, op, key, value }, hostOrigin);
      setTimeout(() => {
        if (pending.delete(id)) resolve(null);
      }, 2500);
    });
  }

  const storage = {
    /** @returns {Promise<any|null>} */
    async get(key) {
      if (ls) {
        try { return JSON.parse(ls.getItem(nsKey(key))); } catch (_) { return null; }
      }
      return rpc('get', key);
    },
    async set(key, value) {
      if (ls) {
        try { ls.setItem(nsKey(key), JSON.stringify(value)); return true; } catch (_) { return false; }
      }
      return (await rpc('set', key, value)) !== null;
    },
    async remove(key) {
      if (ls) {
        try { ls.removeItem(nsKey(key)); return true; } catch (_) { return false; }
      }
      return (await rpc('remove', key)) !== null;
    },
  };

  /* ── UI 헬퍼 ────────────────────────────────────────── */

  let toastEl = null;
  let toastTimer = 0;
  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg; // 항상 textContent — innerHTML 을 쓰지 않는다
    toastEl.classList.add('is-on');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-on'), 1900);
  }

  /** 클립보드 복사. 샌드박스에서 Clipboard API 가 막히면 execCommand 로 폴백. */
  async function copy(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        toast('복사했습니다');
        return true;
      }
    } catch (_) { /* 폴백으로 */ }

    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.setAttribute('aria-hidden', 'true');
      ta.style.setProperty('position', 'fixed');
      ta.style.setProperty('top', '-1000px');
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      document.body.removeChild(ta);
      toast(ok ? '복사했습니다' : '복사에 실패했습니다 — 직접 선택해 주세요');
      return ok;
    } catch (_) {
      toast('복사에 실패했습니다 — 직접 선택해 주세요');
      return false;
    }
  }

  /** Blob 다운로드. 샌드박스 iframe 에는 allow-downloads 가 필요하다. */
  function download(filename, blob) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.rel = 'noopener';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  /** 텍스트 저장. CSV/TSV 에만 BOM 을 붙인다(엑셀 한글 깨짐 방지). */
  function saveText(filename, text, mime) {
    const type = mime || 'text/plain';
    const needsBOM = /csv|tab-separated/.test(type);
    download(filename, new Blob([needsBOM ? '﻿' + text : text], { type: type + ';charset=utf-8' }));
  }

  /** 드롭존 배선: 클릭·드래그앤드롭·키보드 모두 처리. */
  function dropzone(el, input, onFiles) {
    const pick = () => input.click();
    el.addEventListener('click', pick);
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); }
    });
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');

    input.addEventListener('change', () => {
      if (input.files?.length) onFiles([...input.files]);
      input.value = '';
    });

    for (const ev of ['dragenter', 'dragover']) {
      el.addEventListener(ev, (e) => { e.preventDefault(); el.classList.add('is-over'); });
    }
    for (const ev of ['dragleave', 'drop']) {
      el.addEventListener(ev, (e) => { e.preventDefault(); el.classList.remove('is-over'); });
    }
    el.addEventListener('drop', (e) => {
      const files = [...(e.dataTransfer?.files || [])];
      if (files.length) onFiles(files);
    });
  }

  const bytes = (n) => {
    if (n < 1024) return n + ' B';
    if (n < 1024 * 1024) return (n / 1024).toFixed(1) + ' KB';
    return (n / 1048576).toFixed(2) + ' MB';
  };

  /** 값이 바뀔 때만 콜백. 입력 폭주 방지. */
  function debounce(fn, ms) {
    let t = 0;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), ms);
    };
  }

  /* ── 실행 환경 배너 ─────────────────────────────────── */

  document.addEventListener('DOMContentLoaded', () => {
    const slot = document.querySelector('[data-tk-env]');
    if (!slot) return;
    slot.textContent = isolated
      ? '격리 실행 중 — 이 도구는 사이트의 다른 저장소에 접근할 수 없습니다.'
      : '이 페이지의 모든 처리는 브라우저 안에서 이뤄집니다.';
  });

  return { toolId, isolated, embedded, storage, toast, copy, download, saveText, dropzone, bytes, debounce };
})();
