import Image from "next/image";

const HeaderSideIcons = () => {
  return (
    <div className="flex items-center justify-end gap-4">
      <button className="relative cursor-pointer flex items-center justify-center w-6 h-6">
        <Image src="/icons/alram.svg" alt="alram" width={16} height={18} />
        <span className="absolute top-[3px] right-1 w-[6px] h-[6px] bg-[#911A00] rounded-full" />
      </button>
      <button className="relative cursor-pointer flex items-center justify-center w-6 h-6">
        <Image src="/icons/mail.svg" alt="mail" width={16} height={14} />
        <span className="absolute top-[3px] right-[2.5px] w-[6px] h-[6px] bg-[#911A00] rounded-full" />
      </button>
      <button className="relative cursor-pointer flex items-center justify-center w-6 h-6">
        <Image src="/icons/profile.svg" alt="profile" width={18} height={18} />
      </button>
    </div>
  );
};

export default HeaderSideIcons;
