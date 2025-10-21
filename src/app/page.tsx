import HeroSlider from "@/components/landing/HeroSlider";

export default function Home() {
  return (
    <div className="w-full">
      <main className="relative flex flex-col items-center justify-center ">
        {/* 슬라이드 배너 */}
        {/* Embla Carousel 선택: “배경 이미지 + 오버레이 텍스트” 구조일 때 적합
        가볍고(App용 SSR 친화) 커스터마이즈가 쉬움 */}
        <HeroSlider />
      </main>
    </div>
  );
}
