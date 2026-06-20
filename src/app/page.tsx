import { Navbar } from "@/components/portfolio/Navbar"
import { Hero } from "@/components/portfolio/Hero"
import { Stats } from "@/components/portfolio/Stats"
import { Projects } from "@/components/portfolio/Projects"
import { Timeline } from "@/components/portfolio/Timeline"
import { Certifications } from "@/components/portfolio/Certifications"
import { Footer } from "@/components/portfolio/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Projects />
      <Certifications />
      <Timeline />
      <Footer />
    </main>
  )
}
