// hero.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="min-h-screen flex items-center justify-center px-6 pt-20">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col lg:flex-row items-center gap-12">

          <div class="lg:w-1/3">
            <div class="relative">
              <div class="w-48 h-48 lg:w-64 lg:h-64 rounded-full border-2 border-white/10 shadow-2xl overflow-hidden bg-gradient-to-br from-[#122331] to-[#122433]">
                <img
                  *ngIf="profileImage"
                  [src]="profileImage()"
                  alt="Profile"
                  class="w-full h-full object-cover"
                >
                <div *ngIf="!profileImage" class="w-full h-full flex items-center justify-center">
                  <svg class="w-24 h-24 lg:w-32 lg:h-32 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full blur-xl"></div>
              <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl"></div>
            </div>
          </div>

          <div class="lg:w-2/3 text-center lg:text-left">
            <h2 class="text-xl md:text-2xl text-gray-400 mb-2 font-light tracking-wide">Welcome, I'm</h2>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
              {{name()}}
            </h1>
            <div class="mb-6">
              <p class="text-2xl md:text-3xl text-white font-semibold mb-2">{{title()}}</p>
              <p class="text-lg md:text-xl text-gray-400">{{subtitle()}}</p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                class="px-8 py-3 bg-gradient-to-r from-[#122331] to-[#122433] text-white rounded-full hover:scale-105 transition-all duration-300 border border-white/10"
              >
                View My Work
              </a>
              <a
                href="#contact"
                class="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all duration-300"
              >
                Contact Me
              </a>
              <a
                href="/assets/resume.pdf"
                download
                class="px-8 py-3 bg-white/5 text-white rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div class="flex items-center gap-2 text-gray-400">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Available for hire</span>
              </div>
              <div class="flex items-center gap-2 text-gray-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                  <path d="M3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
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
}
