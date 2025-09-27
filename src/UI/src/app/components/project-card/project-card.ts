

import { Component, input, Input } from '@angular/core';
import { Project } from '../projects/projects';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';


@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LucideAngularModule],
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
              <lucide-icon [img]="ExternalLink" class="w-4 h-4" />
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
              <lucide-icon [img]="Github" class="w-4 h-4" />
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

  // Lucide icon components
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;

  handleImageError(event: any): void {
      event.target.style.display = 'none';
    }
}
