const stats = [
  { label: "Memnun Müşteri", value: "32+" },
  { label: "Yıl Deneyim", value: "4+" },
  { label: "Hızlı ve Ölçülebilir Sonuç", value: "Odak" },
];

export default function Stats() {
  return (
    <div className="d-flex flex-wrap gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="d-inline-flex align-items-center justify-content-between rounded-pill border border-vd-border bg-vd-card px-3 py-2 fs-xs text-zinc-100"
          style={{ minWidth: 180 }}
        >
          <span className="text-vd-muted">{stat.label}</span>
          <span className="fw-semibold">{stat.value}</span>
        </div>
      ))}
    </div>
  );
}
