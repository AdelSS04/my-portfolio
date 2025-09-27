import { Component, signal, computed, effect } from '@angular/core';
import { ProjectCardComponent, type Project } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="projects" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">Featured Projects</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-8 max-w-2xl mx-auto">
          From enterprise platforms to open-source contributions, showcasing diverse technical expertise
        </p>

        
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            (click)="filterProjects('all')"
            [class.bg-gradient-to-r]="selectedCategory() === 'all'"
            [class.from-[var(--theme-primary)]]="selectedCategory() === 'all'"
            [class.to-[var(--theme-accent)]]="selectedCategory() === 'all'"
            [class.bg-[var(--theme-surface)]/70]="selectedCategory() !== 'all'"
            class="px-6 py-2 rounded-full text-[var(--theme-text)] border border-[var(--theme-border)]/30 hover:border-[var(--theme-border)]/50 transition-all"
            >
            All Projects
          </button>
          @for (cat of categories; track cat) {
            <button
              (click)="filterProjects(cat)"
              [class.bg-gradient-to-r]="selectedCategory() === cat"
              [class.from-[var(--theme-primary)]]="selectedCategory() === cat"
              [class.to-[var(--theme-accent)]]="selectedCategory() === cat"
              [class.bg-[var(--theme-surface)]/70]="selectedCategory() !== cat"
              class="px-6 py-2 rounded-full text-[var(--theme-text)] border border-[var(--theme-border)]/30 hover:border-[var(--theme-border)]/50 transition-all"
              >
              {{cat}}
            </button>
          }
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of filteredProjects(); track project) {
            <app-project-card
              [project]="project"
              class="animate-fade-in"
            ></app-project-card>
          }
        </div>

        
        @if (hasMoreProjects()) {
          <div class="text-center mt-12">
            <button
              (click)="showAllProjects()"
              class="px-8 py-3 bg-[var(--theme-surface)]/70 text-[var(--theme-text)] rounded-full border border-[var(--theme-border)]/30 hover:border-[var(--theme-border)]/50 hover:bg-[var(--theme-surface)]/80 transition-all"
              >
              Show More Projects
            </button>
          </div>
        }
      </div>
    </section>
    `,
  styles: [`
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-out;
    }
  `]
})
export class ProjectsComponent {
  selectedCategory = signal('all');
  showAll = signal(false);

  categories = ['Enterprise', 'Open Source', 'Marketplace', 'Education', 'Cloud/DevOps'];

  allProjects: Project[] = [
    {
      title: 'Podium360',
      description: 'Enterprise microservices platform with message queuing, distributed caching, and cloud infrastructure',
      category: 'Enterprise',
      technologies: ['.NET 5', 'Angular', 'CosmosDB', 'Redis', 'RabbitMQ', 'Docker'],
      liveUrl: 'https:
      year: '2020',
      thumbnail: 'assets/images/podium.png'
    },
    {
      title: 'SnB: Sell & Buy App',
      description: 'Geo-location marketplace with 100K+ downloads, processing 50K+ monthly transactions with real-time alerts',
      category: 'Marketplace',
      technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API'],
      liveUrl: 'https:
      featured: true,
      year: '2021',
      thumbnail: 'assets/images/Snb.png'
    },
    {
      title: 'Clean DDD Architecture',
      description: 'Open-source implementation of Domain-Driven Design with Repository Pattern and clean architecture principles',
      category: 'Open Source',
      technologies: ['.NET Core', 'EF Core', 'Repository Pattern', 'DDD', 'CQRS'],
      githubUrl: 'https:
      featured: true,
      year: '2021',
      thumbnail: 'https:
    },
    {
      title: 'Stock Management System',
      description: 'Full-featured inventory management system with real-time tracking and Azure cloud deployment',
      category: 'Education',
      technologies: ['Angular 10', 'ASP.NET Web API', 'MSSQL', 'Azure', 'DevExpress'],
      liveUrl: 'https:
      githubUrl: 'https:
      year: '2020',
      thumbnail: 'assets/images/stock.PNG'
    },
    {
      title: 'School Management Desktop',
      description: 'Comprehensive desktop application for academic institution management with reporting features',
      category: 'Education',
      technologies: ['C#.NET', 'Windows Forms', 'MS Access', 'Crystal Reports'],
      liveUrl: 'https:
      githubUrl: 'https:
      year: '2019',
      thumbnail: 'assets/images/cs.PNG'
    },
    {
      title: 'My Portfolio',
      description: 'Fullstack personal portfolio with Angular SSR, .NET backend, Docker, CI/CD, and automated SSL renewal.',
      category: 'Open Source',
      technologies: ['Angular 20', 'Angular SSR', '.NET 9', 'Docker', 'GitHub Actions', 'nginx', "Let's Encrypt"],
      liveUrl: 'https:
      githubUrl: 'https:
      featured: true,
      year: '2025',
      thumbnail: 'assets/images/my-portfolio.png'
    },
    {
      title: 'Reception Control Platform',
      description: 'Web-mobile platform for visitor management and access control with real-time notifications',
      category: 'Education',
      technologies: ['ASP.NET', 'Xamarin', 'WCF', 'SQL Server', 'IIS'],
      liveUrl: 'https:
      year: '2019',
      thumbnail: 'assets/images/pfa.png'
    },
    {
      title: 'NLog Console Log',
      description: 'Interactive NLog logging framework showcase with 11 hands-on demonstrations. Educational tool for learning modern .NET logging patterns & best practices.',
      category: 'Open Source',
      technologies: ['.NET', 'NLog', 'Console Applications', 'Logging Patterns'],
      githubUrl: 'https:
      year: '2025',
      thumbnail: 'assets/images/nlog.png'
    },
    {
      title: 'Angular Reactive Forms Showcase',
      description: 'Professional Angular 18 reactive forms showcase demonstrating enterprise-level patterns, custom validators, type-safe form groups, and advanced form management techniques with TypeScript.',
      category: 'Open Source',
      technologies: ['Angular 18', 'TypeScript', 'Reactive Forms', 'Custom Validators', 'Type Safety'],
      githubUrl: 'https:
      liveUrl: 'https:
      featured: true,
      year: '2025',
      thumbnail: 'assets/images/angular-form.png'
    }
  ];
  filteredProjects = computed(() => {
    let filtered = this.selectedCategory() === 'all'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === this.selectedCategory());
    filtered = filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.year || '').localeCompare(a.year || '');
    });

    return this.showAll() ? filtered : filtered.slice(0, 6);
  });

  hasMoreProjects = computed(() => {
    const totalFiltered = this.selectedCategory() === 'all'
      ? this.allProjects.length
      : this.allProjects.filter(p => p.category === this.selectedCategory()).length;
    return !this.showAll() && totalFiltered > 6;
  });

  filterProjects(category: string): void {
    this.selectedCategory.set(category);
    this.showAll.set(false);
  }

  showAllProjects(): void {
    this.showAll.set(true);
  }
}
