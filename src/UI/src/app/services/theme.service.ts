import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'ocean' | 'forest' | 'sunset' | 'warm';
export type Mode = 'light' | 'dark';

export interface ThemeColors {
  primary: string;
  primaryLight: string;
  primaryDark: string;
  secondary: string;
  accent: string;
  background: string;
  backgroundSecondary: string;
  surface: string;
  text: string;
  textSecondary: string;
  border: string;
  gradient: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'portfolio-theme';
  private readonly MODE_KEY = 'portfolio-mode';

  currentTheme = signal<Theme>('ocean');
  currentMode = signal<Mode>('dark');

  // Theme definitions
  private themes: Record<Theme, Record<Mode, ThemeColors>> = {
    ocean: {
      dark: {
        primary: '#3b82f6',
        primaryLight: '#60a5fa',
        primaryDark: '#2563eb',
        secondary: '#1e40af',
        accent: '#06b6d4',
        background: '#1e1e1e',
        backgroundSecondary: '#112230',
        surface: '#112331',
        text: '#ffffff',
        textSecondary: '#cbd5e1',
        border: '#475569',
        gradient: 'linear-gradient(135deg, #112230 0%, #1e1e1e 50%, #122433 100%)'
      },
      light: {
        primary: '#3b82f6',
        primaryLight: '#60a5fa',
        primaryDark: '#2563eb',
        secondary: '#1e40af',
        accent: '#06b6d4',
        background: '#ffffff',
        backgroundSecondary: '#f8fafc',
        surface: '#f1f5f9',
        text: '#1e293b',
        textSecondary: '#475569',
        border: '#cbd5e1',
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
      }
    },
    forest: {
      dark: {
        primary: '#22c55e',
        primaryLight: '#4ade80',
        primaryDark: '#16a34a',
        secondary: '#15803d',
        accent: '#10b981',
        background: '#1e1e1e',
        backgroundSecondary: '#112230',
        surface: '#112331',
        text: '#ffffff',
        textSecondary: '#cbd5e1',
        border: '#475569',
        gradient: 'linear-gradient(135deg, #112230 0%, #1e1e1e 50%, #122433 100%)'
      },
      light: {
        primary: '#22c55e',
        primaryLight: '#4ade80',
        primaryDark: '#16a34a',
        secondary: '#15803d',
        accent: '#10b981',
        background: '#ffffff',
        backgroundSecondary: '#f8fafc',
        surface: '#f1f5f9',
        text: '#1e293b',
        textSecondary: '#475569',
        border: '#cbd5e1',
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
      }
    },
    sunset: {
      dark: {
        primary: '#f97316',
        primaryLight: '#fb923c',
        primaryDark: '#ea580c',
        secondary: '#dc2626',
        accent: '#ef4444',
        background: '#1e1e1e',
        backgroundSecondary: '#112230',
        surface: '#112331',
        text: '#ffffff',
        textSecondary: '#cbd5e1',
        border: '#475569',
        gradient: 'linear-gradient(135deg, #112230 0%, #1e1e1e 50%, #122433 100%)'
      },
      light: {
        primary: '#f97316',
        primaryLight: '#fb923c',
        primaryDark: '#ea580c',
        secondary: '#dc2626',
        accent: '#ef4444',
        background: '#ffffff',
        backgroundSecondary: '#f8fafc',
        surface: '#f1f5f9',
        text: '#1e293b',
        textSecondary: '#475569',
        border: '#cbd5e1',
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'
      }
    },
    warm: {
      dark: {
        primary: '#d2691e',
        primaryLight: '#daa520',
        primaryDark: '#a0522d',
        secondary: '#8b4513',
        accent: '#cd853f',
        background: '#1e1e1e',
        backgroundSecondary: '#2b1e1a',
        surface: '#332519',
        text: '#ffffff',
        textSecondary: '#e5d5c8',
        border: '#8b7355',
        gradient: 'linear-gradient(135deg, #2b1e1a 0%, #1e1e1e 50%, #332519 100%)'
      },
      light: {
        primary: '#d2691e',
        primaryLight: '#daa520',
        primaryDark: '#a0522d',
        secondary: '#8b4513',
        accent: '#cd853f',
        background: '#faf7f0',
        backgroundSecondary: '#f5f0e8',
        surface: '#f0e6d6',
        text: '#3e2723',
        textSecondary: '#6d4c41',
        border: '#d7ccc8',
        gradient: 'linear-gradient(135deg, #faf7f0 0%, #f5f0e8 50%, #f0e6d6 100%)'
      }
    }
  };

