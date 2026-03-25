'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocaleSwitcher } from '@/hooks/use-locale-switcher';
import { Languages, ChevronDown, Check } from 'lucide-react';

/* A switch to change the language used to render the website */
export default function LocaleSwitcher() {
    const { locale, switchLocale, isPending, locales, getLanguageName } = useLocaleSwitcher();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    /**
     * Close the dropdown when clicking outside
     */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative hidden md:inline-flex items-center group" ref={containerRef}>
            {/* --- Custom Select Trigger --- */}
            <button
                disabled={isPending}
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    flex items-center gap-4 pl-10 pr-4 py-2.5
                    text-sm font-semibold
                    bg-card/50 backdrop-blur-md 
                    border border-card-border
                    rounded-2xl text-foreground
                    transition-all duration-300
                    hover:border-primary/50 hover:bg-card/60
                    focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                    disabled:opacity-50
                    ${isPending ? 'cursor-wait' : 'cursor-pointer'}
                `}
            >
                {/* Visual state: current language */}
                <div className="flex items-center gap-3">
                    <span className="uppercase font-mono text-[10px] opacity-70">
                        {locale}
                    </span>
                    <span className="capitalize">
                        {getLanguageName(locale)}
                    </span>
                </div>
                {/* --- Languages icon (left of select) --- */}
                <ChevronDown
                    size={14}
                    strokeWidth={3}
                    className={`text-foreground/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>

            {/* --- Languages icon (left side) --- */}
            <div className="absolute left-3 pointer-events-none flex items-center justify-center">
                {/* Glowing effect on languages */}
                <div className="absolute inset-0 scale-150 blur-md bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <Languages
                    size={18}
                    strokeWidth={2.2}
                    className="relative z-10 text-foreground/70 group-hover:text-primary transition-colors duration-300 shadow-primary"
                />
            </div>

            {/* --- Custom Dropdown Menu --- */}
            {isOpen && (
                <div className="absolute top-full mt-2 right-0 min-w-[200px] p-1 bg-background/95 backdrop-blur-xl border border-card-border rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in duration-200">
                    <div className="max-h-[300px] overflow-y-auto overflow-x-hidden flex flex-col gap-1 scrollbar-thin scrollbar-thumb-card-border">
                        {locales.map((l) => {
                            const isActive = locale === l;
                            return (
                                <button
                                    key={l}
                                    onClick={() => {
                                        switchLocale(l);
                                        setIsOpen(false);
                                    }}
                                    className={`
                                        w-full flex items-center justify-between px-3 py-2 rounded-xl text-sm transition-all
                                        ${isActive
                                            ? 'bg-primary text-primary-foreground font-semibold shadow-md'
                                            : 'hover:bg-muted/10 text-foreground/70 active:bg-muted/20'
                                        }
                                    `}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className={`uppercase font-mono text-[10px] ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                                            {l}
                                        </span>
                                        <span className="capitalize">
                                            {getLanguageName(l)}
                                        </span>
                                    </div>
                                    {isActive && <Check size={14} strokeWidth={3} />}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}