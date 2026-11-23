# Fact Check Report: 2026-11-24-postgresql-19-repack-online-bloat

검증일 2026-11-24 / 대상 `_posts/2026-11-24-postgresql-19-repack-online-bloat.md`
1차 출처 4종(릴리스 공지, REPACK 19 문서, VACUUM 19·18 문서, pg_repack 공식 문서) + PostgreSQL 19 소스 트리(REL_19_STABLE) 직접 확인.

---

## A. 시점 일관성 (최우선 검사)

- **발행일:** 2026-11-24 (KST 09:00)

| 인용된 사건·대상 | 실제 일자/상태 | 발행일 대비 | 판정 |
|---|---|---|---|
| PostgreSQL 19 정식 출시 "11월 19일" | 2026-11-19 (공지 "Posted on 2026-11-19") | 5일 전 ✓ | 유지 |
| `REPACK (CONCURRENTLY)` 명령 | 19에서 신규 도입 | 이전 ✓ | 유지 |
| VACUUM FULL의 deprecated 표기 | 19 문서에 존재, 18 문서에 없음 | 이전 ✓ | 유지 |
| pg_repack 확장 "오래전부터 있었어요" | pg_reorg(2008~)의 후속으로 2013년경부터 | 이전 ✓ | 유지 |
| 용어: logical decoding / replica identity / `max_repack_replication_slots` / SHARE UPDATE EXCLUSIVE | 앞 셋 중 `max_repack_replication_slots`만 19 신설, 나머지는 이전부터 존재 | 이전 ✓ | 유지 |

- **사후 시점 표현:** "훗날", "결국", "돌이켜보면" 류 없음. ✓
- **상대 날짜 표현:** "어제/지난주" 류 없음. 날짜를 "11월 19일"로 특정해 안전. ✓
- **미래 참조:** 없음. ✓

→ **시점 규율 위반 0건.**

---

## B. 사실 검증 (요청 항목 순)

### 1. PostgreSQL 19 출시일 2026-11-19 — **[확인]**
공식 공지 머리글이 그대로 "Posted on 2026-11-19 by PostgreSQL Global Development Group". 본문 "PostgreSQL 19가 11월 19일에 나왔습니다" 정확.
근거: https://www.postgresql.org/about/news/postgresql-19-released-3449/

### 2. "VACUUM FULL과 CLUSTER의 자리를 대신하는 명령이고, 두 명령은 호환을 위해 남겨 둡니다" — **[확인]**
공지 원문: "`REPACK` replaces the `VACUUM FULL` and `CLUSTER` commands, both of which remain available for compatibility."
본문은 replaces를 '대신하는'으로, remain available for compatibility를 '호환을 위해 남겨 둡니다'로 옮겼다. **제거·삭제로 읽힐 여지 없음.** 마지막 문단의 "지워진 건 아니고요"도 같은 방향으로 보강하고 있어 오독 위험이 이중으로 차단돼 있다.
직전 인용 "진행 중인 작업에 지장을 주지 않고 … 현재 워크로드에 맞게"도 원문 "optimize tables for their current workload without disruption to ongoing operations"의 정확한 번역. ✓

### 3. MVCC 서술 (UPDATE 제자리 수정 안 함 / DELETE 표시만 / 이유는 옛 스냅샷) — **[확인]**
문서 세 곳이 문장 단위로 뒷받침한다.
- 24.1.2 Recovering Disk Space: "In PostgreSQL, an `UPDATE` or `DELETE` of a row does not immediately remove the old version of the row. This approach is necessary to gain the benefits of multiversion concurrency control (MVCC …): **the row version must not be deleted while it is still potentially visible to other transactions.**" → 본문의 '죽은 행으로 표시만', 'DELETE도 표시', 그리고 **이유(옛 스냅샷을 든 트랜잭션)**까지 그대로 대응.
- VACUUM Description: "tuples that are deleted or obsoleted by an update are not physically removed from their table; they remain present until a `VACUUM` is done."
- 66.7 HOT: "updates require **new versions of rows to be added to tables**." → '새 행 버전을 하나 더 쓴다'를 뒷받침.
- 보충 참고(오류 아님): HOT 업데이트는 새 버전을 같은 페이지에 두기도 하지만 그것도 **새 튜플**이므로 "있던 자리를 고쳐 쓰지 않습니다"는 여전히 정확.

