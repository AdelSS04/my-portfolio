import { Component, signal, inject, computed, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';
import { LanguageService } from '../../i18n/language.service';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <nav
      class="fixed top-0 w-full z-50 transition-[padding,background-color,border-color,box-shadow,backdrop-filter] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      [class]="
        isScrolled()
          ? 'border-b border-[var(--theme-border)] shadow-sm backdrop-blur-xl py-2'
          : 'py-4'
      "
    >
      <div class="container mx-auto px-6 max-w-6xl">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <a
            (click)="scrollToTop($event)"
            href="#home"
            class="flex items-center gap-3 group cursor-pointer"
          >
            <div
              class="w-9 h-9 rounded-lg bg-[var(--theme-primary)]/10 border border-[var(--theme-primary)]/20 flex items-center justify-center group-hover:bg-[var(--theme-primary)]/20 transition-colors"
            >
              <img src="/logo_adel.png" alt="Logo" class="w-6 h-6 object-contain" />
            </div>
            <span class="text-[var(--theme-text)] font-medium text-base tracking-tight">
              Adel Lajil
            </span>
          </a>

          <!-- Desktop nav -->
          <div class="hidden md:flex items-center gap-1">
            @for (link of navLinks(); track link.href) {
              @if (link.href === '#contact') {
                <a
                  [href]="link.href"
                  (click)="navigateToSection(link.href, $event)"
                  class="ml-3 px-5 py-2 bg-[var(--theme-primary)] text-white rounded-lg text-sm font-medium hover:bg-[var(--theme-primary-dark)] transition-colors"
                >
                  {{ link.label }}
                </a>
              } @else {
                <a
                  [href]="link.href"
                  (click)="navigateToSection(link.href, $event)"
                  class="px-3 py-2 rounded-lg text-sm transition-colors relative"
                  [class]="
                    activeLink() === link.href
                      ? 'text-[var(--theme-primary)] font-medium'
                      : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)]'
                  "
                >
                  {{ link.label }}
                  @if (activeLink() === link.href) {
                    <span
                      class="absolute bottom-0 left-3 right-3 h-[2px] bg-[var(--theme-primary)] rounded-full"
                    ></span>
                  }
                </a>
              }
            }
            <a
              [href]="blogUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="px-3 py-2 rounded-lg text-sm text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors flex items-center gap-1.5"
            >
              {{ i18n.t('education.nav.blog') }}
              <svg
                class="w-3 h-3 opacity-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <span class="flex items-center gap-1.5 px-2 text-xs text-[var(--theme-text-secondary)]">
              <button type="button" (click)="i18n.setLang('en')" [class.text-white]="i18n.lang() === 'en'" class="hover:text-[var(--theme-text)] transition-colors">EN</button>
              <span class="opacity-40">/</span>
              <button type="button" (click)="i18n.setLang('fr')" [class.text-white]="i18n.lang() === 'fr'" class="hover:text-[var(--theme-text)] transition-colors">FR</button>
            </span>
          </div>

          <!-- Mobile menu button -->
          <button
            class="md:hidden text-[var(--theme-text)] p-2 rounded-lg hover:bg-[var(--theme-surface)] transition-colors"
            (click)="toggleMenu()"
          >
            <lucide-icon
              [img]="mobileMenuOpen() ? X : Menu"
              class="w-5 h-5"
            />
          </button>
        </div>

        <!-- Mobile menu -->
        @if (mobileMenuOpen()) {
          <div class="md:hidden mt-4 pb-4 border-t border-[var(--theme-border)]/30 pt-4 space-y-1">
            @for (link of navLinks(); track link.href) {
              <a
                [href]="link.href"
                (click)="navigateToSection(link.href, $event); closeMobileMenu()"
                class="block py-2.5 px-3 rounded-lg text-sm transition-colors"
                [class]="
                  activeLink() === link.href
                    ? 'text-[var(--theme-primary)] bg-[var(--theme-primary)]/5 font-medium'
                    : 'text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)]'
                "
              >
                {{ link.label }}
              </a>
            }
            <a
              [href]="blogUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="block py-2.5 px-3 rounded-lg text-sm text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors"
            >
              {{ i18n.t('education.nav.blog') }} ↗
            </a>
            <div class="flex items-center gap-3 px-3 py-2.5 text-sm">
              <button type="button" (click)="i18n.setLang('en'); closeMobileMenu()" [class]="i18n.lang() === 'en' ? 'text-[var(--theme-text)] font-medium' : 'text-[var(--theme-text-secondary)]'">EN</button>
              <span class="text-[var(--theme-text-secondary)] opacity-40">/</span>
              <button type="button" (click)="i18n.setLang('fr'); closeMobileMenu()" [class]="i18n.lang() === 'fr' ? 'text-[var(--theme-text)] font-medium' : 'text-[var(--theme-text-secondary)]'">FR</button>
            </div>
          </div>
        }
      </div>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  mobileMenuOpen = signal(false);
  activeLink = signal('#home');
  isScrolled = signal(false);

  readonly Menu = Menu;
  readonly X = X;
  readonly i18n = inject(LanguageService);

  readonly navLinks = computed(() => this.i18n.t('education.nav.items') as NavLink[]);

  blogUrl = 'https://blog.adellajil.com/';

  private ticking = false;
  private boundHandleScroll: (() => void) | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    this.boundHandleScroll = () => {
      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.onScroll();
          this.ticking = false;
        });
        this.ticking = true;
      }
    };

    window.addEventListener('scroll', this.boundHandleScroll, { passive: true });
    this.onScroll();
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && this.boundHandleScroll) {
      window.removeEventListener('scroll', this.boundHandleScroll);
    }
  }

  private onScroll(): void {
    const scrollY = window.scrollY;
    this.isScrolled.set(scrollY > 50);
    this.detectActiveSection();
  }

  private detectActiveSection(): void {
    const sections = this.navLinks().map((link) => link.href.substring(1));
    const scrollPosition = window.scrollY + 150;

    for (const section of [...sections].reverse()) {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition) {
        this.activeLink.set(`#${section}`);
        return;
      }
    }
    this.activeLink.set('#home');
  }

  navigateToSection(link: string, event: Event): void {
    event.preventDefault();
    if (this.router.url !== '/' && this.router.url !== '') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => this.scrollToElement(link), 100);
      });
    } else {
      this.scrollToElement(link);
    }
  }

  private scrollToElement(selector: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const element = document.querySelector(selector);
    if (element) {
      const navHeight = 72;
      const elementTop = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: elementTop, behavior: 'smooth' });
    }
  }

  scrollToTop(event: Event): void {
    event.preventDefault();
    if (this.router.url !== '/' && this.router.url !== '') {
      this.router.navigate(['/']);
    } else if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu(): void {
    setTimeout(() => this.mobileMenuOpen.set(false), 200);
  }
}
