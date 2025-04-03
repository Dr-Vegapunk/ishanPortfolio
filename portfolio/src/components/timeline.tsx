"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { BookOpen, Award } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Timeline() {
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
      gsap.to(".timeline-title", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      })

      // Use a single GSAP animation for all timeline items with stagger
      gsap.to(".timeline-item", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      })

      gsap.to(".timeline-line", {
        scaleY: 1,
        duration: 1,
        ease: "power2.out",
      })
    }
  }, [inView, isAnimated])

  const timelineItems = [
    {
      title: "Bachelor's Degree",
      subtitle: "ISMT College (University of Sunderland)",
      period: "Jan 2021 - Mar 2024",
      description: "Studied IT and Computer Science, focusing on web development and software engineering.",
      icon: <BookOpen className="h-6 w-6" />,
      type: "education",
    },
    {
      title: "MERN Stack Course",
      subtitle: "Broadway Institution",
      period: "Currently Running",
      description: "Comprehensive training in MongoDB, Express.js, React.js, and Node.js for full-stack development.",
      icon: <BookOpen className="h-6 w-6" />,
      type: "education",
    },
    {
      title: "JavaScript Essentials 1",
      subtitle: "Cisco",
      period: "2023",
      description: "Certification in JavaScript fundamentals and programming concepts.",
      icon: <Award className="h-6 w-6" />,
      type: "certificate",
    },
  ]

  return (
    <section id="timeline" ref={ref} className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2
          className="timeline-title mb-16 text-center text-3xl font-bold text-emerald-500 md:text-4xl"
          style={{ opacity: 0, transform: "translateY(50px)" }}
        >
          Education & Certifications
        </h2>

        <div className="timeline-container relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div
            className="timeline-line absolute left-4 top-0 h-full w-0.5 bg-emerald-500 md:left-1/2 md:-ml-0.5"
            style={{ transform: "scaleY(0)", transformOrigin: "top" }}
          ></div>

          {timelineItems.map((item, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-12 md:mb-8 ${
                index % 2 === 0 ? "md:ml-auto md:pl-8" : "md:mr-auto md:pr-8"
              } md:w-1/2`}
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 flex h-8 w-8 items-center justify-center rounded-full border-4 border-emerald-500 bg-zinc-900 ${
                  index % 2 === 0
                    ? "left-0 -ml-4 md:left-auto md:-ml-4 md:right-0"
                    : "left-0 -ml-4 md:-ml-4 md:left-auto md:right-0"
                }`}
              >
                {item.icon}
              </div>

              <div
                className={`rounded-lg border border-zinc-700 bg-zinc-800 p-6 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <span
                  className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                    item.type === "education" ? "bg-blue-900/30 text-blue-400" : "bg-purple-900/30 text-purple-400"
                  }`}
                >
                  {item.type === "education" ? "Education" : "Certificate"}
                </span>
                <h3 className="mb-1 text-xl font-bold">{item.title}</h3>
                <h4 className="mb-2 text-emerald-400">{item.subtitle}</h4>
                <p className="mb-2 text-sm text-gray-400">{item.period}</p>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