  constructor() {
    // Only access localStorage if we're in the browser
    if (this.isBrowser()) {
      // Load saved theme and mode
      const savedTheme = localStorage.getItem(this.THEME_KEY) as Theme;
      const savedMode = localStorage.getItem(this.MODE_KEY) as Mode;

      if (savedTheme && this.isValidTheme(savedTheme)) {
        this.currentTheme.set(savedTheme);
      }

      if (savedMode && this.isValidMode(savedMode)) {
        this.currentMode.set(savedMode);
      }
    }

    // Apply theme changes to CSS variables
    effect(() => {
      this.applyTheme();
      if (this.isBrowser()) {
        this.saveToLocalStorage();
      }
    });

    // Initial application
    this.applyTheme();
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  private isValidTheme(theme: string): theme is Theme {
    return ['ocean', 'forest', 'sunset', 'warm'].includes(theme);
  }

  private isValidMode(mode: string): mode is Mode {
    return ['light', 'dark'].includes(mode);
  }

  setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }

  setMode(mode: Mode): void {
    this.currentMode.set(mode);
  }

  toggleMode(): void {
    const newMode = this.currentMode() === 'dark' ? 'light' : 'dark';
    this.setMode(newMode);
  }

  getCurrentColors(): ThemeColors {
    return this.themes[this.currentTheme()][this.currentMode()];
  }

  private applyTheme(): void {
    // Only apply theme changes if we're in the browser
    if (!this.isBrowser()) {
      return;
    }

    const colors = this.getCurrentColors();
    const root = document.documentElement;

    // Apply CSS custom properties
    Object.entries(colors).forEach(([key, value]) => {
      const cssVarName = `--theme-${key.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
      root.style.setProperty(cssVarName, value);
    });

    // Apply theme class to body for additional styling
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${this.currentTheme()}`);

    // Apply mode class
    document.body.className = document.body.className.replace(/mode-\w+/g, '');
    document.body.classList.add(`mode-${this.currentMode()}`);
  }

  private saveToLocalStorage(): void {
    // Only save to localStorage if we're in the browser
    if (!this.isBrowser()) {
      return;
    }

    try {
      localStorage.setItem(this.THEME_KEY, this.currentTheme());
      localStorage.setItem(this.MODE_KEY, this.currentMode());
    } catch (error) {
      console.warn('Could not save theme to localStorage:', error);
    }
  }

  // Reset to default theme
  resetToDefault(): void {
    this.setTheme('ocean');
    this.setMode('dark');
  }

  // Get all available themes
  getAllThemes(): Theme[] {
    return Object.keys(this.themes) as Theme[];
  }

  // Get colors for a specific theme and mode (for preview purposes)
  getThemeColors(theme: Theme, mode: Mode): ThemeColors {
    return this.themes[theme][mode];
  }

  // Utility methods for theme names
  getThemeDisplayName(theme: Theme): string {
    switch (theme) {
      case 'ocean': return 'Ocean Blue';
      case 'forest': return 'Forest Green';
      case 'sunset': return 'Sunset Orange';
      case 'warm': return 'Warm Earth';
      default: return 'Ocean Blue';
    }
  }

  getThemeEmoji(theme: Theme): string {
    switch (theme) {
      case 'ocean': return '🌊';
      case 'forest': return '🌲';
      case 'sunset': return '🌅';
      case 'warm': return '🍯';
      default: return '🌊';
    }
  }

  getThemeIcon(theme: Theme): string {
    switch (theme) {
      case 'ocean': return 'waves';
      case 'forest': return 'trees';
      case 'sunset': return 'sun';
      case 'warm': return 'coffee';
      default: return 'waves';
    }
  }
}
