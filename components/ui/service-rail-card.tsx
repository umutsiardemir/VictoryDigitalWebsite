"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { type LucideIcon } from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export interface ServiceRailCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  tags: [string, string, string];
  ctaLabel: string;
  icon: LucideIcon;
  featured?: string;
  href?: string;
  /** Custom styles for the card */
  style?: React.CSSProperties;
  desktopStyle?: React.CSSProperties;
}

export default function ServiceRailCard({
  title,
  imageSrc,
  imageAlt,
  tags,
  ctaLabel,
  icon: Icon,
  featured,
  href = "#iletisim",
  style = {},
  desktopStyle,
}: ServiceRailCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const reduceMotion = usePrefersReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (reduceMotion) return;
      const el = cardRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setSpotlight({ x, y });
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const tiltY = ((e.clientX - centerX) / rect.width) * -8;
      const tiltX = ((e.clientY - centerY) / rect.height) * 8;
      setTilt({ x: tiltX, y: tiltY });
    },
    [reduceMotion]
  );

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => {
    setSpotlight({ x: 50, y: 50 });
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  }, []);

  const tiltStyle = reduceMotion
    ? undefined
    : {
      transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)${isHovered ? " scale(1.02)" : ""}`,
    };

  // Merge desktop styles on large screens (handled via CSS media query or JS)
  const mergedStyle: React.CSSProperties = {
    ...style,
    flexShrink: 0,
    border: isHovered ? "1px solid rgba(225, 29, 46, 0.4)" : "1px solid rgba(255,255,255,0.1)",
    backgroundColor: "var(--vd-card)",
    outline: "none",
    transition: "all 0.3s",
    boxShadow: isHovered ? "0 0 0 2px rgba(225, 29, 46, 0.5)" : "none",
  };

  return (
    <a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="d-flex flex-column justify-content-end overflow-hidden rounded-2xl position-relative text-decoration-none text-white"
      style={mergedStyle}
      aria-label={`${title} - ${ctaLabel}`}
    >
      <span
        className="position-absolute d-flex flex-column will-change-transform"
        style={{
          top: 0, left: 0, right: 0, bottom: 0,
          transition: "transform 0.3s ease-out",
          ...tiltStyle,
        }}
      >
        <span className="position-absolute" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 85vw, 420px"
            className="object-cover"
            style={{
              transition: "transform 0.5s ease-out",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
            }}
          />
        </span>

        {/* Top gradient only */}
        <span
          className="pointer-events-none position-absolute"
          style={{
            top: 0, left: 0, right: 0, bottom: 0,
            background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 35%, transparent 55%, rgba(0,0,0,0.85) 100%)",
          }}
          aria-hidden
        />
        {!reduceMotion && (
          <span
            className="pointer-events-none position-absolute"
            style={{
              top: 0, left: 0, right: 0, bottom: 0,
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.3s",
              background: `radial-gradient(circle 180px at ${spotlight.x}% ${spotlight.y}%, rgba(225, 29, 46, 0.12), transparent 70%)`,
            }}
            aria-hidden
          />
        )}

        <span
          className="pointer-events-none position-absolute rounded-2xl"
          style={{
            top: -1, left: -1, right: -1, bottom: -1,
            opacity: isHovered ? 1 : 0,
            boxShadow: "inset 0 0 30px rgba(225, 29, 46, 0.15)",
            transition: "opacity 0.3s",
          }}
          aria-hidden
        />

        {/* Content: title at top, tags+CTA at bottom */}
        <span className="position-relative d-flex flex-column flex-grow-1 justify-content-between p-4" style={{ zIndex: 1 }}>
          {/* Top: icon + title */}
          <div className="d-flex align-items-center gap-2">
            <span
              className="d-flex shrink-0 align-items-center justify-content-center rounded-3 text-white"
              style={{ height: 36, width: 36, background: "rgba(225, 29, 46, 0.9)" }}
            >
              <Icon style={{ height: 16, width: 16 }} aria-hidden />
            </span>
            <h3 className="fw-semibold tracking-tight text-white mb-0" style={{ fontSize: "clamp(1.125rem, 2vw, 1.25rem)" }}>
              {title}
            </h3>
          </div>

          {/* Bottom: tags + CTA */}
          <div>
            <div className="mb-3 d-flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill fw-medium backdrop-blur-sm"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "rgba(255,255,255,0.1)",
                    padding: "4px 12px",
                    fontSize: 11,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <span
              className="d-inline-flex align-items-center gap-2 rounded-pill bg-vd-red px-3 py-2 fs-sm fw-medium text-white"
              style={{ width: "fit-content", transition: "background 0.15s" }}
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </span>
          </div>
        </span>
      </span>

      {featured && (
        <span
          className="position-absolute rounded-pill text-white fw-semibold text-uppercase shadow-lg"
          style={{
            right: 16, top: 16,
            background: "rgba(225, 29, 46, 0.9)",
            padding: "4px 12px",
            fontSize: 10,
            letterSpacing: "0.05em",
            zIndex: 2,
          }}
        >
          {featured}
        </span>
      )}
    </a>
  );
}
