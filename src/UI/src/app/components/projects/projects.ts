import { Component, signal, computed } from '@angular/core';
import { ProjectCardComponent, type Project } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="work" class="py-24 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">Selected Projects</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-lg mx-auto">
          Independent products, professional work, and open-source tools. Each entry describes what I built or contributed.
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
          <p class="text-[var(--theme-text)] text-lg font-medium mb-2">Working on a similar problem?</p>
          <p class="text-[var(--theme-text-secondary)] mb-6 max-w-xl mx-auto text-sm">Tell me about the product, the existing system, and the part your team needs help with.</p>
          <a
            href="#contact"
            class="inline-block px-7 py-3 bg-[var(--theme-primary)] text-white rounded-lg hover:bg-[var(--theme-primary-dark)] transition-colors text-sm font-medium"
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
      title: 'CleanTrack',
      description: 'I built separate portals for cleaning managers, workers, and clients, with scheduling, mobile checklists, proof-of-work photos, and service approvals.',
      category: 'B2B SaaS',
      technologies: ['.NET 10', 'Angular 19', 'PostgreSQL', 'Keycloak', 'SignalR', 'Hangfire', 'Docker'],
      impact: 'Independent product · Three role-based portals',
      liveUrl: 'https://cleantrack.adellajil.com',
      featured: true,
      year: '2026',
      thumbnail: 'assets/images/cleantrack.png'
    },
    {
      title: 'Homelab Infrastructure & Applications',
      description: 'I manage Proxmox infrastructure with Pulumi and Ansible, and deploy application and monitoring stacks with Komodo. Services include Nextcloud, n8n, and Grafana.',
      category: 'Platform Engineering',
      technologies: ['Proxmox', 'Pulumi', 'Ansible', '.NET 10', 'Docker Compose', 'Komodo', 'Prometheus', 'Grafana'],
      impact: 'Personal infrastructure · Two Proxmox hosts',
      featured: true,
      year: '2026',
      thumbnail: 'assets/images/homelab.png'
    },
    {
      title: 'Slotafy',
      description: 'I designed, built, and operate a restaurant SaaS with QR ordering, kitchen displays, live order updates, and Stripe billing. Deployments run through Argo CD.',
      category: 'SaaS Platform',
      technologies: ['.NET 10', 'Angular 21', 'PostgreSQL', 'SignalR', 'Stripe', 'Docker', 'Kubernetes'],
      impact: 'Independent product · Live restaurant platform',
      liveUrl: 'https://slotafy.com/',
      featured: true,
      year: '2026',
      thumbnail: 'assets/images/slotafy.png'
    },
    {
      title: 'SnB: Sell & Buy',
      description: 'I built the backend for a location-based marketplace, including Google Maps integration, push notifications, Redis caching, and container deployments.',
      category: 'Marketplace API',
      technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API', 'Redis'],
      impact: 'Freelance backend work · App: 100K+ downloads, 50K+ monthly transactions',
      liveUrl: 'https://www.snbapp.com',
      featured: true,
      year: '2021',
      thumbnail: 'assets/images/Snb.png'
    },
    {
      title: 'Podium360',
      description: 'I led seven developers building a sustainable-finance platform. My work included reporting, document workflows, a portfolio optimization API, and Azure cost reduction.',
      category: 'Enterprise',
      technologies: ['.NET 5', 'Angular', 'CosmosDB', 'Redis', 'RabbitMQ', 'Docker'],
      impact: 'Team lead at Podyam · Reduced Azure costs by 30%+',
      liveUrl: 'https://www.podyam.com',
      featured: true,
      year: '2020',
      thumbnail: 'assets/images/podium.png'
    },
    {
      title: 'Spur',
      description: 'I created a .NET Result<T> library for explicit error handling, fluent pipelines, and integration with ASP.NET Core and common application libraries.',
      category: 'Open Source',
      technologies: ['.NET Core', 'C#', 'NuGet'],
      impact: 'Open source · Explicit error handling for .NET',
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
      description: 'I created a framework for versioned Cosmos DB migrations, with bulk operations, retries, and a CLI for use in deployment pipelines.',
      category: 'Open Source',
      technologies: ['.NET Core', 'Cosmos DB', 'C#'],
      githubUrl: 'https://github.com/AdelSS04/Cosmigrator',
      liveUrl: 'https://blog.adellajil.com/blog/cosmigrator-cosmos-db-migrations',
      year: '2026',
      thumbnail: 'assets/images/Cosmigrator.png'
    },
    {
      title: 'Clean DDD Architecture',
      description: 'A .NET reference project demonstrating Domain-Driven Design, repositories, and separation between application logic and infrastructure.',
      category: 'Open Source',
      technologies: ['.NET Core', 'EF Core', 'DDD', 'CQRS'],
      githubUrl: 'https://github.com/AdelSS04/CleanDDDArchitecture',
      year: '2021',
      thumbnail: 'https://blob.jacobsdata.com/software-alchemy/entry7/clean-domain-driven-design-jacobs-510.png'
    },
    {
      title: 'Terraform Azure Fullstack Starter',
      description: 'A Terraform starter for Azure applications with separate environments, Auth0 authentication, and GitLab CI/CD configuration.',
      category: 'Cloud/DevOps',
      technologies: ['Terraform', 'Azure', 'Auth0', 'GitLab CI/CD'],
      githubUrl: 'https://github.com/AdelSS04/terraform-azure-fullstack-starter',
      liveUrl: 'https://blog.adellajil.com/blog/azure-terraform-infrastructure-guide',
      year: '2025',
      thumbnail: 'assets/images/terraform-azure-starter.png'
    },
    {
      title: 'My Portfolio',
      description: 'I built this portfolio with Angular server-side rendering, reusable components, and a theme system. The repository includes deployment configuration.',
      category: 'Open Source',
      technologies: ['Angular 20', 'Angular SSR', '.NET 9', 'Docker', 'GitHub Actions'],
      liveUrl: 'https://portfolio.adellajil.com',
      githubUrl: 'https://github.com/AdelSS04/my-portfolio',
      year: '2025',
      thumbnail: 'assets/images/my-portfolio.png'
    },
    {
      title: 'Angular Reactive Forms Showcase',
      description: 'An Angular reference project covering custom validators, typed form groups, and reusable patterns for reactive forms.',
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