### 4. "VACUUM은 같은 파일 안에서 재사용 가능하게 표시할 뿐 대개 OS에 반환하지 않는다" — **[확인]**
VACUUM Description: "Plain `VACUUM` (without `FULL`) simply reclaims space and makes it available for re-use. … However, **extra space is not returned to the operating system (in most cases); it's just kept available for re-use within the same table.**"
본문 "추가 공간은 대부분의 경우 운영체제로 반환되지 않고, 같은 테이블 안에서 재사용할 수 있도록 유지될 뿐"은 원문의 거의 직역. 인용 표지 없이 간접화법("문서가 직접 적어 뒀습니다")으로 처리돼 있는데, 번역이 원문과 일치하므로 문제 없음. ✓

### 5. "파일 맨 끝의 빈 페이지는 잘라 낼 수 있다" — **[확인]**
- VACUUM `TRUNCATE` 옵션: "attempt to **truncate off any empty pages at the end of the table** and allow the disk space for the truncated pages to be returned to the operating system."
- 24.1.2: "it will not return the space to the operating system, **except in the special case where one or more pages at the end of a table become entirely free** and an exclusive table lock can be easily obtained."
본문 "완전히 빈 페이지가 몰려 있으면 그만큼은 잘라 낼 수 있지만, 중간중간 뚫린 구멍은 그대로 남습니다" 정확. (문서가 덧붙인 '짧은 배타 잠금이 쉽게 잡힐 때'라는 단서는 생략돼 있으나, 단정 방향이 과하지 않아 오류 아님.)

### 6. VACUUM FULL이 ACCESS EXCLUSIVE로 읽기까지 막는다 — **[확인]**
- VACUUM Description: "`VACUUM FULL` rewrites the entire contents of the table into a new disk file … This form is much slower and **requires an `ACCESS EXCLUSIVE` lock on each table** while it is being processed."
- 24.1.1: "`VACUUM FULL` requires an `ACCESS EXCLUSIVE` lock on the table it is working on, and therefore **cannot be done in parallel with other use of the table**."
- 릴리스 공지: VACUUM FULL/CLUSTER가 "**preventing access to the table** until the cleanup finished."
ACCESS EXCLUSIVE는 ACCESS SHARE(SELECT가 잡는 모드)와도 충돌하므로 '읽기도 막힌다'는 서술 정확. ✓

### 7. REPACK CONCURRENTLY의 잠금 서술 — **[확인]** (단, 7-1 경미 수정 1건)
REPACK 문서 Notes on Concurrent Operation: "when the `CONCURRENTLY` option is specified, **the bulk of the operation is run with `SHARE UPDATE EXCLUSIVE` lock**, and the `ACCESS EXCLUSIVE` lock is **only acquired during the final phase to swap the table and index files**."
본문 "복사본을 만드는 큰 작업은 SHARE UPDATE EXCLUSIVE 잠금으로 돕니다. 읽기도 쓰기도 계속됩니다." ✓ (SHARE UPDATE EXCLUSIVE는 ACCESS SHARE·ROW EXCLUSIVE와 충돌하지 않음 + 공지의 "without blocking reads or writes")
"잠금을 쥐고 있는 시간이 '테이블 크기'에서 '잠금을 기다리는 동안 더 쌓인 변경량'으로 바뀐 거죠" ✓ 원문 "the lock is typically held for a short time, **depending on the amount of changes accumulated while the lock was being waited for**"의 정확한 옮김.

**7-1. [수정필요-경미]** 본문 28줄: "그 잠금으로 하는 일은 **파일을 바꿔 끼우는 것 하나뿐입니다**."
문서는 잠금 획득 후 할 일을 둘로 적었다 — "Once that lock is obtained, **a final pass over any remaining captured concurrent data changes is done** and the files are swapped." 즉 잠금 안에서 '남은 변경 마지막 한 번 더 적용 + 파일 교체'가 일어난다. '하나뿐'은 사실과 어긋난다.
→ 권고 수정: "그 잠금 안에서 하는 일은 그사이 남은 변경을 마지막으로 한 번 더 따라 적고, 파일을 바꿔 끼우는 것까지입니다."

