import { Component } from '@angular/core';

import { Project, ProjectCardComponent } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent],
  template: `
    <section id="projects" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Featured Projects</h2>
        <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Showcasing enterprise-level applications built with modern technologies and best practices
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (project of projects; track project) {
            <app-project-card
              [project]="project"
            ></app-project-card>
          }
        </div>
      </div>
    </section>
    `
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Podium360',
      description: 'Enterprise microservices platform with message queuing, caching, and cloud infrastructure',
      category: 'Enterprise Platform',
      technologies: ['.NET 5', 'Angular', 'CosmosDB', 'Redis', 'RabbitMQ', 'Docker', 'Azure'],
      liveUrl: 'https://www.podyam.com',
      githubUrl: '#'
    },
    {
      title: 'SnB: Sell & Buy App',
      description: 'Geo-location marketplace mobile app with 100K+ downloads, supporting 50K+ monthly transactions',
      category: 'Marketplace',
      technologies: ['.NET Core', 'MySQL', 'Docker', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://www.snbapp.com',
      githubUrl: '#'
    },
    {
      title: 'Clean DDD Architecture',
      description: 'Open-source implementation of Domain-Driven Design with Repository Pattern and clean architecture principles',
      category: 'Open Source',
      technologies: ['.NET Core', 'Entity Framework Core', 'Repository Pattern', 'DDD', 'CQRS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/AdelSS04/CleanDDDArchitecture'
    },
    {
      title: 'Stock Management System',
      description: 'Full-featured inventory management system with real-time tracking and Azure cloud deployment',
      category: 'ERP',
      technologies: ['Angular 10', 'ASP.NET Web API', 'MSSQL', 'Azure', 'DevExpress'],
      liveUrl: 'https://www.linkedin.com/posts/adellajil_dotnet-erp-sql-activity-6724679224088662016-Aou2',
      githubUrl: 'https://github.com/AdelSS04/StockManagement'
    },
    {
      title: 'School Management Desktop App',
      description: 'Comprehensive desktop application for academic institution management with student tracking and reporting',
      category: 'Education',
      technologies: ['C#.NET', 'Windows Forms', 'Microsoft Access', 'Crystal Reports'],
      liveUrl: 'https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6589859010030129152',
      githubUrl: 'https://github.com/AdelSS04/SchoolManager'
    },
    {
      title: 'Reception Control Platform',
      description: 'Web-mobile platform for visitor management and access control with real-time notifications',
      category: 'IoT/Security',
      technologies: ['ASP.NET', 'Xamarin', 'WCF', 'SQL Server', 'IIS', 'Signal Processing'],
      liveUrl: 'https://www.linkedin.com/posts/adellajil_pfa-csharp-wcf-activity-6562611044022263808-f3BP/',
      githubUrl: '#'
    }
  ];
}
