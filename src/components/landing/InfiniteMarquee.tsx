"use client";

import Image from "next/image";

const PHRASE = "A home for words and scripts. Spoken & Written, Together";

const InfiniteMarquee = () => {
  // duration 바꾸면 속도 조절 (숫자 ↑ = 느림)
  const DURATION = "92s";

  const MarqueeText = () => (
    <>
      <p className="text-[32px] leading-none font-semibold text-[#DA8248] whitespace-nowrap">
        {PHRASE}
      </p>
      <span className="inline-flex items-center justify-center">
        <Image src="/icons/twinkle.png" alt="twinkle" width={36} height={36} />
      </span>
    </>
  );

  return (
    <div className="marquee relative w-full h-[76px] bg-[#911A00] overflow-hidden">
      <div
        className="marquee-track h-full flex items-center gap-4 pr-4"
        style={{ "--marquee-duration": DURATION } as React.CSSProperties}
      >
        {/* 첫 번째 세트 */}
        <div className="flex items-center h-full gap-4 pr-4">
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
        </div>
        {/* 두 번째 세트(무한루프용, 스크린리더 제외) */}
        {/* NOTE: 루프 전환 시 빈 공간 없이 자연스럽게 이어지게 해주는 역할 */}
        <div className="flex items-center h-full gap-4 pr-4" aria-hidden="true">
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
          <MarqueeText />
        </div>
      </div>
    </div>
  );
};
export default InfiniteMarquee;
