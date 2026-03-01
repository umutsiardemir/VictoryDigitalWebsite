"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { locale, setLocale, t } = useLanguage();
  const navItems = t.nav.items;

  return (
    <header className="sticky-top border-bottom border-vd-border bg-black-70 backdrop-blur" style={{ zIndex: 40 }}>
      <div className="mx-auto max-w-6xl d-flex align-items-center justify-content-between px-3 px-sm-4 py-3">
        <Link href="#hero" className="d-flex align-items-center gap-2 text-decoration-none">
          <div className="position-relative overflow-hidden rounded-3 border border-vd-border bg-zinc-900" style={{ height: 36, width: 36 }}>
            <Image
              src="/victory-digital-logo.png"
              alt="Victory Digital Logo"
              fill
              sizes="36px"
              className="object-contain"
            />
          </div>
          <span className="fs-sm fw-semibold tracking-tight text-zinc-100">
            Victory <span className="text-vd-red">Digital</span>
          </span>
        </Link>

        <nav className="d-none d-md-flex align-items-center gap-6 fs-sm text-zinc-300">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-300 text-decoration-none transition-colors hover-text-white"
            >
              {item.label}
            </a>
          ))}
          <div className="ms-2 d-flex align-items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale("tr")}
              className={`rounded-pill px-3 py-1 fs-xs fw-medium border-0 transition-colors ${locale === "tr"
                  ? "bg-vd-red text-white"
                  : "border border-vd-border text-vd-muted hover-text-white"
                }`}
              style={locale !== "tr" ? { border: "1px solid var(--vd-border)", background: "transparent" } : {}}
              aria-pressed={locale === "tr"}
            >
              TR
            </button>
            <button
              type="button"
              onClick={() => setLocale("en")}
              className={`rounded-pill px-3 py-1 fs-xs fw-medium border-0 transition-colors ${locale === "en"
                  ? "bg-vd-red text-white"
                  : "border border-vd-border text-vd-muted hover-text-white"
                }`}
              style={locale !== "en" ? { border: "1px solid var(--vd-border)", background: "transparent" } : {}}
              aria-pressed={locale === "en"}
            >
              EN
            </button>
          </div>
          <a
            href="tel:+447400487527"
            className="d-inline-flex align-items-center rounded-pill bg-vd-red px-3 py-2 fs-xs fw-medium text-white text-decoration-none shadow-soft transition-colors bg-vd-red-hover"
          >
            +44 7400 487527
          </a>
        </nav>

        <div className="d-flex d-md-none align-items-center gap-2">
          <button
            type="button"
            onClick={() => setLocale(locale === "tr" ? "en" : "tr")}
            className="rounded-pill px-3 py-1 fs-xs fw-medium text-zinc-200"
            style={{ border: "1px solid var(--vd-border)", background: "transparent" }}
          >
            {locale === "tr" ? "EN" : "TR"}
          </button>
          <button
            type="button"
            aria-label={t.nav.menuAria}
            onClick={() => setOpen((v) => !v)}
            className="d-inline-flex align-items-center justify-content-center rounded-circle bg-black-40 text-zinc-200"
            style={{ height: 36, width: 36, border: "1px solid var(--vd-border)" }}
          >
            {open ? <X style={{ height: 20, width: 20 }} /> : <Menu style={{ height: 20, width: 20 }} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-top border-vd-border bg-vd-background d-md-none">
          <nav className="mx-auto max-w-6xl d-flex flex-column gap-2 px-3 pb-3 pt-2 fs-sm text-zinc-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-zinc-300 text-decoration-none transition-colors hover-text-white"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+447400487527"
              className="mt-2 d-inline-flex align-items-center justify-content-center rounded-pill bg-vd-red px-3 py-2 fs-xs fw-medium text-white text-decoration-none"
            >
              +44 7400 487527
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
