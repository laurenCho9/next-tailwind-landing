import Image from "next/image";
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-6 border-b border-gray-200 bg-[#FAF8F6]">
      <div className="max-w-[1440px] bg-pink-100 flex items-center justify-between px-15 w-full">
        <HeaderLogo />
        <HeaderMenu />
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
