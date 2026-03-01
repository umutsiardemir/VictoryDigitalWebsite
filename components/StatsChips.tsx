"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function StatsChips() {
  const { t } = useLanguage();
  const chips = t.stats.chips;

  return (
    <div className="d-flex flex-wrap gap-3">
      {chips.map((label) => (
        <div
          key={label}
          className="d-inline-flex align-items-center rounded-pill border border-vd-border bg-vd-card px-3 py-2 fs-xs text-zinc-100"
        >
          {label}
        </div>
      ))}
    </div>
  );
}
