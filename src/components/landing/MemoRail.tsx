"use client";

import { useRef } from "react";
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

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      slidesToScroll: 1,
      // 드래그 가능
      dragFree: true,
    },
    [autoplayRef.current]
  );

  return (
    <>
      {/* Viewport */}
      <div
        ref={emblaRef}
        className="absolute top-[230px] left-0 w-full h-full overflow-hidden px-5"
      >
        {/* Container */}
        <div className="flex gap-5">
          {items.map((m) => (
            // NOTE: flex-[0_0_388px]란? grow: 0 → 남는 공간을 늘려서 차지하지 않음, shrink: 0 → 공간이 작아져도 줄어들지 않음, basis: 388px → 기본 너비를 388px로 고정
            <article
              key={m.id}
              className="flex-[0_0_388px] h-[380px] bg-white shadow-[-4px_4px_4px_rgba(172,121,58,0.1)] p-8 last:mr-5"
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
    </>
  );
};
export default MemoRail;
