

import { Component, input, Input } from '@angular/core';
import { Project } from '../projects/projects';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  template: `
    <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[var(--theme-border)]/20 hover:border-[var(--theme-border)]/40 transition-all duration-300 group hover:transform hover:scale-[1.02] relative">
      <!-- Featured Badge -->
      @if (project.featured) {
        <div class="absolute top-4 right-4 z-10">
          <span class="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs rounded-full font-medium">
            ⭐ Featured
          </span>
        </div>
      }
    
      <!-- Thumbnail Image or Gradient -->
      <div class="h-48 relative overflow-hidden bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] group">
        <!-- Project Thumbnail -->
        @if (project.thumbnail) {
          <img
            [src]="project.thumbnail"
            [alt]="project.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            (error)="handleImageError($event)"
            >
        }
    
        <!-- Fallback gradient if no image -->
        @if (!project.thumbnail) {
          <div class="w-full h-full flex items-center justify-center">
            <div class="text-6xl text-white/10 font-bold">
              {{project.title.charAt(0)}}
            </div>
          </div>
        }
    
        <!-- Overlay gradient -->
        <div class="absolute inset-0 bg-gradient-to-t from-[var(--theme-background)] via-transparent to-transparent opacity-60"></div>

        <!-- Category badge -->
        <div class="absolute bottom-4 left-4">
          <span class="text-white/90 text-sm font-medium px-3 py-1 bg-white/10 backdrop-blur rounded-full">
            {{project.category}}
          </span>
          @if (project.year) {
            <span class="ml-2 text-white/60 text-sm">
              {{project.year}}
            </span>
          }
        </div>
    
        <!-- View Project overlay on hover -->
        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div class="text-white text-lg font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View Project →
          </div>
        </div>
      </div>
    
      <div class="p-6">
        <h3 class="text-xl font-bold text-[var(--theme-text)] mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
          {{project.title}}
        </h3>
        <p class="text-[var(--theme-text-secondary)] mb-4 line-clamp-2">{{project.description}}</p>        <div class="flex gap-2 mb-4 flex-wrap">
          @for (tech of project.technologies.slice(0, 4); track tech) {
            <span
              class="px-3 py-1 bg-[var(--theme-surface)]/40 text-[var(--theme-text-secondary)] rounded-full text-xs border border-[var(--theme-border)]/20"
              >
              {{tech}}
            </span>
          }
          @if (project.technologies.length > 4) {
            <span
              class="px-3 py-1 bg-[var(--theme-surface)]/40 text-[var(--theme-text-secondary)] rounded-full text-xs border border-[var(--theme-border)]/20"
              >
              +{{project.technologies.length - 4}} more
            </span>
          }
        </div>
    
        <div class="flex gap-4">
          @if (project.liveUrl) {
            <a
              [href]="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-[var(--theme-primary)] hover:text-[var(--theme-accent)] transition-colors"
              >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
              Live Demo
            </a>
          }
          @if (project.githubUrl) {
            <a
              [href]="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-[var(--theme-primary)] hover:text-[var(--theme-accent)] transition-colors"
              >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          }
        </div>
      </div>
    </div>
    `
})
export class ProjectCardComponent {
  @Input() project!: Project;
  handleImageError(event: any): void {
      event.target.style.display = 'none';
    }
}
