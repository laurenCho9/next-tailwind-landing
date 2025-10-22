import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href="/" className="cursor-pointer" aria-label="홈으로 이동">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={160}
        height={36}
        priority={true}
        className="w-[160px] h-[36px]"
      />
    </Link>
  );
};

export default HeaderLogo;
