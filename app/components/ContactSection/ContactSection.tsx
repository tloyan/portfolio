import {
  GithubIcon,
  FrontendMentorIcon,
  CodewarsIcon,
  LinkedinIcon,
} from "@/app/icons/SocialIcons";
import { SVGProps, JSX } from "react";

export function ContactSection() {
  return (
    <footer className="flex flex-col px-[1.6rem] sm:px-[3.2rem] lg:px-[16.4rem] bg-neutral-100 pt-[5.6rem] sm:pt-[12.6rem]">
      <div className="flex flex-col w-full lg:w-1/2 gap-[4rem]">
          <p className="font-oswald text-[4rem] font-medium leading-none tracking-[-.03em] sm:text-[7.2rem] lg:text-[8rem] text-center sm:text-start">Contact</p>
          <p className="font-grotesk text-[1.4rem] text-center sm:text-[1.8rem] sm:text-start">I would love to hear about your project and how I could help. You could join me directly by <a href="mail:to='thomas.loyan@gmail.com'" className="font-bold border-b-[.2rem] hover:text-primary border-primary">mail</a> or via social media with <a href="" className="font-bold border-b-[.2rem] hover:text-primary border-primary">linkedin</a>. I’m also available on diferent platform like <a href="" className="font-bold border-b-[.2rem] hover:text-primary border-primary">malt</a>.</p>
      </div>
      <div className="flex items-center justify-between border-t-[.1rem] py-[2rem] mt-[5.6rem] sm:mt-[12.6rem]">
        <p className="font-oswald text-[2.2rem] font-bold uppercase leading-none tracking-[-.06em] sm:text-[3.2rem]">
          thomasloyan
        </p>
        <div className="flex space-x-[1.2rem] sm:space-x-[1.6rem]">
          <Icon svg={GithubIcon} />
          <Icon svg={FrontendMentorIcon} />
          <Icon svg={LinkedinIcon} />
          <Icon svg={CodewarsIcon} />
        </div>
      </div>
    </footer>
  )
}

function Icon({
  svg,
}: {
  svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}) {
  const Svg = svg;
  return (
    <div className="h-auto w-[2rem] hover:fill-orange-600 sm:w-[2.4rem]">
      <Svg className="" />
    </div>
  );
}