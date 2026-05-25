// src/i18n/utils.ts
import { translations } from './translations';

export function useTranslations(lang: 'es' | 'en') {
  return function t(key: string): string {
    const translation = translations[lang]?.[key] || translations['es']?.[key];
    if (translation === undefined) {
      console.warn(`[i18n] Missing translation key "${key}" for locale "${lang}".`);
      return key;
    }
    return translation;
  };
}
