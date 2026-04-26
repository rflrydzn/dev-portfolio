import { useState } from "react";

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
  subtitle?: string; // e.g. "Client project · 2025"
  tags?: string[]; // card-level chips
  overview: string;
  images?: ProjectImage[]; // 0 = no gallery, 1 = hero, 2+ = grid
  features?: ProjectFeature[];
  stackTags?: string[];
  liveUrl?: string;
  videoUrl?: string; // ← add this
}

interface ProjectBlogModalProps {
  project: ProjectData;
  /** Text shown on the trigger button. Defaults to "Read case study" */
  buttonLabel?: string;
  /** Optional extra styles on the trigger button */
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

function GalleryItem({ image }: { image: ProjectImage }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 8,
        border: "0.5px solid rgba(0,0,0,0.08)",
        overflow: "hidden",
        cursor: "pointer",
        position: "relative",
        background: "#f5f5f3",
        aspectRatio: "3/4",
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
            background: "rgba(0,0,0,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
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

// Renders 1 image as a wide hero, 2 as side-by-side, 3+ as a 3-column grid
function Gallery({ images }: { images: ProjectImage[] }) {
  if (images.length === 0) return null;

  if (images.length === 1) {
    return (
      <div
        style={{
          borderRadius: 8,
          border: "0.5px solid rgba(0,0,0,0.08)",
          overflow: "hidden",
          marginBottom: 20,
          background: "#f5f5f3",
          aspectRatio: "16/9",
          position: "relative",
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
      {images.map((img) => (
        <GalleryItem key={img.alt} image={img} />
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
  if (!open) return null;

  const hasGallery = project.images && project.images.length > 0;
  const hasFeatures = project.features && project.features.length > 0;
  const hasStack = project.stackTags && project.stackTags.length > 0;

  return (
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
              <Gallery images={project.images!} />
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

// ─── Usage examples (remove when integrating) ─────────────────────────────────
//
// Single image project:
// <ProjectBlogModal
//   project={{
//     title: "Brand refresh — Acme Co.",
//     subtitle: "Freelance · 2024",
//     overview: "Redesigned the full visual identity...",
//     images: [{ src: "/acme-hero.jpg", alt: "Acme homepage redesign" }],
//     stackTags: ["Figma", "Next.js", "Tailwind"],
//   }}
// />
//
// No image project:
// <ProjectBlogModal
//   project={{
//     title: "CLI task manager",
//     overview: "A fast terminal-based task manager...",
//     features: [{ title: "Offline first", body: "Works without a connection." }],
//     stackTags: ["Rust", "SQLite"],
//     liveUrl: "https://github.com/you/cli-tasks",
//   }}
// />
//
// Multi-image project (3-column grid):
// <ProjectBlogModal
//   project={{
//     title: "AI hairstyle editor",
//     subtitle: "Client project · 2025",
//     tags: ["AI / image gen", "Mobile app"],
//     overview: "Captures front, side, and back profiles...",
//     images: [
//       { src: "/front-before.jpg", alt: "Front before", label: "Front — before" },
//       { src: "/side-before.jpg",  alt: "Side before",  label: "Side — before"  },
//       { src: "/back-before.jpg",  alt: "Back before",  label: "Back — before"  },
//       { src: "/front-after.jpg",  alt: "Front after",  label: "Front — result" },
//       { src: "/side-after.jpg",   alt: "Side after",   label: "Side — result"  },
//       { src: "/back-after.jpg",   alt: "Back after",   label: "Back — result"  },
//     ],
//     features: [
//       { title: "3-angle capture", body: "Guided camera flow." },
//       { title: "Nano Banana 2",   body: "AI hair placement."  },
//     ],
//     stackTags: ["Nano Banana 2", "React Native", "Node.js"],
//     liveUrl: "https://yourapp.com",
//   }}
// />
