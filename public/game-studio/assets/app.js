/* Claude Code Game Studios — 소개 페이지 동작
   의존성 없음. 데이터는 원본 레포(v1.2.0, 2026-10-19)의
   .claude/agents/*.md frontmatter와 README를 옮겨 적었다. */
(function () {
  'use strict';

  /* ---------- 테마 ---------- */
  var root = document.documentElement;
  try {
    var saved = localStorage.getItem('gs-theme');
    if (saved === 'light' || saved === 'dark') root.setAttribute('data-theme', saved);
  } catch (e) {}
  function isDark() {
    var t = root.getAttribute('data-theme');
    if (t) return t === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-theme-toggle]');
    if (!b) return;
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('gs-theme', next); } catch (err) {}
  });

  /* ---------- 데이터: 에이전트 ---------- */
  // tier: 1 디렉터, 2 리드, 3 스페셜리스트, 4 엔진 / model: opus, sonnet, inherit
  var AGENTS = [
    ['creative-director', 1, 'opus', '크리에이티브 디렉터', '게임의 비전·톤·미학 방향을 지키는 최종 창작 권한자. 게임 정체성에 닿는 결정이나 리드끼리 교착될 때 호출된다.', '디자인 충돌의 최종 중재'],
    ['technical-director', 1, 'opus', '테크니컬 디렉터', '엔진 아키텍처, 기술 선택, 성능 전략, 기술 리스크 같은 상위 기술 결정을 내린다.', '기술 충돌의 최종 중재'],
    ['producer', 1, 'opus', '프로듀서', '스프린트 계획, 마일스톤, 리스크, 범위 관리. 여러 부서가 함께 움직여야 하는 변경을 조율한다.', '부서 간 변경 전파 담당'],

    ['game-designer', 2, 'inherit', '게임 디자이너', '코어 루프, 성장, 전투, 경제 등 플레이어가 마주하는 규칙과 메커닉을 설계한다.', 'creative-director'],
    ['lead-programmer', 2, 'sonnet', '리드 프로그래머', '코드 아키텍처, 코딩 표준, 코드 리뷰, API 설계, 리팩터링 전략. 프로그래머 스페셜리스트에게 일을 배분한다.', 'technical-director'],
    ['art-director', 2, 'inherit', '아트 디렉터', '스타일 가이드·아트 바이블·에셋 기준·컬러 팔레트 등 시각 정체성을 소유한다.', 'creative-director'],
    ['audio-director', 2, 'inherit', '오디오 디렉터', '음악 방향, 사운드 팔레트, 믹스 밸런스 등 소리의 정체성을 소유한다.', 'creative-director'],
    ['narrative-director', 2, 'inherit', '내러티브 디렉터', '스토리 구조, 세계관, 캐릭터, 대사 전략. 문장 하나하나보다 이야기의 뼈대를 잡는다.', 'creative-director'],
    ['qa-lead', 2, 'inherit', 'QA 리드', '테스트 전략, 버그 심각도 판정, 회귀 계획, 릴리스 품질 게이트를 책임진다.', 'producer · technical-director'],
    ['release-manager', 2, 'inherit', '릴리스 매니저', '인증 체크리스트, 스토어 제출, 플랫폼 요구사항, 버전 번호, 출시일 조율.', 'producer'],
    ['localization-lead', 2, 'inherit', '현지화 리드', 'i18n 구조, 문자열 추출 흐름, 로캘 테스트, 번역 파이프라인을 설계한다.', 'producer'],

    ['gameplay-programmer', 3, 'inherit', '게임플레이 프로그래머', '설계된 메커닉을 코드로 옮긴다 — 플레이어 시스템, 전투, 상호작용.', 'lead-programmer'],
    ['engine-programmer', 3, 'inherit', '엔진 프로그래머', '렌더링 파이프라인, 물리, 메모리, 리소스 로딩 등 성능에 민감한 코어.', 'lead-programmer · technical-director'],
    ['ai-programmer', 3, 'inherit', 'AI 프로그래머', '행동 트리, 상태 머신, 길찾기, 인지 등 NPC·적 AI 구현.', 'lead-programmer'],
    ['network-programmer', 3, 'inherit', '네트워크 프로그래머', '상태 복제, 지연 보상, 매치메이킹, 넷코드 최적화.', 'lead-programmer'],
    ['tools-programmer', 3, 'inherit', '툴 프로그래머', '에디터 확장, 콘텐츠 제작 도구, 디버그 유틸, 파이프라인 자동화.', 'lead-programmer'],
    ['ui-programmer', 3, 'inherit', 'UI 프로그래머', '메뉴·HUD·인벤토리·대화창 등 UI 시스템과 화면 흐름 구현.', 'lead-programmer'],
    ['systems-designer', 3, 'inherit', '시스템 디자이너', '전투 공식, 성장 곡선, 제작 레시피, 상태 이상 상호작용의 수학적 모델링.', 'creative-director · technical-director'],
    ['level-designer', 3, 'inherit', '레벨 디자이너', '전투 배치, 페이싱, 난이도, 환경 스토리텔링 등 공간 설계.', 'game-designer'],
    ['economy-designer', 3, 'inherit', '이코노미 디자이너', '루트 테이블, 재화 유입·소모(sink/faucet) 분석, 성장 곡선 보정.', 'game-designer'],
    ['technical-artist', 3, 'inherit', '테크니컬 아티스트', '셰이더, VFX, 렌더링 최적화, 아트 파이프라인 도구. 아트와 엔지니어링의 다리.', 'art-director · lead-programmer'],
    ['sound-designer', 3, 'inherit', '사운드 디자이너', '효과음 명세서, 오디오 이벤트 문서, 믹싱 파라미터.', 'audio-director'],
    ['writer', 3, 'inherit', '라이터', '대사, 로어, 아이템·스킬 설명 등 플레이어가 읽는 모든 텍스트.', 'narrative-director'],
    ['world-builder', 3, 'inherit', '월드 빌더', '세력, 문화, 역사, 지리, 세계 규칙. 설정 일관성 검사.', 'narrative-director'],
    ['ux-designer', 3, 'inherit', 'UX 디자이너', '사용자 흐름, 인터랙션 패턴, 정보 구조, 온보딩.', 'art-director · game-designer'],
    ['prototyper', 3, 'sonnet', '프로토타이퍼', '재미 검증용 일회성 빌드. 기준보다 속도가 우선이며 prototypes/ 안에서만 일한다.', 'creative-director · technical-director'],
    ['performance-analyst', 3, 'inherit', '퍼포먼스 분석가', '프로파일링, 병목·메모리·프레임 타임 분석, 지표 추적.', 'technical-director'],
    ['devops-engineer', 3, 'sonnet', '데브옵스 엔지니어', '빌드 파이프라인, CI/CD, 브랜치 전략, 배포 인프라.', 'technical-director'],
    ['analytics-engineer', 3, 'inherit', '애널리틱스 엔지니어', '텔레메트리, 이벤트 트래킹, A/B 테스트 프레임워크, 대시보드 명세.', 'technical-director · producer'],
    ['security-engineer', 3, 'inherit', '보안 엔지니어', '치트·익스플로잇 방어, 세이브·통신 보안, 개인정보 준수.', ''],
    ['qa-tester', 3, 'inherit', 'QA 테스터', '테스트 케이스, 버그 리포트, 회귀 체크리스트 작성.', 'qa-lead'],
    ['accessibility-specialist', 3, 'inherit', '접근성 스페셜리스트', '키 리매핑, 글자 크기, 색각 모드, 스크린 리더 지원.', 'producer'],
    ['live-ops-designer', 3, 'inherit', '라이브옵스 디자이너', '시즌 이벤트, 배틀패스, 콘텐츠 주기, 리텐션. 출시 후 게임을 신선하게 유지한다.', 'creative-director'],
    ['community-manager', 3, 'sonnet', '커뮤니티 매니저', '패치 노트, 공지, 피드백 수집, 위기 커뮤니케이션.', '']
  ];
  var ENGINES = {
    godot: [
      ['godot-specialist', 'inherit', 'Godot 스페셜리스트', '노드·씬 구조, 시그널, 리소스. GDScript·C#·GDExtension 중 무엇을 쓸지 안내한다.'],
      ['godot-gdscript-specialist', 'sonnet', 'GDScript', '정적 타이핑, 시그널 구조, 코루틴 패턴 등 GDScript 품질.'],
      ['godot-csharp-specialist', 'sonnet', 'Godot C#', '.NET 패턴, 속성 기반 export, 시그널 델리게이트.'],
      ['godot-shader-specialist', 'sonnet', 'Godot 셰이더', '셰이딩 언어, 비주얼 셰이더, 파티클·후처리.'],
      ['godot-gdextension-specialist', 'sonnet', 'GDExtension', 'godot-cpp·godot-rust 바인딩 등 네이티브 경계.']
    ],
    unity: [
      ['unity-specialist', 'inherit', 'Unity 스페셜리스트', 'MonoBehaviour vs DOTS/ECS 선택, Addressables·Input System 등 Unity 하위 시스템 안내.'],
      ['unity-dots-specialist', 'sonnet', 'DOTS/ECS', 'ECS, Jobs, Burst 최적화, 하이브리드 렌더러.'],
      ['unity-shader-specialist', 'sonnet', '셰이더/VFX', 'Shader Graph, HLSL, VFX Graph, URP/HDRP 커스터마이징.'],
      ['unity-addressables-specialist', 'sonnet', 'Addressables', '에셋 그룹, 로드/언로드, 원격 배포, 번들 최적화.'],
      ['unity-ui-specialist', 'sonnet', 'UI Toolkit', 'UXML/USS, UGUI 캔버스, 데이터 바인딩, 런타임 UI 성능.']
    ],
    unreal: [
      ['unreal-specialist', 'inherit', 'Unreal 스페셜리스트', 'Blueprint vs C++ 판단, GAS·Enhanced Input·Niagara 등 UE 하위 시스템 안내.'],
      ['ue-gas-specialist', 'sonnet', 'GAS', '어빌리티, 게임플레이 이펙트, 어트리뷰트, 태그, 예측.'],
      ['ue-blueprint-specialist', 'sonnet', 'Blueprint', 'Blueprint/C++ 경계, 스파게티 그래프 방지.'],
      ['ue-replication-specialist', 'sonnet', 'Replication', '프로퍼티 복제, RPC, 클라이언트 예측, 대역폭.'],
      ['ue-umg-specialist', 'sonnet', 'UMG/CommonUI', '위젯 계층, 데이터 바인딩, 입력 라우팅, UI 최적화.']
    ]
  };
  var TIER = {
    1: { name: 'Tier 1 · 디렉터', c: 't1' },
    2: { name: 'Tier 2 · 부서 리드', c: 't2' },
    3: { name: 'Tier 3 · 스페셜리스트', c: 't3' },
    4: { name: '엔진 스페셜리스트', c: 't4' }
  };
  var MODEL = { opus: 'Opus 지정', sonnet: 'Sonnet 지정', inherit: '세션 모델 상속' };

  /* ---------- 조직도 ---------- */
  var panel = document.getElementById('agent-panel');
  function showAgent(btn) {
    if (!panel) return;
    document.querySelectorAll('.agent[aria-pressed="true"]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
    btn.setAttribute('aria-pressed', 'true');
    var d = btn.dataset, t = TIER[d.tier];
    panel.innerHTML =
      '<div class="card">' +
      '<span class="role-tag" style="background:var(--' + t.c + '-bg);color:var(--' + t.c + ')">' + t.name + '</span>' +
      '<h3>' + d.name + '</h3>' +
      '<p class="ko">' + d.ko + '</p>' +
      '<p>' + d.desc + '</p>' +
      '<dl><dt>모델</dt><dd>' + MODEL[d.model] + '</dd>' +
      (d.up ? '<dt>' + (d.tier === '1' ? '역할' : '보고·조율') + '</dt><dd>' + (d.tier === '1' ? d.up : '→ <code>' + d.up + '</code>') + '</dd>' : '') +
      '<dt>정의</dt><dd><code>.claude/agents/' + d.name + '.md</code></dd></dl>' +
      '</div>';
  }
  function chip(a, tier, up) {
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'agent ' + TIER[tier].c;
    b.setAttribute('aria-pressed', 'false');
    b.dataset.name = a[0]; b.dataset.tier = String(tier); b.dataset.model = a[1];
    b.dataset.ko = a[2]; b.dataset.desc = a[3]; if (up) b.dataset.up = up;
    b.innerHTML = '<span class="m ' + a[1] + '"></span>' + a[0];
    b.addEventListener('click', function () { showAgent(b); });
    return b;
  }
  [1, 2, 3].forEach(function (tier) {
    var box = document.getElementById('tier-' + tier);
    if (!box) return;
    AGENTS.filter(function (a) { return a[1] === tier; }).forEach(function (a) {
      box.appendChild(chip([a[0], a[2], a[3], a[4]], tier, a[5]));
    });
  });
  var engBox = document.getElementById('tier-4');
  function renderEngine(key) {
    if (!engBox) return;
    engBox.innerHTML = '';
    ENGINES[key].forEach(function (a, i) {
      engBox.appendChild(chip(a, 4, i === 0 ? 'lead-programmer · technical-director' : ENGINES[key][0][0]));
    });
  }
  document.querySelectorAll('[data-engine]').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('[data-engine]').forEach(function (t) { t.setAttribute('aria-selected', 'false'); });
      tab.setAttribute('aria-selected', 'true');
      renderEngine(tab.dataset.engine);
    });
  });
  renderEngine('unity');
  var first = document.querySelector('#tier-1 .agent');
  if (first) showAgent(first);

  /* ---------- 히어로: 3계층 조직 그래프 ---------- */
  var svg = document.getElementById('hero-graph');
  if (svg) {
    var NS = 'http://www.w3.org/2000/svg';
    var W = 520, rows = [
      { y: 60,  n: 3,  r: 9,   col: '#E8795C', label: 'DIRECTORS · 3' },
      { y: 190, n: 8,  r: 6.5, col: '#E3B341', label: 'LEADS · 8' },
      { y: 330, n: 23, r: 4,   col: '#4FC1B9', label: 'SPECIALISTS · 23' },
      { y: 440, n: 15, r: 3.4, col: '#9AA0F5', label: 'ENGINE · 15' }
    ];
    var pts = rows.map(function (row) {
      var arr = [], pad = row.n > 10 ? 30 : 70, span = W - pad * 2;
      for (var i = 0; i < row.n; i++) arr.push({ x: pad + (row.n === 1 ? span / 2 : span * i / (row.n - 1)), y: row.y });
      return arr;
    });
    function el(tag, attrs) { var e = document.createElementNS(NS, tag); for (var k in attrs) e.setAttribute(k, attrs[k]); return e; }
    var gE = el('g', {}), gP = el('g', {}), gN = el('g', {});
    // 각 하위 노드를 가장 가까운 상위 노드에 연결 = 수직 위임선
    for (var r = 1; r < pts.length; r++) {
      pts[r].forEach(function (p, i) {
        var parent = pts[r - 1][Math.round(i * (pts[r - 1].length - 1) / Math.max(1, pts[r].length - 1))];
        var midY = (p.y + parent.y) / 2;
        var d = 'M' + parent.x + ',' + parent.y + ' C' + parent.x + ',' + midY + ' ' + p.x + ',' + midY + ' ' + p.x + ',' + p.y;
        gE.appendChild(el('path', { d: d, 'class': 'edge' }));
        if ((i + r) % 3 === 0) {
          var pl = el('path', { d: d, 'class': 'pulse', stroke: rows[r - 1].col });
          pl.style.animationDelay = (-(i * 0.37 + r * 0.9) % 3.2) + 's';
          gP.appendChild(pl);
        }
      });
    }
    pts.forEach(function (row, ri) {
      row.forEach(function (p) {
        gN.appendChild(el('circle', { cx: p.x, cy: p.y, r: rows[ri].r + 5, fill: rows[ri].col, opacity: .12 }));
        gN.appendChild(el('circle', { cx: p.x, cy: p.y, r: rows[ri].r, fill: rows[ri].col }));
      });
      var t = el('text', { x: 0, y: rows[ri].y - (ri === 0 ? 26 : 18), 'class': 'lbl' });
      t.textContent = rows[ri].label;
      gN.appendChild(t);
    });
    svg.appendChild(gE); svg.appendChild(gP); svg.appendChild(gN);
  }

  /* ---------- 스킬 검색 ---------- */
  var search = document.getElementById('skill-search');
  var countEl = document.getElementById('skill-count');
  function filterSkills() {
    var q = (search.value || '').trim().toLowerCase().replace(/^\//, '');
    var shown = 0;
    document.querySelectorAll('.cat').forEach(function (cat) {
      var any = false, catText = cat.dataset.k || '';
      cat.querySelectorAll('.cmd').forEach(function (c) {
        var hay = (c.textContent + ' ' + (c.dataset.k || '') + ' ' + catText).toLowerCase();
        var hit = !q || hay.indexOf(q) !== -1;
        c.hidden = !hit;
        c.classList.toggle('hit', !!q && hit);
        if (hit) { any = true; shown++; }
      });
      cat.hidden = !any;
    });
    if (countEl) countEl.textContent = q ? shown + '개 일치' : '전체 74개';
  }
  if (search) search.addEventListener('input', filterSkills);

  /* ---------- 코드 복사 ---------- */
  document.querySelectorAll('pre.code').forEach(function (pre) {
    var b = document.createElement('button');
    b.className = 'copy'; b.type = 'button'; b.textContent = '복사';
    b.addEventListener('click', function () {
      var text = pre.innerText.replace(/^복사\n?/, '').replace(/\n?복사됨$|\n?복사$/, '');
      var lines = text.split('\n').filter(function (l) { return !/^\s*#/.test(l); }).join('\n').trim();
      (navigator.clipboard ? navigator.clipboard.writeText(lines) : Promise.reject()).then(function () {
        b.textContent = '복사됨'; setTimeout(function () { b.textContent = '복사'; }, 1400);
      }, function () { b.textContent = '선택해 복사'; });
    });
    pre.appendChild(b);
  });

  /* ---------- 인쇄 ---------- */
  document.querySelectorAll('[data-print]').forEach(function (b) { b.addEventListener('click', function () { window.print(); }); });

  /* ---------- 등장 & 현재 섹션 표시 ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(function (r) { io.observe(r); });
    var links = {};
    document.querySelectorAll('.nav a[href^="#"]').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); });
          links[e.target.id].classList.add('on');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  } else {
    reveals.forEach(function (r) { r.classList.add('in'); });
  }
})();

/* ---------- 플레이북: 단계 체크와 진행률 ---------- */
(function () {
  'use strict';
  var boxes = document.querySelectorAll('.pb-step .chk');
  if (!boxes.length) return;
  var KEY = 'gs-playbook-v1', state = {};
  try { state = JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { state = {}; }
  var bar = document.querySelector('.pb-progress .track i');
  var label = document.querySelector('.pb-progress p');
  function render() {
    var done = 0;
    boxes.forEach(function (b) {
      var on = !!state[b.dataset.id];
      b.checked = on;
      b.closest('.pb-step').classList.toggle('done', on);
      if (on) done++;
    });
    if (bar) bar.style.width = Math.round(done * 100 / boxes.length) + '%';
    if (label) label.textContent = done + ' / ' + boxes.length + ' 단계 완료 · 이 브라우저에만 저장됩니다';
    document.querySelectorAll('.pb-toc a[data-sec]').forEach(function (a) {
      var all = document.querySelectorAll('#' + a.dataset.sec + ' .chk');
      var d = 0; all.forEach(function (b) { if (b.checked) d++; });
      var s = a.querySelector('span'); if (s) s.textContent = d + '/' + all.length;
    });
  }
  boxes.forEach(function (b) {
    b.addEventListener('change', function () {
      if (b.checked) state[b.dataset.id] = 1; else delete state[b.dataset.id];
      try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
      render();
    });
  });
  var reset = document.querySelector('[data-reset-progress]');
  if (reset) reset.addEventListener('click', function () { state = {}; try { localStorage.removeItem(KEY); } catch (e) {} render(); });
  render();

  if ('IntersectionObserver' in window) {
    var links = {};
    document.querySelectorAll('.pb-toc a[data-sec]').forEach(function (a) { links[a.dataset.sec] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting && links[e.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('on'); });
          links[e.target.id].classList.add('on');
        }
      });
    }, { rootMargin: '-30% 0px -65% 0px' });
    Object.keys(links).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }
})();
