"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: readonly AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-vd-border bg-vd-card">
      {items.map((item, index) => {
        const isOpen = index === openIndex;
        return (
          <div
            key={item.question}
            className={index !== items.length - 1 ? "border-bottom border-vd-border" : ""}
          >
            <button
              type="button"
              className="d-flex w-100 align-items-center justify-content-between gap-3 px-4 py-3 text-start bg-transparent border-0"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="fs-sm fw-medium text-zinc-100">
                {item.question}
              </span>
              <ChevronDown
                className={`text-vd-muted shrink-0 transition-transform ${isOpen ? "rotate-180" : ""
                  }`}
                style={{ height: 16, width: 16 }}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-3 fs-sm text-vd-muted">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
