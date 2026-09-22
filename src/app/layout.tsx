import type { Metadata } from "next";
import { ClickSoundProvider } from "@/components/providers/ClickSoundProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amarjeet Singh — Full Stack Developer",
  description:
    "Portfolio of Amarjeet Singh, full stack developer based in India.",
};

const themeInitScript = `(function(){try{var stored=localStorage.getItem("theme");var theme=stored==="light"||stored==="dark"||stored==="system"?stored:"system";var dark=theme==="dark"||(theme==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",dark);document.documentElement.dataset.theme=theme;}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased" suppressHydrationWarning>
      <body className="min-h-full bg-background font-sans text-foreground selection:bg-neutral-200 dark:selection:bg-white/15">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <ClickSoundProvider>{children}</ClickSoundProvider>
      </body>
    </html>
  );
}
