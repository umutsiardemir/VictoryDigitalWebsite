"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function Process() {
  const { t } = useLanguage();
  const p = t.process;

  return (
    <Section id="calisma-sekli" title={p.title} description={p.description}>
      <div className="row g-4">
        {p.steps.map((step, index) => (
          <div key={step.title} className="col-12 col-sm-6 col-lg-3">
            <article className="d-flex flex-column gap-3 rounded-2xl border border-vd-border bg-vd-card p-4 h-100">
              <span className="fs-xs fw-medium text-vd-muted">
                {index + 1}
              </span>
              <h3 className="fs-sm fw-semibold text-zinc-100 mb-0">
                {step.title}
              </h3>
              <p className="fs-xs leading-relaxed text-vd-muted mb-0">
                {step.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
