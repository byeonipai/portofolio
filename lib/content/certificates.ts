import type { Certificate } from "./types"

/**
 * Featured certificates, training, academic milestones, and achievements.
 *
 * Similar certificates from the same learning track are represented
 * by the strongest or highest-level credential.
 *
 * Certificate thumbnails:
 * /public/images/certificates/
 */
export const certificates: Certificate[] = [
  {
    // Source: sertif analys.pdf
    id: "designing-software",
    title: "Designing Software",
    issuer: "Universitas Gunadarma",
    year: "2026",
    note:
      "Professional training covering software structure design, software component design, user interface design, and user experience design.",
    category: "Analysis",
    image: "/images/certificates/designing-software.png",
  },

  {
    // Source: esert/signed_956d82f8b4d428b7f05b76c5903c681a.pdf.pdf
    id: "analyze-software-requirements",
    title: "Analyze Software Requirements",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Professional training covering software development methodology, requirement sources, elicitation, classification, specification, review, validation, and user acceptance testing.",
    category: "Analysis",
    image: "/images/certificates/analyze-software-requirements.png",
  },

  {
    // Source: File Pendukung (Sertifikat).pdf
    id: "coding-camp-2025",
    title: "Front-End & Back-End Developer - Distinction Graduate",
    issuer: "Coding Camp powered by DBS Foundation x Dicoding",
    year: "2025",
    note:
      "Completed the Front-End and Back-End Developer learning path with Distinction, including web development, REST APIs, Git and GitHub, intermediate web development, and a capstone project.",
    category: "Development",
    image: "/images/certificates/coding-camp-2025.png",
  },

  {
    // Source: dicoding/sertifikat_course_219_4852401_170525152627.pdf
    id: "intermediate-web-development",
    title: "Intermediate Web Development",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Intermediate front-end development covering accessibility, animations and page transitions, digital maps, browser APIs, Progressive Web Apps, and deployment.",
    category: "Development",
    image: "/images/certificates/intermediate-web-development.png",
  },

  {
    // Source: dicoding/sertifikat_course_261_4852401_110725193833.pdf
    id: "backend-javascript",
    title: "Back-End Beginner with JavaScript",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Back-end development training covering Node.js, HTTP communication, server-side development, and RESTful API fundamentals.",
    category: "Development",
    image: "/images/certificates/backend-javascript.png",
  },

  {
    // Source: dicoding/sertifikat_course_317_4852401_150225235050.pdf
    id: "git-github",
    title: "Git & GitHub Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Version control training covering Git, repositories, branches, collaboration workflows, and GitHub-based development.",
    category: "Development",
    image: "/images/certificates/git-github.png",
  },

  {
    // Source: dicoding/sertifikat_course_237_4852401_130225165858 (1).pdf
    id: "software-developer-fundamentals",
    title: "Software Developer Programming Fundamentals",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Programming fundamentals focused on software specifications, flow diagrams, application requirements, and basic software development using HTML, CSS, and JavaScript.",
    category: "Development",
    image: "/images/certificates/software-developer-fundamentals.png",
  },

  {
    // Source: dicoding/sertifikat_course_302_4852401_130225170338.pdf
    id: "programming-logic",
    title: "Programming Logic 101",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Covered fundamental programming logic, algorithms, logic gates, computational thinking, and structured problem solving.",
    category: "Development",
    image: "/images/certificates/programming-logic.png",
  },

  {
    // Source: esert/signed_26b208ad8c501e4dadfbc68235424f8b.pdf.pdf
    id: "sql-server-intermediate",
    title: "SQL Server for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Intermediate database training covering complex queries, security, indexing, query optimization, views, stored procedures, backup and recovery, and database administration.",
    category: "Development",
    image: "/images/certificates/sql-server-intermediate.png",
  },

  {
    // Source: esert/signed_52f0e3731a210ddd6cce4ff8587707fd.pdf.pdf
    id: "golang-intermediate",
    title: "Go-Lang for Intermediate",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      "Intermediate Go programming training covering functions and methods, unit testing and TDD, SQL integration, HTTP requests, and deployment.",
    category: "Development",
    image: "/images/certificates/golang-intermediate.png",
  },

  {
    // Source: FAYZA KAMILA - 1968991850-928.pdf
    id: "cloud-computing",
    title: "Fundamentals of Cloud Computing & Networking Administration",
    issuer: "Digital Talent Scholarship x Alibaba Cloud",
    year: "2024",
    note:
      "Completed a 6-credit microcredential with a score of 94.5/100 (Excellent), 100% attendance, and passed the ACA Cloud Computing Certification.",
    category: "Cloud",
    image: "/images/certificates/cloud-computing.png",
  },

  {
    // Source: GDSC_beststudent_FAYZA KAMILA.pdf
    id: "gdsc-best-student",
    title: "Best Student - Product Management",
    issuer: "Google Developer Student Clubs Universitas Gunadarma",
    year: "2023",
    note:
      "Recognized as Best Student in the Weekly Class Product Management program, From Idea to Launch: Navigating the Product Management Journey.",
    category: "Achievement",
    image: "/images/certificates/gdsc-best-student.png",
  },

  {
    // Source: sertifikat sarjana muda.pdf
    id: "scientific-writing-academic-completion",
    title: "Scientific Writing & Academic Completion",
    issuer: "Universitas Gunadarma",
    year: "2025",
    note:
      'Academic completion associated with the scientific writing project "Rekomendasi Destinasi Wisata di Jakarta Berbasis Website dengan Integrasi Machine Learning."',
    category: "Academic",
    image: "/images/certificates/scientific-writing.png",
  },

  {
    // Source: Sertifika magang avalonstar-Fayza Kamila.pdf
    id: "avalon-star-internship",
    title: "Business IT Internship Completion",
    issuer: "Avalon Star",
    year: "2026",
    note:
      "Completed a two-month internship program and received recognition as the 3rd Best Intern.",
    category: "Achievement",
    image: "/images/certificates/avalon-star-internship.png",
  },

  {
    // Source: sertifseminar skripsi.pdf
    id: "thesis-workshop",
    title: "Thesis Proposal & Academic Writing Workshop",
    issuer: "Universitas Gunadarma",
    year: "2026",
    note:
      "Participated in a workshop covering research proposal preparation, undergraduate thesis preparation, and academic thesis guidelines.",
    category: "Academic",
    image: "/images/certificates/thesis-workshop.png",
  },

  {
    // Source: dicoding/sertifikat_course_852_4852401_250425225528.pdf
    id: "financial-literacy",
    title: "Financial Literacy 101",
    issuer: "Dicoding Indonesia",
    year: "2025",
    note:
      "Completed financial literacy training covering personal financial management, financial planning, and long-term financial decision making.",
    category: "Other",
    image: "/images/certificates/financial-literacy.png",
  },
]

export const certificateCategories = [
  "Analysis",
  "Development",
  "Cloud",
  "Achievement",
  "Academic",
  "Other",
] as const
