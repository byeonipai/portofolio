"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ExternalLink, Eye } from "lucide-react"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Modal } from "@/components/modal"
import { certificateCategories, certificates, type Certificate } from "@/lib/content"

export function Certificates() {
  const [active, setActive] = useState<string>("All")
  const [preview, setPreview] = useState<Certificate | null>(null)

  const filters = useMemo(() => ["All", ...certificateCategories], [])
  const filtered = certificates.filter((c) => active === "All" || c.category === active)

  return (
    <section id="certificates" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Credentials"
            title="Certificates"
            description="Verified certifications and training across analysis, design, development, and cloud."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                aria-pressed={active === filter}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
                  active === filter
                    ? "border-primary/50 bg-primary/15 text-primary shadow-[0_0_20px_-8px_oklch(0.68_0.17_300/0.8)]"
                    : "border-border bg-secondary/30 text-muted-foreground hover:border-primary/40 hover:text-foreground",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 80}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                <button
                  type="button"
                  onClick={() => setPreview(cert)}
                  className="relative aspect-[4/3] w-full overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                  aria-label={`Preview ${cert.title} certificate`}
                >
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground">
                      <Eye className="size-4" /> View Certificate
                    </span>
                  </div>
                  <span className="absolute right-3 top-3 rounded-full border border-primary/30 bg-background/70 px-2.5 py-0.5 text-[11px] font-medium text-primary backdrop-blur">
                    {cert.category}
                  </span>
                </button>

                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-base font-bold leading-tight text-balance">
                      {cert.title}
                    </h3>
                    <span className="shrink-0 text-xs text-muted-foreground">{cert.year}</span>
                  </div>
                  <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{cert.note}</p>
                  <button
                    type="button"
                    onClick={() => setPreview(cert)}
                    className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
                  >
                    <Eye className="size-4" /> View Certificate
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full-size preview modal */}
      <Modal
        open={Boolean(preview)}
        onClose={() => setPreview(null)}
        label={preview ? `${preview.title} full preview` : "Certificate preview"}
        className="max-w-2xl"
      >
        {preview ? (
          <div className="p-5 sm:p-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src={preview.image || "/placeholder.svg"}
                alt={`${preview.title} certificate`}
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-contain"
              />
            </div>
            <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-display text-lg font-bold">{preview.title}</h3>
                <p className="text-sm text-primary">
                  {preview.issuer} · {preview.year}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{preview.note}</p>
              </div>
              {preview.href ? (
                <a
                  href={preview.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <ExternalLink className="size-4" /> Verify
                </a>
              ) : null}
            </div>
          </div>
        ) : null}
      </Modal>
    </section>
  )
}
