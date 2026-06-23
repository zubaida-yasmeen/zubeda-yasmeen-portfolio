
import { Navbar } from "@/components/portfolio/Navbar"
import { Hero } from "@/components/portfolio/Hero"
import { About } from "@/components/portfolio/About"
import { Skills } from "@/components/portfolio/Skills"
import { Stats } from "@/components/portfolio/Stats"
import { Projects } from "@/components/portfolio/Projects"
import { Publications } from "@/components/portfolio/Publications"
import { Timeline } from "@/components/portfolio/Timeline"
import { Certifications } from "@/components/portfolio/Certifications"
import { Footer } from "@/components/portfolio/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Stats />
      <Projects />
      <Publications />
      <Certifications />
      <Timeline />
      <Footer />
    </main>
  )
}
