"use client";

import { useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { TMemo } from "@/types/memo";

const MemoRail = ({ items }: { items: TMemo[] }) => {
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: true, // 호버 시 일시정지
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      // 드래그 가능
      dragFree: true,
    },
    [autoplayRef.current]
  );

  return (
    <div className="relative">
      {/* 삘간 컨테이너(타이틀란) */}
      <div className="w-full h-[304px] bg-[#911A00]">
        <div className="w-full max-w-[1200px] h-full mx-auto flex items-center justify-between ">
          <div className="flex flex-col items-start justify-center text-white">
            <h3 className="font-bold text-[32px]">지금 뜨는 메모</h3>
            <p className="font-medium text-[20px]">
              다른 유저가 남기고 간 메모를 발견해보세요
            </p>
          </div>
          <div className="text-[80px] font-bold text-[#CC4B2F]">MEMO</div>
        </div>
      </div>
      {/* 노란 컨테이너 */}
      <div className="w-full h-[341px] mx-auto flex items-center justify-between bg-[#F8F1EA]"></div>
      {/* Viewport */}
      <div
        ref={emblaRef}
        className="absolute top-[230px] left-0 w-full h-full overflow-hidden"
      >
        {/* Container */}
        <div className="flex gap-8">
          {items.map((m) => (
            <article
              key={m.id}
              className="flex-[0_0_480px] rounded-lg bg-white/98 shadow-sm p-6"
            >
              <header className="mb-3 text-sm text-neutral-500">
                <span className="font-medium text-neutral-700">
                  {m.username}
                </span>
                <span className="mx-2">·</span>
                <span>
                  {new Date(m.created_at).toLocaleDateString("ko-KR", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </header>

              <h3 className="mb-2 text-lg font-semibold text-[#B8442F]">
                {m.play_title}
              </h3>
              <p className="mb-3 text-sm text-neutral-600">{m.body}</p>

              <footer className="mt-4 flex items-center justify-between text-sm">
                <span className="text-neutral-500">
                  {m.playwright} · {m.genres.join(" / ")}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MemoRail;
