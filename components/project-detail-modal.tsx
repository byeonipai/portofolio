"use client"

import Image from "next/image"
import { ExternalLink, Globe } from "lucide-react"
import { GithubIcon } from "@/components/brand-icons"
import { Modal } from "@/components/modal"
import type { Project, ProjectLink } from "@/lib/content"

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-primary">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-1.5">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

const linkIcon = (link: ProjectLink) => {
  const l = link.label.toLowerCase()
  if (l.includes("github")) return <GithubIcon className="size-4" />
  if (l.includes("demo") || l.includes("live")) return <Globe className="size-4" />
  return <ExternalLink className="size-4" />
}

export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  const open = Boolean(project)

  return (
    <Modal open={open} onClose={onClose} label={project ? `${project.title} details` : "Project details"}>
      {project ? (
        <div className="max-h-[85vh] overflow-y-auto">
          {/* Header image */}
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-3xl">
            <Image
              src={project.thumbnail || "/placeholder.svg"}
              alt={`${project.title} cover`}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" aria-hidden />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
              <div className="flex flex-wrap gap-1.5">
                {project.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-primary/30 bg-background/70 px-2.5 py-0.5 text-[11px] font-medium text-primary backdrop-blur"
                  >
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-balance sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-primary">{project.role}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 p-5 sm:p-7">
            {project.links && project.links.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    {linkIcon(link)}
                    {link.label}
                  </a>
                ))}
              </div>
            ) : null}

            <DetailBlock title="Overview">
              <p>{project.detail.overview}</p>
            </DetailBlock>

            <DetailBlock title="Background">
              <p>{project.detail.background}</p>
            </DetailBlock>

            <div className="grid gap-6 sm:grid-cols-2">
              <DetailBlock title="Objectives">
                <List items={project.detail.objectives} />
              </DetailBlock>
              <DetailBlock title="Role & Contribution">
                <List items={project.detail.contribution} />
              </DetailBlock>
              <DetailBlock title="Process">
                <List items={project.detail.process} />
              </DetailBlock>
              <DetailBlock title="Output & Features">
                <List items={project.detail.features} />
              </DetailBlock>
            </div>

            <DetailBlock title="Tools Used">
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 text-xs text-foreground/90"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </DetailBlock>

            <DetailBlock title="Key Learnings">
              <List items={project.detail.learnings} />
            </DetailBlock>

            {project.detail.gallery.length > 0 ? (
              <DetailBlock title="Gallery">
                <div className="mt-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {project.detail.gallery.map((src, i) => (
                    <div
                      key={`${src}-${i}`}
                      className="relative aspect-video overflow-hidden rounded-xl border border-border"
                    >
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </DetailBlock>
            ) : null}
          </div>
        </div>
      ) : null}
    </Modal>
  )
}
