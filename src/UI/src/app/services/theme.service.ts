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
    primary: '#a78bfa',
    primaryLight: '#c4b5fd',
    primaryDark: '#7c3aed',
    secondary: '#818cf8',
    accent: '#67e8f9',
    background: '#0c0c0c',
    backgroundSecondary: '#141414',
    surface: '#1a1a1a',
    text: '#ebebeb',
    textSecondary: '#a3a3a3',
    border: '#262626',
    gradient: 'linear-gradient(160deg, #0c0c0c 0%, #141414 100%)'
  };

  getCurrentColors(): ThemeColors {
    return this.colors;
  }

  // Compatibility method - always returns false since we're not loading themes anymore
  isLoading(): boolean {
    return false;
  }
}
