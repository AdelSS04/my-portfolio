import { Component } from '@angular/core';
import { LucideAngularModule, Briefcase, MapPin, CheckCircle } from 'lucide-angular';

interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  type: string;
  current: boolean;
  description: string[];
  technologies: string[];
  logoUrl: string;
  companyColor?: string;
  duration?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="experience" class="py-20 px-4 relative min-h-screen overflow-hidden">
      
      <div class="absolute inset-0 bg-gradient-to-br from-[var(--theme-background)]/90 via-[var(--theme-background-secondary)]/50 to-[var(--theme-background)]/90"></div>

      
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--theme-primary)]/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--theme-accent)]/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 bg-[var(--theme-surface)]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[var(--theme-border)]/30">
            <lucide-icon [img]="Briefcase" class="w-6 h-6 text-[var(--theme-primary)]"></lucide-icon>
            <span class="text-[var(--theme-primary)] font-semibold">Professional Journey</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-bold text-[var(--theme-text)] mb-4 bg-gradient-to-r from-[var(--theme-text)] via-[var(--theme-primary)] to-[var(--theme-text)] bg-clip-text">
            Experience Timeline
          </h2>
          <p class="text-xl text-[var(--theme-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            A journey through innovation, leadership, and cutting-edge technology solutions
          </p>
        </div>

        
        <div class="relative max-w-4xl mx-auto">
          
          <div class="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--theme-primary)] via-[var(--theme-accent)] to-[var(--theme-primary)] opacity-30"></div>

          <div class="space-y-8 md:space-y-12">
            @for (exp of experiences; track exp; let i = $index) {
            <div
              class="experience-card relative group"
              [style.animation-delay]="i * 150 + 'ms'"
              [class.is-current]="exp.current"
            >
              
              <div class="md:hidden bg-gradient-to-br from-[var(--theme-surface)] to-[var(--theme-surface)]/80 rounded-2xl border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/40 transition-all duration-500 overflow-hidden group-hover:shadow-xl group-hover:shadow-[var(--theme-primary)]/10 group-hover:-translate-y-1">
                
                <div class="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/5 via-transparent to-[var(--theme-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div class="relative z-10 p-6">
                  
                  <div class="flex items-start gap-4 mb-4">
                    <div class="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg shadow-[var(--theme-primary)]/20 border-2 border-[var(--theme-border)]/20 group-hover:border-[var(--theme-primary)]/50 transition-all duration-500 group-hover:scale-110 flex items-center justify-center flex-shrink-0">
                      <img
                        [src]="exp.logoUrl"
                        [alt]="exp.company + ' logo'"
                        class="w-full h-full object-contain p-2"
                        (error)="handleImageError($event)"
                      />
                      <div
                        class="w-full h-full flex items-center justify-center text-white font-bold text-lg hidden"
                        [style.background]="exp.companyColor || 'linear-gradient(135deg, var(--theme-primary), var(--theme-accent))'">
                        {{ getCompanyInitials(exp.company) }}
                      </div>
                    </div>

                    <div class="flex-1">
                      <div class="flex items-center gap-2 mb-2">
                        <h3 class="text-lg font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors duration-300">
                          {{ exp.position }}
                        </h3>
                        @if (exp.current) {
                        <span class="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                          <div class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                          Now
                        </span>
                        }
                      </div>
                      <p class="text-base font-semibold text-[var(--theme-text-secondary)] mb-1">{{ exp.company }}</p>
                      <p class="text-[var(--theme-primary)] font-medium text-sm mb-2">{{ exp.duration }}</p>
                    </div>
                  </div>

                  
                  <div class="flex flex-wrap gap-2 text-xs mb-4">
                    <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                      <lucide-icon [img]="MapPin" class="w-3 h-3"></lucide-icon>
                      {{ exp.location }}
                    </span>
                    <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                      <lucide-icon [img]="CheckCircle" class="w-3 h-3"></lucide-icon>
                      {{ exp.type }}
                    </span>
                    <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                      📅 {{ exp.period }}
                    </span>
                  </div>

                  
                  <div class="space-y-3">
                    <div>
                      <h4 class="text-[var(--theme-text)] font-semibold text-sm mb-2 flex items-center gap-2">
                        <div class="w-1.5 h-1.5 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full"></div>
                        Key Achievements
                      </h4>
                      <div class="space-y-1.5">
                        @for (desc of exp.description.slice(0, 3); track desc; let j = $index) {
                        <div class="flex items-start gap-2 group/item">
                          <div class="w-1 h-1 rounded-full bg-[var(--theme-primary)] mt-1.5 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed group-hover/item:text-[var(--theme-text)] transition-colors">{{ desc }}</p>
                        </div>
                        }
                        @if (exp.description.length > 3) {
                        <div class="text-[var(--theme-text-secondary)] text-sm italic pl-3">
                          + {{ exp.description.length - 3 }} more achievements
                        </div>
                        }
                      </div>
                    </div>

                    
                    <div>
                      <h4 class="text-[var(--theme-text)] font-semibold text-sm mb-2 flex items-center gap-2">
                        <div class="w-1.5 h-1.5 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-full"></div>
                        Technologies
                      </h4>
                      <div class="flex flex-wrap gap-1.5">
                        @for (tech of exp.technologies.slice(0, 8); track tech; let k = $index) {
                        <span class="px-2 py-1 bg-[var(--theme-background)]/50 text-[var(--theme-text-secondary)] rounded-md text-xs border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/40 hover:text-[var(--theme-primary)] transition-all duration-300 cursor-default">
                          {{ tech }}
                        </span>
                        }
                        @if (exp.technologies.length > 8) {
                        <span class="px-2 py-1 bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] rounded-md text-xs border border-[var(--theme-primary)]/30">
                          +{{ exp.technologies.length - 8 }}
                        </span>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
              <div class="hidden md:flex gap-8">
                
                <div class="relative flex-shrink-0">
                  <div class="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg shadow-[var(--theme-primary)]/20 border-2 border-[var(--theme-border)]/20 group-hover:border-[var(--theme-primary)]/50 transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
                    <img
                      [src]="exp.logoUrl"
                      [alt]="exp.company + ' logo'"
                      class="w-full h-full object-contain p-2"
                      (error)="handleImageError($event)"
                    />
                    <div
                      class="w-full h-full flex items-center justify-center text-white font-bold text-lg hidden"
                      [style.background]="exp.companyColor || 'linear-gradient(135deg, var(--theme-primary), var(--theme-accent))'">
                      {{ getCompanyInitials(exp.company) }}
                    </div>
                  </div>

                  
                  <div class="absolute top-8 -left-4 w-4 h-0.5 bg-[var(--theme-primary)]/30"></div>

                  @if (exp.current) {
                  
                  <div class="absolute -inset-2 border-2 border-[var(--theme-primary)] rounded-2xl animate-pulse opacity-60"></div>
                  <div class="absolute -inset-4 border border-[var(--theme-primary)]/30 rounded-2xl animate-ping"></div>
                  }
                </div>

                
                <div class="flex-1 bg-gradient-to-br from-[var(--theme-surface)] to-[var(--theme-surface)]/80 rounded-2xl border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/40 transition-all duration-500 overflow-hidden group-hover:shadow-xl group-hover:shadow-[var(--theme-primary)]/10 group-hover:-translate-y-1">
                  
                  <div class="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/5 via-transparent to-[var(--theme-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div class="relative z-10 p-6">
                    
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                          <h3 class="text-xl font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors duration-300">
                            {{ exp.position }}
                          </h3>
                          @if (exp.current) {
                          <span class="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white text-xs font-bold rounded-full shadow-lg uppercase tracking-wider">
                            <div class="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                            Current
                          </span>
                          }
                        </div>
                        <p class="text-lg font-semibold text-[var(--theme-text-secondary)] mb-2">{{ exp.company }}</p>

                        
                        <div class="flex flex-wrap gap-2 text-xs">
                          <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                            <lucide-icon [img]="MapPin" class="w-3 h-3"></lucide-icon>
                            {{ exp.location }}
                          </span>
                          <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                            <lucide-icon [img]="CheckCircle" class="w-3 h-3"></lucide-icon>
                            {{ exp.type }}
                          </span>
                        </div>
                      </div>

                      
                      <div class="text-right bg-[var(--theme-background)]/30 rounded-xl p-3 backdrop-blur-sm">
                        <p class="text-[var(--theme-text)] font-bold text-sm">{{ exp.period }}</p>
                        <p class="text-[var(--theme-text-secondary)] text-xs">{{ exp.duration }}</p>
                      </div>
                    </div>

                    
                    <div class="space-y-4">
                      <div>
                        <h4 class="text-[var(--theme-text)] font-semibold text-sm mb-2 flex items-center gap-2">
                          <div class="w-1.5 h-1.5 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full"></div>
                          Key Achievements
                        </h4>
                        <div class="space-y-2">
                          @for (desc of exp.description; track desc; let j = $index) {
                          <div class="flex items-start gap-2 group/item">
                            <div class="w-1 h-1 rounded-full bg-[var(--theme-primary)] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                            <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed group-hover/item:text-[var(--theme-text)] transition-colors">{{ desc }}</p>
                          </div>
                          }
                        </div>
                      </div>

                      
                      <div>
                        <h4 class="text-[var(--theme-text)] font-semibold text-sm mb-2 flex items-center gap-2">
                          <div class="w-1.5 h-1.5 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-full"></div>
                          Technologies
                        </h4>
                        <div class="flex flex-wrap gap-1.5">
                          @for (tech of exp.technologies.slice(0, 15); track tech; let k = $index) {
                          <span class="px-2 py-1 bg-[var(--theme-background)]/50 text-[var(--theme-text-secondary)] rounded-md text-xs border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/40 hover:text-[var(--theme-primary)] transition-all duration-300 cursor-default">
                            {{ tech }}
                          </span>
                          }
                          @if (exp.technologies.length > 15) {
                          <span class="px-2 py-1 bg-[var(--theme-primary)]/10 text-[var(--theme-primary)] rounded-md text-xs border border-[var(--theme-primary)]/30">
                            +{{ exp.technologies.length - 15 }}
                          </span>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>

        
        <div class="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center group">
            <div class="bg-[var(--theme-surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/50 transition-all duration-500 hover:transform hover:scale-105">
              <div class="text-5xl font-bold bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] bg-clip-text text-transparent mb-2">
                5+
              </div>
              <div class="text-[var(--theme-text-secondary)] font-medium">Years Experience</div>
            </div>
          </div>
          <div class="text-center group">
            <div class="bg-[var(--theme-surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/50 transition-all duration-500 hover:transform hover:scale-105">
              <div class="text-5xl font-bold bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div class="text-[var(--theme-text-secondary)] font-medium">Projects Completed</div>
            </div>
          </div>
          <div class="text-center group">
            <div class="bg-[var(--theme-surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/50 transition-all duration-500 hover:transform hover:scale-105">
              <div class="text-5xl font-bold bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] bg-clip-text text-transparent mb-2">
                4
              </div>
              <div class="text-[var(--theme-text-secondary)] font-medium">Companies</div>
            </div>
          </div>
          <div class="text-center group">
            <div class="bg-[var(--theme-surface)]/30 backdrop-blur-sm rounded-2xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/50 transition-all duration-500 hover:transform hover:scale-105">
              <div class="text-3xl font-bold bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] bg-clip-text text-transparent mb-2">
                Azure
              </div>
              <div class="text-[var(--theme-text-secondary)] font-medium">AZ-204 Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience-card {
      transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
      animation: cardEntry 0.8s ease-out forwards;
      opacity: 0;
    }

    .experience-card:hover {
      transform: translateY(-8px) scale(1.02);
    }

    .experience-card.is-current {
      box-shadow: 0 0 30px var(--theme-primary), 0 20px 40px var(--theme-primary)/20;
    }

    @keyframes cardEntry {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes spin-slow {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .animate-spin-slow {
      animation: spin-slow 20s linear infinite;
    }

    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: var(--theme-primary) transparent;
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 3px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: var(--theme-primary);
      border-radius: 2px;
    }
  `]
})
export class ExperienceComponent {
  readonly Briefcase = Briefcase;
  readonly MapPin = MapPin;
  readonly CheckCircle = CheckCircle;

  experiences: Experience[] = [
    {
      company: 'Evident Scientific',
      position: 'Senior Full Stack Developer',
      period: 'Jul 2024 - Present',
      location: 'Quebec, Canada',
      type: 'Full-time • Hybrid',
      current: true,
      logoUrl: 'assets/images/companies/evident.png',
      companyColor: '#0073e6',
      description: [
        'Developed and maintained scalable web applications using .NET and Angular with microservices architecture',
        'Implemented cloud-native solutions on Azure with containerization using Docker and Kubernetes',
        'Led cross-functional team collaboration to deliver high-quality software solutions on time',
        'Optimized application performance by 40% and implemented comprehensive security best practices'
      ],
      technologies: [
        '.NET Core', 'C#', 'Angular', 'TypeScript', 'Azure', 'Docker', 'Kubernetes',
        'SQL Server', 'Entity Framework', 'Azure DevOps', 'Microservices', 'REST APIs',
        'gRPC', 'Terraform', 'GitLab CI/CD'
      ]
    },
    {
      company: 'Cofomo',
      position: 'Full Stack Engineer',
      period: 'Sep 2022 - Jul 2024',
      location: 'Quebec, Canada',
      type: 'Full-time • Hybrid',
      current: false,
      logoUrl: 'assets/images/companies/cofomo.png',
      companyColor: '#ff6b35',
      description: [
        'Led architecture design for tax verification platform using .NET 7 and Angular 17',
        'Spearheaded UI component library development, improving code reusability across 3 internal platforms',
        'Implemented microservices architecture with CQRS pattern and Domain-Driven Design principles',
        'Managed end-to-end deployment pipelines using Azure DevOps with 99.9% success rate'
      ],
      technologies: [
        '.NET Core', 'Angular', 'Azure DevOps', 'Dapper', 'Oracle SQL',
        'Microservices', 'CQRS', 'DDD', 'REST/SOAP APIs', 'RxJS',
        'Unit Testing', 'Integration Testing', 'Docker', 'Kubernetes'
      ]
    },
    {
      company: 'PODYAM',
      position: 'Development Team Lead',
      period: 'Dec 2020 - Aug 2022',
      location: 'Tunisia',
      type: 'Full-time • Remote',
      current: false,
      logoUrl: 'assets/images/companies/podyam.png',
      companyColor: '#6b46c1',
      description: [
        'Led development team of 6 engineers with focus on task planning and architecture definition',
        'Managed team deliverables and ensured code quality standards through comprehensive reviews',
        'Designed and implemented scalable software solutions serving 10,000+ daily active users',
        'Coordinated cross-functional teams for successful project delivery within tight deadlines'
      ],
      technologies: [
        '.NET Core', 'Microsoft Azure', 'RxJS', 'SQL Server', 'Team Leadership',
        'Architecture Design', 'Project Management', 'Agile/Scrum', 'Code Review'
      ]
    },
    {
      company: 'SnB Company',
      position: 'API Developer',
      period: 'Feb 2021 - Aug 2022',
      location: 'Tunisia',
      type: 'Freelance • Remote',
      current: false,
      logoUrl: 'assets/images/companies/snb_company_logo.jfif',
      companyColor: '#00d4aa',
      description: [
        'Built geo-location marketplace backend supporting 50K+ monthly transactions',
        'Integrated Google Maps API for real-time proximity alerts, increasing user engagement by 45%',
        'Automated CI/CD pipelines achieving 99.9% deployment success rate using GitHub Actions',
        'Developed and maintained REST API serving mobile app with 100K+ downloads on app stores'
      ],
      technologies: [
        'ASP.NET Core', 'MySQL', 'Docker', 'Google Maps API', 'GitHub Actions',
        'Linux', 'Cloud Services', 'REST API', 'JWT Authentication', 'Redis'
      ]
    }
  ];

  constructor() {
    this.experiences.forEach((exp) => {
      exp.duration = this.calculateDuration(exp.period, exp.current);
    });
  }

  private calculateDuration(period: string, current: boolean): string {
    const monthsMap: { [key: string]: number } = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11,
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
    };

    const now = new Date();
    const [startStr, endStr] = period.split(' - ').map((s) => s.trim());
    const [startMonth, startYear] = startStr.split(' ');
    const startDate = new Date(Number(startYear), monthsMap[startMonth] ?? 0, 1);

    let endDate: Date;
    if (endStr === 'Present' || current) {
      endDate = now;
    } else {
      const [endMonth, endYear] = endStr.split(' ');
      endDate = new Date(Number(endYear), monthsMap[endMonth] ?? 0, 1);
    }

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 +
                 (endDate.getMonth() - startDate.getMonth());
    if (current && endStr === 'Present') {
      months += 1;
    }

    if (months < 0) months = 0;

    const years = Math.floor(months / 12);
    const remMonths = months % 12;

    let result = '';
    if (years > 0) result += `${years} yr${years > 1 ? 's' : ''}`;
    if (remMonths > 0)
      result += `${years > 0 ? ' ' : ''}${remMonths} mo${remMonths > 1 ? 's' : ''}`;
    if (!result) result = 'Less than 1 mo';

    return result;
  }

  handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    if (img && img.parentElement) {
      img.style.display = 'none';
      const fallback = img.nextElementSibling as HTMLDivElement;
      if (fallback) {
        fallback.classList.remove('hidden');
      }
    }
  }

  getCompanyInitials(company: string): string {
    return company
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
