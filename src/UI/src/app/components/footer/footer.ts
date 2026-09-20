import { Component, input, inject, computed } from '@angular/core';
import { LanguageService } from '../../i18n/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="py-8 px-6 border-t border-[var(--theme-border)]/20">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="text-[var(--theme-text-secondary)] text-sm">{{currentYear()}} {{name()}}. {{ i18n.t('education.footer.rights') }}</p>
          </div>
          <div class="flex items-center gap-6 text-sm">
            @for (link of eduLinks(); track link.href) {
              <a [href]="link.href" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">{{ link.label }}</a>
            }
          </div>
        </div>
      </div>
    </footer>
  `
})

export class FooterComponent {
  readonly i18n = inject(LanguageService);
  name = input("Your Name");
  readonly eduLinks = computed(() => {
    const labels = this.i18n.t('education.footer.links') as string[];
    const hrefs = ['#home', '#services', '#work', '#about', '/education', '#contact'];
    return labels.map((label, i) => ({ label, href: hrefs[i] }));
  });
  currentYear = computed(() => new Date().getFullYear());
}
