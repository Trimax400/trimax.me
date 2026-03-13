"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react"; // Import des icônes SVG

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-32 h-9" />;

  const modes = [
    { id: "system", icon: Monitor, label: "System" },
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
  ];

  return (
    <div className="flex items-center p-1 rounded-full border border-card-border bg-card/50 backdrop-blur-sm shadow-sm">
      {modes.map((mode) => {
        const Icon = mode.icon;
        const isActive = theme === mode.id;

        return (
          <button
            key={mode.id}
            onClick={() => setTheme(mode.id)}
            className={`
              relative flex items-center justify-center h-8 w-10 rounded-full transition-all duration-200 cursor-pointer
              ${isActive 
                ? "bg-primary text-primary-foreground shadow-md scale-105 z-10" 
                : "text-muted hover:text-foreground opacity-60 hover:opacity-100 hover:bg-muted/10"
              }
            `}
            title={mode.label}
          >
            <Icon size={16} strokeWidth={2.5} />
        
          </button>
        );
      })}
    </div>
  );
};