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

export const SHARE = {
  // [선택] 카카오톡 공유 버튼을 쓰려면 https://developers.kakao.com 에서 앱 생성 후 JavaScript 키 입력.
  // 비워두면 카카오톡 버튼은 자동으로 숨겨집니다.
  kakaoJsKey: "",
};

export const SUBSCRIBE = {
  // 구독 서비스 선택: "substack" | "buttondown" | "none"
  provider: "buttondown" as "substack" | "buttondown" | "none",

  // [Substack] https://substack.com 에서 뉴스레터 생성 후 handle을 입력하세요.
  // 예시) https://namojo.substack.com → handle은 "namojo"
  //
  // 작동 방식:
  //   · 독자가 이메일 입력 후 "구독하기" 클릭 → Substack 구독 페이지에 이메일이
  //     미리 채워진 상태로 새 탭 열림 → 한 번의 "Subscribe" 클릭으로 완료
  //   · 이후 구독자 관리는 Substack이 전담
  //
  // ⚠ 중요: Substack은 자사 플랫폼에서 작성·발행한 글만 구독자에게 이메일로
  //   보냅니다. 이 블로그의 RSS 피드를 자동으로 읽어 발송해주지 않습니다.
  //   저자는 블로그에 글을 올린 뒤, Substack에도 요약+링크(또는 전문 복사)
  //   형태로 별도 발행해야 구독자가 이메일을 받습니다.
  substackHandle: "namojo",

  // [Buttondown] 하위호환 — Substack을 쓰지 않을 때의 대안.
  // provider를 "buttondown"으로 바꾸면 다시 사용됩니다.
  // RSS-to-email 자동 발송 기능이 있어 자동화에는 더 유리.
  buttondownUsername: "namojo",

  // 구독 폼에 표시되는 문구
  heading: "AI 이야기, 메일함으로 받아보기",
  subheading: "새 글 요약과 링크를 Substack 뉴스레터로 보내드립니다. 언제든 해지할 수 있어요.",
};
