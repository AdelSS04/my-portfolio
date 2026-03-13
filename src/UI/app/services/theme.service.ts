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
    primary: '#6366f1',
    primaryLight: '#818cf8',
    primaryDark: '#4f46e5',
    secondary: '#8b5cf6',
    accent: '#0ea5e9',
    background: '#ffffff',
    backgroundSecondary: '#f8fafc',
    surface: '#f1f5f9',
    text: '#0f172a',
    textSecondary: '#64748b',
    border: '#e2e8f0',
    gradient: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 100%)'
  };

  getCurrentColors(): ThemeColors {
    return this.colors;
  }

  // Compatibility method for app.ts - always returns false since we're not loading themes anymore
  isLoading(): boolean {
    return false;
  }
}
