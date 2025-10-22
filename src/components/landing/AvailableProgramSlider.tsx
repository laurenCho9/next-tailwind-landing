import Image from "next/image";

const AvailableProgramSlider = () => {
  return (
    <div className="absolute top-[230px] left-0 w-full h-[644px] mx-auto overflow-hidden px-5">
      {/* Container */}
      <div className="flex w-full max-w-[1200px] h-full bg-pink-300">
        <Image
          src="https://bfngixghdkjrwdzfjnbm.supabase.co/storage/v1/object/public/program-banners/program-banner1.jpg"
          alt="program slider 1"
          width={1200}
          height={644}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
export default AvailableProgramSlider;
