#!/usr/bin/env python3
"""
Tistory에서 이관된 Markdown 본문에 섞인 보이지 않는 문자를 정리한다.

처리 대상:
  - NBSP (U+00A0) → 일반 공백. 다만 사용자가 editor에서 지우려 해도 안 지워지는
    "유령 공백"의 주범. 모두 일반 공백으로 치환한다.
  - Zero Width Space / Joiner 류 (U+200B~D, U+FEFF) → 제거
  - 각 줄 끝의 공백(2칸 이상) → 제거. Markdown에서 줄 끝 2칸은 강제 <br>로
    해석되어 문장마다 줄바꿈되는 원인이 된다.
  - 라인 중복 공백은 건드리지 않음 (문장 내부 간격은 의도일 수 있음).
  - 프런트매터는 보호.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "_posts"

INVISIBLE = {
    "\u00a0": " ",    # NBSP → space
    "\u2000": " ",
    "\u2001": " ",
    "\u2002": " ",
    "\u2003": " ",
    "\u2004": " ",
    "\u2005": " ",
    "\u2006": " ",
    "\u2007": " ",
    "\u2008": " ",
    "\u2009": " ",
    "\u200a": " ",
    "\u202f": " ",
    "\u205f": " ",
    "\u3000": " ",    # ideographic space
    "\u200b": "",     # ZWSP
    "\u200c": "",     # ZWNJ
    "\u200d": "",     # ZWJ
    "\ufeff": "",     # BOM
    "\u180e": "",     # Mongolian vowel separator
}


def split_frontmatter(text: str):
    m = re.match(r"^(---\n.*?\n---\n)(.*)$", text, re.DOTALL)
    if m:
        return m.group(1), m.group(2)
    return "", text


def clean_body(body: str) -> str:
    # 1. 모든 invisible 문자 치환
    for src, dst in INVISIBLE.items():
        body = body.replace(src, dst)
    # 2. 각 줄 끝의 공백 제거 (Markdown hard-break 2칸 포함 모두)
    body = re.sub(r"[ \t]+$", "", body, flags=re.MULTILINE)
    # 3. 빈 줄 3연속 이상을 2연속으로 축약 (단락 간격 통일)
    body = re.sub(r"\n{3,}", "\n\n", body)
    # 4. 문서 끝 개행 1개로 정규화
    body = body.rstrip() + "\n"
    return body


def process(path: Path) -> dict:
    original = path.read_text(encoding="utf-8")
    head, body = split_frontmatter(original)
    nbsp = body.count("\u00a0")
    zw = sum(body.count(c) for c in "\u200b\u200c\u200d\ufeff")
    trailing = len(re.findall(r"[ \t]{2,}\n", body))
    cleaned = clean_body(body)
    if cleaned == body:
        return {"changed": False, "nbsp": nbsp, "zw": zw, "trailing": trailing}
    path.write_text(head + cleaned, encoding="utf-8")
    return {"changed": True, "nbsp": nbsp, "zw": zw, "trailing": trailing}


def main():
    total = {"nbsp": 0, "zw": 0, "trailing": 0, "files": 0}
    for p in sorted(POSTS_DIR.glob("*.md")):
        r = process(p)
        if r["changed"]:
            total["files"] += 1
            total["nbsp"] += r["nbsp"]
            total["zw"] += r["zw"]
            total["trailing"] += r["trailing"]
            print(f"  ✓ {p.name} (nbsp={r['nbsp']}, trailing={r['trailing']})")
    print()
    print(f"파일 {total['files']}개 정리 — NBSP {total['nbsp']}, ZW {total['zw']}, 강제개행 {total['trailing']}")


if __name__ == "__main__":
    main()
