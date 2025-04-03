"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
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
      gsap.to(".section-title", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })

      gsap.to(".about-content", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.2,
      })

      gsap.to(".about-image", {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: 0.3,
      })
    }
  }, [inView, isAnimated])

  const handleDownloadCV = () => {
    // Create a link to download the CV
    const link = document.createElement("a")
    link.href = "/Ishan_Karki_CV_.pdf" // Path to your CV file in the public folder
    link.download = "Ishan_Karki_CV_.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="about" ref={ref} className="bg-zinc-800 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="section-title mb-16 text-center text-3xl font-bold text-emerald-500 md:text-4xl"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          About Me
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          <div
            className="about-content flex flex-col justify-center"
            style={{ opacity: 0, transform: "translateY(50px)" }}
          >
            <p className="mb-6 text-lg text-gray-300">
              I'm a passionate MERN stack developer with a strong foundation in web development. Currently pursuing my
              Bachelor's degree from ISMT College (University of Sunderland), I'm also enhancing my skills through a
              MERN Stack course at Broadway Institution.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              My journey in tech is driven by curiosity and a desire to create meaningful digital experiences. I enjoy
              building responsive, user-friendly applications and am constantly learning new technologies to improve my
              craft.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or expanding my
              knowledge in web development.
            </p>

            <Button
              onClick={handleDownloadCV}
              className="mt-4 w-fit flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Button>
          </div>

          <div
            className="about-image flex items-center justify-center"
            style={{ opacity: 0, transform: "translateX(50px)" }}
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-emerald-500">
              <Image
                src="/ishan.jpg?height=320&width=320"
                alt="Ishan Karki"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

