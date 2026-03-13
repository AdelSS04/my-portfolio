import { Component, signal, computed } from '@angular/core';
import { ProjectCardComponent, type Project } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="work" class="py-24 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">Selected Work</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-2xl mx-auto">
          Real products. Real users. Real systems.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          @for (project of displayedProjects(); track project.title) {
            <app-project-card
              [project]="project"
              class="animate-fade-in"
            ></app-project-card>
          }
        </div>

        @if (!showAll()) {
          <div class="text-center mt-12">
            <button
              (click)="showAll.set(true)"
              class="px-8 py-3 bg-[var(--theme-surface)]/60 text-[var(--theme-text)] rounded-full border border-[var(--theme-border)]/30 hover:border-[var(--theme-border)]/50 hover:bg-[var(--theme-surface)]/80 transition-all text-sm"
            >
              Show all projects
            </button>
          </div>
        }

        <div class="text-center mt-16 py-10 border-t border-[var(--theme-border)]/10">
          <p class="text-[var(--theme-text-secondary)] mb-4">Need something similar built?</p>
          <a
            href="#contact"
            class="inline-block px-8 py-3 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm font-medium"
          >
            Start a project
          </a>
        </div>
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
  showAll = signal(false);

  featuredProjects: Project[] = [
    {
      title: 'Slotafy',
      description: 'Built a complete multi-tenant restaurant ordering platform — from QR menus to kitchen displays to Stripe billing.',
      category: 'SaaS Platform',
      technologies: ['.NET 10', 'Angular 21', 'PostgreSQL', 'SignalR', 'Stripe', 'Docker', 'Kubernetes'],
      impact: 'Live SaaS product in production',
      liveUrl: 'https://slotafy.com/',
      featured: true,
      year: '2026',
      thumbnail: 'assets/images/slotafy.png'
    },
    {
      title: 'SnB: Sell & Buy',
      description: 'Built the API layer for a geo-location marketplace with real-time proximity alerts, Google Maps integration, and push notifications.',
      category: 'Marketplace',
      technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API', 'Redis'],
      impact: '100K+ downloads · 50K+ monthly transactions',
      liveUrl: 'https://www.snbapp.com',
      featured: true,
      year: '2021',
      thumbnail: 'assets/images/Snb.png'
    },
    {
      title: 'Podium360',
      description: 'Microservices backend for an enterprise platform. CosmosDB, Redis caching, RabbitMQ message queuing, containerized deployment.',
      category: 'Enterprise',
      technologies: ['.NET 5', 'Angular', 'CosmosDB', 'Redis', 'RabbitMQ', 'Docker'],
      impact: '10,000+ daily active users',
      liveUrl: 'https://www.podyam.com',
      featured: true,
      year: '2020',
      thumbnail: 'assets/images/podium.png'
    },
    {
      title: 'Spur',
      description: 'Open-source .NET library for result-oriented error handling. Fluent pipelines, zero allocations, integrations for ASP.NET Core, EF Core, MediatR. Published on NuGet.',
      category: 'Open Source',
      technologies: ['.NET Core', 'C#', 'NuGet'],
      impact: 'Published NuGet package used by .NET developers',
      githubUrl: 'https://github.com/AdelSS04/Spur',
      liveUrl: 'https://spur.adellajil.com/',
      featured: true,
      year: '2026',
      thumbnail: 'assets/images/spur.png'
    }
  ];

  otherProjects: Project[] = [
    {
      title: 'Cosmigrator',
      description: 'Azure Cosmos DB migration framework with bulk operations, retry logic, and CLI. Production-ready .NET library.',
      category: 'Open Source',
      technologies: ['.NET Core', 'Cosmos DB', 'C#'],
      githubUrl: 'https://github.com/AdelSS04/Cosmigrator',
      liveUrl: 'https://blog.adellajil.com/blog/cosmigrator-cosmos-db-migrations',
      year: '2026',
      thumbnail: 'assets/images/Cosmigrator.png'
    },
    {
      title: 'Clean DDD Architecture',
      description: 'Open-source implementation of Domain-Driven Design with Repository Pattern and clean architecture principles.',
      category: 'Open Source',
      technologies: ['.NET Core', 'EF Core', 'DDD', 'CQRS'],
      githubUrl: 'https://github.com/AdelSS04/CleanDDDArchitecture',
      year: '2021',
      thumbnail: 'https://blob.jacobsdata.com/software-alchemy/entry7/clean-domain-driven-design-jacobs-510.png'
    },
    {
      title: 'Terraform Azure Fullstack Starter',
      description: 'Production-ready Terraform infrastructure for Azure with multi-environment support, Auth0 authentication, GitLab CI/CD, and cost optimization.',
      category: 'Cloud/DevOps',
      technologies: ['Terraform', 'Azure', 'Auth0', 'GitLab CI/CD'],
      githubUrl: 'https://github.com/AdelSS04/terraform-azure-fullstack-starter',
      liveUrl: 'https://blog.adellajil.com/blog/azure-terraform-infrastructure-guide',
      year: '2025',
      thumbnail: 'assets/images/terraform-azure-starter.png'
    },
    {
      title: 'My Portfolio',
      description: 'This site. Angular SSR, .NET backend, Docker, CI/CD, automated SSL renewal.',
      category: 'Open Source',
      technologies: ['Angular 20', 'Angular SSR', '.NET 9', 'Docker', 'GitHub Actions'],
      liveUrl: 'https://portfolio.adellajil.com',
      githubUrl: 'https://github.com/AdelSS04/my-portfolio',
      year: '2025',
      thumbnail: 'assets/images/my-portfolio.png'
    },
    {
      title: 'Angular Reactive Forms Showcase',
      description: 'Enterprise-level reactive forms patterns: custom validators, type-safe form groups, advanced form management.',
      category: 'Open Source',
      technologies: ['Angular 18', 'TypeScript', 'Reactive Forms'],
      githubUrl: 'https://github.com/AdelSS04/angular-reactive-forms-showcase',
      liveUrl: 'https://demo-reactive.vercel.app/',
      year: '2025',
      thumbnail: 'assets/images/angular-form.png'
    }
  ];

  displayedProjects = computed(() => {
    return this.showAll() ? [...this.featuredProjects, ...this.otherProjects] : this.featuredProjects;
  });
}
