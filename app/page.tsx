"use client"

import { useState, useEffect } from "react"

export default function Portfolio() {
  const [selectedTrack, setSelectedTrack] = useState<"ux" | "visual" | null>(null)
  const [isHovering, setIsHovering] = useState<"ux" | "visual" | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    if (selectedTrack) return

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      // Progress from 0 to 1 over one viewport height
      const progress = Math.min(scrollPosition / windowHeight, 1)
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
        {
          title: "Rural Digital Access Platform",
          description: "Connecting underserved communities through intuitive design",
          year: "2024",
        },
        {
          title: "Fintech Expense Tracker",
          description: "Simplifying personal finance management",
          year: "2023",
        },
        {
          title: "AI Learning Dashboard",
          description: "Making complex data accessible to educators",
          year: "2023",
        },
      ],
    },
    visual: {
      heading: "UI & Brand Designer crafting refined, memorable visual systems",
      subheading:
        "I create cohesive brand identities and interface designs that balance aesthetics with functionality.",
      projects: [
        {
          title: "Brand Identity Project",
          description: "Full visual identity for sustainable tech startup",
          year: "2024",
        },
        {
          title: "Design System Refresh",
          description: "Modernizing enterprise product interface",
          year: "2023",
        },
        {
          title: "Editorial Design Series",
          description: "Visual storytelling for digital publications",
          year: "2023",
        },
      ],
    },
  }

  const explorations = [
    "Type experiments with variable fonts",
    "Brutalist UI studies",
    "Color theory deep dive",
    "Micro-interaction sketches",
    "Grid system iterations",
    "Icon set development",
  ]

  if (!selectedTrack) {
    return (
      <div className="relative bg-background text-foreground" style={{ minHeight: "200vh" }}>
        <header className="fixed left-6 top-6 z-30 md:left-12 md:top-12">
          <div className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/60">NP</div>
        </header>

        <div
          className="fixed left-1/2 top-1/3 z-20 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{ opacity: scrollProgress > 0 ? 0 : 1 }}
        >
          <div className="text-sm font-medium tracking-wide text-muted-foreground/70">NIVEDHIYA J PANICKER</div>
        </div>

        <div className="fixed inset-0 z-10 flex flex-col md:flex-row">
          <button
            onClick={() => setSelectedTrack("ux")}
            onMouseEnter={() => setIsHovering("ux")}
            onMouseLeave={() => setIsHovering(null)}
            className="group relative flex flex-1 flex-col items-center justify-center border-b border-border/40 bg-background px-8 py-32 text-center transition-all duration-700 ease-out md:border-b-0 md:border-r md:py-0"
            style={{
              opacity: isHovering === "visual" ? 0.3 : 1,
              filter: isHovering === "visual" ? "blur(2px)" : "blur(0px)",
              transform: `translateX(-${scrollProgress * 100}%)`,
            }}
          >
            <div
              className="flex flex-col items-center transition-transform duration-700 ease-out"
              style={{
                transform: isHovering === "ux" ? "translateX(12px)" : "translateX(0px)",
              }}
            >
              <h2 className="font-round mb-8 text-5xl tracking-tight md:mb-12 md:text-6xl lg:text-7xl">Product & UX</h2>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground/60 md:text-base">
                User-centered design for digital products
              </p>
            </div>
          </button>

          <button
            onClick={() => setSelectedTrack("visual")}
            onMouseEnter={() => setIsHovering("visual")}
            onMouseLeave={() => setIsHovering(null)}
            className="group relative flex flex-1 flex-col items-center justify-center bg-background px-8 py-32 text-center transition-all duration-700 ease-out md:py-0"
            style={{
              opacity: isHovering === "ux" ? 0.3 : 1,
              filter: isHovering === "ux" ? "blur(2px)" : "blur(0px)",
              transform: `translateX(${scrollProgress * 100}%)`,
            }}
          >
            <div
              className="flex flex-col items-center transition-transform duration-700 ease-out"
              style={{
                transform: isHovering === "visual" ? "translateX(-12px)" : "translateX(0px)",
              }}
            >
              <h2 className="font-round mb-8 text-5xl tracking-tight md:mb-12 md:text-6xl lg:text-7xl">UI & Brand</h2>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground/60 md:text-base">
                Visual identity and interface design
              </p>
            </div>
          </button>
        </div>

        <main className="relative z-0 mx-auto max-w-4xl px-6 pt-[100vh] md:px-12">
          <section className="min-h-screen py-24 transition-opacity duration-700" style={{ opacity: scrollProgress }}>
           <h2 className="font-round mb-12 text-4xl tracking-tight md:text-5xl">About Me</h2>
            <div className="flex flex-col gap-12 md:flex-row md:gap-12">
              <div className="flex-1 space-y-8">
                <p className="text-base leading-loose text-muted-foreground/100">
                  I'm a final-year Product Design student interested in product thinking, UX, and designing calm,
                  accessible digital experiences. I enjoy working across research, structure, and interface design, with
                  a focus on clarity and thoughtful decision-making under real-world constraints.
                </p>
                <p className="text-base leading-loose text-muted-foreground/100">
                  Outside of design, I'm a huge foodie who loves cooking and baking, spends a lot of time listening to
                  music, and is slowly getting back into reading. I often find inspiration in everyday routines and
                  creative breaks away from screens.
                </p>
                <p className="text-base leading-loose text-muted-foreground/100">
                  I'm always open to connecting and collaborating—whether it's to talk design, work on something
                  interesting, or simply share a cup of coffee.
                </p>
              </div>
              <div className="flex w-40 flex-shrink-0 items-start md:pt-2">
                <img
                  src="/professional-portrait.png"
                  alt="Nivedhiya J Panicker"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="border-t border-border py-16">
            <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</h2>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:nivedhiya@example.com"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                nivedhiya@example.com
              </a>
              <a href="tel:+1234567890" className="text-muted-foreground transition-colors hover:text-foreground">
                +1 234 567 890
              </a>
              <a
                href="https://linkedin.com/in/nivedhiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com/nivedhiya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Instagram
              </a>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 py-16 md:px-12 md:py-24 lg:py-32">
        {/* Header */}
        <header className="mb-16 md:mb-24">
          <div className="mb-10 text-center text-sm font-bold uppercase tracking-[0.2em] text-accent-primary">
            NIVEDHIYA J PANICKER
          </div>

          {/* Toggle */}
          <nav className="flex gap-8 border-b border-border pb-6">
            <button
              onClick={() => setSelectedTrack("ux")}
              className={`relative pb-2 text-sm font-medium tracking-wide transition-colors ${
                selectedTrack === "ux" ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
              }`}
            >
              Product & UX
              {selectedTrack === "ux" && <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent-primary" />}
            </button>
            <button
              onClick={() => setSelectedTrack("visual")}
              className={`relative pb-2 text-sm font-medium tracking-wide transition-colors ${
                selectedTrack === "visual" ? "text-foreground" : "text-muted-foreground hover:text-foreground/70"
              }`}
            >
              UI & Brand
              {selectedTrack === "visual" && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent-primary" />
              )}
            </button>
            <button
              onClick={() => setSelectedTrack(null)}
              className="ml-auto pb-2 text-sm font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground/70"
            >
              ← Back
            </button>
          </nav>
        </header>

        <div
          key={selectedTrack}
          className="animate-in fade-in slide-in-from-bottom-4 duration-700"
          style={{ animationFillMode: "backwards" }}
        >
          {/* Hero */}
          <section className="mb-32 md:mb-40">
            <h1 className="mb-8 text-4xl font-light leading-[1.15] tracking-tight text-balance md:text-5xl lg:text-6xl">
              {content[selectedTrack].heading}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {content[selectedTrack].subheading}
            </p>
          </section>

          {/* Projects */}
          <section className="mb-32 md:mb-40">
            <h2 className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Selected Work
            </h2>
            <div className="space-y-12">
              {content[selectedTrack].projects.map((project, index) => (
                <article
                  key={index}
                  className="group cursor-pointer border-b border-border pb-12 transition-colors hover:border-accent-primary/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <h3 className="mb-3 text-2xl font-light tracking-tight transition-colors group-hover:text-accent-primary md:text-3xl">
                        {project.title}
                      </h3>
                      <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {project.description}
                      </p>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">{project.year}</div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {/* Explorations & Visual Notes */}
        <section className="mb-32 md:mb-40">
          <h2 className="mb-12 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Explorations & Visual Notes
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {explorations.map((note, index) => (
              <div
                key={index}
                className="border border-border/50 bg-background/50 p-6 text-sm leading-relaxed transition-colors hover:border-accent-primary/30"
              >
                {note}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="mb-32 md:mb-40">
          <h2 className="mb-8 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">About</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I'm a product-focused designer interested in clarity, accessibility, and building calm digital experiences
            under real-world constraints. I believe good design quietly serves its users without demanding attention.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Contact</h2>
          <div className="flex flex-col gap-3 text-sm">
            <a
              href="mailto:nivedhiya@example.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              nivedhiya@example.com
            </a>
            <a href="tel:+1234567890" className="text-muted-foreground transition-colors hover:text-foreground">
              +1 234 567 890
            </a>
            <a
              href="https://linkedin.com/in/nivedhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/nivedhiya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Instagram
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}
