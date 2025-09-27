// education.component.ts
import { Component } from '@angular/core';
import { LucideAngularModule, Cloud, Award, Code, Package, Layers3, Settings, GraduationCap, BookOpen, School, MapPin, Calendar } from 'lucide-angular';

interface Education {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description: string[];
  achievements?: string[];
  logoUrl: string;
  schoolColor?: string;
  type: 'university' | 'preparatory' | 'high-school' | 'certification';
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="education" class="py-20 px-4 relative min-h-screen overflow-hidden">
      <!-- Dynamic Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-[var(--theme-background)]/90 via-[var(--theme-background-secondary)]/50 to-[var(--theme-background)]/90"></div>

      <!-- Floating Elements -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-[var(--theme-accent)]/5 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[var(--theme-primary)]/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-3 bg-[var(--theme-surface)]/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-[var(--theme-border)]/30">
            <lucide-icon [img]="GraduationCap" class="w-6 h-6 text-[var(--theme-primary)]"></lucide-icon>
            <span class="text-[var(--theme-primary)] font-semibold">Academic Journey</span>
          </div>
          <h2 class="text-4xl md:text-6xl font-bold text-[var(--theme-text)] mb-4 bg-gradient-to-r from-[var(--theme-text)] via-[var(--theme-primary)] to-[var(--theme-text)] bg-clip-text">
            Education & Learning
          </h2>
          <p class="text-xl text-[var(--theme-text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Building expertise through continuous learning and academic excellence
          </p>
        </div>

        <!-- Education Timeline -->
        <div class="relative max-w-4xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--theme-accent)] via-[var(--theme-primary)] to-[var(--theme-accent)] opacity-30"></div>

