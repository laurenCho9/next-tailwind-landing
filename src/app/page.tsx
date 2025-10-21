import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <main className="relative flex flex-col items-center justify-center ">
        {/* 슬라이드 배너 */}
        <section className="relative mx-auto w-full max-w-[1440px] aspect-[1440/795] overflow-hidden">
          <Image
            // Image를 배경처럼 사용하기 위해 fill 속성 사용
            src="/images/main-top-banner.png"
            alt="main top banner"
            fill
            priority={true}
            className="object-cover" // 전체 채우면서 잘림 허용 (배경처럼)
            sizes="(min-width: 1440px) 1440px, 100vw" // 성능 최적화: 뷰포트에 맞는 소스 선택
          />
        </section>
      </main>
    </div>
  );
}