### 8. "logical decoding으로 포착" / "복제 슬롯을 하나 만들어 WAL 스트림을 읽고" — **[확인]**
- 포착 방식은 문서 원문: "The data changes that took place during the creation of the new table and index files are **captured using logical decoding** (see Chapter 47) and applied before the `ACCESS EXCLUSIVE` lock is requested."
- '슬롯을 하나 쓴다'는 거부 조건 목록의 "the **max_repack_replication_slots** configuration parameter does not allow for the **creation of an additional replication slot**"이 직접 뒷받침한다. ✓
- **'WAL 스트림을 읽는다'는 과한 해석이 아니다.** 47.2.1 원문: "In PostgreSQL, logical decoding is implemented by **decoding the contents of the write-ahead log**, which describe changes on a storage level, into an application-specific form such as a stream of tuples or SQL statements." 47.2.2: "a slot represents a stream of changes that can be replayed to a client in the order they were made on the origin server." → '슬롯 + WAL 디코딩 + 스트림' 세 요소 모두 문서 표현 범위 안.

**8-1. [참고 — 사실 오류 아님]** 본문 28줄 "그 테이블이 잠깐 자기 자신의 복제 구독자가 되는 셈입니다".
기술적으로는 publication/subscription이나 apply worker가 관여하지 않고 logical decoding 출력만 쓰므로 '구독자'는 비유다. "~셈입니다"로 완화돼 있어 사실 오류로 분류하지 않는다. 다만 스타일 가이드(08-12, 09-13)의 '저자가 명명하지 않은 비유적 조어·관통 비유 금지' 기준에 걸릴 소지가 있어 삭제 여부는 저자 판단 사항으로 넘긴다.

### 9. CONCURRENTLY 거부 조건 목록 — **[확인]** (누락 2건은 경미, 파티션 괄호는 근거 확보됨)
문서 원문 9개 항목 대조:

| 문서 원문 | 본문 | 판정 |
|---|---|---|
| The table lacks a primary key and index-based replica identity | "기본 키나 인덱스 기반 replica identity가 없는 테이블" | ✓ |
| The table is partitioned | "파티션 테이블도 안 되고요" | ✓ |
| The table is `UNLOGGED` | "UNLOGGED 테이블" | ✓ |
| The relation is not a table (e.g., it is a materialized view) | "구체화 뷰" | ✓ |
| The table's access method is not `heap` | "접근 방식이 heap이 아닌 테이블" | ✓ |
| `REPACK` is executed inside a transaction block | "트랜잭션 블록 안에서도 못 돌립니다" | ✓ |
| max_repack_replication_slots … additional replication slot | "`max_repack_replication_slots` 설정도 봐야 하고요" | ✓ |
| The table is a system catalog or a TOAST table | (없음) | 누락 |
| declared as a catalog table using `user_catalog_table` | (없음) | 누락 |

- **오기 0건.** 철자도 `max_repack_replication_slots` 정확.
- **[수정필요-경미/선택]** 누락 2건(시스템 카탈로그·TOAST, `user_catalog_table`)은 본문이 "확인할 게 몇 개 있습니다"로 열어 둔 선택적 나열이고, 둘 다 일반 독자가 직접 리팩할 대상이 아니어서 **추가 권고 아님**(2-B절 용어·나열 제한 고려). 그대로 두어도 사실 오류 아님.

