import Image from "next/image";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-6 border-b border-gray-200 bg-[#FAF8F6]">
      <div className="max-w-[1440px] bg-pink-100 flex items-center justify-between px-15 w-full">
        <HeaderLogo />
        <div className="flex items-center gap-10 text-sm font-medium text-gray-700">
          <div>희곡 DB</div>
          <div>작가 DB</div>
          <div>멤버십</div>
          <div className="flex items-center gap-1">
            프로그램
            <span className="flex items-center justify-center w-6 h-6 bg-red-500 rounded-full">
              <Image
                src="/icons/alram.svg"
                alt="alram"
                width={16}
                height={18}
                priority={true}
              />
            </span>
          </div>
          <div>커뮤니티</div>
          <div>인스크립트</div>
          <div>문의</div>
        </div>
        <div className="flex items-center justify-end gap-4">
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100">
            <Image
              src="/icons/alram.svg"
              alt="alram"
              width={16}
              height={18}
              priority={true}
            />
          </button>
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100">
            <Image
              src="/icons/alram.svg"
              alt="alram"
              width={16}
              height={18}
              priority={true}
            />
          </button>
          <button className="flex items-center justify-center w-8 h-8 bg-white border border-gray-300 rounded-full shadow-md hover:bg-gray-100">
            <Image
              src="/icons/alram.svg"
              alt="alram"
              width={16}
              height={18}
              priority={true}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
