"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Projects() {
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
      gsap.to(".projects-title", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })

      // Use a single GSAP animation for all cards with stagger
      gsap.to(".project-card", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05, // Reduced stagger time
        ease: "power2.out",
        delay: 0.2,
      })
    }
  }, [inView, isAnimated])

  const projects = [
    {
      title: "SajiloMart",
      description:
        "A full-stack e-commerce platform built using the MERN stack. Features product browsing, user authentication, cart management, and order processing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "MongoDB", "Express", "Node.js"],
      demoLink: "#",
      githubLink: "https://github.com/Dr-Vegapunk",
      inProgress: true,
    },
    {
      title: "Sikshyalaya",
      description:
        "A smart schooling solution group project made in Broadway Institution. Provides comprehensive tools for educational management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "https://github.com/Dr-Vegapunk",
    },
    {
      title: "Samajik",
      description:
        "A simple social media app group project made in Broadway Institution. Allows users to connect, share content, and interact.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      demoLink: "#",
      githubLink: "https://github.com/Dr-Vegapunk",
    },
    {
      title: "E-Commerce Admin Dashboard",
      description:
        "Developed using the Platzi Fake API. Features product, order, and user account management with a user-friendly and responsive design.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Tailwind CSS", "REST API"],
      demoLink: "#",
      githubLink: "https://github.com/Dr-Vegapunk",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio showcasing skills and projects using React and React Hooks.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "https://github.com/Dr-Vegapunk",
    },
    {
      title: "Rock-Paper-Scissors Game",
      description:
        "A simple rock paper scissor game using React. Uses React hooks (useState and useEffect) to manage the game state and side effects efficiently.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "CSS", "JavaScript"],
      demoLink: "#",
      githubLink: "https://github.com/Dr-Vegapunk",
    },
  ]

  return (
    <section id="projects" ref={ref} className="bg-zinc-800 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="projects-title mb-16 text-center text-3xl font-bold text-emerald-500 md:text-4xl"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          My Projects
        </h2>

        <div className="projects-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card border-zinc-700 bg-zinc-900 transition-all duration-300 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/10"
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              <CardContent className="p-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3} // Only prioritize the first 3 images
                  />
                  {project.inProgress && (
                    <div className="absolute right-2 top-2 rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-black">
                      In Progress
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                  <p className="mb-4 text-gray-400">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-emerald-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

