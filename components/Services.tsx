"use client";

import Section from "./Section";
import ServiceCard from "./ServiceCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <Section
      id="hizmetler"
      title={s.title}
      description={s.description}
    >
      <div className="row g-4">
        {s.list.map((service) => (
          <div key={service.title} className="col-12 col-sm-6 col-lg-4">
            <ServiceCard
              title={service.title}
              headline={service.headline}
              description={service.description}
              bullets={service.bullets}
              detailLabel={s.detailLink}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
