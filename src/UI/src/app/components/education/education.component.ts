// education.component.ts
import { Component } from '@angular/core';


interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string[];
  achievements?: string[];
  logo?: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  template: `
    <section id="education" class="py-20 px-6">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">Education</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Academic foundation in computer science and software engineering
        </p>

        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[var(--theme-primary)] via-[var(--theme-accent)] to-transparent"></div>

          <!-- Education items -->
          <div class="space-y-12">
            @for (edu of education; track edu; let i = $index) {
              <div
                [class]="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
                class="relative flex flex-col md:flex-row items-center"
                >
                <!-- Timeline dot -->
                <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full border-2 border-[var(--theme-background)] z-10 group-hover:scale-125 transition-transform">
                  <div class="absolute -inset-2 bg-[var(--theme-primary)]/20 rounded-full animate-ping"></div>
                </div>
                <!-- Content card -->
                <div [class]="i % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:mr-auto md:ml-8'"
                  class="w-full md:w-[calc(50%-2rem)] ml-16 md:ml-0 group">
                  <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-border)]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[var(--theme-primary)]/10 hover:transform hover:scale-[1.02]">
                    <!-- School Icon/Logo -->
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center">
                          <span class="text-xl">🎓</span>
                        </div>
                        <div>
                          <h3 class="text-xl font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors">
                            {{edu.school}}
                          </h3>
                          <p class="text-[var(--theme-text-secondary)] text-sm">{{edu.location}}</p>
                        </div>
                      </div>
                    </div>
                    <!-- Degree Info -->
                    <div class="mb-4">
                      <p class="text-[var(--theme-primary)] font-semibold mb-1">{{edu.degree}}</p>
                      <p class="text-[var(--theme-text-secondary)]">{{edu.field}}</p>
                      <p class="text-[var(--theme-text-secondary)]/70 text-sm mt-2">
                        <span class="inline-flex items-center gap-1">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                          </svg>
                          {{edu.period}}
                        </span>
                      </p>
                    </div>
                    <!-- Description -->
                    <div class="mb-4">
                      <ul class="space-y-2">
                        @for (desc of edu.description; track desc) {
                          <li class="text-[var(--theme-text-secondary)] text-sm flex items-start">
                            <span class="text-[var(--theme-primary)] mr-2 mt-1">▸</span>
                            <span>{{desc}}</span>
                          </li>
                        }
                      </ul>
                    </div>
                    <!-- Achievements -->
                    @if (edu.achievements && edu.achievements.length > 0) {
                      <div class="pt-4 border-t border-[var(--theme-border)]/20">
                        <p class="text-[var(--theme-text-secondary)] text-xs mb-2">Key Achievements:</p>
                        <div class="flex flex-wrap gap-2">
                          @for (achievement of edu.achievements; track achievement) {
                            <span
                              class="px-3 py-1 bg-[var(--theme-surface)]/40 text-[var(--theme-text-secondary)] rounded-full text-xs border border-[var(--theme-border)]/20"
                              >
                              {{achievement}}
                            </span>
                          }
                        </div>
                      </div>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Certifications & Courses -->
        <div class="mt-16">
          <h3 class="text-2xl font-bold text-[var(--theme-text)] text-center mb-8">Certifications & Continuous Learning</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (cert of certifications; track cert) {
              <div
                class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-xl p-6 border border-[var(--theme-border)]/20 hover:border-[var(--theme-border)]/40 transition-all duration-300 group hover:transform hover:scale-[1.02]"
                >
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center flex-shrink-0">
                    <span class="text-lg">{{cert.icon}}</span>
                  </div>
                  <div>
                    <h4 class="text-[var(--theme-text)] font-semibold group-hover:text-[var(--theme-primary)] transition-colors">{{cert.title}}</h4>
                    <p class="text-[var(--theme-text-secondary)] text-sm mt-1">{{cert.issuer}}</p>
                    <p class="text-[var(--theme-text-secondary)]/70 text-xs mt-2">{{cert.date}}</p>
                    @if (cert.skills) {
                      <div class="mt-3 flex flex-wrap gap-1">
                        @for (skill of cert.skills; track skill) {
                          <span
                            class="px-2 py-1 bg-[var(--theme-surface)]/40 text-[var(--theme-text-secondary)] rounded text-xs"
                            >
                            {{skill}}
                          </span>
                        }
                      </div>
                    }
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
    `
})
export class EducationComponent {
  education: Education[] = [
    {
      school: 'National Engineering School of Carthage (ENICarthage)',
      degree: 'Engineering Degree',
      field: 'Industrial Systems and Logistics Engineering',
      period: '2017 - 2020',
      location: 'Carthage, Tunisia',
      description: [
        'Decision Support & Data Analysis',
        'Industrial Automation & Quality Fundamentals',
        'Mechanical Design & Manufacturing / Business Economics',
        'Production Management / Organizational Management',
        'Innovation & Creativity / Introduction to Industrial Management',
        'Enterprise Logistics / Thermal Machines',
        'Industrial Maintenance / Energy Management in Industry',
        'Project Management / Strategic Management',
        'Materials & Manufacturing Processes / Flow Modeling & Simulation',
        'Metrology & Instrumentation / Production Systems Scheduling'
      ],
      achievements: ['Best Final Year Project', 'Top 10% of Class'],
      logo: '' // Add logo path if available
    },
    {
      school: 'Higher Institute of Applied Sciences and Technology of Gabes (ISSAT Gabes)',
      degree: 'Preparatory Studies',
      field: 'Technology Preparatory Cycle',
      period: '2015 - 2017',
      location: 'Gabes, Tunisia',
      description: [
        'Technology Preparatory Cycle - Foundation in Engineering Sciences',
        'Ranking: 161 out of cohort',
        'Strong foundation in Mathematics, Physics, and Computer Science',
        'Preparation for competitive entrance to engineering schools'
      ],
      achievements: ['Qualified for Engineering School', 'Strong Academic Performance'],
      logo: ''
    },
    {
      school: 'Ben Guerdane High School',
      degree: 'Baccalaureate',
      field: 'Technical Baccalaureate',
      period: '2011 - 2015',
      location: 'Ben Guerdane, Tunisia',
      description: [
        'Technical Baccalaureate with focus on Science and Technology',
        'Specialized in Mathematics, Physics, and Technical Sciences',
        'Strong foundation in analytical and problem-solving skills'
      ],
      achievements: ['Top 10% of Class', 'Excellence in Technical Sciences'],
      logo: ''
    }
  ];

  certifications = [
    {
      title: 'Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      icon: '☁️',
      skills: ['Azure', 'Cloud Services', 'Microservices']
    },
    {
      title: 'AZ-204 Certification',
      issuer: 'Microsoft',
      date: '2023',
      icon: '🏅',
      skills: ['Azure Development', 'Cloud Architecture']
    },
    {
      title: 'Advanced Angular Development',
      issuer: 'Online Certification',
      date: '2022',
      icon: '🅰️',
      skills: ['Angular', 'RxJS', 'TypeScript']
    },
    {
      title: '.NET Microservices Architecture',
      issuer: 'Udemy',
      date: '2021',
      icon: '📦',
      skills: ['Microservices', 'Docker', 'Kubernetes']
    },
    {
      title: 'Clean Architecture & DDD',
      issuer: 'Pluralsight',
      date: '2021',
      icon: '🏛️',
      skills: ['DDD', 'Clean Architecture', 'CQRS']
    },
    {
      title: 'DevOps Fundamentals',
      issuer: 'Coursera',
      date: '2020',
      icon: '🔧',
      skills: ['CI/CD', 'Docker', 'Git']
    }
  ];
}
