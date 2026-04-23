#!/usr/bin/env python3
"""
한글 직후 이어지는 영문/숫자 토큰을 괄호로 감싼다.
예: "어텐션Attention" → "어텐션(Attention)", "그녀Her" → "그녀(Her)"

안전 규칙:
- 앞 글자가 한글이고, 바로 뒤에 공백/괄호 없이 [A-Za-z]로 시작하는 토큰이 올 때만
- 이미 괄호로 감싸진 경우는 건드리지 않음 (앞에 '(' 이 있으면 스킵)
- 코드블록(``` … ```), 인라인코드(`…`), URL, 이미지 링크는 건드리지 않음
- YAML 프런트매터(파일 상단 --- 블록)는 건드리지 않음
- 일반적 브랜드는 예외 처리 (챗GPT → 유지, 오픈AI → 유지 등)
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "_posts"

# 브랜드/고유명사로 굳어진 표기는 원형 유지
KEEP_AS_IS = {
    "챗GPT",
    "오픈AI",
    "폐쇄AI",
    "엔터프라이즈AI",
    "생성AI",
    "생성형AI",
    "소버린AI",
}

# 한글(1자+) + 영문 시작 토큰 — 다만:
#  - 앞 글자가 '(' 이나 공백, 한글, 마침표 등 '이미 감싼 경우'는 negative lookbehind
#  - 토큰 길이 2자 이상
#  - 영문 구(phrase): "Scarlett Johansson" 처럼 공백+대문자로 이어지는 다음 단어들까지 포함
HAN_ENG_RE = re.compile(
    r"(?<![\(\[<])"                       # 바로 앞이 여는 괄호가 아니어야 함
    r"([가-힣])"                           # group1: 한글 한 글자 (직전)
    r"("
    r"[A-Za-z][A-Za-z0-9\-]{1,30}"        # 첫 영문 단어
    r"(?:\s+[A-Z][A-Za-z0-9\-]{1,30})*"   # 뒤이은 "대문자 시작 단어" 반복 (예: Scarlett Johansson)
    r")"
)


def protect_regions(text: str):
    """코드 블록·인라인 코드·URL·이미지 링크를 플레이스홀더로 치환해 보호."""
    placeholders = []

    def _save(m):
        placeholders.append(m.group(0))
        return f"\x00PH{len(placeholders) - 1}\x00"

    # fenced code block ``` ... ```
    text = re.sub(r"```.*?```", _save, text, flags=re.DOTALL)
    # inline code `...`
    text = re.sub(r"`[^`\n]+`", _save, text)
    # image / link markdown: ![alt](url), [text](url)
    text = re.sub(r"!\[[^\]]*\]\([^)]+\)", _save, text)
    text = re.sub(r"\[[^\]]+\]\([^)]+\)", _save, text)
    # bare URLs
    text = re.sub(r"https?://\S+", _save, text)
    return text, placeholders


def restore_regions(text: str, placeholders):
    def _restore(m):
        idx = int(m.group(1))
        return placeholders[idx]

    return re.sub(r"\x00PH(\d+)\x00", _restore, text)


def wrap(text: str) -> str:
    text, ph = protect_regions(text)

    def _sub(m):
        ko, en = m.group(1), m.group(2)
        token = ko + en
        if token in KEEP_AS_IS:
            return token
        return f"{ko}({en})"

    out = HAN_ENG_RE.sub(_sub, text)

    # 이전 실행에서 "(Scarlett) Johansson" 식으로 쪼개진 괄호를 합쳐준다
    # 패턴: "(Word) Word" (뒷 단어가 대문자 시작 영문) → "(Word Word)"
    out = re.sub(
        r"\(([A-Za-z][A-Za-z0-9\-]+)\)\s+([A-Z][A-Za-z0-9\-]+)",
        r"(\1 \2)",
        out,
    )

    return restore_regions(out, ph)


def split_frontmatter(text: str):
    m = re.match(r"^(---\n.*?\n---\n)(.*)$", text, re.DOTALL)
    if m:
        return m.group(1), m.group(2)
    return "", text


def process_file(path: Path) -> int:
    original = path.read_text(encoding="utf-8")
    head, body = split_frontmatter(original)
    new_body = wrap(body)
    if new_body == body:
        return 0
    changes = sum(
        1 for _ in HAN_ENG_RE.finditer(body)
    ) - sum(1 for _ in HAN_ENG_RE.finditer(new_body))
    path.write_text(head + new_body, encoding="utf-8")
    return changes


def main():
    total = 0
    files = sorted(POSTS_DIR.glob("*.md"))
    for p in files:
        n = process_file(p)
        if n > 0:
            print(f"  ✓ {p.name} — {n} fix")
            total += n
    print(f"\n총 {total}곳 괄호 보정 완료 ({len(files)} files)")


if __name__ == "__main__":
    main()
