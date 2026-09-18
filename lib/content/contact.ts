import type { ContactContent, FooterContent } from "./types"

/** Update these links with real details. Icons map to Lucide icons in the Contact component. */
export const contact: ContactContent = {
  heading: "Get In Touch",
  message: "Let's connect and build meaningful digital solutions together.",
  links: [
    {
      label: "Email",
      value: "fayza.kamila@example.com",
      href: "mailto:fayza.kamila@example.com",
      icon: "mail",
    },
    {
      label: "Phone",
      value: "+62 812 3456 7890",
      href: "tel:+6281234567890",
      icon: "phone",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fayzakamila",
      href: "https://www.linkedin.com/in/fayzakamila",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/fayzakamila",
      href: "https://github.com/fayzakamila",
      icon: "github",
    },
    {
      label: "Instagram",
      value: "@fayza.kamila",
      href: "https://instagram.com/fayza.kamila",
      icon: "instagram",
    },
  ],
}

export const footer: FooterContent = {
  tagline: "System Analyst · UI/UX · Frontend Development",
  copyright: `© ${new Date().getFullYear()} Fayza Kamila. All rights reserved.`,
}
