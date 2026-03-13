import { Component, input } from '@angular/core';
import { LucideAngularModule, ExternalLink, Github } from 'lucide-angular';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <div class="bg-[var(--theme-surface)] rounded-xl overflow-hidden border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/30 transition-colors group relative">

      @if (project().featured) {
        <div class="absolute top-4 right-4 z-10">
          <span class="px-3 py-1 bg-[var(--theme-primary)] text-[var(--theme-background)] text-xs rounded-lg font-medium">
            Featured
          </span>
        </div>
      }


      <div class="h-48 relative overflow-hidden bg-[var(--theme-surface)] group">

        @if (project().thumbnail) {
          <img
            [src]="project().thumbnail"
            [alt]="project().title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            (error)="handleImageError($event)"
            >
        }


        @if (!project().thumbnail) {
          <div class="w-full h-full flex items-center justify-center">
            <div class="text-6xl text-white/10 font-bold">
              {{project().title.charAt(0)}}
            </div>
          </div>
        }


        <div class="absolute inset-0 bg-gradient-to-t from-[var(--theme-background)] via-transparent to-transparent opacity-60"></div>


        <div class="absolute bottom-4 left-4">
          <span class="text-white/90 text-xs font-medium px-2.5 py-1 bg-black/40 backdrop-blur rounded-lg">
            {{project().category}}
          </span>
          @if (project().year) {
            <span class="ml-2 text-white/60 text-sm">
              {{project().year}}
            </span>
          }
        </div>


        <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div class="text-white text-sm font-medium">
            View Project →
          </div>
        </div>
      </div>

      <div class="p-6">
        <h3 class="text-xl font-bold text-[var(--theme-text)] mb-2 group-hover:text-[var(--theme-primary)] transition-colors">
          {{project().title}}
        </h3>
        <p class="text-[var(--theme-text-secondary)] mb-3 line-clamp-2">{{project().description}}</p>
        @if (project().impact) {
          <p class="text-[var(--theme-primary)] text-sm font-medium mb-3">{{project().impact}}</p>
        }
        <div class="flex gap-2 mb-4 flex-wrap">
          @for (tech of project().technologies.slice(0, 3); track tech) {
            <span
              class="px-2.5 py-1 bg-[var(--theme-background)] text-[var(--theme-text-secondary)] rounded-lg text-xs border border-[var(--theme-border)]/30"
              >
              {{tech}}
            </span>
          }
          @if (project().technologies.length > 3) {
            <span
              class="px-2.5 py-1 bg-[var(--theme-background)] text-[var(--theme-text-secondary)] rounded-lg text-xs border border-[var(--theme-border)]/30"
              >
              +{{project().technologies.length - 3}} more
            </span>
          }
        </div>

        <div class="flex gap-4">
          @if (project().liveUrl) {
            <a
              [href]="project().liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 text-[var(--theme-primary)] hover:text-[var(--theme-accent)] transition-colors"
              >
              <lucide-icon [img]="ExternalLink" class="w-4 h-4" />
              View Project
            </a>
          }
          @if (project().githubUrl) {
            <a
              [href]="project().githubUrl"
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
  project = input.required<Project>();
  readonly ExternalLink = ExternalLink;
  readonly Github = Github;

  handleImageError(event: any): void {
      event.target.style.display = 'none';
    }
}

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  impact?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
  thumbnail?: string;
  images?: string[];
}
