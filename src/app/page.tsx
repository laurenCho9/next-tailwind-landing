import DramaSearch from "@/components/landing/DramaSearch";
import HeroSlider from "@/components/landing/HeroSlider";
import InfiniteMarquee from "@/components/landing/InfiniteMarquee";

export default function Home() {
  return (
    <div className="w-full">
      <main className="relative flex flex-col items-center justify-center ">
        {/* 슬라이드 배너 */}
        {/* NOTE: Embla Carousel 선택: “배경 이미지 + 오버레이 텍스트” 구조일 때 적합
        가볍고(App용 SSR 친화) 커스터마이즈가 쉬움 */}
        <HeroSlider />

        {/* 텍스트 자동 무한 스크롤 */}
        {/* NOTE: 이 케이스는 **CSS-only 마키(marquee)**가 가장 간단·가벼움,
        텍스트+아이콘 블록을 두 번 이어붙이고, 트랙에 translateX 애니메이션을 걸면 매끈하게 무한 루프 */}
        <InfiniteMarquee />

        {/* 희곡 검색 */}
        <DramaSearch />
      </main>
    </div>
  );
}
