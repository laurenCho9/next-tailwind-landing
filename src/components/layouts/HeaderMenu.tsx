import Image from "next/image";

const HeaderMenu = () => {
  const menuItems = [
    { label: "희곡 DB" },
    { label: "작가 DB" },
    { label: "멤버십" },
    {
      label: "프로그램",
      subMenu: ["공연 안내", "워크숍", "세미나"], // 서브메뉴가 있을 때(예시)
    },
    {
      label: "커뮤니티",
      subMenu: ["게시판", "자유토론", "모임"], // 서브메뉴가 있을 때(예시)
    },
    { label: "인스크립트" },
    { label: "문의" },
  ];

  return (
    <div className="flex items-center gap-10 text-base font-semibold text-[#6D6D6D]">
      {menuItems.map((menu) => {
        const hasSubMenu = menu.subMenu && menu.subMenu.length > 0;

        return (
          <div
            key={menu.label}
            className={`cursor-pointer ${
              hasSubMenu ? "flex items-center gap-1" : ""
            }`}
          >
            {menu.label}
            {hasSubMenu && (
              <span className="flex items-center justify-center">
                <Image
                  src="/icons/down-arrow.svg"
                  alt="down arrow"
                  width={24}
                  height={24}
                />
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HeaderMenu;
