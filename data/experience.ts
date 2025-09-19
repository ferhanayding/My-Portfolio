import { Experience } from "@/components/experienceCard";

export const EXPERIENCES: Experience[] = [
  {
    company: "Privia Security",
    role: "Frontend Developer",
    location: "İstanbul",
    remote: true,
    website: "https://priviahub.com",
    start: "Tem 2022",
    end: "Haz 2025",
    summary:
      "Siber güvenlik odaklı ürünlerde uçtan uca arayüz geliştirme. Modern UI mimarisi, yeniden kullanılabilir bileşenler ve performans/erişilebilirlik odağıyla ürün deneyimini iyileştirdim.",
    projects: [
      {
        name: "Privia Hub v3",
        description:
          "Etkileşimli siber güvenlik öğrenme platformu (video kurslar, quiz akışları, CTF tarzı görevler). Bileşen mimarisi, sayfa düzenleri ve temel UI kitinin kurulumu/evrimi."
      },
      {
        name: "Privia Hub v2",
        description:
          "Mevcut modüllerin modernizasyonu; tablo/list görünümleri, filtreleme ve form akışlarında DX/UX iyileştirmeleri."
      },
      {
        name: "PMap",
        description:
          "Çok katmanlı organizasyon yapılarında çoklu pentest süreçlerinin yönetimi. Her iştirak için bağımsız projeler ve ayrı ayrı yönetim; proje/katman bazlı görünürlük ekranları, süreç haritaları ve durum göstergeleri geliştirdim."
      },
      {
        name: "Harpoon X",
        description:
          "Siber operasyonlar ve tehdit görselleştirme için ileri seviye arayüz; yoğun veri görselleri, operatör verimliliğine yönelik kısayollar ve etkileşimler."
      }
    ],
    realtimeNote:
      "Görev ilerlemeleri, bildirimler ve eş-zamanlı UI güncellemeleri için WebSocket tabanlı iletişim (backend’de Gorilla WebSocket; frontend’de canlı durum yönetimi ve optimistic UI).",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Material UI",
      "Tailwind CSS",
      "Redux",
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
