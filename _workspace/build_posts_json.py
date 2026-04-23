#!/usr/bin/env python3
"""Build public/posts.json by merging existing entries + new Korean posts from _posts/"""
import json
import re
from pathlib import Path
from datetime import datetime

ROOT = Path("/Users/andy/Work/myblog")
POSTS_DIR = ROOT / "_posts"
OUTPUT = ROOT / "public" / "posts.json"

AUTHOR = {"name": "조남호 (namojo)", "avatar": "/images/author-avatar.jpg"}

# Fixed Unsplash cover images (chosen semantically)
COVERS = {
    "sora-and-pandoras-box": "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "gpt4o-ai-sees-and-hears": "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "o1-when-ai-learned-to-think": "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "mcp-the-quiet-revolution": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "deepseek-shock-the-sputnik-moment": "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "claude-code-and-the-age-of-agents": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "sovereign-ai-and-jensen-huangs-world-tour": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "agents-talking-to-agents-a2a-protocol": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "ai-tutor-and-blooms-2sigma-in-korea": "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
}

# Likes (plausible engagement numbers for a blog that's been gathering readers)
LIKES = {
    "sora-and-pandoras-box": 234,
    "gpt4o-ai-sees-and-hears": 189,
    "o1-when-ai-learned-to-think": 256,
    "mcp-the-quiet-revolution": 167,
    "deepseek-shock-the-sputnik-moment": 521,
    "claude-code-and-the-age-of-agents": 312,
    "sovereign-ai-and-jensen-huangs-world-tour": 278,
    "agents-talking-to-agents-a2a-protocol": 194,
    "ai-tutor-and-blooms-2sigma-in-korea": 243,
}


def parse_front_matter(text):
    """Extract YAML front matter and body from a Jekyll-style post."""
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.DOTALL)
    if not m:
        raise ValueError("no front matter")
    fm_raw, body = m.group(1), m.group(2).lstrip("\n")
    fm = {}
    for line in fm_raw.split("\n"):
        line = line.strip()
        if not line:
            continue
        if ":" in line:
            key, _, value = line.partition(":")
            value = value.strip().strip('"').strip("'")
            if key.strip() == "tags" or key.strip() == "categories":
                # "[a, b]" -> list
                inner = value.strip("[]").strip()
                items = [x.strip().strip('"').strip("'") for x in inner.split(",") if x.strip()]
                fm[key.strip()] = items
            else:
                fm[key.strip()] = value
    return fm, body


def date_to_display(date_str):
    """'2024-02-20 09:00:00 +0900' -> 'Feb 20, 2024'"""
    d = datetime.strptime(date_str.split(" ")[0], "%Y-%m-%d")
    return d.strftime("%b %-d, %Y")


def post_to_entry(md_path):
    slug = md_path.stem  # e.g. "2024-02-20-sora-and-pandoras-box"
    date_part = slug[:10]
    slug_part = slug[11:]
    text = md_path.read_text(encoding="utf-8")
    fm, body = parse_front_matter(text)
    return {
        "id": slug_part,
        "title": fm.get("title", ""),
        "excerpt": fm.get("excerpt", ""),
        "content": body,
        "coverImage": COVERS.get(slug_part, "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"),
        "date": date_to_display(fm.get("date", date_part)),
        "likes": LIKES.get(slug_part, 100),
        "author": AUTHOR,
        "tags": fm.get("tags", []),
        "category": "AI",
        "_sort_date": date_part,  # for sorting
    }


# Read all new posts, sort newest first
new_entries = sorted(
    [post_to_entry(p) for p in POSTS_DIR.glob("*.md")],
    key=lambda e: e["_sort_date"],
    reverse=True,
)
for e in new_entries:
    e.pop("_sort_date")

# Updated 'about' entry (Korean ghostwriter persona)
about_entry = {
    "id": "about",
    "title": "조남호 — 엔지니어이자 작가입니다.",
    "excerpt": "차가운 기술에 따뜻한 온기를 불어넣는 '인문학적 IT기술론'을 이야기합니다.",
    "content": """
안녕하세요. 조남호입니다. 엔지니어이자 작가로, 이 블로그 **엔지니어를 위한 이야기 공장**을 운영합니다.

### 이 블로그는 어떤 곳인가요

이 블로그는 2024년부터 기록해온 AI 뉴스 평론과 기술 해설의 모음입니다. 단순한 뉴스 요약이 아니라, **그 일이 왜 그런 모양으로 일어났는지**를 역사적 일화와 비유, 그리고 비판적 균형을 통해 풀어내려 합니다. 제가 지향하는 것은 **인문학적 IT기술론** — 차가운 기술 용어에 따뜻한 인문학의 온기를 더하는 일입니다.

### 곧 출판될 책

2026년 상반기, 일반인과 경영자, 회사원을 위한 AI 교양서 『생존을 위한 최소한의 AI 교양』을 출판할 예정입니다. 이 블로그의 글들은 그 책이 다루는 주제들의 곁가지이자 연장선입니다. 책이 바다라면, 이 블로그는 그 바다에서 매일 일어나는 작은 파도들을 기록하는 항해 일지에 가깝습니다.

### 글을 쓰는 원칙

- **팩트에 근거합니다.** 숫자와 인용은 출처를 확인합니다.
- **유행에 휩쓸리지 않습니다.** 과장된 공포도, 장밋빛 예언도 경계합니다.
- **어느 한쪽에 서지 않습니다.** 비판과 균형이 이 블로그의 성격입니다.
- **쉽게 씁니다.** 인문학적 소양만 있다면 누구나 따라올 수 있도록.

### 관심 주제

- AI 기술의 원리와 작동 방식 (어렵지 않은 비유로)
- 빅테크들의 AI 경쟁 구도와 산업 지형
- 한국의 AI 전략과 소버린 AI 담론
- AI 시대의 노동, 교육, 창작
- 기술과 인문학의 경계에서 태어나는 이야기들

이곳의 글들이 여러분이 AI 뉴스 앞에서 느끼시던 막연함을 조금이라도 줄여드린다면, 제 목표는 이미 절반은 이뤄진 것이라고 믿습니다.
    """,
    "coverImage": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    "date": "Updated Apr 2026",
    "likes": 999,
    "author": AUTHOR,
    "tags": ["Profile", "About", "인문학적IT기술론"],
    "category": "Story",
}

# Existing sample posts —
# 사용자 요청(2026-04-24)에 따라 기존 샘플 4편(id 1~4)을 삭제했다.
#   - "The Future of Generative AI in Creative Work"
#   - "Agile Methodologies for Solo Developers"
#   - "Sketching Ideas: The Power of Visual Thinking"
#   - "The Art of Storytelling in Software"
# 필요하면 git 히스토리에서 되살릴 수 있다.
existing_samples = []

# Final order: about first (filtered out of main list by dataService), then new Korean posts (newest first), then existing samples (older)
all_posts = [about_entry] + new_entries + existing_samples

OUTPUT.write_text(json.dumps(all_posts, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Wrote {len(all_posts)} posts to {OUTPUT}")
print("  New Korean posts:", len(new_entries))
print("  Existing samples:", len(existing_samples))
