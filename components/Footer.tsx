"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="border-top border-vd-border bg-black-60">
      <div className="mx-auto max-w-6xl d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-4 px-3 px-sm-4 py-4">
        <div className="d-flex align-items-center gap-3">
          <div className="position-relative overflow-hidden rounded-3 border border-vd-border bg-zinc-900" style={{ height: 32, width: 32 }}>
            <Image
              src="/victory-digital-logo.png"
              alt="Victory Digital Logo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <div className="fs-xs text-vd-muted">
            <div className="fs-sm fw-semibold text-zinc-100">
              Victory Digital
            </div>
            <div>{f.tagline}</div>
          </div>
        </div>

        <div className="d-flex flex-wrap align-items-center gap-3 fs-xs text-vd-muted">
          <Link href="#hizmetler" className="text-vd-muted text-decoration-none transition-colors hover-text-white">
            {f.services}
          </Link>
          <Link href="#calisma-sekli" className="text-vd-muted text-decoration-none transition-colors hover-text-white">
            {f.process}
          </Link>
          <Link href="#yorumlar" className="text-vd-muted text-decoration-none transition-colors hover-text-white">
            {f.testimonials}
          </Link>
          <Link href="#iletisim" className="text-vd-muted text-decoration-none transition-colors hover-text-white">
            {f.contact}
          </Link>
        </div>

        <p className="text-vd-muted mb-0" style={{ fontSize: "11px" }}>
          © {year} Victory Digital. {f.copyright}
        </p>
      </div>
    </footer>
  );
}
