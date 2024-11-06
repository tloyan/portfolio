import { HeroSection } from "./components/HeroSection/HeroSection"
import { Header } from "./components/Header/Header"
import { WorkWithSection } from "./components/WorkWithSection/WorkWithSection"
import { StackSection } from "./components/StackSection/StackSection"
import { AboutSection } from "./components/AboutSection/AboutSection"

export default function Page() {
  return (
    <div className="h-full">
      <Header />
      <HeroSection />
      <main className="px-[1.6rem] sm:px-[3.2rem] lg:px-[16.4rem]">
        <WorkWithSection />
        <StackSection />
        <AboutSection />
      </main>
    </div>
  )
}