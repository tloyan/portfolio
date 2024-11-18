import {
  GithubIcon,
  FrontendMentorIcon,
  CodewarsIcon,
  LinkedinIcon,
} from "@/app/icons/SocialIcons";
import Link from "next/link";

export function ContactSection() {
  return (
    <footer className="flex flex-col px-[1.6rem] sm:px-[3.2rem] lg:px-[16.4rem] bg-neutral-100 pt-[5.6rem] sm:pt-[12.6rem]">
      <div className="flex flex-col w-full lg:w-1/2 gap-[4rem]">
          <p className="font-oswald text-[4rem] font-medium leading-none tracking-[-.03em] sm:text-[7.2rem] lg:text-[8rem] text-center sm:text-start">Contact</p>
          <p className="font-grotesk text-[1.4rem] text-center sm:text-[1.8rem] sm:text-start">Si vous recherchez un partenaire fiable pour vos projets, capable de comprendre vos besoins et de les traduire en résultats tangibles, discutons-en ! Contactez-moi par <a target="_blank" href="mailto:thomas.loyan@gmail.com" className="font-bold border-b-[.2rem] hover:text-primary border-primary">e-mail</a> ou via <a target="_blank" href="https://www.linkedin.com/in/thomas-loyan-919776143/" className="font-bold border-b-[.2rem] hover:text-primary border-primary">LinkedIn</a>. Je suis également disponible sur différentes plateformes, comme <a href="" className="font-bold border-b-[.2rem] hover:text-primary border-primary">Malt</a></p>
      </div>
      <div className="flex items-center justify-between border-t-[.1rem] py-[2rem] mt-[5.6rem] sm:mt-[12.6rem]">
        <Link href="/" className="font-oswald text-[2.2rem] font-bold uppercase leading-none tracking-[-.06em] sm:text-[3.2rem]">
          thomasloyan
        </Link>
        <div className="flex">
          <GithubIcon />
          <FrontendMentorIcon />
          <LinkedinIcon />
          <CodewarsIcon />
        </div>
      </div>
    </footer>
  )
}