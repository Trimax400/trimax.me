import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NAV_LINKS } from "@/lib/data";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from "../i18n/routing";

const inter = Inter({ subsets: ["latin"] });

/**
 * SEO Configuration:
 * Metadata defined here is used by Next.js to populate <head> tags 
 * like <title> and <meta name="description">.
 */
export const metadata: Metadata = {
  title: "My Portfolio | Software Engineer",
  description: "Showcasing my projects and technical journey.",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default function RootLayout({ children, params }: Props) {
  return (
    /**
     * suppressHydrationWarning is used here because 'next-themes' 
     * updates the <html> element's class attribute on the client.
     */
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased transition-colors duration-300 relative`}
      >
        <div className="bg-mesh" />

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider>

            {/*Header*/}
            <header className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-card-border/50">
              <nav className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl tracking-tighter font-mono italic">
                    Fullstack<span className="text-primary text-sm not-italic ml-1">.dev</span>
                  </span>
                </div>

                <div className="flex items-center gap-6 md:gap-10">
                  {/* Desktop Navigation Menu */}
                  <ul className="hidden md:flex gap-8">
                    {NAV_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-xs font-mono uppercase tracking-widest hover:text-primary transition-colors duration-200"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative vertical divider */}
                  <div className="h-5 w-[1px] bg-card-border/50 hidden md:block" />

                  <ThemeSwitcher />
                </div>
              </nav>
            </header>

            {/* Main page content injected here */}
            {children}

            {/*Footer*/}
            <footer className="py-12 border-t border-card-border/30 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
              © {new Date().getFullYear()} <span className="text-primary/50 mx-2">//</span> Built with Next.js & Docker
            </footer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}