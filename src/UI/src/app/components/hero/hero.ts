import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col lg:flex-row items-center gap-12">

          <div class="lg:w-1/3">
            <div class="relative">
              <div class="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-[var(--theme-border)]/30 shadow-2xl overflow-hidden bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] theme-glow transition-all duration-300">
                @if (profileImage(); as img) {
                  <img
                    [src]="img"
                    alt="Adel Lajil"
                    class="w-full h-full object-cover"
                  >
                }
              </div>
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-[var(--theme-primary)]/10 rounded-full blur-xl"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-[var(--theme-accent)]/15 rounded-full blur-xl"></div>
            </div>
          </div>

          <div class="lg:w-2/3 text-center lg:text-left">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--theme-text)] mb-6 leading-tight">
              {{ name() }}
            </h1>
            <p class="text-xl md:text-2xl text-[var(--theme-text)] font-medium mb-4 leading-snug">
              {{ headline() }}
            </p>
            <p class="text-base md:text-lg text-[var(--theme-text-secondary)] mb-8 max-w-2xl leading-relaxed">
              {{ subheadline() }}
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                class="px-8 py-3 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white rounded-full hover:scale-105 transition-all duration-300 border border-[var(--theme-border)]/20 shadow-lg hover:shadow-xl theme-glow text-center"
              >
                Let's discuss your project
              </a>
              <a
                href="#work"
                class="px-8 py-3 border border-[var(--theme-border)]/30 text-[var(--theme-text)] rounded-full hover:bg-[var(--theme-surface)]/20 transition-all duration-300 text-center"
              >
                View case studies
              </a>
            </div>

            <div class="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-[var(--theme-text-secondary)]">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new projects</span>
              </div>
              <span>Quebec, Canada</span>
              <span>Responds within 24h</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {
  name = input.required<string>();
  headline = input.required<string>();
  subheadline = input.required<string>();
  profileImage = input<string>('');
}
