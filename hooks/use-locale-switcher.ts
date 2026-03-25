import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/app/i18n/navigation';
import { useTransition } from 'react';

export const LOCALES = ['fr', 'en'];

export const useLocaleSwitcher = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const getLanguageName = (code: string) => {
    try {
      return new Intl.DisplayNames([code], { type: 'language' }).of(code);
    } catch {
      return "";
    }
  };

  const switchLocale = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return {
    locale,
    switchLocale,
    isPending,
    locales: LOCALES,
    getLanguageName
  };
};