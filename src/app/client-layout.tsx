"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isScreenshot = pathname.startsWith("/screenshot");

  return (
    <div
      className={cn(
        `min-h-screen bg-background font-sans antialiased ${
          isScreenshot ? "max-w-none py-0 " : "max-w-2xl py-12 px-6 sm:py-24"
        } mx-auto  `
      )}
    >
      {children}
      <Navbar />
    </div>
  );
}
