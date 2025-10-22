## Mission
- [x]  NEXTJS 기반
    - [x]  Image 컴포넌트 사용으로 이미지 최적화
        - [x] priority(즉시 로드)는 브라우저에서 즉시 보여지는 로고와 첫번째 슬라이드 배너 이미지에만 적용  
- [x]  Tailwindcss 기반
- [x]  NAVBAR는 형태만(빨간색 알림 표시 분리 구현)
- [x]  검색 기능으로 하단에 메모 카드들 필터링 구현
    - [x]  1. 검색어가 없는 경우: 모든 메모를 created_at 기준 최신순으로 정렬하여 렌더링
    - [x]  2. 해시태그 검색 (#으로 시작하는 경우): 예)"#로맨스"
    - [x]  3. 일반 키워드 검색 (해시태그가 아닌 경우): 대소문자 구분 없이 부분 일치 검색 (ilike)
        - [x] 3-1. play_title (작품 제목)
        - [x] 3-2. playwright (작가명)
        - [x] 3-3. body (메모 본문)
    - [x] 검색어는 trim()으로 앞뒤 공백 제거
- [x]  메모 카드들
    - [x]  왼쪽으로 자동으로 슬라이딩 되게 애니메이션 추가
    - [x]  SUPABASE 연동해서 더미 데이타로 GET 요청해서 뿌려주세요
- [x]  좌측에 프로그램 배너 이미지는  SUPABASE STORAGE 안에 이미지를 호스팅 한다음에 받아서 보여주세요
- [x]  디자인 기반 퍼블리싱
    - [x]  슬라이딩효과
        - [x]  Embla Carousel 선택:
            - [x]  이유: 가볍고(App용 SSR 친화) 커스터마이즈가 쉬워서 “배경 이미지 + 오버레이 텍스트” 와 같은 간단한 구조일 때 사용
            - [x]  비교: Swiper는 기능이 많고, 조금 무거움
    - [x]  SUPABASE 조회 기능 정도 연동해서 구현(더미데이타 가능)
        - [x]  추가로 좋아요 버튼 클릭시 좋아요 +1 데이터 SUPABASE에 업데이트 구현(SUPABASE SQL에서 update 권한 추가 허용 )
            - [x]  시작할 때 익명(anon)에게는 SELECT만 허용해둔 상태였으나, update 권한/정책(RLS)을 따로 열어줌
- [x]  github 업로드 및 vercel 배포

## SUPABASE Table 구조(Memo Data)
<img width="667" height="701" alt="image" src="https://github.com/user-attachments/assets/af0d2456-bf36-434f-8cd3-c11720077122" />

```ts
export type TMemo = {
  id: string;
  created_at: string;
  username: string;
  play_title: string;
  playwright: string;
  genres: string[];
  body: string;
  likes: number;
  comments: number;
  body_title: string | null;
};


```
