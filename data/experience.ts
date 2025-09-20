import { Experience } from "@/components/experience-card";

export const EXPERIENCES: Experience[] = [
  {
    company: "Privia Security",
    role: "Frontend Developer",
    location: "Istanbul",
    remote: true,
    start: "Jul 2022",
    end: "Jun 2025",
    summary:
      "End-to-end frontend development across products in the Privia ecosystem: identity/auth (login–logout, session refresh), authorization-based routing/route guards, responsive layouts and theme management; data-heavy pages with tables, filters, search, sorting, pagination/infinite scroll; card and list views; form flows (React Hook Form/Formik + Yup), validation and comprehensive error handling; loading/skeleton/empty states; transactional email templates; real-time chat and notifications (WebSocket); global state and caching (Redux Toolkit, React Query/SWR); accessibility (ARIA) and performance improvements (lazy loading, code-splitting, memoization). Continuous delivery with CI/CD pipelines and code review.",
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
