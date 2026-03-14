"use client";

import { useState, useEffect } from "react";
import { Skill } from "@/lib/data";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const [imageError, setImageError] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  /**
   * Hydration fix for Next.js:
   * During the initial server-side render, the server doesn't know the user's local theme.
   * We wait for the component to mount on the client to avoid mismatched UI between server and client.
   */
  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Slugify skill names for the Simple Icons API:
   * 1. Convert to lowercase.
   * 2. Remove spaces (e.g., "Tailwind CSS" -> "tailwindcss").
   * 3. Replace dots (e.g., "Node.js" -> "nodedotjs").
   * 4. Handle plus signs (e.g., "C++" -> "cplusplus").
   */
  const iconSlug = skill.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "dot")
    .replace(/\+/g, "plus");

  /**
   * Dynamic Icon Coloring:
   * We request a specific hex color from the API based on the active theme.
   * This ensures high contrast (white for dark mode, dark gray for light mode).
   */
  const iconColor = resolvedTheme === "dark" ? "ffffff" : "18181b";
  const iconUrl = `https://cdn.simpleicons.org/${iconSlug}/${iconColor}`;

  // Skeleton state to prevent layout shift or mismatched icons during hydration
  if (!mounted) return (
    <span className="flex items-center gap-2.5 px-3.5 py-2 text-sm font-medium rounded-xl bg-background border border-card-border text-foreground opacity-50">
      {skill.name}
    </span>
  );

  return (
    <span className="flex items-center gap-2.5 px-3.5 py-2 text-sm font-medium rounded-xl bg-background border border-card-border text-foreground hover:border-primary/50 transition-all group">
      {/* If the image fails to load (e.g., 404 from the CDN), we unmount the <img> tag
          entirely rather than showing a broken icon or an empty square.
      */}
      {!imageError && (
        <img
          src={iconUrl}
          alt=""
          className="w-5 h-5 transition-transform group-hover:scale-110 object-contain"
          onError={() => setImageError(true)}
        />
      )}
      {skill.name}
    </span>
  );
};

export default function Skills({ skills }: { skills: Skill[] }) {
  /**
   * Derive unique categories from the skill list.
   */
  const categories = Array.from(new Set(skills.map((s) => s.category)));
  const t = useTranslations('skills');

  return (
    <section id="skills" className="py-15">
      {/* Section Header */}
      <h2 className="text-3xl font-bold mb-10 text-center text-foreground transition-colors">
        {t("title")}
      </h2>

      {/* Categories Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="p-6 rounded-2xl border border-card-border bg-card/50 min-w-[260px] flex-1 sm:flex-none shadow-sm"
          >
            {/* Category header with increased tracking for a modern tech aesthetic */}
            <h3 className="text-[12px] font-black text-primary uppercase tracking-[0.2em] mb-5 text-center opacity-70">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}