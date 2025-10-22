import SectionTitle from "../common/SectionTitle";
import AvailableProgramSlider from "./AvailableProgramSlider";

const AvailableProgram = () => {
  return (
    <section className="w-full">
      <article className="mx-auto w-full max-w-[1440px]">
        <div className="relative">
          {/* 그라데이션 컨테이너(타이틀란) */}
          <SectionTitle type="program" />
          {/* 노란 컨테이너 */}
          <div className="w-full h-[677px] mx-auto flex items-center justify-between bg-[#F8F1EA]"></div>
          {/* 프로그램 슬라이더 */}
          <AvailableProgramSlider />
        </div>
      </article>
    </section>
  );
};
export default AvailableProgram;
