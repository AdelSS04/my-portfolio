import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService, Theme } from '../../services/theme.service';
import { LucideAngularModule, ChevronDown, X, Check, Waves, Trees, Sun, Palette, Moon, Coffee } from 'lucide-angular';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: `
    <div class="relative">
      <!-- Theme Switcher Button -->
      <button
        (click)="toggleDropdown()"
        class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-[var(--theme-surface)]/20 border border-[var(--theme-border)]/20"
        [class.bg-[var(--theme-surface)]/10]="isDropdownOpen()"
      >
        <lucide-icon [img]="getThemeIconComponent(themeService.currentTheme())" class="w-5 h-5 text-[var(--theme-primary)]" />
        <lucide-icon
          [img]="ChevronDown"
          class="w-4 h-4 transition-transform duration-200"
          [class.rotate-180]="isDropdownOpen()"
        />
      </button>

      <!-- Dropdown Menu -->
      <div
        class="fixed inset-x-4 top-1/2 -translate-y-1/2 sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:left-auto sm:translate-y-0 mt-0 sm:mt-2 w-auto sm:w-80 lg:w-96 max-w-none sm:max-w-[90vw] bg-[var(--theme-surface)] border border-[var(--theme-border)]/20 rounded-xl shadow-2xl backdrop-blur-md transition-all duration-300 z-[100]"
        [class.opacity-0]="!isDropdownOpen()"
        [class.pointer-events-none]="!isDropdownOpen()"
        [class.scale-95]="!isDropdownOpen()"
      >
        <div class="p-4 sm:p-5 lg:p-6">
          <!-- Header -->
          <div class="flex items-center justify-between mb-4 sm:mb-5">
            <h3 class="text-sm sm:text-base lg:text-lg font-semibold text-[var(--theme-text)]">Customize Theme</h3>
            <button
              (click)="closeDropdown()"
              class="text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors p-1"
            >
              <lucide-icon [img]="X" class="w-4 h-4" />
            </button>
          </div>

          <!-- Theme Selection -->
          <div class="mb-4 sm:mb-5">
            <label class="block text-xs font-medium text-[var(--theme-text-secondary)] mb-2 sm:mb-3 uppercase tracking-wide">
              Color Palette
            </label>
            <div class="grid gap-2 sm:gap-3">
              @for (theme of themes; track theme) {
                <button
                  (click)="selectTheme(theme)"
                  class="flex items-center gap-3 sm:gap-4 w-full p-3 sm:p-4 rounded-lg transition-all duration-200 hover:bg-[var(--theme-background-secondary)]/50"
                  [class.bg-[var(--theme-primary)]/10]="themeService.currentTheme() === theme"
                  [class.border-[var(--theme-primary)]/50]="themeService.currentTheme() === theme"
                  [class.border]="themeService.currentTheme() === theme"
                >
                  <div class="flex-shrink-0">
                    <div class="flex gap-1">
                      @for (color of getThemePreview(theme); track color) {
                        <div
                          class="w-3 sm:w-4 h-3 sm:h-4 rounded-full border border-white/20"
                          [style.background-color]="color"
                        ></div>
                      }
                    </div>
                  </div>
                  <div class="text-left flex-1">
                    <div class="flex items-center gap-2 sm:gap-3">
                      <lucide-icon [img]="getThemeIconComponent(theme)" class="w-4 sm:w-5 h-4 sm:h-5 text-[var(--theme-primary)]" />
                      <span class="text-sm sm:text-base font-medium text-[var(--theme-text)]">
                        {{ themeService.getThemeDisplayName(theme) }}
                      </span>
                    </div>
                  </div>
                  @if (themeService.currentTheme() === theme) {
                    <div class="flex-shrink-0">
                      <lucide-icon [img]="Check" class="w-4 h-4 text-[var(--theme-primary)]" />
                    </div>
                  }
                </button>
              }
            </div>
          </div>

          <!-- Mode Toggle -->
          <div class="border-t border-[var(--theme-border)]/20 pt-4 sm:pt-5">
            <label class="block text-xs font-medium text-[var(--theme-text-secondary)] mb-2 sm:mb-3 uppercase tracking-wide">
              Appearance
            </label>
            <div class="flex items-center justify-between p-3 sm:p-4 bg-[var(--theme-background-secondary)]/30 rounded-lg">
              <div class="flex items-center gap-2 sm:gap-3">
                @if (themeService.currentMode() === 'dark') {
                  <lucide-icon [img]="Moon" class="w-4 sm:w-5 h-4 sm:h-5 text-[var(--theme-primary)]" />
                } @else {
                  <lucide-icon [img]="Sun" class="w-4 sm:w-5 h-4 sm:h-5 text-[var(--theme-primary)]" />
                }
                <span class="text-sm sm:text-base font-medium text-[var(--theme-text)]">
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
            <div class="flex gap-2 sm:gap-3">
              <button
                (click)="resetToDefault()"
                class="flex-1 px-3 py-2 text-xs sm:text-sm font-medium text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] transition-colors rounded-lg hover:bg-[var(--theme-background-secondary)]/50"
              >
                Reset
              </button>
              <button
                (click)="closeDropdown()"
                class="flex-1 px-3 py-2 text-xs sm:text-sm font-medium text-white bg-[var(--theme-primary)] hover:bg-[var(--theme-primary-dark)] transition-colors rounded-lg"
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
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
        (click)="closeDropdown()"
      ></div>
    }
  `,
  styles: [`
    :host {
      position: relative;
      z-index: 100;
    }
  `]
})
export class ThemeSwitcherComponent {
  themeService = inject(ThemeService);
  isDropdownOpen = signal(false);

  // Lucide icon components
  readonly ChevronDown = ChevronDown;
  readonly X = X;
  readonly Check = Check;
  readonly Waves = Waves;
  readonly Trees = Trees;
  readonly Sun = Sun;
  readonly Palette = Palette;
  readonly Moon = Moon;
  readonly Coffee = Coffee;

  themes: Theme[] = ['ocean', 'forest', 'sunset', 'warm'];  toggleDropdown() {
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

  getThemeIconComponent(theme: string): any {
    switch (theme) {
      case 'ocean':
        return this.Waves;
      case 'forest':
        return this.Trees;
      case 'sunset':
        return this.Sun;
      case 'warm':
        return this.Coffee;
      default:
        return this.Palette;
    }
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
