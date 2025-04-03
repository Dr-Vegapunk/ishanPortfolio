"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)
  const textRef = useRef(null)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isAnimating) return;
  
    setIsAnimating(true);
    const ctx = gsap.context(() => {
      // Simplified animation timeline for better performance
      const tl = gsap.timeline();
  
      tl.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .from(
          ".hero-button",
          {
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.3"
        )
        .from(
          ".hero-social",
          {
            x: -10,
            opacity: 0,
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.1,
          },
          "-=0.2"
        );
  
      // Simplified floating animation
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
  
      // Optimized text scramble effect
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let interval: number | undefined;
  
      const textElement = textRef.current;
      if (textElement) {
        let iteration = 0;
        const originalText = textElement.innerText;
  
        if (interval) { // Added conditional check
          clearInterval(interval);
        }
  
        interval = setInterval(() => {
          textElement.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
  
          if (iteration >= originalText.length) {
            if (interval) { // Added conditional check
              clearInterval(interval);
            }
          }
  
          iteration += 1 / 3;
        }, 30);
      }
    }, heroRef);
  
    return () => {
      ctx.revert();
      setIsAnimating(false);
      if(interval){ //Added conditional check.
        clearInterval(interval);
      }
    };
  }, [isAnimating]);

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
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-900 pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="grid-pattern absolute inset-0 opacity-10"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 text-center md:py-32">
        <h1 className="hero-title mb-4 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-emerald-500" ref={textRef}>
            ISHAN KARKI
          </span>
        </h1>
        <h2 className="hero-subtitle mb-6 text-xl font-medium text-gray-300 md:text-2xl">MERN Stack Developer</h2>
        <p className="hero-description mx-auto mb-8 max-w-2xl text-gray-400">
          An aspiring IT enthusiast from Kathmandu, Nepal. I&apos;m eagerly seeking internship opportunities to apply and
          expand my skills in web development.
        </p>
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          <Button className="hero-button bg-emerald-600 hover:bg-emerald-700" size="lg" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button
            className="hero-button flex items-center gap-2"
            variant="outline"
            size="lg"
            onClick={handleDownloadCV}
          >
            <Download className="h-4 w-4" />
            Download CV
          </Button>
          <Button className="hero-button" variant="outline" size="lg" asChild>
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Dr-Vegapunk"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social text-gray-400 transition-colors hover:text-white"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/ishan-karki-1a9274256"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social text-gray-400 transition-colors hover:text-white"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:Ishankarki7624@gmail.com"
            className="hero-social text-gray-400 transition-colors hover:text-white"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="scroll-indicator flex flex-col items-center">
            <span className="mb-2 text-sm text-gray-400">Scroll Down</span>
            <ArrowDown className="h-5 w-5 text-emerald-500" />
          </div>
        </div>
      </div>
    </section>
  )
}

