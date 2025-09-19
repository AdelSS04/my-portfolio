// experience.component.ts
import { Component } from '@angular/core';


interface Experience {
  company: string;
  position: string;
  duration: string;
  period: string;
  location: string;
  type: string;
  current: boolean;
  description: string[];
  technologies: string[];
  logo?: string;
  logoUrl?: string;
  companyColor?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  template: `
    <section id="experience" class="py-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Professional Experience</h2>
        <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Building scalable solutions and leading teams in cloud-native development
        </p>
    
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#122331] via-[#122433] to-transparent"></div>
    
          <!-- Experience items -->
          <div class="space-y-12">
            @for (exp of experiences; track exp; let i = $index) {
              <div
                [class]="i % 2 === 0 ? 'md:flex-row-reverse' : ''"
                class="relative flex flex-col md:flex-row items-center"
                >
                <!-- Timeline dot -->
                <div class="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#122331] to-[#122433] rounded-full border-2 border-[#1e1e1e] z-10">
                  @if (exp.current) {
                    <div class="absolute -inset-1 bg-green-500 rounded-full animate-ping opacity-75"></div>
                  }
                  @if (exp.current) {
                    <div class="absolute -inset-0.5 bg-green-500 rounded-full"></div>
                  }
                </div>
                <!-- Content card -->
                <div [class]="i % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'"
                  class="w-full md:w-[calc(50%-2rem)] ml-8 md:ml-0">
                  <div class="bg-[#112231]/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 group">
                    <!-- Header -->
                    <div class="flex items-start justify-between mb-4">
                      <div>
                        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {{exp.position}}
                        </h3>
                        <p class="text-gray-300 font-medium">{{exp.company}}</p>
                        <div class="flex flex-wrap gap-2 mt-2 text-sm">
                          <span class="text-gray-500">📍 {{exp.location}}</span>
                          <span class="text-gray-500">• {{exp.type}}</span>
                        </div>
                      </div>
                      <div class="text-right">
                        @if (exp.current) {
                          <span class="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mb-2">
                            Current
                          </span>
                        }
                        <p class="text-gray-400 text-sm">{{exp.period}}</p>
                        <p class="text-gray-500 text-xs">{{exp.duration}}</p>
                      </div>
                    </div>
                    <!-- Description -->
                    <div class="mb-4">
                      <ul class="space-y-2">
                        @for (desc of exp.description; track desc) {
                          <li class="text-gray-300 text-sm leading-relaxed flex items-start">
                            <span class="text-blue-400 mr-2 mt-1">▸</span>
                            <span>{{desc}}</span>
                          </li>
                        }
                      </ul>
                    </div>
                    <!-- Technologies -->
                    <div class="flex flex-wrap gap-2">
                      @for (tech of exp.technologies.slice(0, 6); track tech) {
                        <span
                          class="px-3 py-1 bg-[#122433]/30 text-gray-400 rounded-full text-xs border border-white/5"
                          >
                          {{tech}}
                        </span>
                      }
                      @if (exp.technologies.length > 6) {
                        <span
                          class="px-3 py-1 bg-[#122433]/30 text-gray-400 rounded-full text-xs border border-white/5"
                          >
                          +{{exp.technologies.length - 6}} more
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
    
        <!-- Summary Stats -->
        <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">4+</div>
            <div class="text-gray-500 text-sm">Years Experience</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">11+</div>
            <div class="text-gray-500 text-sm">Projects Delivered</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">100K+</div>
            <div class="text-gray-500 text-sm">App Downloads</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-white mb-1">50K+</div>
            <div class="text-gray-500 text-sm">Monthly Transactions</div>
          </div>
        </div>
      </div>
    </section>
    `
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Evident Industrial',
      position: 'Cloud Full Stack Senior Developer',
      duration: '1 yr 3 mos',
      period: 'Jul 2024 - Present',
      location: 'Québec, Canada',
      type: 'Hybrid',
      current: true,
      logo: 'assets/images/companies/evident.png',
      logoUrl: 'https://www.evidentscientific.com',
      companyColor: '#0073e6',
      description: [
        'Building scalable SaaS platform with Angular and .NET, utilizing custom UI component library and microservices architecture with gRPC',
        'Implementing infrastructure automation using Terraform and GitLab CI/CD, with ArgoCD deployment on Azure',
        'Integrating Azure services including AKS, Cosmos DB, and AADB2C for secure and reliable performance',
        'Leading device-cloud integration project with Azure DPS and IoT Hub for certificate-based provisioning'
      ],
      technologies: ['Angular', '.NET Core', 'Azure', 'Terraform', 'gRPC', 'Docker', 'Kubernetes', 'Cosmos DB', 'IoT Hub', 'GitLab CI/CD', 'ArgoCD', 'Microservices']
    },
    {
      company: 'Cofomo',
      position: 'Full Stack Engineer',
      duration: '1 yr 11 mos',
      period: 'Sep 2022 - Jul 2024',
      location: 'Québec, Canada',
      type: 'Hybrid',
      current: false,
      logo: 'assets/images/companies/cofomo.png',
      logoUrl: 'https://www.cofomo.com',
      companyColor: '#ff6b35',
      description: [
        'Led architecture design for tax verification platform using .NET 7 and Angular 17',
        'Spearheaded UI component library development, improving code reusability across 3 internal platforms',
        'Implemented microservices architecture with CQRS pattern and Domain-Driven Design',
        'Managed end-to-end deployment pipelines using Azure DevOps'
      ],
      technologies: ['.NET Core', 'Angular', 'Azure DevOps', 'Dapper', 'Oracle SQL', 'Microservices', 'CQRS', 'DDD', 'REST/SOAP', 'RxJS', 'Unit Testing', 'Integration Testing']
    },
    {
      company: 'PODYAM',
      position: 'Development Team Lead',
      duration: '1 yr 10 mos',
      period: 'Aug 2021 - Aug 2022',
      location: 'Tunisia',
      type: 'Full-time',
      current: false,
      logo: 'assets/images/companies/podyam.png',
      logoUrl: 'https://www.podyam.com',
      companyColor: '#6b46c1',
      description: [
        'Led development team with focus on task planning and architecture definition',
        'Managed team deliverables and ensured code quality standards',
        'Designed and implemented scalable software solutions',
        'Coordinated cross-functional teams for project delivery'
      ],
      technologies: ['.NET Core', 'Microsoft Azure', 'RxJS', 'SQL Server', 'Team Leadership', 'Architecture Design', 'Project Management']
    },
    {
      company: 'SnB Company',
      position: 'API Developer',
      duration: '1 yr 7 mos',
      period: 'Feb 2021 - Aug 2022',
      location: 'Tunisia',
      type: 'Freelance',
      current: false,
      logo: 'assets/images/companies/snb.png',
      logoUrl: 'https://www.snbapp.com',
      companyColor: '#00d4aa',
      description: [
        'Built geo-location marketplace backend supporting 50K+ monthly transactions',
        'Integrated Google Maps API for real-time proximity alerts, increasing engagement by 45%',
        'Automated CI/CD pipelines achieving 99.9% deployment success rate',
        'Developed and maintained API serving mobile app with 100K+ downloads'
      ],
      technologies: ['ASP.NET Core', 'MySQL', 'Docker', 'Google Maps API', 'GitHub Actions', 'Linux', 'Cloud Services', 'REST API']
    }
  ];
}
