import { Navbar } from "@/components/navbar"
import { SiteBackground } from "@/components/site-background"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Projects } from "@/components/sections/projects"
import { Certificates } from "@/components/sections/certificates"
import { Skills } from "@/components/sections/skills"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Page() {
  return (
    <>
      <SiteBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
