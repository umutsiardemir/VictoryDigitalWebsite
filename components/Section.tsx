import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export default function Section({
  id,
  title,
  eyebrow,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="border-top border-vd-border pt-4 pt-md-5">
      <div className="mb-4 mb-md-5 d-flex flex-column gap-3">
        {eyebrow && (
          <span className="fs-xs text-uppercase text-vd-muted" style={{ letterSpacing: "0.25em" }}>
            {eyebrow}
          </span>
        )}
        <div className="d-flex flex-column gap-2 text-center align-items-center">
          <h2 className="fw-semibold tracking-tight mb-0" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            {title}
          </h2>
          {description && (
            <p className="max-w-xl fs-sm text-vd-muted mb-0">
              {description}
            </p>
          )}
        </div>
      </div>
      {children}
    </section>
  );
}
