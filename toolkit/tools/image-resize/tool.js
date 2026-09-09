/* 이미지 리사이즈 — createImageBitmap + canvas.toBlob. 네트워크 없음. */
(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);

  const MAX_FILE = 40 * 1024 * 1024;
  const MAX_COUNT = 40;
  const EXT = { 'image/webp': 'webp', 'image/jpeg': 'jpg', 'image/png': 'png' };

  /** @type {{file:File, thumb:string, w:number, h:number, out:?{blob:Blob,w:number,h:number,type:string}, el:HTMLElement}[]} */
  let items = [];

  /* ── 목록 ──────────────────────────────────────────── */

  function addRow(item) {
    const li = document.createElement('li');
    li.className = 'shot';

    const img = document.createElement('img');
    img.alt = '';
    img.src = item.thumb;

    const box = document.createElement('div');
    const name = document.createElement('p');
    name.className = 'shot-name';
    name.textContent = item.file.name;          // 파일명도 textContent 로만
    const meta = document.createElement('p');
    meta.className = 'shot-meta';
    box.append(name, meta);

    const btn = document.createElement('button');
    btn.className = 'btn btn-sm';
    btn.type = 'button';
    btn.textContent = '저장';
    btn.disabled = true;
    btn.addEventListener('click', () => {
      if (item.out) TK.download(outName(item), item.out.blob);
    });

    li.append(img, box, btn);
    $('#shots').appendChild(li);

    item.el = li;
    item.metaEl = meta;
    item.btnEl = btn;
    paintMeta(item);
  }

  function paintMeta(item) {
    const m = item.metaEl;
    m.textContent = '';
    const before = document.createElement('span');
    before.textContent = `${item.w}×${item.h} · ${TK.bytes(item.file.size)}`;
    m.appendChild(before);

    if (item.out) {
      const arrow = document.createElement('span');
      arrow.textContent = '  →  ';
      const after = document.createElement('span');
      after.className = 'down';
      const pct = Math.round((1 - item.out.blob.size / item.file.size) * 100);
      after.textContent = `${item.out.w}×${item.out.h} · ${TK.bytes(item.out.blob.size)}` +
        (pct > 0 ? ` (−${pct}%)` : '');
      m.append(arrow, after);
    }
  }

  const outName = (item) => {
    const base = item.file.name.replace(/\.[^.]+$/, '');
    const ext = EXT[item.out.type] || 'img';
    return `${base}_${item.out.w}x${item.out.h}.${ext}`;
  };

  /* ── 추가 ──────────────────────────────────────────── */

  async function addFiles(files) {
    const imgs = files.filter((f) => f.type.startsWith('image/'));
    if (!imgs.length) { TK.toast('이미지 파일이 아닙니다'); return; }
    if (items.length + imgs.length > MAX_COUNT) { TK.toast(`한 번에 ${MAX_COUNT}장까지 처리합니다`); return; }

    for (const f of imgs) {
      if (f.size > MAX_FILE) { TK.toast(`${f.name}: ${TK.bytes(MAX_FILE)} 이하만 지원합니다`); continue; }
      try {
        const bmp = await createImageBitmap(f);
        const item = { file: f, w: bmp.width, h: bmp.height, out: null, thumb: thumbOf(bmp) };
        bmp.close?.();
        items.push(item);
        addRow(item);
      } catch (_) {
        TK.toast(`${f.name}: 이미지를 읽을 수 없습니다`);
      }
    }
    sync();
  }

  function thumbOf(bmp) {
    const s = 128;
    const side = Math.min(bmp.width, bmp.height);
    const c = document.createElement('canvas');
    c.width = c.height = s;
    const ctx = c.getContext('2d');
    ctx.drawImage(bmp, (bmp.width - side) / 2, (bmp.height - side) / 2, side, side, 0, 0, s, s);
    return c.toDataURL('image/webp', 0.7);   // CSP: img-src 에 data: 를 허용해 둠
  }

  /* ── 변환 ──────────────────────────────────────────── */

  function targetSize(w, h, maxW, maxH) {
    let scale = 1;
    if (maxW > 0) scale = Math.min(scale, maxW / w);
    if (maxH > 0) scale = Math.min(scale, maxH / h);
    scale = Math.min(scale, 1);              // 확대하지 않는다
    return { w: Math.max(1, Math.round(w * scale)), h: Math.max(1, Math.round(h * scale)) };
  }

  async function convertOne(item, cfg) {
    const bmp = await createImageBitmap(item.file);
    const { w, h } = targetSize(bmp.width, bmp.height, cfg.maxW, cfg.maxH);

    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    const ctx = c.getContext('2d');
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    let type = cfg.fmt === 'keep' ? item.file.type : cfg.fmt;
    if (!EXT[type]) type = 'image/webp';     // 알 수 없는 형식은 webp 로

    if (type === 'image/jpeg') {             // JPEG 은 투명을 못 다루므로 흰 배경
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, w, h);
    }
    ctx.drawImage(bmp, 0, 0, w, h);
    bmp.close?.();

    const blob = await new Promise((res) =>
      c.toBlob(res, type, type === 'image/png' ? undefined : cfg.q));
    if (!blob) throw new Error('encode failed');

    item.out = { blob, w, h, type: blob.type || type };
    paintMeta(item);
    item.btnEl.disabled = false;
  }

  async function run() {
    const cfg = {
      maxW: Math.max(0, Number($('#maxw').value) || 0),
      maxH: Math.max(0, Number($('#maxh').value) || 0),
      fmt: $('#fmt').value,
      q: Number($('#q').value),
    };
    if (!cfg.maxW && !cfg.maxH) { TK.toast('최대 가로 또는 세로 중 하나는 지정해 주세요'); return; }

    $('#run').disabled = true;
    let done = 0, failed = 0;
    for (const item of items) {
      $('#run-info').textContent = `변환 중… ${done + 1}/${items.length}`;
      try { await convertOne(item, cfg); done++; }
      catch (_) { failed++; }
      await new Promise((r) => setTimeout(r, 0));  // UI 가 숨 쉴 틈
    }
    $('#run').disabled = false;
    $('#run-info').textContent = `${done}장 변환 완료` + (failed ? ` · ${failed}장 실패` : '');
    sync();
    saveOpts();
  }

  /* ── 상태 동기화 ───────────────────────────────────── */

  function sync() {
    const has = items.length > 0;
    $('#run').disabled = !has;
    $('#clear').disabled = !has;
    const converted = items.filter((i) => i.out);
    $('#dl-all').disabled = converted.length === 0;

    const before = items.reduce((a, i) => a + i.file.size, 0);
    const after = converted.reduce((a, i) => a + i.out.blob.size, 0);
    $('#n-files').textContent = String(items.length);
    $('#n-before').textContent = TK.bytes(before);
    $('#n-after').textContent = converted.length ? TK.bytes(after) : '—';
    $('#n-saved').textContent = converted.length === items.length && before > 0
      ? `절감 ${Math.round((1 - after / before) * 100)}%` : '';

    $('#q-field').hidden = $('#fmt').value === 'image/png';
  }

  /* ── 배선 ──────────────────────────────────────────── */

  TK.dropzone($('#drop'), $('#file'), addFiles);

  $('#clear').addEventListener('click', () => {
    items = [];
    $('#shots').textContent = '';
    $('#run-info').textContent = '이미지를 추가하면 변환할 수 있습니다.';
    sync();
  });

  $('#run').addEventListener('click', run);

  $('#dl-all').addEventListener('click', async () => {
    // 브라우저가 연속 다운로드를 막지 않도록 간격을 둔다
    for (const item of items.filter((i) => i.out)) {
      TK.download(outName(item), item.out.blob);
      await new Promise((r) => setTimeout(r, 260));
    }
  });

  $('#q').addEventListener('input', () => { $('#q-val').textContent = Number($('#q').value).toFixed(2); });
  $('#fmt').addEventListener('change', sync);

  /* ── 옵션만 저장 (이미지는 저장하지 않는다) ────────── */

  const saveOpts = () => TK.storage.set('opts', {
    maxW: Number($('#maxw').value), maxH: Number($('#maxh').value),
    fmt: $('#fmt').value, q: Number($('#q').value),
  });

  TK.storage.get('opts').then((v) => {
    if (!v || typeof v !== 'object') return;
    if (Number.isFinite(v.maxW)) $('#maxw').value = v.maxW;
    if (Number.isFinite(v.maxH)) $('#maxh').value = v.maxH;
    if (typeof v.fmt === 'string' && $(`#fmt option[value="${CSS.escape(v.fmt)}"]`)) $('#fmt').value = v.fmt;
    if (Number.isFinite(v.q)) { $('#q').value = v.q; $('#q-val').textContent = Number(v.q).toFixed(2); }
    sync();
  });

  sync();
})();
