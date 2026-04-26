import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import IncrementViews from "@/components/increment-views";
import CircularTestimonials from "@/components/circular-testimonial";
import Certificate from "@/../public/certificate.jpg";
import Image from "next/image";
import Gallery from "@/components/certificate-gallery";

const BLUR_FADE_DELAY = 0.04;

export const testimonials = [
  {
    quote:
      "Perfect! The menu matches our colors and aesthetic. Sleek interface, intuitive, elevates guest experience. Simple yet exceptional work!",
    name: "Jass",
    designation: "Restaurant Manager",
    src: "https://i.ibb.co/rG0CcvP0/IMG-9161.jpg",
    project: {
      title: "Ikebukuro Japanese Resto bar menu",
      subtitle: "Client project · 2025",
      tags: ["Mobile app", "UI/UX", "Branding"],
      overview:
        "Designed and built a branded digital menu app for a restaurant client. The interface reflects the restaurant's color palette and aesthetic, giving guests a premium ordering experience without needing a physical menu. Supports multiple categories, item descriptions, and pricing updates via a simple CMS.",
      images: [
        {
          src: "https://i.ibb.co/SwLZZxw2/IMG-9161.jpg",
          alt: "Picture with client",
          label: "Client",
        },
        {
          src: "https://i.ibb.co/r29ZCyt7/IMG-9812.png",
          alt: "Menu",
          label: "Menu",
        },
        {
          src: "https://i.ibb.co/93hYvst2/IMG-9813.png",
          alt: "Home",
          label: "Home",
        },
        {
          src: "https://i.ibb.co/5XtKy4yM/IMG-9814.png",
          alt: "About",
          label: "About",
        },
        {
          src: "https://i.ibb.co/nNssqLmc/IMG-9815.png",
          alt: "About",
          label: "About",
        },
      ],
      features: [
        {
          title: "Branded UI",
          body: "Colors, fonts, and layout matched precisely to the restaurant's identity.",
        },
        {
          title: "Category navigation",
          body: "Guests browse starters, mains, drinks, and desserts with one tap.",
        },
        {
          title: "CMS-backed",
          body: "Staff update items, prices, and availability without touching code.",
        },
        {
          title: "QR entry point",
          body: "Guests scan a table QR code and land directly on the menu.",
        },
      ],
      stackTags: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "PayloadCMS",
        "Supabase",
      ],
      liveUrl: "",
    },
  },
  {
    quote:
      "The app is simple but looks premium, good experience it feels really fluid. AI is well-designed and straightforward",
    name: "Angelito",
    designation: "Entrepreneur",
    src: "https://i.ibb.co/XxBJ7Zk3/IMG-9128.jpg",
    project: {
      title: "Sam & Paulo Salon AI-Powered Hairstyle Editor",
      subtitle: "Client project · 2026",
      tags: ["AI / LLM", "Mobile app", "Productivity"],
      overview:
        "Built a photorealistic hairstyle visualization platform that leverages the Nano Banana 2 API to transform a user's look across three distinct profiles: front, side, and back. By utilizing advanced image-to-image composition, the app allows users to preview complex cuts and textures while strictly preserving their original facial identity and head shape.",
      videoUrl:
        "https://qrqdxhfkmxykojrtwugp.supabase.co/storage/v1/object/public/uploads/Untitled%20design-7.mp4",
      images: [
        {
          src: "https://i.ibb.co/XxBJ7Zk3/IMG-9128.jpg",
          alt: "Client",
          label: "Client",
        },
        {
          src: "https://i.ibb.co/B2T3P5mw/IMG-9132.jpg",
          alt: "Demo",
          label: "Demo",
        },
        {
          src: "https://i.ibb.co/FkX8CB9P/IMG-9139.jpg",
          alt: "Demo",
          label: "Demo",
        },
        {
          src: "https://i.ibb.co/V07XnGDP/IMG-9144.jpg",
          alt: "Demo",
          label: "Demo",
        },
        {
          src: "https://i.ibb.co/Q3L05Hvd/IMG-9146.jpg",
          alt: "Demo",
          label: "Demo",
        },
        {
          src: "https://i.ibb.co/4wf4yqq0/IMG-9134.jpg",
          alt: "Demo",
          label: "Demo",
        },
        {
          src: "https://i.ibb.co/6cPrRVRS/Screenshot-2026-04-25-at-8-41-30-AM.png",
          alt: "Upload/Capture",
          label: "Upload/Capture",
        },
        {
          src: "https://i.ibb.co/W499zYBr/Screenshot-2026-04-25-at-8-41-54-AM.png",
          alt: "Select Hairstyle",
          label: "Select Hairstyle",
        },
        {
          src: "https://i.ibb.co/4wXKPjm2/Screenshot-2026-04-25-at-8-42-28-AM.png",
          alt: "Output",
          label: "Output",
        },
      ],
      features: [
        {
          title: "360° Profile Synchronization",
          body: "The app intelligently applies your chosen hairstyle across front, side, and back views to provide a complete, multi-angle visualization of the final look.",
        },
        {
          title: "Identity-Preserving Transformation",
          body: "Utilizing the Nano Banana 2 API, the system modifies only the hair while keeping facial features, skin tone, and bone structure completely untouched.",
        },
        {
          title: "Intelligent Style Library",
          body: "Users can browse a curated selection of professional cuts or upload their own reference images to see how specific textures and fades adapt to their head shape.",
        },
        {
          title: "Precision Alignment Guides",
          body: "A built-in camera overlay ensures users capture perfectly positioned photos, which optimizes the AI’s ability to blend the new hair naturally with the scalp and hairline.",
        },
      ],
      stackTags: ["Next.js", "TypeScript", "Nano Banana 2 API", "Context API"],
      liveUrl: "",
    },
  },
  {
    quote:
      "All requirements done properly. Nice Filipino style design, Easy to navigate, readable text, and everything just makes sense.",
    name: "Lilibeth",
    designation: "Retail Store Owner",
    src: "https://i.ibb.co/tPMH7PfB/IMG-4670.jpg",
    project: {
      title: "Lilibeth's Sari-Sari Store inventory app",
      subtitle: "Client project · 2026",
      tags: ["Mobile app", "Inventory", "UI/UX"],
      overview:
        "Developed an inventory and sales tracking app for a local retail store owner. The design direction was warm and welcoming — influenced by Filipino visual culture — with clear typography and simple navigation so non-technical staff could use it confidently from day one.",
      images: [
        {
          src: "https://i.ibb.co/tPMH7PfB/IMG-4670.jpg",
          alt: "Client",
          label: "Client",
        },
        {
          src: "https://i.ibb.co/NdqQHmPq/IMG-4673.jpg",
          alt: "Client",
          label: "Client",
        },
        {
          src: "https://i.ibb.co/bjrT8BZK/IMG-4678.jpg",
          alt: "Client",
          label: "Client",
        },
        {
          src: "https://i.ibb.co/HLwJ3dC3/IMG-9790.png",
          alt: "Home",
          label: "Home",
        },
        {
          src: "https://i.ibb.co/kZRqs0P/IMG-9794.png",
          alt: "Product Details",
          label: "Product Details",
        },
        {
          src: "https://i.ibb.co/YByCbcV5/IMG-9795.png",
          alt: "Product Details",
          label: "Product Details",
        },
        {
          src: "https://i.ibb.co/MxSXmqLJ/IMG-9793.png",
          alt: "Shelf Location",
          label: "Shelf Location",
        },
        {
          src: "https://i.ibb.co/G4tDwBBK/IMG-9796.png",
          alt: "Edit Item",
          label: "Edit item",
        },
        {
          src: "https://i.ibb.co/M5GkqxZW/IMG-9797.png",
          alt: "Suppliers Page",
          label: "Suppliers Page",
        },
        {
          src: "https://i.ibb.co/d0q882gN/IMG-9798.png",
          alt: "Data Management",
          label: "Data Management",
        },
        {
          src: "https://i.ibb.co/mVf30X7c/IMG-9799.png",
          alt: "Settings",
          label: "Settings",
        },
      ],
      features: [
        {
          title: "Inventory tracking",
          body: "Add, edit, and remove items with stock level indicators.",
        },
        {
          title: "Upsert data with excel",
          body: "Upsert data by uploading excel file",
        },
        {
          title: "QR Code Scanning",
          body: "Instantly find product information through QR Code API",
        },
        {
          title: "Filipino aesthetic",
          body: "Warm tones and welcoming layout inspired by local design culture.",
        },
      ],
      stackTags: ["Next.js", "TypeScript", "Supabase", "html5-qrcode"],
      liveUrl: "",
    },
  },
  // {
  //   quote:
  //     "All requirements done properly. Nice Filipino style design, Easy to navigate, readable text, and everything just makes sense.",
  //   name: "Marife",
  //   designation: "Home Baker",
  //   src: "https://qrqdxhfkmxykojrtwugp.supabase.co/storage/v1/object/public/uploads/Screenshot%202025-10-23%20at%2011.55.12%20PM.png",

  //   project: {
  //     title: "M'Sweets",
  //     subtitle: "Client project · 2025",
  //     tags: ["Mobile app", "Inventory", "UI/UX"],
  //     overview:
  //       "Developed an inventory and sales tracking app for a local retail store owner. The design direction was warm and welcoming — influenced by Filipino visual culture — with clear typography and simple navigation so non-technical staff could use it confidently from day one.",
  //     images: [
  //       {
  //         src: "https://i.ibb.co/tPMH7PfB/IMG-4670.jpg",
  //         alt: "Client",
  //         label: "Client",
  //       },
  //     ],
  //     features: [
  //       {
  //         title: "Inventory tracking",
  //         body: "Add, edit, and remove items with stock level indicators.",
  //       },
  //       {
  //         title: "Upsert data with excel",
  //         body: "Upsert data by uploading excel file",
  //       },
  //       {
  //         title: "QR Code Scanning",
  //         body: "Instantly find product information through QR Code API",
  //       },
  //       {
  //         title: "Filipino aesthetic",
  //         body: "Warm tones and welcoming layout inspired by local design culture.",
  //       },
  //     ],
  //     stackTags: ["Next.js", "TypeScript", "Supabase", "html5-qrcode"],
  //     liveUrl: "",
  //   },
  // },
];

