import Image from "next/image";

const SliderControls = ({
  scrollPrev,
  scrollNext,
  selectedIndex,
  total,
}: {
  scrollPrev: () => void;
  scrollNext: () => void;
  selectedIndex: number;
  total: number;
}) => {
  return (
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
  );
};
export default SliderControls;
