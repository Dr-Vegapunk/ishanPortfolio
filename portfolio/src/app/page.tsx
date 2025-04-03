import dynamic from "next/dynamic"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"

// Dynamically import components that aren't needed immediately
const About = dynamic(() => import("@/components/about"), { ssr: true })
const Skills = dynamic(() => import("@/components/skills"), { ssr: true })
const Projects = dynamic(() => import("@/components/projects"), { ssr: true })
const Timeline = dynamic(() => import("@/components/timeline"), { ssr: true })
const Contact = dynamic(() => import("@/components/contact"), { ssr: true })
const Footer = dynamic(() => import("@/components/footer"), { ssr: true })

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

