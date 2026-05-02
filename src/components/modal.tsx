import { useState, useEffect, useCallback } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProjectImage {
  src: string;
  alt: string;
  label?: string;
}

export interface ProjectFeature {
  title: string;
  body: string;
}

export interface ProjectData {
  title: string;
  subtitle?: string;
  tags?: string[];
  overview: string;
  images?: ProjectImage[];
  features?: ProjectFeature[];
  stackTags?: string[];
  liveUrl?: string;
  videoUrl?: string;
}

interface ProjectBlogModalProps {
  project: ProjectData;
  buttonLabel?: string;
  buttonStyle?: React.CSSProperties;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImagePlaceholder({ label }: { label?: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        background: "#f5f5f3",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        style={{ opacity: 0.25 }}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      {label && (
        <span
          style={{
            fontSize: 10,
            color: "#999",
            textAlign: "center",
            padding: "0 6px",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: ProjectImage[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  const img = images[index];

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        animation: "lightboxFadeIn 0.18s ease",
      }}
    >
      <style>{`
        @keyframes lightboxFadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes lightboxImgIn { from { opacity: 0; transform: scale(0.93) } to { opacity: 1; transform: scale(1) } }
      `}</style>

      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 36,
          height: 36,
          borderRadius: 10,
          background: "rgba(255,255,255,0.12)",
          border: "0.5px solid rgba(255,255,255,0.18)",
          color: "#fff",
          fontSize: 16,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(8px)",
        }}
      >
        ✕
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={prev}
          style={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "rgba(255,255,255,0.12)",
            border: "0.5px solid rgba(255,255,255,0.18)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          ‹
        </button>
      )}

      {/* Image */}
      <div
        key={index}
        style={{
          maxWidth: "88vw",
          maxHeight: "84vh",
          borderRadius: 10,
          overflow: "hidden",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          animation: "lightboxImgIn 0.2s ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
        }}
      >
        {img.src ? (
          <img
            src={img.src}
            alt={img.alt}
            style={{
              maxWidth: "88vw",
              maxHeight: "84vh",
              objectFit: "contain",
              display: "block",
            }}
          />
        ) : (
          <div style={{ width: 420, height: 280 }}>
            <ImagePlaceholder label={img.label || img.alt} />
          </div>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={next}
          style={{
            position: "absolute",
            right: 16,
            top: "50%",
            transform: "translateY(-50%)",
            width: 40,
            height: 40,
            borderRadius: 10,
            background: "rgba(255,255,255,0.12)",
            border: "0.5px solid rgba(255,255,255,0.18)",
            color: "#fff",
            fontSize: 20,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backdropFilter: "blur(8px)",
          }}
        >
          ›
        </button>
      )}

      {/* Counter */}
      {images.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 12,
            color: "rgba(255,255,255,0.55)",
            background: "rgba(0,0,0,0.4)",
            padding: "4px 12px",
            borderRadius: 20,
            backdropFilter: "blur(8px)",
          }}
        >
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

// ─── GalleryItem ──────────────────────────────────────────────────────────────

function GalleryItem({
  image,
  onClick,
}: {
  image: ProjectImage;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        borderRadius: 8,
        border: "0.5px solid rgba(0,0,0,0.08)",
        overflow: "hidden",
        cursor: "zoom-in",
        position: "relative",
        background: "#f5f5f3",
        aspectRatio: "3/4",
        transition: "transform 0.15s ease, box-shadow 0.15s ease",
        transform: hovered ? "scale(1.015)" : "scale(1)",
        boxShadow: hovered ? "0 6px 20px rgba(0,0,0,0.12)" : "none",
      }}
    >
      {image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      ) : (
        <ImagePlaceholder label={image.label || image.alt} />
      )}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="11" y1="8" x2="11" y2="14" />
            <line x1="8" y1="11" x2="14" y2="11" />
          </svg>
          <span
            style={{
              fontSize: 11,
              color: "#fff",
              background: "rgba(0,0,0,0.55)",
              padding: "4px 10px",
              borderRadius: 20,
            }}
          >
            {image.label || image.alt}
          </span>
        </div>
      )}
    </div>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

function Gallery({
  images,
  onImageClick,
}: {
  images: ProjectImage[];
  onImageClick: (index: number) => void;
}) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div
        onClick={() => onImageClick(0)}
        style={{
          borderRadius: 8,
          border: "0.5px solid rgba(0,0,0,0.08)",
          overflow: "hidden",
          marginBottom: 20,
          background: "#f5f5f3",
          aspectRatio: "16/9",
          position: "relative",
          cursor: "zoom-in",
        }}
      >
        {images[0].src ? (
          <img
            src={images[0].src}
            alt={images[0].alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <ImagePlaceholder label={images[0].label || images[0].alt} />
        )}
      </div>
    );
  }

  const cols = images.length === 2 ? 2 : 3;
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gap: 8,
        marginBottom: 20,
      }}
    >
      {images.map((img, i) => (
        <GalleryItem
          key={img.alt}
          image={img}
          onClick={() => onImageClick(i)}
        />
      ))}
    </div>
  );
}

