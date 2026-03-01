import Section from "./Section";
import PricingCard from "./PricingCard";

const packages = [
  {
    name: "Başlangıç",
    price: "₺—",
    forWho: "Tek kanal veya tek hedefle başlamak isteyenler.",
    features: [
      "Kurulum",
      "Aylık yönetim",
      "Raporlama",
    ],
  },
  {
    name: "Büyüme",
    price: "₺—",
    forWho: "Birden fazla kanal ve Local SEO ile büyümek isteyenler.",
    highlighted: true,
    features: [
      "Kurulum",
      "Aylık yönetim",
      "Raporlama",
    ],
  },
  {
    name: "Ölçek",
    price: "₺—",
    forWho: "Tam kapsam ve strateji odaklı ilerlemek isteyenler.",
    features: [
      "Kurulum",
      "Aylık yönetim",
      "Raporlama",
    ],
  },
];

export default function Pricing() {
  return (
    <Section
      id="paketler"
      title="Paketler"
      description="Sektör ve hedefe göre paket içeriği netleştirilir. Fiyat teklifi için iletişime geçin."
    >
      <div className="row g-4">
        {packages.map((pkg) => (
          <div key={pkg.name} className="col-12 col-md-4">
            <PricingCard
              name={pkg.name}
              price={pkg.price}
              description={pkg.forWho}
              features={pkg.features}
              highlighted={pkg.highlighted}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
