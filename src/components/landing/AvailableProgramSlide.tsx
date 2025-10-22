import SectionTitle from "../common/SectionTitle";

const AvailableProgramSlide = () => {
  return (
    <section className="w-full">
      <article className="mx-auto w-full max-w-[1440px] pb-[72px]">
        <div className="relative">
          {/* 삘간 컨테이너(타이틀란) */}
          <SectionTitle type="program" />
          {/* 노란 컨테이너 */}
          <div className="w-full h-[677px] mx-auto flex items-center justify-between bg-[#F8F1EA]"></div>
        </div>
      </article>
    </section>
  );
};
export default AvailableProgramSlide;
