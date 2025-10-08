import { Component, input, Input } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="py-8 px-6 border-t border-[var(--theme-border)]/20 bg-[var(--theme-background-secondary)]/70 backdrop-blur-sm">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="text-[var(--theme-text-secondary)]">© {{currentYear()}} {{name()}}. All rights reserved.</p>
          </div>
          <div class="flex items-center gap-6">
            <a href="#home" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Home</a>
            <a href="#about" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">About</a>
            <a href="#projects" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Projects</a>
            <a href="#contact" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Contact</a>
          </div>
          <div class="flex items-center gap-2 text-[var(--theme-text-secondary)]">
            <span>Built with</span>
            <span class="text-[var(--theme-primary)]">❤️</span>
            <span>using Angular & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  `
})

export class FooterComponent {
  name = input("Your Name");
  currentYear = computed(() => new Date().getFullYear());
}
