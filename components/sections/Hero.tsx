import {useTranslations} from 'next-intl';

/**
 * Hero Section: The first point of contact for visitors.
 * Simple Server Component as it doesn't require interactivity.
 */
export default function Hero() {
  const t = useTranslations('hero');
  return (
    <section id="about" className="py-15 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl text-foreground transition-colors">
        {t("hello")} <span className="text-primary">Tristan</span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-muted max-w-2xl mx-auto transition-colors whitespace-pre-line">
        {t("sub")}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a 
          href="#projects" 
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg hover:opacity-90 transition-all active:scale-95"
        >
          {t("projects")}
        </a>
        <a 
          href="#contact" 
          className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors"
        >
          {t("contact")} <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}