import {
  GithubIcon,
  FrontendMentorIcon,
  CodewarsIcon,
  LinkedinIcon,
} from "@/app/icons/SocialIcons";

export function Header() {
  return (
    <div className="flex items-center justify-between p-[1.6rem] sm:p-[2.8rem] lg:px-[16.5rem] lg:py-[4rem]">
      <p className="font-oswald text-[2.2rem] font-bold uppercase leading-none tracking-[-.06em] sm:text-[3.2rem]">
        thomasloyan
      </p>
      <div className="flex">
        <GithubIcon />
        <FrontendMentorIcon />
        <LinkedinIcon />
        <CodewarsIcon />
      </div>
    </div>
  );
}
