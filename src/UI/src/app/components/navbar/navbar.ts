import { Component, signal, inject, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Scroll progress bar -->
    <div class="fixed top-0 left-0 w-full h-[3px] z-[60]">
      <div class="h-full bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] transition-[width] duration-150 ease-out"
           [style.width.%]="scrollProgress()">
      </div>
    </div>

    <nav class="fixed top-0 w-full z-50 transition-all duration-300"
         [class.shadow-lg]="isScrolled()"
         [class.shadow-[var(--theme-primary)]/5]="isScrolled()"
         [style.background]="isScrolled()
           ? 'color-mix(in srgb, var(--theme-background-secondary) 92%, transparent)'
           : 'color-mix(in srgb, var(--theme-background-secondary) 80%, transparent)'"
         style="backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);"
    >
      <div class="container mx-auto px-6 py-3 md:py-4">
        <div class="flex justify-between items-center min-h-[56px]">
          <!-- Logo -->
          <a (click)="scrollToTop($event)" href="#home"
             class="flex items-center gap-3 group cursor-pointer">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center border border-[var(--theme-border)]/20 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <img src="/logo_adel.png" alt="Logo" class="w-8 h-8 object-contain" />
            </div>
            <span class="text-[var(--theme-text)] font-semibold text-lg transition-colors duration-300"
                  [class.text-transparent]="isScrolled()"
                  [class.bg-clip-text]="isScrolled()"
                  [style.background-image]="isScrolled() ? 'linear-gradient(to right, var(--theme-primary), var(--theme-accent))' : 'none'"
                  [style.-webkit-background-clip]="isScrolled() ? 'text' : 'unset'"
            >Adel LAJIL</span>
          </a>

          <!-- Desktop nav -->
          <div class="hidden md:flex items-center gap-6 lg:gap-8">
            <div class="flex items-center space-x-1 lg:space-x-2 bg-[var(--theme-surface)]/30 rounded-full px-2 py-1 border border-[var(--theme-border)]/10">
              @for (link of navLinks; track link.href) {
                @if (link.label === 'Contact') {
                  <a [href]="link.href"
                     (click)="navigateToSection(link.href, $event)"
                     class="px-4 py-1.5 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white rounded-full text-sm font-medium hover:scale-105 hover:shadow-lg hover:shadow-[var(--theme-primary)]/25 transition-all duration-300 ml-1">
                    {{ link.label }}
                  </a>
                } @else {
                  <a [href]="link.href"
                     (click)="navigateToSection(link.href, $event)"
                     class="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 relative"
                     [class.bg-[var(--theme-primary)]/15]="activeLink() === link.href"
                     [class.text-[var(--theme-primary)]]="activeLink() === link.href"
                     [class.text-[var(--theme-text-secondary)]]="activeLink() !== link.href"
                     [class.hover:text-[var(--theme-text)]]="activeLink() !== link.href"
                     [class.hover:bg-[var(--theme-surface)]/20]="activeLink() !== link.href"
                  >
                    {{ link.label }}
                  </a>
                }
              }
              <a [href]="blogUrl"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="px-3 py-1.5 rounded-full text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface)]/20 transition-all duration-300 flex items-center gap-1">
                Blog
                <svg class="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center gap-2">
            <button
              class="text-[var(--theme-text)] p-2 rounded-lg hover:bg-[var(--theme-surface)]/20 transition-all duration-300 border border-[var(--theme-border)]/20 min-w-[44px] min-h-[44px] flex items-center justify-center"
              (click)="toggleMenu()">
              <lucide-icon
                [img]="mobileMenuOpen() ? X : Menu"
                class="w-6 h-6 transition-transform duration-300"
                [class.rotate-90]="mobileMenuOpen()"
              />
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
             [style.max-height]="mobileMenuOpen() ? '500px' : '0px'"
             [style.opacity]="mobileMenuOpen() ? '1' : '0'">
          <div class="pt-4 pb-2 space-y-1">
            @for (link of navLinks; track link.href) {
              <a [href]="link.href"
                 (click)="navigateToSection(link.href, $event); closeMobileMenu()"
                 class="flex items-center py-3 px-4 rounded-lg transition-all duration-300"
                 [class.bg-[var(--theme-primary)]/10]="activeLink() === link.href"
                 [class.text-[var(--theme-primary)]]="activeLink() === link.href"
                 [class.font-medium]="activeLink() === link.href"
                 [class.text-[var(--theme-text-secondary)]]="activeLink() !== link.href"
                 [class.hover:bg-[var(--theme-surface)]/10]="activeLink() !== link.href"
              >
                <span class="w-1.5 h-1.5 rounded-full mr-3 transition-all duration-300"
                      [class.bg-[var(--theme-primary)]]="activeLink() === link.href"
                      [class.scale-100]="activeLink() === link.href"
                      [class.bg-[var(--theme-text-secondary)]/30]="activeLink() !== link.href"
                      [class.scale-75]="activeLink() !== link.href"
                ></span>
                {{ link.label }}
              </a>
            }
            <a [href]="blogUrl"
               target="_blank"
               rel="noopener noreferrer"
               class="flex items-center py-3 px-4 rounded-lg text-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface)]/10 transition-all duration-300">
              <span class="w-1.5 h-1.5 rounded-full mr-3 bg-[var(--theme-text-secondary)]/30 scale-75"></span>
              Blog
              <svg class="w-3 h-3 ml-1 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    :host { display: block; }
    nav { will-change: transform; }
  `],
})
export class NavbarComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);

  mobileMenuOpen = signal(false);
  activeLink = signal('#home');
  isScrolled = signal(false);
  navVisible = signal(true);
  scrollProgress = signal(0);

  readonly Menu = Menu;
  readonly X = X;

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  blogUrl = 'https://blog.adellajil.com/';

  private lastScrollY = 0;
  private scrollThreshold = 80;
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
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Progress bar
    this.scrollProgress.set(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

    // Scrolled state (background change)
    this.isScrolled.set(scrollY > 20);

    this.lastScrollY = scrollY;

    // Active section detection
    this.detectActiveSection();
  }

  private detectActiveSection(): void {
    const sections = this.navLinks.map(link => link.href.substring(1));
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

    // If we're not on the home page, navigate there first
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
      const navHeight = 80;
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
    // Show nav when opening mobile menu
    if (this.mobileMenuOpen()) {
      this.navVisible.set(true);
    }
  }

  closeMobileMenu(): void {
    setTimeout(() => this.mobileMenuOpen.set(false), 300);
  }
}
