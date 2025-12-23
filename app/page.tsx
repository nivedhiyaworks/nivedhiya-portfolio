"use client"

import { useEffect, useState } from "react"

type Track = "ux" | "visual" | null

export default function Portfolio() {
  const [selectedTrack, setSelectedTrack] = useState<Track>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (selectedTrack) return

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / window.innerHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [selectedTrack])

  const content = {
    ux: {
      heading: "Product & UX Designer focused on clear, usable digital experiences",
      subheading:
        "I design user-centred products by translating complex requirements into simple, practical user flows and interfaces.",
      projects: [
        { title: "Rural Digital Access Platform", description: "Connecting underserved communities", year: "2024" },
        { title: "Fintech Expense Tracker", description: "Simplifying personal finance", year: "2023" },
        { title: "AI Learning Dashboard", description: "Accessible data for educators", year: "2023" },
      ],
    },
    visual: {
      heading: "UI & Brand Designer crafting refined, memorable visual systems",
      subheading:
        "I create cohesive brand identities and interface designs that balance aesthetics with functionality.",
      projects: [
        { title: "Brand Identity Project", description: "Sustainable tech startup", year: "2024" },
        { title: "Design System Refresh", description: "Enterprise UI overhaul", year: "2023" },
        { title: "Editorial Design Series", description: "Visual storytelling", year: "2023" },
      ],
    },
  }

  /* ---------------- LANDING STATE ---------------- */

  if (!selectedTrack) {
    return (
      <div className="relative min-h-[200vh] bg-background text-foreground">
        {/* Logo */}
        <header className="fixed top-6 left-6 z-50">
          <img src="/logo.svg" alt="Logo" className="h-7 w-auto" />
        </header>

        {/* Name */}
        <div
          className="fixed left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{ opacity: scrollProgress > 0 ? 0 : 1 }}
        >
          <div className="text-sm tracking-wide text-muted-foreground">
            NIVEDHIYA J PANICKER
          </div>
        </div>

        {/* Track selector */}
        <div className="fixed inset-0 flex flex-col md:flex-row">
          {/* UX */}
          <div className="flex flex-1 items-center justify-center">
            <h2
                className="font-round cursor-pointer text-5xl md:text-6xl lg:text-7xl transition-all duration-300"
                style={{
                  transform: `translateY(-${scrollProgress * 24}px)`,
                  opacity: 1 - scrollProgress * 0.8,
                }}
                onClick={() => setSelectedTrack("ux")}
              >
                Product & UX
           </h2>
          </div>

          {/* Visual */}
          <div className="flex flex-1 items-center justify-center">
            <h2
              className="font-round cursor-pointer text-5xl md:text-6xl lg:text-7xl transition-all duration-300"
              style={{
                transform: `translateY(-${scrollProgress * 40}px)`,
                opacity: 1 - scrollProgress,
              }}
              onClick={() => setSelectedTrack("visual")}
            >
              UI & Brand
          </h2>
          </div>
        </div>

        {/* About preview */}
        <main className="relative mx-auto max-w-4xl px-6 pt-[100vh]">
          <section
            className="min-h-screen py-24 transition-opacity duration-700"
            style={{ opacity: scrollProgress }}
          >
            <h2 className="font-round mb-12 text-4xl">About Me</h2>

            <div className="flex flex-col gap-12 md:flex-row">
              <div className="flex-1 space-y-6 text-muted-foreground">
                <p>
                  I’m a final-year Product Design student interested in UX, systems thinking,
                  and calm, accessible digital experiences.
                </p>
                <p>
                  I enjoy working across research, structure, and interface design with a focus
                  on clarity and real-world constraints.
                </p>
              </div>

              {/* YOUR IMAGE */}
              <div className="w-40">
                <img
                  src="/nivedhiya.jpg"
                  alt="Nivedhiya J Panicker"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }

  /* ---------------- TRACK VIEW ---------------- */

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* Header */}
        <header className="mb-20">
          <div className="mb-8 text-center text-sm uppercase tracking-widest text-accent-primary">
            NIVEDHIYA J PANICKER
          </div>

          <nav className="flex gap-8 border-b border-border pb-6">
            <button onClick={() => setSelectedTrack("ux")}>Product & UX</button>
            <button onClick={() => setSelectedTrack("visual")}>UI & Brand</button>
            <button className="ml-auto" onClick={() => setSelectedTrack(null)}>
              ← Back
            </button>
          </nav>
        </header>

        {/* Hero */}
        <section className="mb-32">
          <h1 className="font-round mb-6 text-5xl">
            {content[selectedTrack].heading}
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            {content[selectedTrack].subheading}
          </p>
        </section>

        {/* Projects */}
        <section className="space-y-12">
          {content[selectedTrack].projects.map((p, i) => (
            <div key={i} className="border-b border-border pb-8">
              <h3 className="text-2xl">{p.title}</h3>
              <p className="text-muted-foreground">{p.description}</p>
              <span className="text-sm text-muted-foreground">{p.year}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