          <div class="space-y-12">
            @for (edu of education; track edu; let i = $index) {
            <div
              class="education-card relative flex gap-8 group"
              [style.animation-delay]="i * 150 + 'ms'"
            >
              <!-- Timeline Node -->
              <div class="relative flex-shrink-0">
                <div class="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-lg shadow-[var(--theme-primary)]/20 border-2 border-[var(--theme-border)]/20 group-hover:border-[var(--theme-primary)]/50 transition-all duration-500 group-hover:scale-110 flex items-center justify-center">
                  <img
                    [src]="edu.logoUrl"
                    [alt]="edu.school + ' logo'"
                    class="w-full h-full object-contain p-2"
                    (error)="handleImageError($event)"
                  />
                  <div
                    class="w-full h-full flex items-center justify-center text-white font-bold text-lg hidden"
                    [style.background]="edu.schoolColor || 'linear-gradient(135deg, var(--theme-primary), var(--theme-accent))'">
                    {{ getSchoolInitials(edu.school) }}
                  </div>
                </div>

                <!-- Timeline Connection -->
                <div class="absolute top-8 -left-4 w-4 h-0.5 bg-[var(--theme-primary)]/30"></div>

                <!-- Education Type Badge -->
                <div class="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                     [class]="getTypeClasses(edu.type)">
                  {{ getTypeIcon(edu.type) }}
                </div>
              </div>

              <!-- Content Card -->
              <div class="flex-1 bg-gradient-to-br from-[var(--theme-surface)] to-[var(--theme-surface)]/80 rounded-2xl border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/40 transition-all duration-500 overflow-hidden group-hover:shadow-xl group-hover:shadow-[var(--theme-primary)]/10 group-hover:-translate-y-1">

                <!-- Animated Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/5 via-transparent to-[var(--theme-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div class="relative z-10 p-6">
                  <!-- Header -->
                  <div class="flex items-start justify-between mb-4">
                    <div class="flex-1">
                      <div class="flex items-center gap-3 mb-2">
                        <h3 class="text-xl font-bold text-[var(--theme-text)] group-hover:text-[var(--theme-primary)] transition-colors duration-300">
                          {{ edu.degree }}
                        </h3>
                      </div>
                      <p class="text-lg font-semibold text-[var(--theme-text-secondary)] mb-2">{{ edu.school }}</p>
                      <p class="text-[var(--theme-primary)] font-medium mb-2">{{ edu.field }}</p>

                      <!-- Meta Info -->
                      <div class="flex flex-wrap gap-2 text-xs">
                        <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                          <lucide-icon [img]="MapPin" class="w-3 h-3"></lucide-icon>
                          {{ edu.location }}
                        </span>
                        <span class="inline-flex items-center gap-1 text-[var(--theme-text-secondary)] bg-[var(--theme-background)]/40 px-2 py-1 rounded-full">
                          <lucide-icon [img]="Calendar" class="w-3 h-3"></lucide-icon>
                          {{ edu.period }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <div class="space-y-4">
                    <div>
                      <h4 class="text-[var(--theme-text)] font-semibold text-sm mb-2 flex items-center gap-2">
                        <div class="w-1.5 h-1.5 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-full"></div>
                        Curriculum & Focus Areas
                      </h4>
                      <div class="space-y-2">
                        @for (desc of edu.description.slice(0, 6); track desc; let j = $index) {
                        <div class="flex items-start gap-2 group/item">
                          <div class="w-1 h-1 rounded-full bg-[var(--theme-primary)] mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                          <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed group-hover/item:text-[var(--theme-text)] transition-colors">{{ desc }}</p>
                        </div>
                        }
                        @if (edu.description.length > 6) {
                        <div class="text-[var(--theme-text-secondary)] text-sm italic">
                          + {{ edu.description.length - 6 }} more areas of study
                        </div>
                        }
                      </div>
                    </div>

                    <!-- Achievements -->
                    @if (edu.achievements && edu.achievements.length > 0) {
                    <div>
                      <h4 class="text-[var(--theme-text)] font-semibold text-sm mb-2 flex items-center gap-2">
                        <div class="w-1.5 h-1.5 bg-gradient-to-r from-[var(--theme-accent)] to-[var(--theme-primary)] rounded-full"></div>
                        Key Achievements
                      </h4>
                      <div class="flex flex-wrap gap-1.5">
                        @for (achievement of edu.achievements; track achievement) {
                        <span class="px-2 py-1 bg-[var(--theme-background)]/50 text-[var(--theme-text-secondary)] rounded-md text-xs border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/40 hover:text-[var(--theme-primary)] transition-all duration-300">
                          {{ achievement }}
                        </span>
                        }
                      </div>
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>

        <!-- Certifications Section -->
        <div class="mt-20">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-[var(--theme-text)] mb-4">Professional Certifications</h3>
            <p class="text-[var(--theme-text-secondary)] max-w-2xl mx-auto">
              Continuous learning and professional development through industry certifications
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (cert of certifications; track cert; let i = $index) {
            <div class="bg-gradient-to-br from-[var(--theme-surface)] to-[var(--theme-surface)]/80 rounded-2xl border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/40 transition-all duration-500 overflow-hidden group hover:shadow-xl hover:shadow-[var(--theme-primary)]/10 hover:-translate-y-1"
                 [style.animation-delay]="i * 100 + 'ms'">

              <!-- Animated Background -->
              <div class="absolute inset-0 bg-gradient-to-br from-[var(--theme-primary)]/5 via-transparent to-[var(--theme-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div class="relative z-10 p-6">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300">
                    <lucide-icon
                      [img]="getIconComponent(cert.icon)"
                      class="w-6 h-6"
                    ></lucide-icon>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-[var(--theme-text)] font-bold group-hover:text-[var(--theme-primary)] transition-colors mb-2">
                      {{ cert.title }}
                    </h4>
                    <p class="text-[var(--theme-text-secondary)] text-sm mb-1">{{ cert.issuer }}</p>
                    <p class="text-[var(--theme-text-secondary)]/70 text-xs mb-3">{{ cert.date }}</p>

                    @if (cert.skills) {
                    <div class="flex flex-wrap gap-1">
                      @for (skill of cert.skills; track skill) {
                      <span class="px-2 py-1 bg-[var(--theme-background)]/40 text-[var(--theme-text-secondary)] rounded-md text-xs border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/40 hover:text-[var(--theme-primary)] transition-all duration-300">
                        {{ skill }}
                      </span>
                      }
                    </div>
                    }
                  </div>
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {
  // Import icon components for use in template
  readonly Cloud = Cloud;
  readonly Award = Award;
  readonly Code = Code;
  readonly Package = Package;
  readonly Layers3 = Layers3;
  readonly Settings = Settings;
  readonly GraduationCap = GraduationCap;
  readonly BookOpen = BookOpen;
  readonly School = School;
  readonly MapPin = MapPin;
  readonly Calendar = Calendar;

  education: Education[] = [
    {
      school: 'National Engineering School of Carthage (ENICarthage)',
      degree: 'Engineering Degree',
      field: 'Industrial Systems and Logistics Engineering',
      period: '2017 - 2020',
      location: 'Carthage, Tunisia',
      type: 'university',
      logoUrl: 'https://via.placeholder.com/80x80/1e40af/ffffff?text=ENIC',
      schoolColor: '#1e40af',
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
      achievements: ['Best Final Year Project', 'Top 10% of Class']
    },
    {
      school: 'Higher Institute of Applied Sciences and Technology of Gabes (ISSAT Gabes)',
      degree: 'Preparatory Studies',
      field: 'Technology Preparatory Cycle',
      period: '2015 - 2017',
      location: 'Gabes, Tunisia',
      type: 'preparatory',
      logoUrl: 'https://via.placeholder.com/80x80/059669/ffffff?text=ISSAT',
      schoolColor: '#059669',
      description: [
        'Technology Preparatory Cycle - Foundation in Engineering Sciences',
        'Ranking: 161 out of cohort',
        'Strong foundation in Mathematics, Physics, and Computer Science',
        'Preparation for competitive entrance to engineering schools'
      ],
      achievements: ['Qualified for Engineering School', 'Strong Academic Performance']
    },
    {
      school: 'Ben Guerdane High School',
      degree: 'Baccalaureate',
      field: 'Technical Baccalaureate',
      period: '2011 - 2015',
      location: 'Ben Guerdane, Tunisia',
      type: 'high-school',
      logoUrl: 'https://via.placeholder.com/80x80/dc2626/ffffff?text=BGH',
      schoolColor: '#dc2626',
      description: [
        'Technical Baccalaureate with focus on Science and Technology',
        'Specialized in Mathematics, Physics, and Technical Sciences',
        'Strong foundation in analytical and problem-solving skills'
      ],
      achievements: ['Top 10% of Class', 'Excellence in Technical Sciences']
    }
  ];

  certifications = [
    {
      title: 'Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      icon: 'cloud',
      skills: ['Azure', 'Cloud Services', 'Microservices']
    },
    {
      title: 'AZ-204 Certification',
      issuer: 'Microsoft',
      date: '2023',
      icon: 'award',
      skills: ['Azure Development', 'Cloud Architecture']
    },
    {
      title: 'Advanced Angular Development',
      issuer: 'Online Certification',
      date: '2022',
      icon: 'code',
      skills: ['Angular', 'RxJS', 'TypeScript']
    },
    {
      title: '.NET Microservices Architecture',
      issuer: 'Udemy',
      date: '2021',
      icon: 'box',
      skills: ['Microservices', 'Docker', 'Kubernetes']
    },
    {
      title: 'Clean Architecture & DDD',
      issuer: 'Pluralsight',
      date: '2021',
      icon: 'layers',
      skills: ['DDD', 'Clean Architecture', 'CQRS']
    },
    {
      title: 'DevOps Fundamentals',
      issuer: 'Coursera',
      date: '2020',
      icon: 'settings',
      skills: ['CI/CD', 'Docker', 'Git']
    }
  ];

  /**
   * Handles image loading errors by showing school initials fallback
   */
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

  /**
   * Get school initials for fallback display
   */
  getSchoolInitials(school: string): string {
    return school
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .slice(0, 3)
      .toUpperCase();
  }

  /**
   * Get CSS classes for education type badges
   */
  getTypeClasses(type: string): string {
    const baseClasses = 'bg-gradient-to-r text-white text-xs font-bold shadow-lg';
    switch (type) {
      case 'university':
        return `${baseClasses} from-blue-500 to-blue-600`;
      case 'preparatory':
        return `${baseClasses} from-green-500 to-green-600`;
      case 'high-school':
        return `${baseClasses} from-red-500 to-red-600`;
      case 'certification':
        return `${baseClasses} from-purple-500 to-purple-600`;
      default:
        return `${baseClasses} from-gray-500 to-gray-600`;
    }
  }

  /**
   * Get icon for education type
   */
  getTypeIcon(type: string): string {
    switch (type) {
      case 'university':
        return '🎓';
      case 'preparatory':
        return '📚';
      case 'high-school':
        return '🏫';
      case 'certification':
        return '🏆';
      default:
        return '📖';
    }
  }

  /**
   * Get SVG icon path for certifications
   */
  getIconSvg(iconName: string): string {
    const icons: { [key: string]: string } = {
      'cloud': 'M4 7a3 3 0 016 0h4a2 2 0 110 4h-4a3 3 0 01-6 0z',
      'award': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
      'code': 'M10 20l4-16m-4 4l4 4-4 4M6 16l-4-4 4-4',
      'box': 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10',
      'layers': 'M20 12l-8-4-8 4 8 4 8-4zm0 4l-8 4-8-4 8 4 8-4z',
      'settings': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    };
    return icons[iconName] || icons['code'];
  }

  /**
   * Get Lucide icon component for certifications
   */
  getIconComponent(iconName: string): any {
    const iconMap: { [key: string]: any } = {
      'cloud': this.Cloud,
      'award': this.Award,
      'code': this.Code,
      'box': this.Package,
      'layers': this.Layers3,
      'settings': this.Settings
    };
    return iconMap[iconName] || this.Code;
  }
}
