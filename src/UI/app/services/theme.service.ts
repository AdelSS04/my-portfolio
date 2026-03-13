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
    accent: '#ec4899',
    background: '#0f172a',
    backgroundSecondary: '#1e293b',
    surface: '#1e293b',
    text: '#f1f5f9',
    textSecondary: '#cbd5e1',
    border: '#334155',
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
  };

  getCurrentColors(): ThemeColors {
    return this.colors;
  }

  // Compatibility method for app.ts - always returns false since we're not loading themes anymore
  isLoading(): boolean {
    return false;
  }
}
