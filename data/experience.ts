import { Experience } from "@/app/components/experience-card";

export const EXPERIENCES: Experience[] = [
  {
    company: "Privia Security",
    role: "Frontend Developer",
    location: "Istanbul",
    remote: true,
    start: "Jul 2022",
    end: "Jun 2025",
    summary:
      "I build frontend for the Privia ecosystem across identity/auth (login, logout, session refresh), authorization-aware routing/guards, responsive layouts and theme control. I design data-heavy views with tables, filters, search, sorting, pagination/infinite scroll, plus card and list modes. Forms are handled with React Hook Form/Formik + Yup, with strong validation, error handling, and thoughtful loading/skeleton/empty states. I’ve shipped real-time chat and notifications over WebSocket, manage state and caching with Redux Toolkit and React Query/SWR, and focus on accessibility (ARIA) and performance (lazy loading, code splitting, memoization). Delivery is supported by CI/CD and regular code reviews.",
    projects: [
      {
        name: "Privia Hub v3",
        description:
          "An interactive cybersecurity learning platform (video courses, quiz flows, CTF-style challenges, chat). Established and evolved the component architecture, page layouts, and the base UI kit.",
      },
      {
        name: "Privia Hub v2",
        website: "https://priviahub.com",
        description:
          "Modernized existing modules; improved DX/UX in table/list views, filtering, and form flows.",
      },
      {
        name: "PMap",
        website: "https://pmap.io",
        description:
          "A dashboard project for managing multi-pentest processes in multi-layer organizational structures. Built per-subsidiary projects with independent management, visibility screens by project/layer, process maps, and status indicators.",
      },
    ],
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "SCSS",
      "HTML5 • CSS3",
      "JavaScript (ES6+)",
      "Redux",
      "React Query",
      "Formik • Yup",
      "React Hook Form",
      "React Flow",
      "Redux Toolkit",
      "Context API",
      "SWR",
      "Swiper",
      "Framer Motion",
      "REST",
      "WebSocket",
      "GitLab • CI/CD",
    ],
  },
];
