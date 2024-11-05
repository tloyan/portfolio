import { HeroSection } from "./components/HeroSection/HeroSection"
import { Header } from "./components/Header/Header"

export default function Page() {
  return (
    <div className="h-full">
      <Header />
      <HeroSection />
    </div>
  )
}