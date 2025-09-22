import { Experience } from "@/src/app/components/experience-card";

export const EXPERIENCES_TR: Experience[] = [
  {
    company: "Privia Security",
    role: "Frontend Developer",
    location: "İstanbul",
    remote: true,
    start: "Tem 2022",
    end: "Haz 2025",
    summary:
      "Privia ekosistemi için kimlik/doğrulama (giriş, çıkış, oturum yenileme), yetkiye duyarlı yönlendirme/guard’lar, responsive layout’lar ve tema kontrolünü kapsayan frontend’i geliştiriyorum. Tablo/filtre/arama/sıralama/sayfalama-infinite scroll ile kart ve liste görünümlerini içeren veri yoğun ekranlar tasarlıyorum. Formları React Hook Form/Formik + Yup ile güçlü validasyon, hata yönetimi ve düşünülmüş loading/skeleton/boş durumlarıyla ele alıyorum. WebSocket üzerinden gerçek zamanlı sohbet ve bildirimler geliştirdim; durum ve cache yönetimini Redux Toolkit ile React Query/SWR’la yapıyorum; erişilebilirlik (ARIA) ve performansa (lazy loading, code splitting, memoization) odaklanıyorum. Süreçler CI/CD ve düzenli code review’larla destekleniyor.",
    projects: [
      {
        name: "Privia Hub v3",
        description:
          "Etkileşimli siber güvenlik öğrenme platformu (video dersler, quiz akışları, CTF tarzı görevler, sohbet). Bileşen mimarisini, sayfa düzenlerini ve temel UI kitini kurup geliştirdim."
      },
      {
        name: "Privia Hub v2",
        website: "https://priviahub.com",
        description:
          "Mevcut modülleri modernize ettim; tablo/liste görünümleri, filtreleme ve form akışlarında DX/UX iyileştirmeleri yaptım."
      },
      {
        name: "PMap",
        website: "https://pmap.io",
        description:
          "Çok katmanlı organizasyon yapılarında çoklu pentest süreçlerini yöneten bir dashboard. Bağlı şirket bazlı projeler, proje/katman görünümleri, süreç haritaları ve durum göstergeleri geliştirdim."
      }
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
      "GitLab • CI/CD"
    ]
  }
];
