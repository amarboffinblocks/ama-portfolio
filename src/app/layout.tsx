import type { Metadata } from "next";
import Script from "next/script";
import { ClickSoundProvider } from "@/components/providers/ClickSoundProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amarjeet Singh — Generative AI & Full Stack Developer",
  description:
    "Generative AI and full-stack developer with 3 years of experience. Next.js, MERN, and Webflow — based in Mohali.",
};

const themeInitScript = `(function(){try{var stored=localStorage.getItem("theme");var theme=stored==="light"||stored==="dark"||stored==="system"?stored:"system";var dark=theme==="dark"||(theme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",dark);document.documentElement.dataset.theme=theme;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-background font-sans text-foreground selection:bg-neutral-200 dark:selection:bg-white/15">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ClickSoundProvider>{children}</ClickSoundProvider>
      </body>
    </html>
  );
}
