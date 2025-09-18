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
      title: 'Enterprise ERP System',
      description: 'Full-scale ERP solution with microservices architecture, handling 10K+ daily transactions',
      category: 'Enterprise',
      technologies: ['.NET Core', 'Angular 15', 'Azure', 'SQL Server'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Healthcare Portal',
      description: 'HIPAA-compliant patient management system with real-time appointment scheduling',
      category: 'Healthcare',
      technologies: ['ASP.NET Core', 'Angular', 'Azure AD B2C', 'SignalR'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Scalable multi-tenant e-commerce platform with AI-powered recommendations',
      category: 'E-Commerce',
      technologies: ['.NET 6', 'Angular', 'Azure Functions', 'Cosmos DB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time financial analytics dashboard with advanced data visualization',
      category: 'FinTech',
      technologies: ['.NET Core', 'Angular', 'D3.js', 'Redis'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'IoT Monitoring System',
      description: 'Industrial IoT platform processing millions of sensor data points daily',
      category: 'IoT',
      technologies: ['Azure IoT Hub', '.NET Core', 'Angular', 'Time Series DB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Learning Management System',
      description: 'Comprehensive LMS with video streaming and interactive coursework',
      category: 'EdTech',
      technologies: ['ASP.NET Core', 'Angular', 'Azure Media Services', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];
}
