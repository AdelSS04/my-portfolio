import { Component, OnInit, HostListener, signal, inject } from '@angular/core';
import { ThemeSwitcherComponent } from '../theme-switcher/theme-switcher.component';
import { ThemeService } from '../../services/theme.service';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitcherComponent, LucideAngularModule],
  template: `
    <nav class="fixed top-0 w-full bg-[var(--theme-background-secondary)]/95 backdrop-blur-md z-50 border-b border-[var(--theme-border)]/20 transition-all duration-300"
      [class.shadow-lg]="isScrolled()">
  <div class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center border border-[var(--theme-border)]/20 shadow-lg"
        >
          <img src="/logo_adel.png" alt="Logo" class="w-8 h-8 object-contain" />
        </div>
        <span class="text-[var(--theme-text)] font-semibold text-lg">Adel LAJIL</span>
      </div>

      <!-- Desktop Navigation & Theme Switcher -->
      <div class="hidden md:flex items-center gap-6 lg:gap-8">
        <div class="flex space-x-6 lg:space-x-8">
          @for (link of navLinks; track link) {
            <a
              [href]="link.href"
              (click)="setActiveLink(link.href, $event)"
              [class.text-[var(--theme-primary)]]="activeLink === link.href"
              [class.border-b-2]="activeLink === link.href"
              [class.border-[var(--theme-primary)]]="activeLink === link.href"
              [class.pb-1]="activeLink === link.href"
              class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-all duration-300 relative group"
              >
              {{link.label}}
              <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--theme-primary)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </a>
          }
        </div>

        <!-- Theme Switcher -->
        <app-theme-switcher></app-theme-switcher>
      </div>

      <!-- Mobile menu button -->
      <button
        class="md:hidden text-[var(--theme-text)] p-2 rounded-lg hover:bg-[var(--theme-surface)]/20 transition-all duration-300 border border-[var(--theme-border)]/20"
        (click)="toggleMenu()"
        >
        <lucide-icon 
          [img]="mobileMenuOpen() ? X : Menu" 
          class="w-6 h-6 transition-transform duration-300"
          [class.rotate-90]="mobileMenuOpen()"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <div class="md:hidden overflow-hidden transition-all duration-300"
      [style.max-height]="mobileMenuOpen() ? '500px' : '0px'">
      <div class="pt-4 pb-2 space-y-2">
        @for (link of navLinks; track link) {
          <a
            [href]="link.href"
            (click)="setActiveLink(link.href, $event); closeMobileMenu()"
            [class.bg-[var(--theme-primary)]/10]="activeLink === link.href"
            [class.border-l-4]="activeLink === link.href"
            [class.border-[var(--theme-primary)]]="activeLink === link.href"
            [class.text-[var(--theme-text)]]="activeLink === link.href"
            class="block text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface)]/10 py-3 px-4 rounded transition-all duration-300"
            >
            {{link.label}}
          </a>
        }

        <!-- Mobile Theme Switcher -->
        <div class="pt-4 border-t border-[var(--theme-border)]/20 px-4">
          <app-theme-switcher></app-theme-switcher>
        </div>
      </div>
    </div>
  </div>
    </nav>
    `,
  styles: [
    `
      :host {
        display: block;
      }
      nav {
        transition: all 0.3s ease;
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  themeService = inject(ThemeService);
  mobileMenuOpen = signal(false);
  activeLink = '#home';
  isScrolled = signal(false);

  // Lucide icon components
  readonly Menu = Menu;
  readonly X = X;

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.checkActiveSection();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);
      this.checkActiveSection();
    }
  }

  checkActiveSection() {
    if (typeof window === 'undefined') return;
    const sections = this.navLinks.map((link) => link.href.substring(1));
    const scrollPosition = window.scrollY + 100;

    for (const section of sections.reverse()) {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= scrollPosition) {
        this.activeLink = `#${section}`;
        break;
      }
    }
  }

  setActiveLink(link: string, event: Event) {
    event.preventDefault();
    this.activeLink = link;
    if (typeof window !== 'undefined') {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  toggleMenu(): void {
    this.mobileMenuOpen.set(!this.mobileMenuOpen());
  }

  closeMobileMenu(): void {
    setTimeout(() => {
      this.mobileMenuOpen.set(false);
    }, 300);
  }
}
