import type { Certificate } from "./types"

/**
 * To add a certificate: copy an object, set a unique `id`, choose a `category`
 * (Analysis | UI/UX | Development | Cloud), and drop the image into
 * /public/images/certificates/. The filter tabs update automatically.
 */
export const certificates: Certificate[] = [
  {
    id: "bnsp-system-analyst",
    title: "System Analyst Competency Assessment",
    issuer: "BNSP (Indonesian National Professional Certification Agency)",
    year: "2024",
    note: "Formal competency certification covering requirement analysis, system modeling, and documentation.",
    category: "Analysis",
    image: "/images/certificates/bnsp-system-analyst.png",
  },
  {
    id: "aca-cloud-computing",
    title: "ACA Cloud Computing Certification",
    issuer: "Alibaba Cloud Academy",
    year: "2023",
    note: "Fundamentals of cloud computing, core services, and cloud architecture concepts.",
    category: "Cloud",
    image: "/images/certificates/aca-cloud.png",
  },
  {
    id: "dicoding-frontend",
    title: "Front-End Web Developer",
    issuer: "Dicoding Indonesia",
    year: "2023",
    note: "Building interactive, accessible, and performant front-end web applications.",
    category: "Development",
    image: "/images/certificates/dicoding-frontend.png",
  },
  {
    id: "dicoding-backend",
    title: "Back-End Web Developer",
    issuer: "Dicoding Indonesia",
    year: "2023",
    note: "Server-side fundamentals, RESTful APIs, and data handling.",
    category: "Development",
    image: "/images/certificates/dicoding-backend.png",
  },
  {
    id: "analyze-software-requirements",
    title: "Analyze Software Requirements",
    issuer: "Professional Training",
    year: "2023",
    note: "Techniques for eliciting, specifying, and validating software requirements.",
    category: "Analysis",
    image: "/images/certificates/analyze-requirements.png",
  },
]

/** Filter tabs for the certificates section. "All" is prepended in the UI. */
export const certificateCategories = ["Analysis", "UI/UX", "Development", "Cloud"] as const
