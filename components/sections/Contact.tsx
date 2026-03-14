"use client";

import { SOCIAL_LINKS } from "@/lib/data";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { useTranslations } from "next-intl";

/**
 * Contact Section:
 * Displays social media links using Simple Icons for brand consistency
 * and Lucide for system icons.
 */
export default function Contact() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('contact');

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Helper to get the Simple Icons URL based on the platform name.
   */
  const getIconUrl = (platform: string) => {
    const slug = platform.toLowerCase().replace("mail", "gmail");
    const color = resolvedTheme === "dark" ? "ffffff" : "18181b";
    return `https://cdn.simpleicons.org/${slug}/${color}`;
  };

  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-6 text-foreground transition-colors">
        {t("title")}
      </h2>
      
      <p className="text-muted max-w-xl mx-auto mb-10 leading-relaxed transition-colors whitespace-pre-line">
        {t("sub")}
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-card-border bg-card/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 group shadow-sm active:scale-95"
          >
            {mounted ? (
              <img 
                src={getIconUrl(link.platform)} 
                alt="" 
                className="w-5 h-5 transition-transform group-hover:scale-110 object-contain"
              />
            ) : (
              <div className="w-5 h-5 bg-muted animate-pulse rounded-full" />
            )}
            <span className="font-semibold text-sm">{link.platform}</span>
            <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
          </a>
        ))}
      </div>
    </section>
  );
}