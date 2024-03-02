// app/page.tsx
"use client";

import "./globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";
import "bootstrap-icons/font/bootstrap-icons.css";
import PrelineScript from "@/components/PrelineScript";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // @ts-ignore
    import("preline");
  }, []);
  return (
    <html lang="en">
      <ThemeProvider attribute="class">
        <body>{children}</body>
        <PrelineScript />
      </ThemeProvider>
    </html>
  );
}
