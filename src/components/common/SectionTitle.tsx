"use client";

type SectionType = "memo" | "program";

interface SectionTitleProps {
  type: SectionType;
}

const SectionTitle = ({ type }: SectionTitleProps) => {
  let bgColor = "";
  let title = "";
  let titleColor = "";
  let subtitle = "";
  let subtitleColor = "";
  let keyword = "";
  let keywordColor = "";
  let justify = "";

  switch (type) {
    case "memo":
      bgColor = "bg-[#911A00]";
      title = "지금 뜨는 메모";
      titleColor = "text-white";
      subtitle = "다른 유저가 남기고 간 메모를 발견해보세요";
      subtitleColor = "text-white";
      keyword = "MEMO";
      keywordColor = "text-[#CC4B2F]";
      justify = "justify-end";
      break;

    case "program":
      bgColor = "bg-section-program";
      title = "지금 신청할 수 있는 프로그램";
      titleColor = "text-[#911A00]";
      subtitle = "인스크립트 프로그램에 참여하세요";
      subtitleColor = "text-[#2A2A2A]";
      keyword = "Programme";
      keywordColor = "text-[#F4E4D6]";
      justify = "justify-center";
      break;
  }

  return (
    <div
      className={`w-full flex items-center justify-center h-[304px] ${bgColor}`}
    >
      <div className="w-full max-w-[1200px] h-[104px] m-auto flex items-center justify-between ">
        <div className={`h-full flex flex-col items-start ${justify}`}>
          <h1 className={`font-bold text-[32px]  ${titleColor}`}>{title}</h1>
          <p className={`font-medium text-[20px]  ${subtitleColor}`}>
            {subtitle}
          </p>
        </div>
        <div
          className={`h-full flex items-center text-[80px] font-bold ${keywordColor}`}
        >
          {keyword}
        </div>
      </div>
    </div>
  );
};
export default SectionTitle;
