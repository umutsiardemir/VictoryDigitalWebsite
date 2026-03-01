"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Eligibility() {
  const { t } = useLanguage();
  const e = t.eligibility;

  return (
    <Section id="uygun-mu" title={e.title} description={e.description}>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {e.tags.map((tag) => (
          <span
            key={tag}
            className="d-inline-flex rounded-pill border border-vd-border bg-vd-card px-3 py-2 fs-sm text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="mt-4 fs-sm text-vd-muted text-center">
        {e.cta}{" "}
        <a href="#iletisim" className="text-vd-red text-decoration-none">
          {e.ctaLink}
        </a>{" "}
        {e.ctaSuffix}
      </p>
    </Section>
  );
}
