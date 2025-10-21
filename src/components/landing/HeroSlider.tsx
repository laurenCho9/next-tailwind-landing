"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState, useRef } from "react";

type TSlide = {
  src: string;
  title: string;
  subtitle: string;
  priority?: boolean;
};

const SLIDES: TSlide[] = [
  {
    src: "/images/main-top-banner1.jpg",
    title: "Playscripts, Playwrights - and Us",
    subtitle: "Archiving playscripts, shaping a new theatre community",
    priority: true,
  },
  {
    src: "/images/main-top-banner2.jpg",
    title: "Explore Dramatic Works",
    subtitle: "Discover playwrights and their stories",
  },
  {
    src: "/images/main-top-banner3.jpg",
    title: "Join the Community",
    subtitle: "Share and collaborate on playscripts",
  },
];

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  // 페이드 플러그인과 함께 쓰면 슬라이드 너비 100% 기준으로 OK
  dragFree: false,
};

const HeroSlider = () => {
  const autoplayRef = useRef(
    Autoplay({
      delay: 2600,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [autoplayRef.current]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const total = SLIDES.length;

  return (
    <section
      aria-label="Hero slides"
      className="relative mx-auto w-full max-w-[1440px] aspect-[1440/795] overflow-hidden"
    >
      {/* Viewport */}
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        {/* Container */}
        <div className="flex h-full">
          {SLIDES.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              {/* 배경 이미지 */}
              <Image
                src={s.src}
                alt={s.title}
                fill
                priority={s.priority}
                className="object-cover"
                sizes="(min-width:1440px) 1440px, 100vw"
              />

              {/* 오버레이 텍스트 */}
              <div className="absolute inset-x-0 top-[75%] -translate-y-1/2 flex flex-col items-center justify-center text-center text-white gap-3">
                <div className="select-none font-[GreatVibes] text-[clamp(32px,6vw,100px)] leading-none">
                  {s.title}
                </div>
                {s.subtitle && (
                  <p className="select-none text-[clamp(14px,2vw,32px)] font-light leading-none text-[#868686]">
                    {s.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 중앙 컨트롤 바 (화살표 + 1 / 3 카운터) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        {/* 좌측 화살표 버튼 */}
        <button
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="cursor-pointer pointer-events-auto grid place-items-center"
        >
          <Image
            src="/icons/slider-left-arrow.png"
            alt="slider left arrow"
            width={34}
            height={34}
          />
        </button>

        {/* “1 / 3” 카운터*/}
        <div className="select-none font-serif text-xl font-bold">
          <span className="text-white">{selectedIndex + 1}</span>
          <span className="mx-2 text-[#911A00]">/</span>
          <span className="text-[#911A00]">{total}</span>
        </div>

        {/* 우측 화살표 버튼 */}
        <button
          onClick={scrollNext}
          aria-label="Next slide"
          className="cursor-pointer pointer-events-auto grid place-items-center"
        >
          <Image
            src="/icons/slider-right-arrow.png"
            alt="slider right arrow"
            width={34}
            height={34}
          />
        </button>
      </div>
    </section>
  );
};
export default HeroSlider;
