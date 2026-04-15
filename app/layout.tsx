import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/ThemeContext";
import AOSInit from "@/lib/AOSInit";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  title: "Alex Rivera — Full-Stack Developer",
  description: "Full-stack developer specializing in React, Next.js, and Node.js. Building fast, beautiful, and scalable web experiences.",
  keywords: ["Full-Stack Developer", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Alex Rivera" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AOSInit />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
