import { Experience } from "@/components/experience-card";

export const EXPERIENCES: Experience[] = [
  {
    company: "Privia Security",
    role: "Frontend Developer",
    location: "İstanbul",
    remote: true,
    start: "Tem 2022",
    end: "Haz 2025",
    summary:
      "Privia ekosistemindeki ürünlerde uçtan uca frontend geliştirme: kimlik/doğrulama (login–logout, session yenileme), yetkilendirme bazlı yönlendirme/route guard’lar, responsive layout ve tema yönetimi; veri yoğun sayfalar için tablo, filtre, arama, sıralama, sayfalama/infinite-scroll; kart ve liste görünümleri; form akışları (React Hook Form/Formik + Yup), validasyon ve kapsamlı hata yönetimi; loading/skeleton/empty durumları; e-posta şablonları (transactional mail); gerçek-zamanlı sohbet ve bildirimler (WebSocket); global state ve caching (Redux Toolkit, React Query/SWR); erişilebilirlik (ARIA) ve performans iyileştirmeleri (lazy load, code-splitting, memoization). CI/CD süreçleri ve code review ile sürekli teslimat.",
    projects: [
      {
        name: "Privia Hub v3",

        description:
          "Etkileşimli siber güvenlik öğrenme platformu (video kurslar, quiz akışları, CTF tarzı görevler, Chat). Bileşen mimarisi, sayfa düzenleri ve temel UI kitinin kurulumu/evrimi.",
      },
      {
        name: "Privia Hub v2",
        website: "https://priviahub.com",
        description:
          "Mevcut modüllerin modernizasyonu; tablo/list görünümleri, filtreleme ve form akışlarında DX/UX iyileştirmeleri.",
      },
      {
        name: "PMap",
        website: "https://pmap.io",
        description:
          "Çok katmanlı organizasyon yapılarında çoklu pentest süreçlerinin yönetimi için bir Dashboard Projesi. Her iştirak için bağımsız projeler ve ayrı ayrı yönetim; proje/katman bazlı görünürlük ekranları, süreç haritaları ve durum göstergeleri geliştirdim.",
      },
    ],

    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Scss",
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
