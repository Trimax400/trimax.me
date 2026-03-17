'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/app/i18n/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Languages, ChevronDown } from 'lucide-react';

/* A switch to change the language used to render the website */
export default function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = event.target.value;
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    }

    return (
        <div className="relative inline-flex items-center group">
            <select
                defaultValue={locale}
                disabled={isPending}
                onChange={onSelectChange}
                className={`
                    appearance-none cursor-pointer
                    pl-10 pr-10 py-2.5
                    text-sm font-semibold
                    bg-card/50 backdrop-blur-md 
                    border border-card-border
                    rounded-2xl text-foreground
                    transition-all duration-300
                    hover:border-primary/50 hover:bg-card/60
                    focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
                    disabled:opacity-50
                    ${isPending ? 'cursor-wait' : ''}
                `}
            >
                <option value="fr" className="bg-card">Français</option>
                <option value="en" className="bg-card">English</option>
            </select>

            {/* --- Languages icon (left of select) --- */}
            <div className="absolute left-3 pointer-events-none flex items-center justify-center">
                {/* Glowing effect on languages */}
                <div className="absolute inset-0 scale-150 blur-md bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Languages 
                    size={18} 
                    strokeWidth={2.2} 
                    className="relative z-10 text-foreground/70 group-hover:text-primary transition-colors duration-300 shadow-primary"
                />
            </div>

            {/* --- Custom Chevron (right of select) --- */}
            <div className="absolute right-3 pointer-events-none text-foreground/40 group-hover:text-foreground/70 transition-colors">
                <ChevronDown size={14} strokeWidth={3} />
            </div>
        </div>
    );
}