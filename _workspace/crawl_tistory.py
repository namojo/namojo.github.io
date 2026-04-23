#!/usr/bin/env python3
"""
Tistory 원본 HTML을 curl로 받아 본문 영역 그대로 Markdown으로 변환한다.
요약·이미지 누락 없이 이관하기 위해 WebFetch가 아니라 직접 파싱을 사용한다.
"""
import re
import subprocess
import sys
from pathlib import Path
from datetime import datetime

from bs4 import BeautifulSoup
from markdownify import markdownify as md

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "_posts"
POSTS_DIR.mkdir(exist_ok=True)

# Tistory ID → slug 매핑 (기존 체계 유지)
SLUG_MAP = {
    109: "ai-market-three-scenarios",
    110: "tesla-korea-fsd",
    111: "german-court-openai-copyright",
    112: "chatgpt-seahorse-emoji",
    113: "claude-socratic-learning",
    114: "amazon-internal-ai-tool",
    115: "ilya-scaling-era-ended",
    116: "mckinsey-ai-report-2025",
    117: "google-tpu-vs-cuda",
    118: "engineer-back-to-basic",
    119: "ai-advertising-uncanny",
    120: "palantir-swiss-sovereignty",
    121: "udemy-coursera-merger",
    122: "domain-sparta",
    123: "database-alexandria",
    124: "pangyoeo-align",
    125: "pangyoeo-backend-batch",
    126: "deadlock-fabius",
    127: "transformer-google-attention",
    128: "turing-imitation-game",
}

# 카테고리 추정 (Tistory 원본 카테고리 → 사이트 카테고리)
def guess_category(title: str, post_id: int) -> str:
    if "[판교어]" in title:
        return "판교어"
    # 기술 잡담 vs AI 분류 (post_id로 힌트)
    tech_talk_ids = {118, 122, 123, 126, 120}  # 데드락, 엔지니어링, DB, 도메인, 팔란티어
    if post_id in tech_talk_ids:
        return "기술 잡담"
    return "AI"


