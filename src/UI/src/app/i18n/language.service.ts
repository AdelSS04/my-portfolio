import { Injectable, PLATFORM_ID, afterNextRender, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { translations, type Lang, type TranslationDict } from './translations';

const STORAGE_KEY = 'adel-lang';
const TITLES: Record<Lang, string> = {
  en: 'Adel Lajil | Senior Software Engineer | .NET & Azure',
  fr: 'Adel Lajil | Ingénieur logiciel senior | .NET & Azure'
};

function resolvePath(dict: TranslationDict, path: string): unknown {
  let current: unknown = dict;
  for (const segment of path.split('.')) {
    if (current === null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[segment];
  }
  return current;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly lang = signal<Lang>('en');

  constructor() {
    // Defer reading localStorage until after hydration so the client first
    // render matches the SSR (EN) output — no hydration mismatch.
    if (this.isBrowser) {
      afterNextRender(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'fr') this.apply(stored);
        else this.applyMeta('en');
      });
    }
  }

  setLang(lang: Lang): void {
    if (this.isBrowser) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch { /* storage unavailable */ }
    }
    this.apply(lang);
  }

  /** Resolve a dot-path against the current language, falling back to EN, never blank. */
  t(path: string): any {
    const current = resolvePath(translations[this.lang()] as TranslationDict, path);
    if (current !== undefined) return current;
    const fallback = resolvePath(translations.en as TranslationDict, path);
    return fallback === undefined ? '' : fallback;
  }

  private apply(lang: Lang): void {
    this.lang.set(lang);
    this.applyMeta(lang);
  }

  private applyMeta(lang: Lang): void {
    if (!this.isBrowser) return;
    document.documentElement.lang = lang;
    this.title.setTitle(TITLES[lang]);
  }
}
