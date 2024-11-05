import {
  GithubIcon,
  FrontendMentorIcon,
  CodewarsIcon,
  LinkedinIcon,
} from "@/app/icons/SocialIcons";
import { SVGProps, JSX } from "react";

export function Header() {
  return (
    <div className="flex items-center justify-between p-[1.6rem] sm:p-[2.8rem] lg:px-[16.5rem] lg:py-[4rem]">
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
  );
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
