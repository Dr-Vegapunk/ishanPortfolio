"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="footer-content flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-xl font-bold">
              Ishan<span className="text-emerald-500">Karki</span>
            </h2>
            <p className="mt-2 text-sm text-gray-400">MERN Stack Developer</p>
          </div>

          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Ishan Karki. All rights reserved.</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Dr-Vegapunk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/ishan-karki-1a9274256"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:Ishankarki7624@gmail.com"
              className="text-gray-400 transition-colors hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

