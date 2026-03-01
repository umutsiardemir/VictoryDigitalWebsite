"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function ScenarioCards() {
  const { t } = useLanguage();
  const s = t.scenarios;

  return (
    <Section id="ornek-senaryolar" title={s.title} description={s.description}>
      <div className="row g-4">
        {s.list.map((item) => (
          <div key={item.sector} className="col-12 col-md-4">
            <article className="d-flex flex-column rounded-2xl border border-vd-border bg-vd-card p-4 h-100">
              <h3 className="mb-3 fs-sm fw-semibold text-zinc-100">
                {item.sector}
              </h3>
              <p className="mb-3 fs-xs text-vd-muted">{item.problem}</p>
              <ul className="list-unstyled mb-3 d-flex flex-column gap-1 fs-xs text-zinc-300">
                {item.done.map((d) => (
                  <li key={d} className="d-flex gap-2">
                    <span className="shrink-0 rounded-circle bg-vd-red" style={{ marginTop: 6, height: 6, width: 6 }} />
                    {d}
                  </li>
                ))}
              </ul>
              <p className="mt-auto text-vd-muted mb-0" style={{ fontSize: "11px" }}>{item.impact}</p>
            </article>
          </div>
        ))}
      </div>
    </Section>
  );
}
