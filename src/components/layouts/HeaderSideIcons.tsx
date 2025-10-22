import Image from "next/image";

const HeaderSideIcons = () => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button className="relative cursor-pointer flex items-center justify-center">
        <Image src="/icons/alert.svg" alt="alert" width={24} height={24} />
        <span className="absolute top-[3px] right-1 w-[6px] h-[6px] bg-[#911A00] rounded-full" />
      </button>
      <button className="relative cursor-pointer flex items-center justify-center">
        <Image src="/icons/mail.svg" alt="mail" width={24} height={24} />
        <span className="absolute top-[3px] right-[1px] w-[6px] h-[6px] bg-[#911A00] rounded-full" />
      </button>
      <button className="relative cursor-pointer flex items-center justify-center">
        <Image src="/icons/profile.svg" alt="profile" width={24} height={24} />
      </button>
    </div>
  );
};

export default HeaderSideIcons;