**9-1. "개별 파티션은 그 자체가 테이블이니 가능합니다" — [확인]** (추론 아님, 1차 근거 확보)
요청하신 '문서 뒷받침 vs 추론' 구분 결과: **문서 본문(sql-repack.html)에는 없지만, PostgreSQL 19 서버 자신이 그렇게 안내한다.** REL_19_STABLE 소스 트리의 회귀 테스트 기대 출력에 그대로 들어 있다.
```
ERROR:  REPACK (CONCURRENTLY) is not supported for partitioned tables
HINT:  Consider running the command on individual partitions.
```
(https://raw.githubusercontent.com/postgres/postgres/REL_19_STABLE/contrib/test_decoding/expected/repack.out)
2차로 Neon의 PostgreSQL 19 REPACK 가이드도 "Partitioned tables (the parent; **individual partitions can be repacked**)"로 같은 내용을 적고 개별 파티션 예시를 싣는다.
→ 서술 유지 가능. 다만 **근거가 문서 본문이 아니라 서버 HINT**이므로, 본문에서 "문서는 …라고 적었습니다" 식으로 문서에 귀속시키지는 말 것(현재 본문은 괄호 설명일 뿐 문서 귀속 표현이 없어 그대로 두면 됨).
※ 전제 확인: 파티션에는 부모의 기본 키 인덱스가 각 파티션에 붙으므로 replica identity 조건도 통상 충족된다.

### 10. 여유 디스크 "테이블 크기와 인덱스 크기를 합한 만큼" — **[확인]**
REPACK 문서 Notes on Resources: "`REPACK` creates a temporary copy of the table and all of its indexes, so you need **free disk space at least equal to the sum of the table size and the index sizes**."
본문 "문서는 테이블 크기와 인덱스 크기를 합한 만큼 필요하다고 적었습니다" ✓ 문서 귀속도 정확.
- 보충(권고 아님): 원문은 "at least"이고, `USING INDEX`에서 플래너가 정렬을 고르면 **테이블 크기만큼의 임시 정렬 파일이 추가로** 필요하다는 단서가 뒤따른다. 본문은 `USING INDEX`를 쓰지 않으므로 과소 진술로 보기 어렵다.

### 11. pg_repack = 트리거 + 로그 테이블 — **[확인]**
pg_repack 공식 문서(reorg.github.io/pg_repack) 동작 단계:
1) "create a **log table** to record changes made to the original table"
2) "add a **trigger** onto the original table, logging **INSERTs, UPDATEs and DELETEs** into our log table"
4) "**apply all changes** which have accrued in the log table to the new table"
5) "swap the tables, including indexes and toast tables, using the system catalogs"
본문 "원본 테이블에 트리거를 달아 INSERT와 UPDATE, DELETE를 로그 테이블에 받아 적고, 복사가 끝나면 그 로그를 새 테이블에 재생하는 방식" — 동사·대상·순서 모두 일치. ✓ (팩트 카드가 "2차 출처"로 유보해 둔 항목인데, **공식 문서에서 1차로 확인됐다.** 카드의 ⚠ 표시는 해제 가능.)
- 보충: pg_repack도 초기 설정(1~2단계) 동안에는 ACCESS EXCLUSIVE를 짧게 잡고 이후 SHARE UPDATE EXCLUSIVE로 돈다. 본문은 pg_repack의 잠금을 언급하지 않으므로 모순 없음.

