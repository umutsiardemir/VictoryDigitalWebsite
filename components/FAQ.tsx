"use client";

import Section from "./Section";
import Accordion from "./Accordion";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;

  return (
    <Section id="sss" title={f.title} description={f.description}>
      <Accordion items={f.items} />
    </Section>
  );
}
