import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <!-- Theme Switcher Button -->
      <button 
        (click)="toggleDropdown()"
        class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--theme-surface)]/20 border border-[var(--theme-border)]/20"
        [class.bg-[var(--theme-surface)]/10]="isDropdownOpen()"
      >
        <span class="text-lg">{{ themeService.getThemeEmoji(themeService.currentTheme()) }}</span>
        <svg 
          class="w-4 h-4 transition-transform duration-200"
          [class.rotate-180]="isDropdownOpen()"
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div 
        class="absolute top-full right-0 mt-2 w-64 bg-[var(--theme-surface)] border border-[var(--theme-border)]/20 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 z-50"
        [class.opacity-0]="!isDropdownOpen()"
        [class.pointer-events-none]="!isDropdownOpen()"
        [class.scale-95]="!isDropdownOpen()"
        [class.translate-y-[-10px]]="!isDropdownOpen()"
      >
        <div class="p-4">
          <!-- Header -->
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-semibold text-[var(--theme-text)]">Customize Theme</h3>
            <button 
              (click)="closeDropdown()"
              class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors p-1"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Theme Selection -->
          <div class="mb-4">
            <label class="block text-xs font-medium text-[var(--theme-text-secondary)] mb-2 uppercase tracking-wide">
              Color Palette
            </label>
            <div class="grid gap-2">
              @for (theme of themes; track theme) {
                <button
                  (click)="selectTheme(theme)"
                  class="flex items-center gap-3 w-full p-3 rounded-lg transition-all duration-200 hover:bg-[var(--theme-background-secondary)]/50"
                  [class.bg-[var(--theme-primary)]/10]="themeService.currentTheme() === theme"
                  [class.border-[var(--theme-primary)]/50]="themeService.currentTheme() === theme"
                  [class.border]="themeService.currentTheme() === theme"
                >
                  <div class="flex-shrink-0">
                    <div class="flex gap-1">
                      @for (color of getThemePreview(theme); track color) {
                        <div 
                          class="w-3 h-3 rounded-full border border-white/20"
                          [style.background-color]="color"
                        ></div>
                      }
                    </div>
                  </div>
                  <div class="text-left flex-1">
                    <div class="flex items-center gap-2">
                      <span class="text-lg">{{ themeService.getThemeEmoji(theme) }}</span>
                      <span class="text-sm font-medium text-[var(--theme-text)]">
                        {{ themeService.getThemeDisplayName(theme) }}
                      </span>
                    </div>
                  </div>
                  @if (themeService.currentTheme() === theme) {
                    <div class="flex-shrink-0">
                      <svg class="w-4 h-4 text-[var(--theme-primary)]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                      </svg>
                    </div>
                  }
                </button>
              }
            </div>
          </div>

          <!-- Mode Toggle -->
          <div class="border-t border-[var(--theme-border)]/20 pt-4">
            <label class="block text-xs font-medium text-[var(--theme-text-secondary)] mb-2 uppercase tracking-wide">
              Appearance
            </label>
            <div class="flex items-center justify-between p-3 bg-[var(--theme-background-secondary)]/30 rounded-lg">
              <div class="flex items-center gap-2">
                <span class="text-lg">{{ themeService.currentMode() === 'dark' ? '🌙' : '☀️' }}</span>
                <span class="text-sm font-medium text-[var(--theme-text)]">
                  {{ themeService.currentMode() === 'dark' ? 'Dark Mode' : 'Light Mode' }}
                </span>
              </div>
              <button
                (click)="toggleMode()"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
                [class.bg-[var(--theme-primary)]]="themeService.currentMode() === 'dark'"
                [class.bg-[var(--theme-border)]]="themeService.currentMode() === 'light'"
              >
                <span
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
                  [class.translate-x-6]="themeService.currentMode() === 'dark'"
                  [class.translate-x-1]="themeService.currentMode() === 'light'"
                ></span>
              </button>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="mt-4 pt-4 border-t border-[var(--theme-border)]/20">
            <div class="flex gap-2">
              <button
                (click)="resetToDefault()"
                class="flex-1 px-3 py-2 text-xs font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors rounded-lg hover:bg-[var(--theme-background-secondary)]/50"
              >
                Reset
              </button>
              <button
                (click)="closeDropdown()"
                class="flex-1 px-3 py-2 text-xs font-medium text-white bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] transition-colors rounded-lg"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    @if (isDropdownOpen()) {
      <div 
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        (click)="closeDropdown()"
      ></div>
    }
  `,
  styles: [`
    :host {
      position: relative;
      z-index: 50;
    }
  `]
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  isDropdownOpen = signal(false);
  
  themes: Theme[] = ['ocean', 'forest', 'sunset'];  toggleDropdown() {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }

  closeDropdown() {
    this.isDropdownOpen.set(false);
  }

  selectTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }

  toggleMode() {
    this.themeService.toggleMode();
  }

  resetToDefault() {
    this.themeService.setTheme('ocean');
    this.themeService.setMode('dark');
    this.closeDropdown();
  }

  getThemePreview(theme: Theme): string[] {
    const themeColors = this.themeService.getThemeColors(theme, this.themeService.currentMode());
    
    return [
      themeColors.primary,
      themeColors.secondary,
      themeColors.accent
    ];
  }
}