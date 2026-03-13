import { Injectable } from '@angular/core';

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
  // Single professional dark theme
  private colors: ThemeColors = {
    primary: '#3b82f6',
    primaryLight: '#60a5fa',
    primaryDark: '#2563eb',
    secondary: '#1e40af',
    accent: '#06b6d4',
    background: '#0a0f1e',
    backgroundSecondary: '#111827',
    surface: '#1a1f2e',
    text: '#ffffff',
    textSecondary: '#94a3b8',
    border: '#334155',
    gradient: 'linear-gradient(135deg, #0a0f1e 0%, #111827 50%, #1a1f2e 100%)'
  };

  getCurrentColors(): ThemeColors {
    return this.colors;
  }
}
