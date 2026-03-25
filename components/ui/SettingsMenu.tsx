"use client";

import { useState, useRef, useEffect } from "react";
import { Settings, Languages, Check } from "lucide-react";
import { useLocaleSwitcher } from '@/hooks/use-locale-switcher';
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

export const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { locale, switchLocale, locales, getLanguageName } = useLocaleSwitcher();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative md:hidden" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl border border-card-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all active:scale-95"
      >
        <Settings size={20} className={`transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-64 p-4 rounded-2xl border border-card-border bg-background shadow-2xl z-50 flex flex-col gap-5 animate-in fade-in zoom-in slide-in-from-top-2 duration-200">
          
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Theme</p>
            <div className="flex justify-center">
               <ThemeSwitcher />
            </div>
          </div>

          <div className="h-[1px] bg-card-border/50 w-full" />

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
               <Languages size={14} className="text-muted" />
               <p className="text-[10px] font-bold uppercase tracking-widest text-muted">Language</p>
            </div>
            
            <div className="relative">
              <div className="max-h-[200px] overflow-y-auto pr-2 flex flex-col gap-1 scrollbar-thin scrollbar-thumb-card-border">
                {locales.map((l) => {
                  const isActive = locale === l;
                  return (
                    <button 
                      key={l}
                      onClick={() => {
                        switchLocale(l);
                        setIsOpen(false);
                      }}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all
                        ${isActive 
                          ? 'bg-primary text-primary-foreground font-semibold shadow-sm' 
                          : 'hover:bg-muted/10 border border-transparent text-foreground/70 active:bg-muted/20'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="uppercase font-mono text-[10px] opacity-70">{l}</span>
                        <span className="capitalize">{getLanguageName(l)}</span>
                      </div>
                      {isActive && <Check size={14} strokeWidth={3} />}
                    </button>
                  );
                })}
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-background to-transparent opacity-50" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};