### 12. "VACUUM 문서는 **이번에** FULL 옵션에 deprecated 표시를 달았습니다" — **[확인]** (치명적 오류 아님)
요청대로 18 문서와 직접 대조했다.
- **19:** "This option, **which is deprecated**, makes `VACUUM` behave like `REPACK` without a `USING INDEX` clause. This method of compacting the table takes much longer than `VACUUM` and exclusively locks the table." (https://www.postgresql.org/docs/19/sql-vacuum.html)
- **18:** "Selects \"full\" vacuum, which can reclaim more space, but takes much longer and exclusively locks the table." — **"deprecated"라는 단어가 FULL 항목에도, 페이지 어디에도 없다.** (https://www.postgresql.org/docs/18/sql-vacuum.html)
→ deprecated 표기는 **19에서 처음 붙은 것이 맞다.** '이번에' 정확. "지워진 건 아니고요"도 FULL 옵션이 19 문서에 그대로 남아 있고 공지가 "remain available for compatibility"라 적은 것과 일치. ✓

### 13. "1억 건 중 9,900만 건을 지워도 파일 크기는 거의 그대로" — **[확인, 단 경미 보완 권고]**
원리상 맞다. 24.1.2가 정확히 이 상황을 다룬다: 표준 VACUUM은 "removes dead row versions … and **marks the space available for future reuse**. However, it will not return the space to the operating system, except in the special case where one or more pages at the end of a table become entirely free". Tip도 "Plain `VACUUM` may not be satisfactory when a table contains large numbers of dead row versions as a result of **massive update or delete activity**"로 대량 삭제를 명시한다.

**13-1. [수정필요-경미/선택]** 다만 엄밀히는 **삭제된 행의 분포**에 달린 예시다. 지워진 99%가 파일 뒤쪽에 몰려 있으면 TRUNCATE로 상당 부분이 잘려 나가 "거의 그대로"가 아닐 수 있다(바로 앞 문단에서 본문 스스로 그 예외를 적어 두었으므로 주의 깊은 독자에게는 충돌로 읽힐 수 있다). 반대로 오래된 행부터 지우는 흔한 패턴에서는 전혀 줄지 않는다.
→ 최소 수정안: "그래서 1억 건 중 9,900만 건을 **골고루** 지워도 파일 크기는 거의 그대로입니다." (한 단어 추가로 앞 문단의 예외와 충돌이 사라짐)

---

## B-2. 요청 목록 밖에서 함께 점검한 항목

| # | 주장 | 상태 | 근거/조치 |
|---|---|---|---|
| 14 | 도입부 "행을 백만 건 지웠는데 디스크 사용량이 그대로 … PostgreSQL에서는 그게 정상 동작" | ✓ 확인 | 24.1.2 + VACUUM Description. 과장 없음 |
| 15 | "순차 스캔이 그 빈 공간까지 전부 읽고 지나가니까 조회도 같이 느려집니다" | ✓ 확인 | 릴리스 공지 "bloat, which can also **significantly impact query performance**". 메커니즘(빈 페이지까지 읽음)은 표준 설명이며 문서와 모순 없음 |
| 16 | "방법은 하나였습니다. 테이블을 처음부터 새 파일로 다시 쓰는 것" | ✓ 확인 | 24.1.2 Tip이 VACUUM FULL·CLUSTER·REPACK·ALTER TABLE 변형을 "These commands **rewrite an entire new copy of the table**"로 묶는다. '방법'이 명령이 아니라 '새로 쓰기'라는 접근을 가리키므로 정확 |
| 17 | "테이블이 작으면 몇 초 … 큰 테이블이면 몇 시간" | ⚠ 근거 약함(허용) | 문서는 "much longer", "can take a long time"까지만. 수치 인용이 아니라 체감 서술이고 범위가 상식적이라 수정 불요 |
| 18 | "데이터베이스가 이미 WAL에 다 적고 있는 변경을 굳이 트리거로 한 번 더 적을 이유가 없다는 쪽으로 정리된 거예요" | ⚠ 근거 약함 | 설계 **의도**에 대한 해석으로, 공지·문서에 이런 설명은 없다(UNLOGGED 테이블이 거부되는 것은 이 해석과 정합적이다). 기능 서술이 아니라 저자 평이라는 점이 문장에서 드러나므로 치명적이지 않으나, 더 안전하게는 "…없다는 쪽에 가깝습니다" 정도의 완화 권고 |
| 19 | 마지막 문단 "서비스를 세워 두고 테이블이 다시 써지기를 기다리던 밤" | — | 저자 개인 경험. 검증 대상 아님 |
| 20 | 명령 표기 `REPACK (CONCURRENTLY)`, `max_repack_replication_slots`, `VACUUM FULL`, `CLUSTER`, `pg_repack`, `SHARE UPDATE EXCLUSIVE`, `ACCESS EXCLUSIVE` 철자 | ✓ 확인 | 전부 문서 표기와 일치. 오타 0건 |
| 21 | 본문에 없는 릴리스의 다른 기능·수치를 끌어온 곳 | ✓ 없음 | 팩트 카드의 "기능 나열 금지" 준수 |

---

## C. 수정 권고 (우선순위 순)

1. **[중] 본문 28줄** — "밀린 변경을 다 따라잡은 다음에야 ACCESS EXCLUSIVE를 잡고, 그 잠금으로 하는 일은 **파일을 바꿔 끼우는 것 하나뿐입니다**."
   → 문서는 잠금 획득 후 "a final pass over any remaining captured concurrent data changes is done **and** the files are swapped"로 적었다. **'하나뿐'을 고칠 것.**
   권고문: "…ACCESS EXCLUSIVE를 잡습니다. 그 잠금 안에서 하는 일은 그사이 남은 변경을 마지막으로 한 번 더 따라 적고 파일을 바꿔 끼우는 것까지고요."
2. **[경미] 본문 22줄** — "1억 건 중 9,900만 건을 지워도" → "1억 건 중 9,900만 건을 **골고루** 지워도". 앞 문단의 '끝쪽 빈 페이지는 잘라 낸다'는 예외와의 충돌 제거.
3. **[경미/선택] 본문 30줄** — "…이유가 없다는 쪽으로 정리된 거예요" → "…이유가 없다는 쪽에 가깝습니다"(설계 의도 단정 완화).
4. **[선택/문체] 본문 28줄** — "자기 자신의 복제 구독자가 되는 셈입니다"는 사실 오류는 아니나(비유, 완화 표현 있음) 저자 스타일 기준의 '관통 비유·조어 금지'에 걸릴 수 있어 저자 판단 필요.
5. **[선택/보완] 본문 32줄 이후** — 문서가 **Warning**으로 굵게 세워 둔 "REPACK (CONCURRENTLY) is not MVCC-safe. After the repacking transaction commits, **the table will appear empty to concurrent transactions**, if they are using a snapshot taken before repacking started."가 본문에 없다. 사실 오류는 아니지만 '운영자가 내일 확인할 목록'을 제시하는 글의 성격상 한 줄 값어치가 가장 큰 누락 항목으로 보인다(장시간 REPEATABLE READ/배치 트랜잭션과 겹치면 빈 테이블을 읽는다). 넣는다면 34줄 '주의할 게 하나 더' 문단에 한 문장. 분량 제약상 생략도 가능.
6. **(수정 불요, 기록용)** CONCURRENTLY 거부 조건 중 시스템 카탈로그·TOAST·`user_catalog_table` 3항목은 의도적 생략으로 판단 — 추가 권고하지 않음.

---

## D. 종합 판정

- [x] **수정 후 발행** — 치명적 오류 0건. C-1(잠금 안에서 하는 일 '하나뿐') 1건만 반영하면 발행 가능. C-2는 함께 고치는 것을 권함.
- [ ] 발행 가능 (모든 항목 ✓)
- [ ] 발행 보류

**요청하신 '치명적 후보' 2건은 모두 통과했다.** (a) "VACUUM FULL이 제거됐다"로 읽힐 서술 없음, 오히려 '호환을 위해 남겨 둔다'·'지워진 건 아니고요'로 두 번 못 박았다. (b) deprecated 표기는 18 문서에 없고 19 문서에 처음 등장하므로 "이번에"가 정확하다.

**부수 성과:** 팩트 카드가 ⚠로 유보해 둔 두 항목이 1차 근거로 승격됐다 — pg_repack의 트리거+로그 테이블 방식(공식 문서 동작 단계 1·2·4), 개별 파티션 가능 여부(PostgreSQL 19 서버의 HINT "Consider running the command on individual partitions"). 카드의 해당 ⚠ 두 개는 지워도 된다.

### 확인에 사용한 출처
- https://www.postgresql.org/about/news/postgresql-19-released-3449/ (1차, 출시일·replaces 문장)
- https://www.postgresql.org/docs/19/sql-repack.html (1차, 잠금·logical decoding·디스크·거부 조건·MVCC 경고)
- https://www.postgresql.org/docs/19/sql-vacuum.html (1차, Description·FULL deprecated·TRUNCATE)
- https://www.postgresql.org/docs/18/sql-vacuum.html (1차, deprecated 부재 대조)
- https://www.postgresql.org/docs/19/routine-vacuuming.html (1차, MVCC 이유·공간 미반환·ACCESS EXCLUSIVE)
- https://www.postgresql.org/docs/19/logicaldecoding-explanation.html (1차, logical decoding = WAL 디코딩·슬롯)
- https://www.postgresql.org/docs/19/storage-hot.html (1차, UPDATE가 새 행 버전을 추가)
- https://reorg.github.io/pg_repack/ (1차, 트리거+로그 테이블)
- https://raw.githubusercontent.com/postgres/postgres/REL_19_STABLE/contrib/test_decoding/expected/repack.out (1차, 파티션 HINT)
- https://neon.com/postgresql/postgresql-19/repack-command (2차, 개별 파티션 교차 확인)
