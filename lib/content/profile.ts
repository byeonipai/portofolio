import type { About, Hero, NavItem, Profile } from "./types"

/** Navbar links. Add or reorder items freely. */
export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const profile: Profile = {
  name: "Fayza Kamila",
  logo: "fayza.dev",
  role: "System Analyst with UI/UX and Frontend Development Experience",
  photo: "/images/profile.png",
  photoAlt: "Portrait of Fayza Kamila",
  location: "Indonesia",
}

export const hero: Hero = {
  headlineLines: ["System Analyst", "UI/UX & Frontend"],
  subheadline:
    "I turn user needs and business requirements into structured systems, intuitive interfaces, and functional digital products.",
  intro:
    "Information Systems graduate passionate about bridging people, business, and technology — from requirement analysis and system design to polished, accessible interfaces.",
  ctas: [
    { label: "View Projects", href: "#projects", variant: "primary" },
    { label: "Download CV", href: "/fayza-kamila-cv.pdf", variant: "secondary", external: true },
    { label: "Contact Me", href: "#contact", variant: "secondary" },
  ],
  tags: ["System Analysis", "UI/UX", "Frontend", "Testing", "REST API", "Figma"],
}

export const about: About = {
  heading: "About Me",
  paragraphs: [
    "I'm an Information Systems graduate with hands-on experience across the full product journey — analyzing user and business requirements, mapping system workflows, designing intuitive interfaces, and building functional web applications.",
    "I enjoy translating complex problems into clear structures: interviews and requirement gathering, UML and business process modeling, wireframing and prototyping in Figma, then implementing responsive, accessible frontends with modern tooling.",
  ],
  highlights: [
    "Requirement analysis & documentation",
    "System workflows & UML modeling",
    "Wireframing & prototyping",
    "Frontend implementation",
    "Functional testing",
    "Cross-functional collaboration",
  ],
  stats: [
    { value: "8+", label: "Projects & Case Studies" },
    { value: "5+", label: "Certifications" },
    { value: "3", label: "Professional Roles" },
  ],
}
