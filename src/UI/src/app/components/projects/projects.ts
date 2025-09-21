import { Component } from '@angular/core';

import { ProjectCardComponent } from '../project-card/project-card';

export interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  year?: string;
  thumbnail?: string;
  images?: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="projects" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Featured Projects</h2>
        <p class="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          From enterprise platforms to open-source contributions, showcasing diverse technical expertise
        </p>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap justify-center gap-3 mb-12">
          <button
            (click)="filterProjects('all')"
            [class.bg-gradient-to-r]="selectedCategory === 'all'"
            [class.from-[#122331]]="selectedCategory === 'all'"
            [class.to-[#122433]]="selectedCategory === 'all'"
            [class.bg-[#112231]/50]="selectedCategory !== 'all'"
            class="px-6 py-2 rounded-full text-white border border-white/10 hover:border-white/30 transition-all"
            >
            All Projects
          </button>
          @for (cat of categories; track cat) {
            <button
              (click)="filterProjects(cat)"
              [class.bg-gradient-to-r]="selectedCategory === cat"
              [class.from-[#122331]]="selectedCategory === cat"
              [class.to-[#122433]]="selectedCategory === cat"
              [class.bg-[#112231]/50]="selectedCategory !== cat"
              class="px-6 py-2 rounded-full text-white border border-white/10 hover:border-white/30 transition-all"
              >
              {{cat}}
            </button>
          }
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of filteredProjects; track project) {
            <app-project-card
              [project]="project"
              class="animate-fade-in"
            ></app-project-card>
          }
        </div>

        <!-- Show More Button if needed -->
        @if (hasMoreProjects) {
          <div class="text-center mt-12">
            <button
              (click)="showAllProjects()"
              class="px-8 py-3 bg-[#112231]/50 text-white rounded-full border border-white/10 hover:border-white/30 hover:bg-[#122331]/50 transition-all"
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
  selectedCategory = 'all';
  showAll = false;

  categories = ['Enterprise', 'Open Source', 'Marketplace', 'Education', 'Cloud/DevOps'];

  allProjects: Project[] = [
    {
      title: 'Podium360',
      description: 'Enterprise microservices platform with message queuing, distributed caching, and cloud infrastructure',
      category: 'Enterprise',
      technologies: ['.NET 5', 'Angular', 'CosmosDB', 'Redis', 'RabbitMQ', 'Docker'],
      liveUrl: 'https://www.podyam.com',
      year: '2020',
      thumbnail: 'assets/images/podium.png'
    },
    {
      title: 'SnB: Sell & Buy App',
      description: 'Geo-location marketplace with 100K+ downloads, processing 50K+ monthly transactions with real-time alerts',
      category: 'Marketplace',
      technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://www.snbapp.com',
      featured: true,
      year: '2021',
      thumbnail: 'assets/images/Snb.png'
    },
    {
      title: 'Clean DDD Architecture',
      description: 'Open-source implementation of Domain-Driven Design with Repository Pattern and clean architecture principles',
      category: 'Open Source',
      technologies: ['.NET Core', 'EF Core', 'Repository Pattern', 'DDD', 'CQRS'],
      githubUrl: 'https://github.com/AdelSS04/CleanDDDArchitecture',
      featured: true,
      year: '2021',
      thumbnail: 'https://blob.jacobsdata.com/software-alchemy/entry7/clean-domain-driven-design-jacobs-510.png'
    },
    {
      title: 'Stock Management System',
      description: 'Full-featured inventory management system with real-time tracking and Azure cloud deployment',
      category: 'Education',
      technologies: ['Angular 10', 'ASP.NET Web API', 'MSSQL', 'Azure', 'DevExpress'],
      liveUrl: 'https://www.linkedin.com/posts/adellajil_dotnet-erp-sql-activity-6724679224088662016-Aou2',
      githubUrl: 'https://github.com/AdelSS04/StockManagement',
      year: '2020',
      thumbnail: 'assets/images/stock.PNG'
    },
    {
      title: 'School Management Desktop',
      description: 'Comprehensive desktop application for academic institution management with reporting features',
      category: 'Education',
      technologies: ['C#.NET', 'Windows Forms', 'MS Access', 'Crystal Reports'],
      liveUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6589859010030129152',
      githubUrl: 'https://github.com/AdelSS04/SchoolManager',
      year: '2019',
      thumbnail: 'assets/images/cs.PNG'
    },
    {
      title: 'My Portfolio',
      description: 'Fullstack personal portfolio with Angular SSR, .NET backend, Docker, CI/CD, and automated SSL renewal.',
      category: 'Open Source',
      technologies: ['Angular 20', 'Angular SSR', '.NET 9', 'Docker', 'GitHub Actions', 'nginx', "Let's Encrypt"],
      liveUrl: 'https://portfolio.adellajil.com',
      githubUrl: 'https://github.com/AdelSS04/my-portfolio',
      featured: true,
      year: '2025',
      thumbnail: 'assets/images/my-portfolio.png'
    },
    {
      title: 'Reception Control Platform',
      description: 'Web-mobile platform for visitor management and access control with real-time notifications',
      category: 'Education',
      technologies: ['ASP.NET', 'Xamarin', 'WCF', 'SQL Server', 'IIS'],
      liveUrl: 'https://www.linkedin.com/posts/adellajil_pfa-csharp-wcf-activity-6562611044022263808-f3BP/',
      year: '2019',
      thumbnail: 'assets/images/pfa.png'
    },
    {
      title: 'NLog Console Log',
      description: 'Interactive NLog logging framework showcase with 11 hands-on demonstrations. Educational tool for learning modern .NET logging patterns & best practices.',
      category: 'Open Source',
      technologies: ['.NET', 'NLog', 'Console Applications', 'Logging Patterns'],
      githubUrl: 'https://github.com/AdelSS04/NlogConsoleLog',
      year: '2025',
      thumbnail: 'assets/images/nlog.png'
    },
    {
      title: 'Angular Reactive Forms Showcase',
      description: 'Professional Angular 18 reactive forms showcase demonstrating enterprise-level patterns, custom validators, type-safe form groups, and advanced form management techniques with TypeScript.',
      category: 'Open Source',
      technologies: ['Angular 18', 'TypeScript', 'Reactive Forms', 'Custom Validators', 'Type Safety'],
      githubUrl: 'https://github.com/AdelSS04/angular-reactive-forms-showcase',
      featured: true,
      year: '2025',
      thumbnail: 'assets/images/angular-form.png'
    }
  ];

  get filteredProjects(): Project[] {
    let filtered = this.selectedCategory === 'all'
      ? this.allProjects
      : this.allProjects.filter(p => p.category === this.selectedCategory);

    // Show featured projects first, then sort by year
    filtered = filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (b.year || '').localeCompare(a.year || '');
    });

    return this.showAll ? filtered : filtered.slice(0, 6);
  }

  get hasMoreProjects(): boolean {
    const totalFiltered = this.selectedCategory === 'all'
      ? this.allProjects.length
      : this.allProjects.filter(p => p.category === this.selectedCategory).length;
    return !this.showAll && totalFiltered > 6;
  }

  filterProjects(category: string): void {
    this.selectedCategory = category;
    this.showAll = false;
  }

  showAllProjects(): void {
    this.showAll = true;
  }
}
