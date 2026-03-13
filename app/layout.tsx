import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NAV_LINKS } from "@/lib/data";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { ThemeSwitcher } from "@/components/shared/ThemeSwitcher";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /**
     * suppressHydrationWarning is used here because 'next-themes' 
     * updates the <html> element's class attribute on the client.
     */
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased transition-colors duration-300`}
      >
        {/* ThemeProvider: 
          Wraps the application to provide theme context (light/dark/system).
          'attribute="class"' enables Tailwind's dark mode strategy.
        */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          
          {/* Persistent Header: Uses glassmorphism effects (backdrop-blur) */}
          <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
            <nav className="mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
              <span className="font-bold text-xl tracking-tighter">Fullstack Developer</span>

              <div className="flex items-center gap-6 md:gap-10">
                {/* Desktop Navigation Menu */}
                <ul className="hidden md:flex gap-8">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* Decorative vertical divider */}
                <div className="h-5 w-[1px] bg-card-border hidden md:block" />

                <ThemeSwitcher />
              </div>
            </nav>
          </header>

          {/* Main page content injected here */}
          {children}

          {/* Site-wide Footer */}
          <footer className="py-10 border-t border-card-border text-center text-sm text-muted">
            © {new Date().getFullYear()} - Built with Next.js & Docker
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}