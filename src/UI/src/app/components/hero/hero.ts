import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-16">
      <div class="container mx-auto max-w-5xl">
        <div class="flex flex-col lg:flex-row items-center gap-16">

          <div class="lg:w-1/3 flex justify-center">
            <div class="relative">
              <div class="w-44 h-44 lg:w-56 lg:h-56 rounded-2xl border border-[var(--theme-border)]/30 overflow-hidden bg-[var(--theme-surface)]">
                @if (profileImage(); as img) {
                  <img
                    [src]="img"
                    alt="Adel Lajil"
                    class="w-full h-full object-cover"
                  >
                }
              </div>
              <div class="absolute -bottom-2 -right-2 w-5 h-5 bg-green-400 rounded-full border-4 border-white"></div>
            </div>
          </div>

          <div class="lg:w-2/3 text-center lg:text-left">
            <p class="text-[var(--theme-primary)] text-sm font-medium mb-4 tracking-wide uppercase">{{ name() }}</p>
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--theme-text)] mb-5 leading-tight tracking-tight">
              {{ headline() }}
            </h1>
            <p class="text-base md:text-lg text-[var(--theme-text-secondary)] mb-10 max-w-2xl leading-relaxed">
              {{ subheadline() }}
            </p>

            <div class="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                class="px-7 py-3 bg-[var(--theme-primary)] text-white rounded-lg font-medium hover:bg-[var(--theme-primary-dark)] transition-colors text-center text-sm"
              >
                Start a project conversation
              </a>
              <a
                href="#work"
                class="px-7 py-3 border border-[var(--theme-border)] text-[var(--theme-text)] rounded-lg hover:border-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface)] transition-colors text-center text-sm"
              >
                See what I've built
              </a>
            </div>

            <div class="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-[var(--theme-text-secondary)]">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Available for new projects</span>
              </div>
              <span class="opacity-40">·</span>
              <span>Quebec, Canada</span>
              <span class="opacity-40">·</span>
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
