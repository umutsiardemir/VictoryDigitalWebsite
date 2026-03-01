interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: readonly string[];
  highlighted?: boolean;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  highlighted,
}: PricingCardProps) {
  return (
    <article
      className={`position-relative d-flex flex-column rounded-2xl border bg-vd-card p-4 h-100 ${highlighted ? "shadow-soft" : "border-vd-border"
        }`}
      style={highlighted ? { borderColor: "#b91c1c" } : {}}
    >
      {highlighted && (
        <span
          className="position-absolute rounded-pill bg-vd-red px-3 py-1 fw-semibold text-uppercase text-white"
          style={{ right: 16, top: 16, fontSize: 10, letterSpacing: "0.18em" }}
        >
          En Popüler
        </span>
      )}
      <div className="mb-3 d-flex flex-column gap-1">
        <h3 className="fs-sm fw-semibold text-zinc-100 mb-0">{name}</h3>
        <p className="fs-xs text-vd-muted mb-0">{description}</p>
      </div>
      <div className="mb-3">
        <span className="fs-4 fw-semibold text-zinc-100">
          {price}
        </span>
        <span className="ms-1 fs-xs text-vd-muted">/ay</span>
      </div>
      <ul className="list-unstyled mb-4 d-flex flex-column gap-2 fs-sm text-zinc-300">
        {features.map((feat) => (
          <li key={feat} className="d-flex gap-2">
            <span className="rounded-circle bg-vd-red" style={{ marginTop: 6, height: 6, width: 6, flexShrink: 0 }} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className={`mt-auto d-inline-flex align-items-center justify-content-center rounded-pill px-3 py-2 fs-xs fw-medium border-0 transition-colors ${highlighted
          ? "bg-vd-red text-white bg-vd-red-hover"
          : "text-zinc-100 hover-border-zinc-500"
          }`}
        style={!highlighted ? { border: "1px solid var(--vd-border)", background: "transparent" } : {}}
      >
        Teklif Al
      </button>
    </article>
  );
}
