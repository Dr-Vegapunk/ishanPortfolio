"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Database, Layout, Server, FileCode, Shield, Layers, Palette } from "lucide-react"
import { useInView } from "react-intersection-observer"

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  // Use react-intersection-observer for more efficient animations
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    if (inView && !isAnimated) {
      setIsAnimated(true)

      // Simplified animation with fewer GSAP instances
      gsap.to(".skills-title", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })

      // Use a single GSAP animation for all cards with stagger
      gsap.to(".skill-card", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05, // Reduced stagger time
        ease: "power2.out",
        delay: 0.2,
      })
    }
  }, [inView, isAnimated])

  const skills = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8 text-emerald-500" />,
      items: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8 text-emerald-500" />,
      items: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-emerald-500" />,
      items: ["MongoDB", "Mongoose"],
    },
    {
      title: "UI Libraries",
      icon: <Palette className="h-8 w-8 text-emerald-500" />,
      items: ["Shadcn UI", "Hero UI", "Material UI"],
    },
    {
      title: "State Management",
      icon: <Layers className="h-8 w-8 text-emerald-500" />,
      items: ["Redux Toolkit", "Context API"],
    },
    {
      title: "Form Handling",
      icon: <FileCode className="h-8 w-8 text-emerald-500" />,
      items: ["Formik", "Yup"],
    },
    {
      title: "Authentication",
      icon: <Shield className="h-8 w-8 text-emerald-500" />,
      items: ["JWT (JSON Web Tokens)"],
    },
    {
      title: "AI Tools",
      icon: <Code className="h-8 w-8 text-emerald-500" />,
      items: ["V0", "Bolt", "Easel"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="skills-title mb-16 text-center text-3xl font-bold text-emerald-500 md:text-4xl"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          Skills & Expertise
        </h2>

        <div className="skills-grid grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card rounded-lg border border-zinc-700 bg-zinc-800 p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10"
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              <div className="mb-4 flex items-center">
                {skill.icon}
                <h3 className="ml-3 text-xl font-semibold">{skill.title}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

