// navbar.component.ts
import { Component, OnInit, HostListener } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  template: `
    <nav class="fixed top-0 w-full bg-[#112230]/95 backdrop-blur-md z-50 border-b border-white/5 transition-all duration-300"
      [class.shadow-lg]="isScrolled">
  <div class="container mx-auto px-6 py-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3">
        <div
          class="w-10 h-10 rounded-lg bg-gradient-to-br from-[#122331] to-[#122433] flex items-center justify-center border border-white/10"
        >
          <img src="/logo_adel.png" alt="Logo" class="w-8 h-8 object-contain" />
        </div>
        <span class="text-white font-semibold text-lg">Adel LAJIL</span>
      </div>

          <div class="hidden md:flex space-x-6 lg:space-x-8">
            @for (link of navLinks; track link) {
              <a
                [href]="link.href"
                (click)="setActiveLink(link.href, $event)"
                [class.text-blue-400]="activeLink === link.href"
                [class.border-b-2]="activeLink === link.href"
                [class.border-blue-400]="activeLink === link.href"
                [class.pb-1]="activeLink === link.href"
                class="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                {{link.label}}
                <span class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </a>
            }
          </div>

          <!-- Mobile menu button -->
          <button
            class="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            (click)="toggleMenu()"
            >
            <svg class="w-6 h-6 transition-transform duration-300"
              [class.rotate-90]="mobileMenuOpen"
              fill="none" stroke="currentColor" viewBox="0 0 24 24">
              @if (!mobileMenuOpen) {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              }
              @if (mobileMenuOpen) {
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              }
            </svg>
          </button>
        </div>

        <!-- Mobile menu -->
        <div class="md:hidden overflow-hidden transition-all duration-300"
          [style.max-height]="mobileMenuOpen ? '400px' : '0px'">
          <div class="pt-4 pb-2 space-y-2">
            @for (link of navLinks; track link) {
              <a
                [href]="link.href"
                (click)="setActiveLink(link.href, $event); closeMobileMenu()"
                [class.bg-white/10]="activeLink === link.href"
                [class.border-l-4]="activeLink === link.href"
                [class.border-blue-400]="activeLink === link.href"
                [class.text-white]="activeLink === link.href"
                class="block text-gray-300 hover:text-white hover:bg-white/5 py-3 px-4 rounded transition-all duration-300"
                >
                {{link.label}}
              </a>
            }
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
  mobileMenuOpen = false;
  activeLink = '#home';
  isScrolled = false;

  navLinks: NavLink[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.checkActiveSection();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled = window.scrollY > 20;
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
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    setTimeout(() => {
      this.mobileMenuOpen = false;
    }, 300);
  }
}
