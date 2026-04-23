import React from 'react';

interface Props {
  content: string;
}

// ─── 인라인 파싱 (볼드·이탤릭·링크·코드) ─────────────────────────────
// 한 줄 안에 등장하는 인라인 마크다운을 React 노드 배열로 변환.
// heading/list/blockquote/paragraph가 공통으로 이 함수를 거친다.
const renderInline = (text: string): React.ReactNode[] => {
  const nodes: React.ReactNode[] = [];
  // **bold**, *italic*, `code`, [text](url) 를 하나의 regex로 캡처
  // 주의: **는 *보다 먼저 소비되어야 하므로 순서 중요 (longest match 대안)
  const pattern = /(\*\*([^*]+?)\*\*)|(`([^`]+?)`)|(\[([^\]]+?)\]\(([^)]+?)\))|(\*([^*]+?)\*)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    if (match[1]) {
      // **bold**
      nodes.push(
        <strong key={`b${key++}`} className="font-semibold text-ink-900 dark:text-ink-50">
          {match[2]}
        </strong>,
      );
    } else if (match[3]) {
      // `code`
      nodes.push(
        <code
          key={`c${key++}`}
          className="px-1.5 py-0.5 rounded bg-ink-100 dark:bg-ink-800 text-[0.92em] font-mono"
        >
          {match[4]}
        </code>,
      );
    } else if (match[5]) {
      // [text](url)
      nodes.push(
        <a
          key={`a${key++}`}
          href={match[7]}
          target={/^https?:/.test(match[7]) ? '_blank' : undefined}
          rel={/^https?:/.test(match[7]) ? 'noopener noreferrer' : undefined}
          className="text-linkblue hover:underline"
        >
          {match[6]}
        </a>,
      );
    } else if (match[8]) {
      // *italic*
      nodes.push(
        <em key={`i${key++}`} className="italic">
          {match[9]}
        </em>,
      );
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes.length ? nodes : [text];
};

export const MarkdownRenderer: React.FC<Props> = ({ content }) => {
  const lines = content.split('\n');

  // 리스트는 연속된 라인으로 <ul>/<ol> 래핑 필요 — 한 번 훑어서 그룹화한다.
  const blocks: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  const imageRegex = /^!\[(.*?)\]\((.*?)\)\s*$/;
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/;

  while (i < lines.length) {
    const line = lines[i];

    // ── Empty line ─────────────────────────────────────────────
    if (line.trim() === '') {
      blocks.push(<div key={`sp${key++}`} className="h-4" />);
      i++;
      continue;
    }

    // ── Image / YouTube ────────────────────────────────────────
    const imgMatch = line.match(imageRegex);
    if (imgMatch) {
      const [, alt, url] = imgMatch;
      const ytMatch = url.match(youtubeRegex);
      if (ytMatch) {
        let videoId = ytMatch[1];
        if (videoId.includes('&')) videoId = videoId.split('&')[0];
        blocks.push(
          <figure key={`yt${key++}`} className="my-8 w-full">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-card bg-ink-100 dark:bg-ink-800">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}`}
                title={alt || 'video'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {alt && <figcaption className="text-center text-sm text-ink-500 mt-3">{alt}</figcaption>}
          </figure>,
        );
      } else {
        blocks.push(
          <figure key={`fig${key++}`} className="my-8">
            <img src={url} alt={alt} loading="lazy" className="rounded-2xl w-full object-cover max-h-[600px]" />
            {alt && <figcaption className="text-center text-sm text-ink-500 mt-3">{alt}</figcaption>}
          </figure>,
        );
      }
      i++;
      continue;
    }

    // ── Headings ───────────────────────────────────────────────
    // 주의: 긴 접두사부터 검사해야 ####가 ###로 오인식되지 않는다.
    // 또한 Tistory 원본 중에는 "#### " 뒤에 본문이 같은 줄에 오지 않고
    // 빈 줄만 있는 경우(제목 강조용 빈 헤딩)도 있어 체크를 관대하게 한다.
    const hMatch = line.match(/^(#{1,6})(?:\s+(.*))?$/);
    if (hMatch) {
      const level = hMatch[1].length;
      const text = (hMatch[2] || '').trim();
      if (!text) {
        // "#### " 단독 라인은 장식용 구분으로 취급 — 렌더링 생략
        i++; continue;
      }
      const hClass: Record<number, string> = {
        1: 'text-3xl font-bold mt-12 mb-6 text-ink-900 dark:text-ink-50',
        2: 'text-2xl font-bold mt-12 mb-4 pb-2 border-b border-ink-200 dark:border-ink-700 text-ink-900 dark:text-ink-50',
        3: 'text-xl font-bold mt-10 mb-3 text-warm-600 dark:text-warm-400',
        4: 'text-lg font-bold mt-8 mb-3 text-ink-900 dark:text-ink-50',
        5: 'text-base font-semibold mt-6 mb-2 text-ink-800 dark:text-ink-100 uppercase tracking-wide',
        6: 'text-sm font-semibold mt-6 mb-2 text-ink-700 dark:text-ink-300 uppercase tracking-wider',
      };
      const Tag = (`h${level}` as unknown) as keyof JSX.IntrinsicElements;
      blocks.push(
        React.createElement(
          Tag,
          { key: `h${level}-${key++}`, className: hClass[level] },
          ...renderInline(text),
        ),
      );
      i++; continue;
    }

    // ── Blockquote (연속된 > 라인들을 하나의 blockquote로) ───
    if (line.startsWith('> ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={`bq${key++}`}
          className="pl-5 border-l-[3px] border-warm-500 my-6 text-ink-600 dark:text-ink-400"
        >
          {items.map((t, idx) => (
            <p key={idx} className="mb-2 leading-relaxed">{renderInline(t)}</p>
          ))}
        </blockquote>,
      );
      continue;
    }

    // ── Table (GFM style) ─────────────────────────────────────
    // | col1 | col2 |
    // |------|------|
    // | a    | b    |
    if (line.includes('|') && i + 1 < lines.length && /^\s*\|[-:\s|]+\|\s*$/.test(lines[i + 1])) {
      // 헤더 셀 추출
      const splitRow = (row: string) =>
        row
          .trim()
          .replace(/^\|/, '')
          .replace(/\|$/, '')
          .split('|')
          .map((s) => s.trim());

      const headers = splitRow(lines[i]);
      i += 2; // skip header + separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].includes('|')) {
        rows.push(splitRow(lines[i]));
        i++;
      }

      blocks.push(
        <div key={`tbl${key++}`} className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-ink-300 dark:border-ink-600">
                {headers.map((h, hi) => (
                  <th key={hi} className="text-left px-3 py-2 font-semibold text-ink-900 dark:text-ink-50">
                    {renderInline(h)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-ink-200 dark:border-ink-700">
                  {r.map((c, ci) => (
                    <td key={ci} className="px-3 py-2 text-ink-700 dark:text-ink-200 align-top">
                      {renderInline(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      continue;
    }

    // ── Unordered list ────────────────────────────────────────
    if (/^- /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <ul key={`ul${key++}`} className="list-disc ml-6 mb-5 space-y-1.5 text-ink-800 dark:text-ink-200">
          {items.map((t, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(t)}</li>
          ))}
        </ul>,
      );
      continue;
    }

    // ── Ordered list ──────────────────────────────────────────
    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s+/, ''));
        i++;
      }
      blocks.push(
        <ol key={`ol${key++}`} className="list-decimal ml-6 mb-5 space-y-1.5 text-ink-800 dark:text-ink-200">
          {items.map((t, idx) => (
            <li key={idx} className="leading-relaxed">{renderInline(t)}</li>
          ))}
        </ol>,
      );
      continue;
    }

    // ── Paragraph ─────────────────────────────────────────────
    blocks.push(
      <p key={`p${key++}`} className="mb-5 leading-[1.9] text-ink-800 dark:text-ink-200">
        {renderInline(line)}
      </p>,
    );
    i++;
  }

  return <div className="max-w-none">{blocks}</div>;
};
