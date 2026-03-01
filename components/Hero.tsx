"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <div className="row g-4 align-items-center">
      <div className="col-12 col-md-7">
        <div className="d-flex flex-column gap-3">
          <h1 className="fw-semibold tracking-tight" style={{ fontSize: "clamp(1.875rem, 4vw, 3.75rem)" }}>
            {h.headline}{" "}
            <span className="text-vd-red">{h.headlineHighlight}</span>
          </h1>
          <p className="max-w-xl fs-sm text-vd-muted">
            {h.subline}
          </p>
          <p className="fs-xs text-vd-muted">{h.proof}</p>

          <div className="d-flex flex-wrap align-items-center gap-3">
            <a
              href="#iletisim"
              className="d-inline-flex align-items-center gap-2 rounded-pill bg-vd-red px-4 py-2 fs-sm fw-medium text-white text-decoration-none shadow-soft transition-colors bg-vd-red-hover"
            >
              {h.ctaPrimary}
            </a>
            <a
              href="#hizmetler"
              className="d-inline-flex align-items-center gap-2 rounded-pill bg-black-50 px-4 py-2 fs-sm fw-medium text-zinc-100 text-decoration-none transition-colors hover-border-zinc-500"
              style={{ border: "1px solid var(--vd-border)" }}
            >
              {h.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-5">
        <div className="position-relative">
          <div className="overflow-hidden rounded-2xl border border-vd-border bg-vd-card shadow-soft">
            <div className="position-relative aspect-video bg-black" style={{ minHeight: 200 }}>
              <Image
                src="/victory-digital-logo.png"
                alt="Victory Digital"
                fill
                className="object-contain p-4"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <button
                type="button"
                className="position-absolute inset-0 d-flex align-items-center justify-content-center bg-black-40 border-0 w-100 h-100 transition-colors"
                style={{ top: 0, left: 0, right: 0, bottom: 0 }}
                aria-label={h.videoTitle}
              >
                <span
                  className="d-flex align-items-center justify-content-center rounded-circle text-vd-red backdrop-blur-sm"
                  style={{
                    height: 64,
                    width: 64,
                    border: "1px solid rgba(255,255,255,0.3)",
                    background: "rgba(255,255,255,0.1)",
                  }}
                >
                  <Play style={{ height: 32, width: 32, fill: "currentColor" }} />
                </span>
              </button>
            </div>
            <div className="border-top border-vd-border px-3 py-2">
              <p className="fs-sm fw-medium text-zinc-100 mb-0">
                {h.videoTitle}{" "}
                <span className="text-vd-muted">({h.videoDuration})</span>
              </p>
              <p className="fs-xs text-vd-muted mb-0">{h.videoSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
