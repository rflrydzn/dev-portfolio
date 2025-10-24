"use client";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

// export const metadata: Metadata = {
//   metadataBase: new URL(DATA.url),
//   title: {
//     default: DATA.name,
//     template: `%s | ${DATA.name}`,
//   },
//   description: DATA.description,
//   openGraph: {
//     title: `${DATA.name}`,
//     description: DATA.description,
//     url: DATA.url,
//     siteName: `${DATA.name}`,
//     locale: "en_US",
//     type: "website",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: `${DATA.name}`,
//     card: "summary_large_image",
//   },
//   verification: {
//     google: "",
//     yandex: "",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isScreenshot = pathname.startsWith("/screenshot");

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `min-h-screen bg-background font-sans antialiased ${
            isScreenshot ? "max-w-none py-0 " : "max-w-2xl py-12 px-6 sm:py-24"
          } mx-auto  `,
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
