"use client";

import {
  Share2,
  MapPin,
  Sparkles,
  MousePointerClick,
  Megaphone,
} from "lucide-react";
import ServiceCard from "@/components/ui/service-card";

const SERVICES = [
  {
    title: "Sosyal Medya Yönetimi",
    imageSrc: "/services/sosyal-medya.webp",
    imageAlt: "Sosyal medya yönetimi",
    tags: ["İçerik", "Topluluk", "Reklam"] as const,
    icon: Share2,
    featured: false,
  },
  {
    title: "Lokal SEO & Website Optimizasyonu",
    imageSrc: "/services/lokal-seo.webp",
    imageAlt: "Lokal SEO ve website optimizasyonu",
    tags: ["Google Haritalar", "Arama", "Site hızı"] as const,
    icon: MapPin,
    featured: true,
  },
  {
    title: "Yapay Zeka Otomasyonları",
    imageSrc: "/services/ai-otomasyon.webp",
    imageAlt: "Yapay zeka otomasyonları",
    tags: ["Lead", "CRM", "Raporlama"] as const,
    icon: Sparkles,
    featured: false,
  },
  {
    title: "Google Ads",
    imageSrc: "/services/google-ads.webp",
    imageAlt: "Google Ads",
    tags: ["Arama", "Performans", "Dönüşüm"] as const,
    icon: MousePointerClick,
    featured: false,
  },
  {
    title: "Meta Reklamları",
    imageSrc: "/services/meta-ads.webp",
    imageAlt: "Meta reklamları",
    tags: ["Facebook", "Instagram", "Lead"] as const,
    icon: Megaphone,
    featured: false,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="hizmetler"
      className="position-relative overflow-hidden border-top border-vd-border pt-4 pt-md-5"
      aria-labelledby="services-heading"
    >
      {/* Subtle background gradient + noise feel */}
      <div
        className="pointer-events-none position-absolute inset-0"
        style={{
          zIndex: -10,
          opacity: 0.03,
          backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 0%, rgba(225, 29, 46, 0.4), transparent), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(225, 29, 46, 0.2), transparent)`,
        }}
      />
      <div
        className="pointer-events-none position-absolute inset-0"
        style={{
          zIndex: -10,
          opacity: 0.3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="mx-auto max-w-6xl px-3 px-sm-4">
        {/* Header */}
        <div className="mb-4 mb-md-5 d-flex flex-column flex-md-row align-items-md-end justify-content-md-between gap-3">
          <div className="d-flex flex-column gap-3">
            <span className="fs-xs text-uppercase text-vd-muted" style={{ letterSpacing: "0.25em" }}>
              Hizmetler
            </span>
            <h2
              id="services-heading"
              className="max-w-2xl fw-semibold tracking-tight text-zinc-100 mb-0"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Yerel işletmenizi büyütmek için ihtiyacınız olan tüm kanallar tek
              çatı altında.
            </h2>
            <p className="max-w-xl fs-sm text-vd-muted mb-0">
              Sosyal medyadan reklama, lokaldan yapay zekaya kadar performans
              odaklı hizmetler.
            </p>
          </div>
          <a
            href="#iletisim"
            className="mt-3 mt-md-0 d-inline-flex align-items-center gap-2 fs-sm fw-medium text-vd-red text-decoration-none transition-colors"
            style={{ width: "fit-content" }}
          >
            Tüm paketleri incele
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Grid */}
        <div className="row g-4">
          {SERVICES.map((service, i) => (
            <div
              key={service.title}
              className={`animate-floaty ${service.featured
                  ? "col-12 col-sm-6 col-lg-8"
                  : "col-12 col-sm-6 col-lg-4"
                }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <ServiceCard
                title={service.title}
                imageSrc={service.imageSrc}
                imageAlt={service.imageAlt}
                tags={[...service.tags]}
                ctaLabel="Teklif al"
                icon={service.icon}
                featured={service.featured}
                href="#iletisim"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
