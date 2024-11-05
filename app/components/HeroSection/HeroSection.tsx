// import Image from "next/image";

export function HeroSection() {
  return (
    <div className="flex flex-col font-oswald pt-[10rem] pb-[14rem]">
      <div className="flex flex-col items-center">
        <h1 className="text-center  text-[7.2rem] sm:text-[11.8rem] lg:text-[14.4rem] font-bold uppercase leading-none tracking-[-.06em]">
          thomas<br />loyan
        </h1>
        <div className="mt-[-1.4rem] sm:mt-[-2.8rem]  h-[20.2rem] w-[20.2rem] bg-slate-200 rounded-[1rem]">
          {/* <Image src={null} alt="" /> */}
        </div>
        <h2 className="text-center  text-[2.4rem] font-medium leading-none tracking-[-.03em] mt-[.4rem]">
          Frontend Engineer <br className="sm:hidden" /><span className="hidden sm:inline">|</span> 8 years in web technologies
        </h2>
      </div>
    </div>
  );
}

