// hero.component.ts
import { Component, input } from '@angular/core';
import { LucideAngularModule, User, GraduationCap } from 'lucide-angular';


@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col lg:flex-row items-center gap-12">

          <div class="lg:w-1/3">
            <div class="relative">
              <div class="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-[var(--theme-border)]/30 shadow-2xl overflow-hidden bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] theme-glow transition-all duration-300">
                @if (profileImage() ; as profileImage) {
                  <img
                    [src]="profileImage"
                    alt="Profile"
                    class="w-full h-full object-cover"
                    >
                }
                @else {
                  <div class="w-full h-full flex items-center justify-center">
                    <lucide-icon [img]="User" class="w-24 h-24 lg:w-32 lg:h-32 text-[var(--theme-text)]/30" />
                  </div>
                }
              </div>
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-[var(--theme-primary)]/10 rounded-full blur-xl animate-pulse"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--theme-accent)]/15 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          <div class="lg:w-2/3 text-center lg:text-left">
            <h2 class="text-xl md:text-2xl text-[var(--theme-text-secondary)] mb-2 font-light tracking-wide">Welcome, I'm</h2>
            <h1 class="text-4xl md:text-6xl font-bold text-[var(--theme-text)] mb-4">
              {{name()}}
            </h1>
            <div class="mb-6">
              <p class="text-2xl md:text-3xl text-[var(--theme-text)] font-semibold mb-2">{{title()}}</p>
              <p class="text-lg md:text-xl text-[var(--theme-text-secondary)]">{{subtitle()}}</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                class="px-8 py-3 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white rounded-full hover:scale-105 transition-all duration-300 border border-[var(--theme-border)]/20 shadow-lg hover:shadow-xl theme-glow"
                >
                View My Work
              </a>
              <a
                href="#contact"
                class="px-8 py-3 border border-[var(--theme-border)]/30 text-[var(--theme-text)] rounded-full hover:bg-[var(--theme-surface)]/20 transition-all duration-300"
                >
                Contact Me
              </a>
              <!-- <a
                href="/assets/resume.pdf"
                download
                class="px-8 py-3 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all duration-300"
                >
                Download CV
              </a> -->
            </div>

            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div class="flex items-center gap-2 text-[var(--theme-text-secondary)]">
                <div class="w-2 h-2 bg-[var(--theme-primary)] rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
              <div class="flex items-center gap-2 text-[var(--theme-text-secondary)]">
                <lucide-icon [img]="GraduationCap" class="w-5 h-5" />
                <span>5+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `
})
export class HeroComponent {
  name = input.required<string>();
  title = input.required<string>();
  subtitle = input.required<string>();
  profileImage = input<string>('');
  
  // Lucide icon components
  readonly User = User;
  readonly GraduationCap = GraduationCap;
}
