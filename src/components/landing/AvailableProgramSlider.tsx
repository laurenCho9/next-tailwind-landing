"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { useCallback, useEffect, useRef, useState } from "react";
import SliderControls from "../common/SliderControls";

type TSlide = {
  src: string;
  alt: string;
  priority?: boolean;
};

// Supabase Storage 베이스 URL (바꿔도 됨)
const BASE =
  "https://bfngixghdkjrwdzfjnbm.supabase.co/storage/v1/object/public/program-banners";

const SLIDES: TSlide[] = [
  {
    src: `${BASE}/program-banner1.jpg`,
    alt: "program banner 1",
    priority: true,
  },
  { src: `${BASE}/program-banner2.jpg`, alt: "program banner 2" },
  { src: `${BASE}/program-banner3.jpg`, alt: "program banner 3" },
];

const OPTIONS = {
  loop: true,
  align: "start" as const,
  dragFree: false,
};

const AvailableProgramSlider = () => {
  const autoplayRef = useRef(
    Autoplay({
      delay: 2400,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
    autoplayRef.current,
    Fade(), // 크로스페이드 전환
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const total = SLIDES.length;

  return (
    <article
      aria-label="Available program slides"
      className="absolute top-[230px] left-0 w-full aspect-[1200/644] mx-auto overflow-hidden"
    >
      {/* Viewport */}
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        {/* Container */}
        <div className="flex h-full w-full max-w-[1200px] mx-auto">
          {SLIDES.map((s, i) => (
            <div key={i} className="relative flex-[0_0_100%] h-full">
              {/* 배경 이미지 */}
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={s.priority}
                className="object-cover"
                sizes="(min-width:1200px) 1200px, 100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* 하단 중앙 컨트롤 바 (화살표 + 1 / 3 카운터) */}
      <SliderControls
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
        selectedIndex={selectedIndex}
        total={total}
      />
    </article>
  );
};
export default AvailableProgramSlider;