// ─── Section label helper ─────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: "#aaa",
        margin: "0 0 10px",
      }}
    >
      {children}
    </p>
  );
}

// ─── Modal ────────────────────────────────────────────────────────────────────

function Modal({
  open,
  onClose,
  project,
}: {
  open: boolean;
  onClose: () => void;
  project: ProjectData;
}) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  if (!open) return null;

  const hasGallery = project.images && project.images.length > 0;
  const hasFeatures = project.features && project.features.length > 0;
  const hasStack = project.stackTags && project.stackTags.length > 0;

  return (
    <>
      <div
        onClick={(e) => e.target === e.currentTarget && onClose()}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.38)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "40px 16px",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "0.5px solid rgba(0,0,0,0.08)",
            borderRadius: 12,
            width: "100%",
            maxWidth: 580,
            overflow: "hidden",
            fontFamily:
              "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            marginBottom: 40,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              padding: "20px 24px 0",
              gap: 12,
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 18,
                  fontWeight: 500,
                  color: "#111",
                  margin: "0 0 4px",
                }}
              >
                {project.title}
              </p>
              {project.subtitle && (
                <p style={{ fontSize: 13, color: "#888", margin: 0 }}>
                  {project.subtitle}
                </p>
              )}
            </div>
            <button
              onClick={onClose}
              style={{
                width: 28,
                height: 28,
                borderRadius: 8,
                background: "#f5f5f3",
                border: "0.5px solid rgba(0,0,0,0.08)",
                color: "#666",
                fontSize: 14,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              height: "0.5px",
              background: "rgba(0,0,0,0.08)",
              margin: "16px 0 0",
            }}
          />

          {/* Body */}
          <div style={{ padding: "20px 24px 28px" }}>
            <SectionLabel>Overview</SectionLabel>
            <p
              style={{
                fontSize: 14,
                color: "#555",
                lineHeight: 1.65,
                margin: "0 0 20px",
              }}
            >
              {project.overview}
            </p>

            {project.videoUrl && (
              <>
                <SectionLabel>Demo video</SectionLabel>
                <div
                  style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    marginBottom: 20,
                    background: "#000",
                    aspectRatio: "16/9",
                  }}
                >
                  <video
                    src={project.videoUrl}
                    controls
                    style={{ width: "100%", height: "100%", display: "block" }}
                  />
                </div>
              </>
            )}

            {hasGallery && (
              <>
                <SectionLabel>Gallery</SectionLabel>
                <Gallery
                  images={project.images!}
                  onImageClick={(i) => setLightbox(i)}
                />
              </>
            )}

            {hasFeatures && (
              <>
                <SectionLabel>Key features</SectionLabel>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  {project.features!.map((f) => (
                    <div
                      key={f.title}
                      style={{
                        background: "#f8f8f6",
                        borderRadius: 8,
                        padding: "12px 14px",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 13,
                          fontWeight: 500,
                          color: "#111",
                          margin: "0 0 3px",
                        }}
                      >
                        {f.title}
                      </p>
                      <p
                        style={{
                          fontSize: 12,
                          color: "#777",
                          margin: 0,
                          lineHeight: 1.5,
                        }}
                      >
                        {f.body}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {hasStack && (
              <>
                <SectionLabel>Tech stack</SectionLabel>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {project.stackTags!.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        color: "#185FA5",
                        background: "#E6F1FB",
                        borderRadius: 8,
                        padding: "3px 10px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}

            {project.liveUrl && (
              <div style={{ marginTop: 20 }}>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "#111",
                    border: "0.5px solid rgba(0,0,0,0.15)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Live demo ↗
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {lightbox !== null && (
        <Lightbox
          images={project.images!}
          startIndex={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export default function ProjectBlogModal({
  project,
  buttonLabel = "Read case study",
  buttonStyle,
}: ProjectBlogModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          fontSize: 13,
          fontWeight: 500,
          background: "#111",
          color: "#fff",
          border: "none",
          borderRadius: 8,
          padding: "8px 16px",
          cursor: "pointer",
          fontFamily:
            "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          ...buttonStyle,
        }}
      >
        {buttonLabel}
      </button>

      <Modal open={open} onClose={() => setOpen(false)} project={project} />
    </>
  );
}
