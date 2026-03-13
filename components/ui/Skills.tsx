"use client";

import { useState, useEffect } from "react";
import { Skill } from "@/lib/data";
import { useTheme } from "next-themes";

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  const [imageError, setImageError] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const iconSlug = skill.name
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/\./g, "dot")
    .replace(/\+/g, "plus");

  const iconColor = resolvedTheme === "dark" ? "ffffff" : "18181b";
  const iconUrl = `https://cdn.simpleicons.org/${iconSlug}/${iconColor}`;

  if (!mounted) return (
    <span className="flex items-center gap-2.5 px-3.5 py-2 text-sm font-medium rounded-xl bg-background border border-card-border text-foreground">
      {skill.name}
    </span>
  );

  return (
    <span className="flex items-center gap-2.5 px-3.5 py-2 text-sm font-medium rounded-xl bg-background border border-card-border text-foreground hover:border-primary/50 transition-all group">
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
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {categories.map((category) => (
        <div
          key={category}
          className="p-6 rounded-2xl border border-card-border bg-card/50 min-w-[260px] flex-1 sm:flex-none shadow-sm"
        >
          <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-5 text-center opacity-70">
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
  );
}