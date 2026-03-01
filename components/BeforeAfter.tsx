import Section from "./Section";

export default function BeforeAfter() {
  return (
    <Section
      eyebrow="Önce / Sonra"
      title="Önce / Sonra"
      description="Örnek şablondur; analiz sonrası sizin rakamlarınızla doldururuz."
    >
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="rounded-2xl border border-vd-border bg-vd-card p-4">
            <h3 className="mb-3 fs-sm fw-semibold text-zinc-100">Önce</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 fs-sm text-zinc-300 mb-0">
              <li>• Dağınık reklam</li>
              <li>• Zayıf harita görünürlüğü</li>
              <li>• Belirsiz ölçüm</li>
            </ul>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div
            className="rounded-2xl p-4"
            style={{
              border: "1px solid #7f1d1d",
              background: "linear-gradient(to bottom, rgba(127, 29, 29, 0.4), #09090b, var(--vd-card))",
            }}
          >
            <h3 className="mb-3 fs-sm fw-semibold text-zinc-100">Sonra</h3>
            <ul className="list-unstyled d-flex flex-column gap-2 fs-sm text-zinc-100 mb-0">
              <li>• Net hedef</li>
              <li>• Artan görünürlük</li>
              <li>• Takip edilen dönüşüm</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
