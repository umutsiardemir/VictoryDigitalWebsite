interface ServiceCardProps {
  title: string;
  headline: string;
  description: string;
  bullets: readonly string[];
  detailLabel: string;
}

export default function ServiceCard({
  title,
  headline,
  description,
  bullets,
  detailLabel,
}: ServiceCardProps) {
  return (
    <article className="d-flex flex-column justify-content-between rounded-2xl border border-vd-border bg-vd-card p-4 h-100 transition-colors hover-border-zinc-500">
      <div className="mb-3 d-flex flex-column gap-3">
        <p className="fs-xs text-uppercase text-vd-muted mb-0" style={{ letterSpacing: "0.05em" }}>
          {title}
        </p>
        <h3 className="fw-semibold text-zinc-100 mb-0" style={{ fontSize: "1.125rem" }}>{headline}</h3>
        <p className="fs-sm text-vd-muted mb-0">{description}</p>
        <ul className="list-unstyled mt-2 d-flex flex-column gap-2 fs-sm text-zinc-300 mb-0">
          {bullets.map((item) => (
            <li key={item} className="d-flex gap-2">
              <span className="rounded-circle bg-vd-red" style={{ marginTop: 6, height: 6, width: 6, flexShrink: 0 }} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#iletisim"
        className="mt-auto d-inline-flex align-items-center gap-1 fs-xs fw-medium text-vd-red text-decoration-none transition-colors"
      >
        {detailLabel}
        <span aria-hidden>↗</span>
      </a>
    </article>
  );
}
