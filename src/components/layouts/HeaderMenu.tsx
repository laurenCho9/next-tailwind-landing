import Image from "next/image";

const HeaderMenu = () => {
  return (
    <div className="flex items-center gap-10 text-base font-semibold text-[#6D6D6D]">
      <div className="cursor-pointer">희곡 DB</div>
      <div className="cursor-pointer">작가 DB</div>
      <div className="cursor-pointer">멤버십</div>
      <div className="cursor-pointer flex items-center gap-1">
        프로그램
        <span className="flex items-center justify-center w-6 h-6">
          <Image
            src="/icons/down-arrow.svg"
            alt="down arrow"
            width={12}
            height={12}
          />
        </span>
      </div>
      <div className="cursor-pointer flex items-center gap-1">
        커뮤니티
        <span className="flex items-center justify-center w-6 h-6">
          <Image
            src="/icons/down-arrow.svg"
            alt="down arrow"
            width={12}
            height={12}
          />
        </span>
      </div>
      <div className="cursor-pointer">인스크립트</div>
      <div className="cursor-pointer">문의</div>
    </div>
  );
};

export default HeaderMenu;
