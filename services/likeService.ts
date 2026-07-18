// 좋아요 누적 카운터 — Supabase(PostgREST) 연동.
//
// 설계:
//   · 서버 count = 전체 방문자 누적 좋아요(진짜 누적).
//   · localStorage `liked_posts` = "이 브라우저가 눌렀는가"(하트 채움 + 같은 기기 중복 방지).
//   · anon 키 + RLS: anon은 카운트 조회(select)와 increment/decrement RPC만 가능.
//   · Supabase 미설정/네트워크 실패 시 → 조용히 null 반환 → 호출측이 로컬 폴백으로 동작.
//
// 의존성 없이 fetch만 사용(별도 SDK 미설치).

import { SUPABASE } from '../config';

const URL = (SUPABASE.url || '').replace(/\/$/, '');
const KEY = SUPABASE.anonKey || '';
export const likesEnabled = !!(URL && KEY);

const headers = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json',
};

// 홈 목록용: 전체 카운트를 1회만 가져와 캐시(카드마다 요청하지 않도록).
let allCountsCache: Record<string, number> | null = null;
let allCountsPromise: Promise<Record<string, number>> | null = null;

async function loadAllCounts(): Promise<Record<string, number>> {
  if (!likesEnabled) return {};
  try {
    const r = await fetch(`${URL}/rest/v1/post_likes?select=id,count`, { headers });
    if (!r.ok) throw new Error(String(r.status));
    const rows: Array<{ id: string; count: number }> = await r.json();
    const map: Record<string, number> = {};
    for (const row of rows) map[row.id] = Number(row.count) || 0;
    allCountsCache = map;
    return map;
  } catch {
    return allCountsCache || {};
  }
}

/** 전체 카운트 맵(캐시). 좋아요가 0인 글은 키가 없을 수 있다(→ 0으로 취급). */
export function fetchAllCounts(): Promise<Record<string, number>> {
  if (!likesEnabled) return Promise.resolve({});
  if (!allCountsPromise) allCountsPromise = loadAllCounts();
  return allCountsPromise;
}

/** 단일 글의 최신 카운트(상세 페이지용). 실패 시 null. */
export async function fetchCount(id: string): Promise<number | null> {
  if (!likesEnabled) return null;
  try {
    const r = await fetch(
      `${URL}/rest/v1/post_likes?id=eq.${encodeURIComponent(id)}&select=count`,
      { headers },
    );
    if (!r.ok) throw new Error(String(r.status));
    const rows: Array<{ count: number }> = await r.json();
    return rows.length ? Number(rows[0].count) || 0 : 0;
  } catch {
    return null;
  }
}

async function rpc(fn: 'increment_likes' | 'decrement_likes', id: string): Promise<number | null> {
  if (!likesEnabled) return null;
  try {
    const r = await fetch(`${URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ post_id: id }),
    });
    if (!r.ok) throw new Error(String(r.status));
    const n = Number(await r.json());
    if (allCountsCache) allCountsCache[id] = n; // 캐시 갱신(홈 재방문 시 반영)
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

/** 좋아요 +1 → 새 누적값(실패 시 null) */
export const incrementLike = (id: string) => rpc('increment_likes', id);
/** 좋아요 취소 -1 → 새 누적값(실패 시 null) */
export const decrementLike = (id: string) => rpc('decrement_likes', id);

// ── localStorage: 같은 기기 중복 방지 + 하트 채움 상태 ──────────────
export function hasLikedLocally(id: string): boolean {
  try {
    return !!JSON.parse(localStorage.getItem('liked_posts') || '{}')[id];
  } catch {
    return false;
  }
}
export function setLikedLocally(id: string, liked: boolean): void {
  try {
    const map = JSON.parse(localStorage.getItem('liked_posts') || '{}');
    if (liked) map[id] = true;
    else delete map[id];
    localStorage.setItem('liked_posts', JSON.stringify(map));
  } catch {
    /* ignore */
  }
}