def curl_fetch(url: str) -> str:
    r = subprocess.run(
        ["curl", "-sL", "-A", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36", url],
        capture_output=True, text=True, timeout=30,
    )
    return r.stdout


def extract_post(html: str, post_id: int) -> dict | None:
    soup = BeautifulSoup(html, "html.parser")

    # 404 페이지 감지 — 본문 내부 문구와 혼동되지 않도록 제목/에러 영역만 확인
    if soup.select_one(".error-page, .not-found") or soup.title and "404" in (soup.title.string or ""):
        return None

    # 본문 영역
    content_el = soup.select_one(".contents_style, .tt_article_useless_p_margin, article .entry-content")
    if not content_el or len(content_el.get_text(strip=True)) < 200:
        return None

    # 메타
    og_title = soup.select_one('meta[property="og:title"]')
    title = og_title["content"].strip() if og_title else ""
    og_image = soup.select_one('meta[property="og:image"]')
    cover = og_image["content"].strip() if og_image else ""
    og_desc = soup.select_one('meta[property="og:description"]')
    excerpt = (og_desc["content"].strip()[:160] if og_desc else "")

    pt = soup.select_one('meta[property="article:published_time"]')
    if pt:
        # 2026-01-13T15:59:58+09:00 형식
        iso = pt["content"]
        try:
            dt = datetime.fromisoformat(iso.replace("Z", "+00:00"))
        except Exception:
            dt = datetime.now()
    else:
        dt = datetime.now()

    # 태그
    tags = []
    for sel in [".tag-wrapper a", ".tags a", "[class*='tag'] a"]:
        for a in soup.select(sel):
            t = a.get_text(strip=True).lstrip("#")
            if t and t not in tags and len(t) < 30:
                tags.append(t)

    # HTML → Markdown (본문만)
    # 가능하면 h1·p·img·blockquote·table 구조 보존
    # markdownify는 h1→#, img→![](), 등 올바르게 처리
    content_html = str(content_el)

    # Tistory 첨부 이미지의 src가 data-src에 있는 경우 보정 (레이지 로딩 대응)
    for img in content_el.find_all("img"):
        src = img.get("src") or img.get("data-src") or img.get("data-original") or ""
        # data URI placeholder는 무시
        if src.startswith("data:image/svg") or not src:
            alt = img.get("alt", "")
            lazy = img.get("data-src") or img.get("data-original") or ""
            if lazy:
                img["src"] = lazy
                if alt:
                    img["alt"] = alt

    md_body = md(
        str(content_el),
        heading_style="ATX",
        bullets="-",
        strong_em_symbol="*",
        code_language="",
        escape_asterisks=False,
        escape_underscores=False,
    )

    # 정돈:
    #  - 티스토리 HTML의 NBSP(\xa0), 다른 유니코드 공백 → 일반 공백
    #  - ZWSP/ZWNJ/ZWJ/BOM → 제거
    #  - 줄 끝의 공백(2칸 이상 = markdown 강제 줄바꿈) → 제거
    #  - 과한 빈 줄 축약
    INVISIBLE = {
        "\u00a0": " ", "\u2000": " ", "\u2001": " ", "\u2002": " ", "\u2003": " ",
        "\u2004": " ", "\u2005": " ", "\u2006": " ", "\u2007": " ", "\u2008": " ",
        "\u2009": " ", "\u200a": " ", "\u202f": " ", "\u205f": " ", "\u3000": " ",
        "\u200b": "", "\u200c": "", "\u200d": "", "\ufeff": "", "\u180e": "",
    }
    for s, d in INVISIBLE.items():
        md_body = md_body.replace(s, d)
    md_body = re.sub(r"[ \t]+$", "", md_body, flags=re.MULTILINE)
    md_body = re.sub(r"\n{3,}", "\n\n", md_body).strip()

    return {
        "title": title,
        "date": dt.strftime("%Y-%m-%d %H:%M:%S +0900"),
        "date_short": dt.strftime("%Y-%m-%d"),
        "excerpt": excerpt,
        "cover": cover,
        "tags": tags,
        "body": md_body,
    }


def frontmatter(meta: dict, slug: str, post_id: int, category: str) -> str:
    tags_str = ", ".join(meta["tags"]) if meta["tags"] else ""
    # Jekyll 프런트매터. excerpt는 쌍따옴표 안전하게.
    excerpt_safe = meta["excerpt"].replace('"', '\\"')
    title_safe = meta["title"].replace('"', '\\"')
    lines = [
        "---",
        "layout: post",
        f'title: "{title_safe}"',
        f'date: {meta["date"]}',
        f'categories: [{category.lower().replace(" ", "-")}]',
        f'tags: [{tags_str}]',
        f'excerpt: "{excerpt_safe}"',
        f'coverImage: "{meta["cover"]}"',
        f'category: "{category}"',
        f'canonicalUrl: "https://namojo.tistory.com/{post_id}"',
        "---",
        "",
    ]
    return "\n".join(lines)


def main():
    saved = []
    for post_id in range(109, 129):  # 109~128
        slug = SLUG_MAP.get(post_id)
        if not slug:
            continue
        url = f"https://namojo.tistory.com/{post_id}"
        print(f"[{post_id}] fetching {url} …", file=sys.stderr)
        html = curl_fetch(url)
        if not html:
            print(f"  ! empty response", file=sys.stderr)
            continue
        meta = extract_post(html, post_id)
        if not meta:
            print(f"  ! could not extract content", file=sys.stderr)
            continue
        category = guess_category(meta["title"], post_id)
        fm = frontmatter(meta, slug, post_id, category)
        out_path = POSTS_DIR / f'{meta["date_short"]}-{slug}.md'
        out_path.write_text(fm + meta["body"] + "\n", encoding="utf-8")
        saved.append((post_id, out_path.name, len(meta["body"])))
        print(f"  ✓ saved → {out_path.name} ({len(meta['body'])} bytes)", file=sys.stderr)

    print(f"\n총 {len(saved)}편 이관 완료", file=sys.stderr)


if __name__ == "__main__":
    main()
