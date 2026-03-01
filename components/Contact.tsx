"use client";

import Section from "./Section";
import { MessageCircle, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const c = t.contact;

  return (
    <Section id="iletisim" title={c.title} description={c.description}>
      <div className="row g-4">
        <div className="col-12 col-md-5">
          <div className="d-flex flex-column gap-4">
            <div>
              <h3 className="mb-2 fs-sm fw-semibold text-zinc-100">
                {c.contactTitle}
              </h3>
              <div className="d-flex flex-column gap-2 fs-sm text-vd-muted">
                <p className="d-flex align-items-center gap-2 mb-0">
                  <Phone className="shrink-0 text-vd-red" style={{ height: 16, width: 16 }} />
                  <a
                    href="tel:+447400487527"
                    className="text-vd-muted text-decoration-none transition-colors hover-text-white"
                  >
                    +44 7400 487527
                  </a>
                </p>
                <p className="d-flex align-items-center gap-2 mb-0">
                  <MapPin className="shrink-0 text-vd-red" style={{ height: 16, width: 16 }} />
                  {c.location}
                </p>
                <p className="mb-0">
                  E‑posta:{" "}
                  <span className="text-zinc-200">hello@victorydigital.co</span>
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/447400487527"
              target="_blank"
              rel="noreferrer"
              className="d-inline-flex align-items-center gap-2 rounded-pill px-3 py-2 fs-xs fw-medium text-white text-decoration-none transition-colors"
              style={{ backgroundColor: "#10b981", width: "fit-content" }}
            >
              <MessageCircle style={{ height: 16, width: 16 }} />
              {c.whatsapp}
            </a>
          </div>
        </div>

        <div className="col-12 col-md-7">
          <form
            className="d-flex flex-column gap-3 rounded-2xl border border-vd-border bg-vd-card p-3 p-md-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="row g-3">
              <div className="col-12 col-md-6">
                <label
                  htmlFor="contact-name"
                  className="form-label fs-xs fw-medium text-zinc-100 mb-1"
                >
                  {c.formName}
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder={c.formPlaceholderName}
                  className="form-control form-control-dark rounded-3 fs-sm"
                />
              </div>
              <div className="col-12 col-md-6">
                <label
                  htmlFor="contact-email"
                  className="form-label fs-xs fw-medium text-zinc-100 mb-1"
                >
                  {c.formEmail}
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder={c.formPlaceholderEmail}
                  className="form-control form-control-dark rounded-3 fs-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="business-type"
                className="form-label fs-xs fw-medium text-zinc-100 mb-1"
              >
                {c.formBusiness}
              </label>
              <input
                id="business-type"
                type="text"
                placeholder={c.formPlaceholderBusiness}
                className="form-control form-control-dark rounded-3 fs-sm"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="form-label fs-xs fw-medium text-zinc-100 mb-1"
              >
                {c.formMessage}
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder={c.formPlaceholderMessage}
                className="form-control form-control-dark rounded-3 fs-sm"
                style={{ resize: "none" }}
              />
            </div>

            <button
              type="submit"
              className="btn w-100 rounded-pill bg-vd-red text-white fs-xs fw-medium transition-colors bg-vd-red-hover"
            >
              {c.submit}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
}
