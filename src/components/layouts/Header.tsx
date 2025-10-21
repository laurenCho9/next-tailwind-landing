import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import HeaderSideIcons from "./HeaderSideIcons";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center py-6 bg-[#FAF8F6]">
      <div className="max-w-[1440px] flex items-center justify-between px-15 w-full">
        <HeaderLogo />
        <HeaderMenu />
        <HeaderSideIcons />
      </div>
    </header>
  );
};

export default Header;
