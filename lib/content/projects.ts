import type { Project } from "./types"

/**
 * To add a project: copy an existing object, give it a unique `slug`, set
 * `featured` to true (large showcase) or false (Other Projects grid), and drop
 * the images into /public/images/projects/. No layout changes required.
 */
export const projects: Project[] = [
  {
    slug: "dental-senyum-clinic",
    title: "Dental Senyum Clinic Information System",
    summary:
      "A system analysis case study for a dental clinic created as part of a BNSP competency assessment, covering interview-based requirement gathering, UML modeling, UI/UX design, and documentation.",
    role: "System Analyst",
    tools: ["Interviews", "UML", "Draw.io", "Figma", "Documentation"],
    categories: ["System Analysis", "UI/UX", "Case Study"],
    thumbnail: "/images/projects/dental-senyum.png",
    featured: true,
    detail: {
      overview:
        "An end-to-end system analysis case study for a dental clinic, produced for a BNSP System Analyst competency assessment. The work demonstrates the full analysis lifecycle from stakeholder interviews to interface design.",
      background:
        "The clinic relied on manual, paper-based processes for appointments, patient records, and reporting, creating bottlenecks and data inconsistencies.",
      objectives: [
        "Capture real business and user requirements through structured interviews",
        "Model existing and proposed business processes",
        "Produce clear UML artifacts and system documentation",
        "Design an intuitive interface aligned with clinic workflows",
      ],
      contribution: [
        "Led requirement gathering and stakeholder interviews",
        "Performed business process analysis and gap identification",
        "Authored use case, activity, and class diagrams",
        "Designed wireframes and the interface concept",
      ],
      process: [
        "Requirement elicitation via interviews and observation",
        "Business process mapping (as-is vs. to-be)",
        "UML modeling and requirement specification",
        "Wireframing and interface design",
        "Documentation and assessment presentation",
      ],
      features: [
        "Appointment and patient record management concept",
        "Structured requirement specification",
        "Complete UML documentation set",
        "Clinic-focused UI wireframes",
      ],
      learnings: [
        "Turning raw interview notes into structured requirements",
        "Communicating system thinking to non-technical stakeholders",
        "Balancing business goals with usability",
      ],
      gallery: ["/images/projects/dental-senyum1.png", "/images/projects/dental-senyum2.png"],
    },
  },
  {
    slug: "combie-coffee",
    title: "Combie Coffee Information System",
    summary:
      "A campus project for an MSME cafe where the team visited the business directly to identify problems and design a website-based information system to support cafe operations.",
    role: "UI/UX Designer, UML & Database Design",
    tools: ["UML", "Database Design", "Figma", "Draw.io", "SQL"],
    categories: ["System Analysis", "Database", "UI/UX"],
    thumbnail: "/images/projects/combie-coffee.png",
    featured: true,
    detail: {
      overview:
        "A real-stakeholder campus project for a small-and-medium coffee business, focused on analyzing operational problems and designing a supporting information system.",
      background:
        "The cafe managed orders, stock, and reporting manually. The team visited on-site to understand pain points firsthand.",
      objectives: [
        "Identify operational problems through direct observation",
        "Design a website-based information system for cafe operations",
        "Model data and processes to support daily workflows",
      ],
      contribution: [
        "Conducted problem analysis with the business owner",
        "Designed UML diagrams and the database schema",
        "Created the UI/UX design for key operational screens",
      ],
      process: [
        "On-site visit and stakeholder discussion",
        "Problem and requirement analysis",
        "UML and database design",
        "UI/UX design of core screens",
      ],
      features: [
        "Order and menu management concept",
        "Inventory and reporting support",
        "Relational database design",
        "Operational dashboard UI",
      ],
      learnings: [
        "Working with real MSME stakeholders",
        "Connecting database design to user needs",
        "Prioritizing features under real constraints",
      ],
      gallery: ["/images/projects/combie-coffee1.png", "/images/projects/combie-coffee2.png"],
    },
  },
  {
    slug: "explore-jakarta",
    title: "Explore Jakarta",
    summary:
      "A tourism recommendation website for Jakarta integrated with machine learning, built with React (Vite), Node.js, and PostgreSQL, with a focus on frontend and UI/UX.",
    role: "UI/UX Designer & Frontend Contributor",
    tools: ["React", "Vite", "Node.js", "PostgreSQL", "Figma", "Tailwind"],
    categories: ["UI/UX", "Frontend", "Team Project"],
    thumbnail: "/images/projects/explore-jakarta.png",
    featured: true,
    detail: {
      overview:
        "A collaborative tourism recommendation platform for Jakarta that pairs a machine-learning backend with a modern, responsive interface.",
      background:
        "Travelers often struggle to discover destinations that match their interests. The team built a recommendation-driven experience to help.",
      objectives: [
        "Deliver a responsive, modern tourism interface",
        "Integrate ML-based recommendations into the UX",
        "Support smooth user flows from discovery to detail",
      ],
      contribution: [
        "Owned the frontend implementation and UI/UX",
        "Designed user flows and responsive layouts",
        "Integrated the interface with backend recommendation APIs",
      ],
      process: [
        "User flow and wireframe design",
        "Responsive UI implementation in React",
        "API integration with the recommendation service",
        "Team collaboration and iteration",
      ],
      features: [
        "Personalized destination recommendations",
        "Responsive, modern interface",
        "Searchable destination catalog",
        "Detail pages for each destination",
      ],
      learnings: [
        "Integrating ML outputs into a clean UX",
        "Collaborating in a cross-functional team",
        "Building responsive React interfaces",
      ],
      gallery: ["/images/projects/explore-jakarta1.png", "/images/projects/explore-jakarta2.png"],
    },
  },
  {
    slug: "java-island-tourism",
    title: "Java Island Tourism Recommendation System",
    summary:
      "An undergraduate thesis project involving the end-to-end design and development of a tourism destination recommendation system for Java Island using content-based filtering and context-aware re-ranking.",
    role: "System Designer, UI/UX & Development Contributor",
    tools: ["Content-Based Filtering", "System Design", "Figma", "React", "REST API"],
    categories: ["Thesis", "System Design", "UI/UX", "Recommendation System"],
    thumbnail: "/images/projects/java-island.png",
    featured: true,
    detail: {
      overview:
        "A thesis project delivering an end-to-end tourism recommendation system for Java Island, combining content-based filtering with context-aware re-ranking.",
      background:
        "Choosing destinations across a large region is overwhelming. The system recommends places based on content similarity and contextual signals.",
      objectives: [
        "Design the overall system architecture",
        "Implement content-based recommendation logic",
        "Add context-aware re-ranking for relevance",
        "Design an intuitive interface for exploration",
      ],
      contribution: [
        "Designed the system and recommendation logic",
        "Created wireframes and the interface design",
        "Contributed to development and integration",
      ],
      process: [
        "Problem framing and system design",
        "Recommendation algorithm design",
        "Wireframing and interface design",
        "Development, testing, and thesis documentation",
      ],
      features: [
        "Content-based destination recommendations",
        "Context-aware result re-ranking",
        "End-to-end recommendation pipeline",
        "Exploration-focused UI",
      ],
      learnings: [
        "Designing a system from scratch to delivery",
        "Reasoning about recommendation quality",
        "Documenting research-grade work clearly",
      ],
      gallery: ["/images/projects/java-island1.png", "/images/projects/java-island2.png"],
    },
  },
  {
    slug: "pwa-story-app",
    title: "PWA Story App",
    summary:
      "A story-sharing web app built with JavaScript using SPA and MVP architecture, featuring authentication, digital maps, push notifications, service workers, IndexedDB, offline access, and the View Transition API.",
    role: "Frontend Developer & UI Designer",
    tools: ["JavaScript", "SPA", "MVP", "Service Worker", "IndexedDB", "Web Push"],
    categories: ["Frontend", "PWA", "SPA"],
    thumbnail: "/images/projects/pwa-story.png",
    featured: false,
    detail: {
      overview:
        "A progressive web app for sharing stories, built with a clean SPA + MVP architecture and rich offline capabilities.",
      background:
        "The goal was to explore modern PWA capabilities while delivering a smooth, installable story-sharing experience.",
      objectives: [
        "Build an installable, offline-capable PWA",
        "Apply SPA + MVP architecture cleanly",
        "Add real-time and location features",
      ],
      contribution: [
        "Implemented the frontend and UI",
        "Set up service worker, caching, and IndexedDB",
        "Integrated maps and push notifications",
      ],
      process: [
        "Architecture setup (SPA + MVP)",
        "Feature implementation and offline support",
        "Testing across network conditions",
      ],
      features: [
        "Authentication and add-story flow",
        "Digital maps and geolocation",
        "Push notifications",
        "Offline access via service worker + IndexedDB",
        "Smooth View Transition API navigation",
      ],
      learnings: [
        "Designing for offline-first experiences",
        "Applying MVP architecture in vanilla JS",
        "Using modern browser platform APIs",
      ],
      gallery: ["/images/projects/pwa-story.png"],
    },
  },
  {
    slug: "notes-app",
    title: "Notes App",
    summary:
      "A simple notes web app built with a Single Page Application approach, supporting creating, archiving, and deleting notes with local storage and RESTful API support.",
    role: "Frontend Developer & UI Designer",
    tools: ["JavaScript", "SPA", "REST API", "Web Components"],
    categories: ["Frontend", "SPA"],
    thumbnail: "/images/projects/notes-app.png",
    featured: false,
    detail: {
      overview:
        "A lightweight notes application built as a Single Page Application with RESTful API integration.",
      background: "A focused build to practice SPA fundamentals and clean component structure.",
      objectives: ["Build a responsive SPA", "Support core note management", "Integrate a REST API"],
      contribution: ["Implemented the full frontend and UI", "Integrated the notes REST API"],
      process: ["Component and state design", "REST API integration", "UI polish and testing"],
      features: [
        "Create, archive, and delete notes",
        "RESTful API integration",
        "Responsive single-page interface",
      ],
      learnings: ["SPA structure and state handling", "Working with REST APIs on the frontend"],
      gallery: ["/images/projects/notes-app.png"],
    },
  },
  {
    slug: "dibimbing-uiux",
    title: "Dibimbing UI/UX Case Study",
    summary:
      "A UI/UX learning project completed during Digital Skill Fair 40.0 by Dibimbing.id, covering user needs, wireframe creation, user flow, and prototype development.",
    role: "UI/UX Participant",
    tools: ["Figma", "Wireframing", "Prototyping", "User Flow"],
    categories: ["UI/UX", "Wireframe", "Prototype"],
    thumbnail: "/images/projects/dibimbing-uiux.png",
    featured: false,
    detail: {
      overview:
        "A guided UI/UX case study exploring the design process end to end, from user needs to an interactive prototype.",
      background: "Completed during Digital Skill Fair 40.0 by Dibimbing.id.",
      objectives: ["Understand user needs", "Create wireframes and user flows", "Build a prototype"],
      contribution: ["Researched user needs", "Designed wireframes and flows", "Built the prototype"],
      process: ["User needs analysis", "Wireframing", "User flow mapping", "Prototype development"],
      features: ["Wireframe set", "Documented user flow", "Interactive prototype"],
      learnings: ["Structured design thinking", "Prototyping in Figma"],
      gallery: ["/images/projects/dibimbing-uiux.png"],
    },
  },
  {
    slug: "go-programming",
    title: "Go Programming Project",
    summary:
      "An intermediate-level Go programming training project, presented as a learning experience and technical exposure to backend fundamentals.",
    role: "Learner",
    tools: ["Go", "Backend Fundamentals"],
    categories: ["Training", "Backend Fundamentals"],
    thumbnail: "/images/projects/go-programming.png",
    featured: false,
    detail: {
      overview:
        "An intermediate Go programming training focused on strengthening backend fundamentals.",
      background:
        "Source files are unavailable, so this is presented as a learning experience and technical exposure rather than a full showcase.",
      objectives: ["Learn Go fundamentals", "Understand backend concepts"],
      contribution: ["Completed intermediate-level Go exercises and training modules"],
      process: ["Structured training", "Hands-on exercises"],
      features: ["Core Go language practice", "Backend fundamentals exposure"],
      learnings: ["Go syntax and idioms", "Backend programming basics"],
      gallery: ["/images/projects/go-programming.png"],
    },
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const otherProjects = projects.filter((p) => !p.featured)

/** Unique category list used by the projects filter UI. */
export const projectCategories: string[] = Array.from(
  new Set(projects.flatMap((p) => p.categories)),
).sort()
