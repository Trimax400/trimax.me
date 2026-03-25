import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NAV_LINKS } from "@/lib/data";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";
import { NextIntlClientProvider, hasLocale, useTranslations } from 'next-intl';
import LocaleSwitcher from "@/components/shared/LocaleSwitcher";
import Script from 'next/script';
import { SettingsMenu } from "@/components/ui/SettingsMenu";

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
  const t = useTranslations('layout');
  return (
    /**
     * suppressHydrationWarning is used here because 'next-themes' 
     * updates the <html> element's class attribute on the client.
     */
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            async
            src={process.env.NEXT_PUBLIC_UMAMI_URL}
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </head>
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
                          {t(`nav.${link.label}`)}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Decorative vertical divider */}
                  <div className="h-5 w-[1px] bg-card-border/50 hidden md:block" />

                  <div className="hidden md:flex items-center gap-4">
                    <ThemeSwitcher />
                    <LocaleSwitcher />
                  </div>

                  <SettingsMenu />

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