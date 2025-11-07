"use client";

import { useEffect } from "react";

export default function IncrementViews() {
  useEffect(() => {
    fetch("/api/increment-view", { method: "POST" });
  }, []);

  return null;
}
