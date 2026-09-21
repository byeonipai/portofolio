import type { ContactContent, FooterContent } from "./types"

/** Update these links with real details. Icons map to Lucide icons in the Contact component. */
export const contact: ContactContent = {
  heading: "Get In Touch",
  message: "Let's connect and build meaningful digital solutions together.",
  links: [
    {
      label: "Email",
      value: "fayzakamila17@gmail.com",
      href: "mailto:fayzakamila17@gmail.com",
      icon: "mail",
    },
    {
      label: "Phone",
      value: "+62 812 3130 6613",
      href: "tel:+6281231306613",
      icon: "phone",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/fayzakamila",
      href: "https://www.linkedin.com/in/fayza-kamila-27106b26b/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      value: "github.com/byeonipai",
      href: "https://github.com/byeonipai/",
      icon: "github",
    },
    {
      label: "Instagram",
      value: "@kamilafayzaa",
      href: "https://instagram.com/kamilafayzaa",
      icon: "instagram",
    },
  ],
}

export const footer: FooterContent = {
  tagline: "System Analyst · UI/UX · Frontend Development",
  copyright: `© ${new Date().getFullYear()} Fayza Kamila. All rights reserved.`,
}
