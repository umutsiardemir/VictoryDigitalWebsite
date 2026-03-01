"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const x = t.testimonials;

  return (
    <Section id="yorumlar" title={x.title} description={x.description}>
      <div className="row g-4">
        {x.list.map((item, i) => (
          <div key={i} className="col-12 col-md-4">
            <figure className="d-flex flex-column rounded-2xl border border-vd-border bg-vd-card p-4 h-100 mb-0">
              <p className="mb-3 fs-sm leading-relaxed text-zinc-200">
                &ldquo;{item.quote}&rdquo;
              </p>
              <figcaption className="mt-auto fs-xs text-vd-muted">
                <div className="fw-medium text-zinc-100">{item.name}</div>
                <div>{item.role}</div>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </Section>
  );
}
