import { Header } from "@/app/components/Header/Header"
import { ListProjectCard } from "@/app/components/ProjectsSection/ProjectsSection"
import { ContactSection } from "@/app/components/ContactSection/ContactSection"
import projects from "@/app/data/projects.json"

export default function Page() {
  return (
    <div className="h-full">
      <Header />
      <main className="py-[5.6rem] sm:py-[12.6rem] px-[1.6rem] sm:px-[3.2rem] lg:px-[16.4rem]">
        <ListProjectCard projects={projects} />
      </main>
      <footer className="">
        <ContactSection />
      </footer>
    </div>
  )
}