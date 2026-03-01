"use client";

import Section from "./Section";
import { useLanguage } from "@/context/LanguageContext";

export default function WhatWeDo() {
  const { t } = useLanguage();
  const w = t.whatWeDo;

  return (
    <Section
      id="ne-yapiyoruz"
      title={w.title}
      description={w.description}
    >
      <ul className="list-unstyled d-flex flex-wrap mb-0" style={{ columnGap: "2rem", rowGap: "0.5rem" }}>
        {w.bullets.map((item) => (
          <li key={item} className="d-flex align-items-center gap-2 fs-sm text-zinc-300">
            <span className="rounded-circle bg-vd-red" style={{ height: 6, width: 6 }} />
            {item}
          </li>
        ))}
      </ul>
    </Section>
  );
}
