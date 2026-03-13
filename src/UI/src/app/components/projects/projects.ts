import { Component, signal, computed } from '@angular/core';
import { ProjectCardComponent, type Project } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="work" class="py-24 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">Case Studies</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-lg mx-auto">
          Production systems I've architected, built, and shipped.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
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
              class="px-7 py-3 border border-[var(--theme-border)] text-[var(--theme-text)] rounded-lg hover:border-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface)] transition-colors text-sm"
            >
              Show all projects
            </button>
          </div>
        }

        <div class="text-center mt-14 py-10 border-t border-[var(--theme-border)]/20">
          <p class="text-[var(--theme-text)] text-lg font-medium mb-2">Need a similar system built?</p>
          <p class="text-[var(--theme-text-secondary)] mb-6 max-w-xl mx-auto text-sm">I help founders and teams build production-grade SaaS platforms, internal tools, and backend-heavy systems from architecture to deployment.</p>
          <a
            href="#contact"
            class="inline-block px-7 py-3 bg-[var(--theme-primary)] text-[var(--theme-background)] rounded-lg hover:bg-[var(--theme-primary-light)] transition-colors text-sm font-medium"
          >
            Start a conversation
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
      description: 'Complete multi-tenant SaaS platform for restaurant ordering — QR code menus, kitchen display system, real-time order tracking, Stripe billing integration.',
      category: 'SaaS Platform',
      technologies: ['.NET 10', 'Angular 21', 'PostgreSQL', 'SignalR', 'Stripe', 'Docker', 'Kubernetes'],
      impact: '🚀 Live production SaaS · Multi-tenant architecture · Real-time order flow',
      liveUrl: 'https://slotafy.com/',
      featured: true,
      year: '2026',
      thumbnail: 'assets/images/slotafy.png'
    },
    {
      title: 'SnB: Sell & Buy',
      description: 'Built the complete API backend for a geo-proximity marketplace. Real-time location tracking, push notifications, Google Maps integration, Redis caching layer.',
      category: 'Marketplace API',
      technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API', 'Redis'],
      impact: '📊 100K+ downloads · 50K+ monthly transactions · 3-year production uptime',
      liveUrl: 'https://www.snbapp.com',
      featured: true,
      year: '2021',
      thumbnail: 'assets/images/Snb.png'
    },
    {
      title: 'Podium360',
      description: 'Enterprise platform backend. Microservices architecture with CosmosDB, RabbitMQ message queuing, Redis caching, containerized deployment on Azure.',
      category: 'Enterprise',
      technologies: ['.NET 5', 'Angular', 'CosmosDB', 'Redis', 'RabbitMQ', 'Docker'],
      impact: '🏢 10,000+ daily active users · Enterprise-grade reliability',
      liveUrl: 'https://www.podyam.com',
      featured: true,
      year: '2020',
      thumbnail: 'assets/images/podium.png'
    },
    {
      title: 'Spur',
      description: 'Open-source .NET library for result-oriented error handling. Fluent pipelines, zero allocations, ASP.NET Core + EF Core + MediatR integrations. Published on NuGet.',
      category: 'Open Source',
      technologies: ['.NET Core', 'C#', 'NuGet'],
      impact: '📦 Published NuGet package · Used by .NET community',
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
