/**
 * Shared content types for the portfolio.
 * Editing the data files under `lib/content/` is all you need to update the site.
 */

export type NavItem = {
  label: string
  href: string
}

export type CTA = {
  label: string
  href: string
  /** "primary" renders as a filled purple button, "secondary" as an outline/ghost button. */
  variant: "primary" | "secondary"
  /** Optional: open in a new tab (external links, downloads). */
  external?: boolean
}

export type Profile = {
  name: string
  /** Short logo text shown in the navbar, e.g. "fayza.dev". */
  logo: string
  role: string
  /** Path to the profile photo, e.g. "/images/profile.png". Replace the file to swap the photo. */
  photo: string
  /** Alt text for the profile photo. */
  photoAlt: string
  location?: string
}

export type Hero = {
  /** Rendered as stacked lines for a strong headline. */
  headlineLines: string[]
  subheadline: string
  intro: string
  ctas: CTA[]
  /** Small pill tags shown under the hero copy. */
  tags: string[]
}

export type Stat = {
  value: string
  label: string
}

export type About = {
  heading: string
  paragraphs: string[]
  /** Compact list rendered in the summary card. */
  highlights: string[]
  stats: Stat[]
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  /** Stable unique id used for routing/keys. Keep it URL-friendly. */
  slug: string
  title: string
  summary: string
  role: string
  /** Tools / stack chips. */
  tools: string[]
  /** Category tags, also used by the project filter. */
  categories: string[]
  /** Thumbnail image path, e.g. "/images/projects/xyz.png". */
  thumbnail: string
  /** Mark true to show in the Featured section; false shows in Other Projects. */
  featured: boolean
  /** Optional live demo / GitHub / etc. links. */
  links?: ProjectLink[]
  /** Case-study detail content shown in the modal. */
  detail: {
    overview: string
    background: string
    objectives: string[]
    contribution: string[]
    process: string[]
    features: string[]
    learnings: string[]
    /** Gallery image paths shown inside the detail modal. */
    gallery: string[]
  }
}

export type CertificateCategory = "Analysis" | "UI/UX" | "Development" | "Cloud"

export type Certificate = {
  id: string
  title: string
  issuer: string
  year: string
  note: string
  category: CertificateCategory
  /** Certificate image path, e.g. "/images/certificates/bnsp.png". */
  image: string
  /** Optional link to view/verify the certificate. */
  href?: string
}

export type SkillGroup = {
  category: string
  skills: string[]
}

export type ExperienceItem = {
  role: string
  organization?: string
  period?: string
  description: string
}

export type ContactLink = {
  label: string
  /** Displayed value, e.g. email address or handle. */
  value: string
  href: string
  /** Lucide icon name resolved in the Contact component. */
  icon: "mail" | "phone" | "linkedin" | "github" | "instagram"
}

export type ContactContent = {
  heading: string
  message: string
  links: ContactLink[]
}

export type FooterContent = {
  tagline: string
  copyright: string
}
