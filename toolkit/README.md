# TOOLKIT

브라우저 안에서만 동작하는 웹 도구 허브. 의존성 0, 빌드 산출물이 곧 배포물인 정적 사이트.
`https://namojo.github.io/toolkit/` 에 얹히도록 구성되어 있습니다.

```
toolkit/
├── site.json              사이트 설정 (도메인, 경로, 트래커 스니펫, 사이트 인증)
├── tools.json             ★ 단일 진실 원천 — 도구 목록·카테고리·민감도·네트워크 자세
├── scripts/build.mjs      카드·메타·CSP·헤더푸터·sitemap 생성기 (Node 내장 모듈만)
├── index.html             허브 (검색 / 태그 / 즐겨찾기 / 격리 뷰어)
├── about.html             설계 원칙과 알려진 한계
├── assets/
│   ├── base.css           전체 스타일 (라이트·다크)
│   ├── hub.js             허브 로직 + 도구↔허브 스토리지 브리지의 "문지기" 쪽
│   └── tk-sdk.js          도구가 쓰는 런타임 (저장소·복사·다운로드·드롭존)
├── tools/<id>/
│   ├── index.html         마커만 있는 뼈대 → 빌드가 head/헤더/푸터를 채운다
│   └── tool.js            도구 로직
├── sitemap.xml            (생성물)
└── robots.txt             (생성물)
```

## 왜 레지스트리 방식인가

도구가 50개로 늘었을 때 헤더 문구 하나를 바꾸려면 50개 파일을 고쳐야 하는 구조는 오래 못 갑니다.
여기서는 `tools.json` 하나만 진실이고, 나머지는 전부 생성물입니다.

```jsonc
{
  "id": "text-diff",          // URL: tools/text-diff/
  "category": "text",
  "title": "텍스트 비교",
  "summary": "…",             // 카드 설명 + meta description + OG description
  "keywords": ["diff", "비교"], // 검색 인덱스에만 들어감 (화면에 안 보임)
  "tags": ["텍스트", "비교"],   // 태그 칩
  "version": "1.0.0",
  "updated": "2026-09-09",
  "sensitive": true,          // ★ true 면 트래커·광고 스니펫이 주입되지 않는다
  "network": "none"           // ★ CSP connect-src 가 여기서 파생된다
}
```

`sensitive` 와 `network` 두 필드가 이 프로젝트의 핵심입니다.
"서버로 보내지 않습니다"를 문서에 쓰는 대신 **빌드 산출물로 강제**합니다.
`network: "none"` 인 도구 페이지에는 `connect-src 'none'` 이 박히므로, 코드에 실수나 악의가 있어도
브라우저가 외부 요청을 차단합니다. 개발자도구 네트워크 탭에서 검증 가능합니다.

| `network` | CSP `connect-src` | 쓰는 경우 |
|---|---|---|
| `none` | `'none'` | 순수 로컬 연산 (기본값으로 삼을 것) |
| `local-model` | `'self'` + Hugging Face CDN | 브라우저 내 추론용 모델 가중치 다운로드 |
| `external` | `'self'` + `allowedHosts` | 외부 API 호출. `allowedHosts` 없으면 **빌드 실패** |

## 도구 추가하기

```bash
mkdir -p tools/my-tool
```

1. `tools/my-tool/index.html` — 기존 도구 파일을 복사해 마커 5개를 그대로 둡니다.
   `TK:HEAD` `TK:HEADER` `TK:TRACKER` `TK:FOOTER` (허브에는 추가로 `TK:CATS` `TK:TAGS` `TK:CARDS`)
2. `tools/my-tool/tool.js` — 로직. `TK.storage` / `TK.copy` / `TK.saveText` / `TK.dropzone` 사용.
3. `tools.json` 의 `tools` 배열에 항목 추가.
4. `node scripts/build.mjs`

빌드가 검증하는 것: id 형식·중복, 존재하지 않는 카테고리, 누락된 필수 필드,
`sensitive`/`network` 미선언, 등록되지 않은 고아 디렉터리, 파일 부재.
하나라도 걸리면 아무것도 쓰지 않고 종료합니다.

```bash
node scripts/build.mjs --check   # 파일을 쓰지 않고 검증만 (CI 용)
```

## 도구를 만들 때 지킬 것

```js
// ✗ 절대 금지 — 이 한 줄이 이 프로젝트의 전제를 무너뜨린다
el.innerHTML = userInput;

// ✓ 항상 이렇게
el.textContent = userInput;
const td = document.createElement('td'); td.textContent = cell;
```

사용자 입력을 화면에 그리는 것이 이 도구들의 본질이므로, DOM-based XSS 가 유일하고 가장 큰
실질 위험입니다. `innerHTML`, `insertAdjacentHTML`, `document.write`, `eval`,
`new Function`, 문자열을 받는 `setTimeout` 을 쓰지 않습니다.

인라인 `<style>` 과 `style=""` 속성, 인라인 `<script>` 도 CSP(`script-src 'self'`, `style-src 'self'`)에
걸려 동작하지 않습니다. 값이 필요하면 JS 에서 `el.style.setProperty()` 로 CSS 변수만 건드리세요.

**입력 내용은 저장하지 않습니다.** `TK.storage` 에는 옵션·설정만 넣습니다.
공용 PC 에서 다음 사람이 남의 계약서를 보게 되는 사고가 여기서 생깁니다.

## 로컬 실행

`file://` 로 열면 CSP 와 fetch 규칙이 달라 실제와 다르게 동작합니다. 반드시 http 로 서빙하세요.

```bash
cd ..                          # toolkit 의 상위 디렉터리에서
python3 -m http.server 8099
# → http://127.0.0.1:8099/toolkit/
```

## 배포

`namojo.github.io` 저장소에 `toolkit/` 디렉터리째로 커밋하면 끝입니다.
GitHub Pages 가 정적 파일을 그대로 서빙하므로 별도 빌드 단계가 필요 없습니다.
단, **커밋 전에 `node scripts/build.mjs` 를 돌려야** 생성물이 최신 상태가 됩니다.

`ci/toolkit-check.yml` 을 저장소 루트의 `.github/workflows/` 로 복사하면
생성물이 오래된 상태로 커밋되는 것을 CI 가 잡아 줍니다.

## 검증

`verify/browser-check.mjs` 는 Chromium 을 띄워 35개 항목을 확인합니다 —
카드 렌더, 검색·태그·즐겨찾기, 격리 뷰어의 오리진 분리, 스토리지 브리지의 네임스페이스 탈출 차단,
XSS 방어, CSP 위반 여부, JS 없이도 목록이 보이는지.

```bash
npm i -D playwright && node verify/browser-check.mjs
```

## 알려진 한계

- **GitHub Pages 는 응답 헤더를 설정할 수 없습니다.** CSP 를 `<meta>` 로만 적용하므로
  `frame-ancestors` 같은 지시어는 쓸 수 없고, 클릭재킹은 헤더로 막을 수 없습니다.
- 즐겨찾기·설정은 브라우저 로컬 저장소에만 있습니다. 기기 간 동기화 없음.
- 큰 입력은 브라우저 메모리에서 처리됩니다. 도구별 상한(diff 4000줄, CSV 20MB, 이미지 40MB·40장)을
  넘으면 처리를 중단하고 이유를 표시합니다.
- 샌드박스 iframe 안에서 `script-src 'self'` 가 동작하는 것은 **Chromium 에서만 실측 확인**했습니다.
  Firefox·Safari 에서 도구가 빈 화면이면 이것부터 확인하세요 (자세한 내용은 `SECURITY.md`).