export default async function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <IncrementViews />

      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section>
        <BlurFade className="py-12" delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Work & Client Projects
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Real-world projects for clients, businesses, and school. Built
                to solve problems and deliver working solutions.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="items-center justify-center relative flex"
            style={{ maxWidth: "1456px" }}
          >
            <CircularTestimonials
              testimonials={testimonials}
              autoplay={true}
              colors={{
                name: "#0a0a0a",
                designation: "#454545",
                testimony: "#171717",
                arrowBackground: "#141414",
                arrowForeground: "#f1f1f7",
                arrowHoverBackground: "#00A6FB",
              }}
              fontSizes={{
                name: "28px",
                designation: "20px",
                quote: "20px",
              }}
            />
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  // dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section>
        <BlurFade className="py-12" delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Certification
              </div>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Meta Front-End Developer
              </h2>

              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[700px] mx-auto">
                Built with React and modern front-end tools, focused on
                responsive web applications.
              </p>
            </div>
          </div>
        </BlurFade>

        <div className="rounded-xl min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative">
          <div
            className="relative flex items-center justify-center group"
            style={{ maxWidth: "900px" }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 blur-2xl opacity-20  transition duration-500"></div>

            {/* Certificate Image */}
            <img
              src={Certificate.src}
              alt="Meta frontend certificate"
              className="relative rounded-xl shadow-2xl border border-border transition-transform duration-500 group-hover:scale-105 "
            />

            {/* Subtle overlay */}
            <div className="absolute inset-0 rounded-xl bg-black/0  transition"></div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on LinkedIn
                </Link>{" "}
                and I&apos;ll respond whenever I can. I
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
