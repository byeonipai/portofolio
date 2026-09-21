import type { Certificate } from "./types"

/**
 * Portfolio certificates.
 *
 * Certificates with overlapping material are represented by
 * the strongest or highest-level credential.
 *
 * Thumbnail images:
 * /public/images/certificates/
 *
 * Original PDF files:
 * /public/certificates/
 */

export const certificates: Certificate[] = [
  {
    // Original file: sertif analys.pdf
    id: "designing-software",
    title: "Designing Software",
    issuer: "Universitas Gunadarma",
    year: "2026",
    note:
      "Professional training covering software structure design, software component design, user interface design, and user experience design.",
    category: "Analysis",
    image: "/images/certificates/designing-software.png",
    href: "/certificates/designing-software.pdf",
  },

  {
    // Original file:
    // esert/signed_956d82f8b4d428b7f05b76c5903c681a.pdf.pdf
    id: "analyze-software-requirements",
    title: "Analyze Software Requirements",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Professional training covering requirement sources, elicitation techniques, requirement classification, specification, review, validation, and software requirement documentation.",
    category: "Analysis",
    image: "/images/certificates/analyze-software-requirements.png",
    href: "/certificates/analyze-software-requirements.pdf",
  },

  {
    // Original file: File Pendukung (Sertifikat).pdf
    id: "coding-camp-2025",
    title: "Front-End & Back-End Developer - Distinction Graduate",
    issuer: "Coding Camp powered by DBS Foundation x Dicoding",
    year: "2025",
    note:
      "Completed the Front-End and Back-End Developer learning path with Distinction, covering web development, REST APIs, Git and GitHub, intermediate web development, and a capstone project.",
    category: "Development",
    image: "/images/certificates/coding-camp-2025.png",
    href: "/certificates/coding-camp-2025.pdf",
  },

  {
    // Original file:
    // dicoding/sertifikat_course_219_4852401_170525152627.pdf
    id: "intermediate-web-development",
    title: "Intermediate Web Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Intermediate web development training covering accessibility, animations, page transitions, digital maps, browser APIs, Progressive Web Apps, and deployment.",
    category: "Development",
    image: "/images/certificates/intermediate-web-development.png",
    href: "/certificates/intermediate-web-development.pdf",
  },

  {
    // Original file:
    // dicoding/sertifikat_course_261_4852401_110725193833.pdf
    id: "backend-javascript",
    title: "Back-End Beginner with JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Back-end development training covering Node.js, HTTP communication, server-side development, and RESTful API fundamentals.",
    category: "Development",
    image: "/images/certificates/backend-javascript.png",
    href: "/certificates/backend-javascript.pdf",
  },

  {
    // Original file:
    // dicoding/sertifikat_course_317_4852401_150225235050.pdf
    id: "git-github",
    title: "Git & GitHub Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Version control training covering Git repositories, branches, merging, collaboration workflows, and GitHub-based development.",
    category: "Development",
    image: "/images/certificates/git-github.png",
    href: "/certificates/git-github.pdf",
  },

  {
    // Original file:
    // dicoding/sertifikat_course_237_4852401_130225165858 (1).pdf
    id: "software-developer-fundamentals",
    title: "Software Developer Programming Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Programming fundamentals covering software requirements, application planning, flow diagrams, and fundamental software development concepts.",
    category: "Development",
    image: "/images/certificates/software-developer-fundamentals.png",
    href: "/certificates/software-developer-fundamentals.pdf",
  },

  {
    // Original file:
    // dicoding/sertifikat_course_302_4852401_130225170338.pdf
    id: "programming-logic",
    title: "Programming Logic 101",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Covered programming logic, algorithms, computational thinking, decomposition, pattern recognition, abstraction, and structured problem solving.",
    category: "Development",
    image: "/images/certificates/programming-logic.png",
    href: "/certificates/programming-logic.pdf",
  },

  {
    // Original file:
    // esert/signed_26b208ad8c501e4dadfbc68235424f8b.pdf.pdf
    id: "sql-server-intermediate",
    title: "SQL Server for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Intermediate database training covering complex queries, security, indexing, optimization, views, stored procedures, backup and recovery, and database administration.",
    category: "Development",
    image: "/images/certificates/sql-server-intermediate.png",
    href: "/certificates/sql-server-intermediate.pdf",
  },

  {
    // Original file:
    // esert/signed_52f0e3731a210ddd6cce4ff8587707fd.pdf.pdf
    id: "golang-intermediate",
    title: "Go-Lang for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Intermediate Go programming training covering functions and methods, testing, SQL integration, HTTP requests, and application development.",
    category: "Development",
    image: "/images/certificates/golang-intermediate.png",
    href: "/certificates/golang-intermediate.pdf",
  },

  {
    // Original file: FAYZA KAMILA - 1968991850-928.pdf
    id: "cloud-computing",
    title: "Fundamentals of Cloud Computing & Networking Administration",
    issuer: "Digital Talent Scholarship x Alibaba Cloud",
    year: "2024",
    note:
      "Completed the cloud computing microcredential with a score of 94.5/100 (Excellent) and passed the ACA Cloud Computing Certification.",
    category: "Cloud",
    image: "/images/certificates/cloud-computing.png",
    href: "/certificates/cloud-computing.pdf",
  },

  {
    // Original file: GDSC_beststudent_FAYZA KAMILA.pdf
    id: "gdsc-best-student",
    title: "Best Student - Product Management",
    issuer: "Google Developer Student Clubs Universitas Gunadarma",
    year: "2023",
    note:
      "Recognized as Best Student in the Product Management program From Idea to Launch: Navigating the Product Management Journey.",
    category: "Achievement",
    image: "/images/certificates/gdsc-best-student.png",
    href: "/certificates/gdsc-best-student.pdf",
  },

  {
    // Original file: sertifikat sarjana muda.pdf
    id: "scientific-writing-academic-completion",
    title: "Scientific Writing & Academic Completion",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      'Academic completion associated with the scientific writing project "Rekomendasi Destinasi Wisata di Jakarta Berbasis Website dengan Integrasi Machine Learning."',
    category: "Academic",
    image: "/images/certificates/scientific-writing.png",
    href: "/certificates/scientific-writing.pdf",
  },

  {
    // Original file: Sertifika magang avalonstar-Fayza Kamila.pdf
    id: "avalon-star-internship",
    title: "Business IT Internship Completion",
    issuer: "Avalon Star",
    year: "2026",
    note:
      "Completed the Business IT internship program and received recognition as the 3rd Best Intern.",
    category: "Achievement",
    image: "/images/certificates/avalon-star-internship.png",
    href: "/certificates/avalon-star-internship.pdf",
  },

  {
    // Original file: sertifseminar skripsi.pdf
    id: "thesis-workshop",
    title: "Thesis Proposal & Academic Writing Workshop",
    issuer: "Universitas Gunadarma",
    year: "2026",
    note:
      "Participated in an academic workshop covering research proposal preparation, undergraduate thesis preparation, and thesis writing guidelines.",
    category: "Academic",
    image: "/images/certificates/thesis-workshop.png",
    href: "/certificates/thesis-workshop.pdf",
  },
]

/**
 * "All" is added automatically by the Certificates component.
 */
export const certificateCategories = [
  "Analysis",
  "Development",
  "Cloud",
  "Achievement",
  "Academic",
] as const
