// 블로그 설정값.
// 배포 전에 값을 채워 주세요. 빈 값이면 해당 기능은 안내 메시지만 표시됩니다.

export const SITE = {
  // 배포 도메인. HashRouter라 해시 경로가 뒤에 붙습니다.
  url: "https://namojo.github.io",
  title: "엔지니어를 위한 이야기 공장",
  author: "조남호 (namojo)",
};

export const COMMENTS = {
  // 사용할 댓글 엔진 선택: "disqus" | "giscus" | "none"
  provider: "disqus" as "disqus" | "giscus" | "none",

  // [Disqus] https://disqus.com 에서 사이트 등록 후 받는 shortname (예: "namojo-stories")
  // SNS 로그인(트위터/페이스북/구글 등) 다중 지원.
  disqusShortname: "namojo",

  // [Giscus] https://giscus.app 에서 설정 생성 후 값 채우기.
  // GitHub Discussions 기반(GitHub 로그인만 지원하지만, 엔지니어 친화적이고 광고 없음).
  giscus: {
    repo: "namojo/namojo.github.io" as `${string}/${string}`,
    repoId: "R_kgDORt-aYQ",       // R_kgDO... 형식
    category: "General",
    categoryId: "",   // DIC_kwDO... 형식
    mapping: "pathname" as "pathname" | "url" | "title" | "og:title",
    strict: "0",
    reactionsEnabled: "1",
    emitMetadata: "0",
    inputPosition: "bottom" as "top" | "bottom",
    theme: "preferred_color_scheme" as "light" | "dark" | "preferred_color_scheme" | "dark_dimmed",
    lang: "ko",
  },
};

export const SUPABASE = {
  // 좋아요 누적 카운터용. **anon(publishable) 키만** 넣는다 — 클라이언트 공개가 정상이며
  // RLS로 보호된다(anon은 카운트 조회 + increment/decrement RPC만 가능).
  // ⚠ 시크릿(sb_secret_… / service_role) 키는 절대 여기 넣지 말 것.
  // 비워두면 좋아요는 자동으로 '브라우저별 로컬' 폴백 모드로 동작한다.
  url: "https://hagbjrkazryxxxpaupdo.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZ2JqcmthenJ5eHh4cGF1cGRvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMDY2NDMsImV4cCI6MjA5Nzc4MjY0M30.LaKlTNdy2L-1iZ71GzbcODx9sj9Ru6avBKB9eu_nO0E",
};

export const SHARE = {
  // [선택] 카카오톡 공유 버튼을 쓰려면 https://developers.kakao.com 에서 앱 생성 후 JavaScript 키 입력.
  // 비워두면 카카오톡 버튼은 자동으로 숨겨집니다.
  kakaoJsKey: "99aaf4c9e117c47d9927c06c943673eb",
};

// 이메일 구독(뉴스레터) 기능은 2026-07-29에 제거되었습니다.
// 새 글 알림은 RSS 피드(https://namojo.github.io/feed.xml)로 제공합니다.
