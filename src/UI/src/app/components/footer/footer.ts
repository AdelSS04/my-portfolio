import { Component, input, Input } from '@angular/core';
import { computed } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer class="py-8 px-6 border-t border-[var(--theme-border)]/20">
      <div class="container mx-auto max-w-6xl">
        <div class="flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="text-center md:text-left">
            <p class="text-[var(--theme-text-secondary)] text-sm">{{currentYear()}} {{name()}}. All rights reserved.</p>
          </div>
          <div class="flex items-center gap-6 text-sm">
            <a href="#home" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Home</a>
            <a href="#services" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Services</a>
            <a href="#work" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Work</a>
            <a href="#about" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">About</a>
            <a href="/education" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Education</a>
            <a href="#contact" class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors">Contact</a>
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
