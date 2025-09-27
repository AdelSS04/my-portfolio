// skills.component.ts
import { Component } from '@angular/core';
import { LucideAngularModule,
  Code, Globe, Database, Server, Cloud,
  Layers, Settings, GitBranch, Shield,
  Zap, Monitor, Cpu, Package, FileCode,
  Palette, Wrench, Boxes, Award
} from 'lucide-angular';


interface Skill {
  name: string;
  icon: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="skills" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">Technical Skills</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Leveraging modern technologies to build robust, scalable applications
        </p>

        <div class="space-y-8">
          <!-- Frontend Skills -->
          <div>
            <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-4">Frontend Development</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (skill of frontendSkills; track skill) {
                <div
                  class="bg-[var(--theme-surface)]/70 backdrop-blur-sm rounded-xl p-4 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/30 hover:bg-[var(--theme-surface)]/90 transition-all duration-300 group"
                  >
                  <div class="flex items-center gap-3">
                    <div class="text-[var(--theme-primary)] group-hover:scale-110 transition-transform">
                      <lucide-icon [img]="getSkillIcon(skill.icon)" class="w-6 h-6"></lucide-icon>
                    </div>
                    <div>
                      <p class="text-[var(--theme-text)] font-medium">{{skill.name}}</p>
                      <p class="text-xs text-[var(--theme-text-secondary)]">{{skill.level}}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Backend Skills -->
          <div>
            <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-4">Backend Development</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (skill of backendSkills; track skill) {
                <div
                  class="bg-[var(--theme-surface)]/70 backdrop-blur-sm rounded-xl p-4 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/30 hover:bg-[var(--theme-surface)]/90 transition-all duration-300 group"
                  >
                  <div class="flex items-center gap-3">
                    <div class="text-[var(--theme-primary)] group-hover:scale-110 transition-transform">
                      <lucide-icon [img]="getSkillIcon(skill.icon)" class="w-6 h-6"></lucide-icon>
                    </div>
                    <div>
                      <p class="text-[var(--theme-text)] font-medium">{{skill.name}}</p>
                      <p class="text-xs text-[var(--theme-text-secondary)]">{{skill.level}}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Cloud & DevOps -->
          <div>
            <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-4">Cloud & DevOps</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (skill of cloudSkills; track skill) {
                <div
                  class="bg-[var(--theme-surface)]/70 backdrop-blur-sm rounded-xl p-4 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/30 hover:bg-[var(--theme-surface)]/90 transition-all duration-300 group"
                  >
                  <div class="flex items-center gap-3">
                    <div class="text-[var(--theme-primary)] group-hover:scale-110 transition-transform">
                      <lucide-icon [img]="getSkillIcon(skill.icon)" class="w-6 h-6"></lucide-icon>
                    </div>
                    <div>
                      <p class="text-[var(--theme-text)] font-medium">{{skill.name}}</p>
                      <p class="text-xs text-[var(--theme-text-secondary)]">{{skill.level}}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="mt-12 text-center">
          <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-6">Certifications</h3>
          <div class="flex flex-wrap gap-4 justify-center">
            <div class="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white px-6 py-3 rounded-full font-medium border border-[var(--theme-border)]/20 shadow-lg flex items-center gap-2">
              <lucide-icon [img]="Award" class="w-5 h-5" />
              Azure AZ-204 Certified
            </div>
            <div class="bg-[var(--theme-surface)]/80 backdrop-blur text-[var(--theme-text)] px-6 py-3 rounded-full border border-[var(--theme-border)]/20 flex items-center gap-2">
              <lucide-icon [img]="Code" class="w-5 h-5" />
              .NET Expert
            </div>
            <div class="bg-[var(--theme-surface)]/80 backdrop-blur text-[var(--theme-text)] px-6 py-3 rounded-full border border-[var(--theme-border)]/20 flex items-center gap-2">
              <lucide-icon [img]="Globe" class="w-5 h-5" />
              Angular Advanced
            </div>
          </div>
        </div>
      </div>
    </section>
    `
})
export class SkillsComponent {
  // Import icon components for use in template
  readonly Code = Code;
  readonly Globe = Globe;
  readonly Database = Database;
  readonly Server = Server;
  readonly Cloud = Cloud;
  readonly Layers = Layers;
  readonly Settings = Settings;
  readonly GitBranch = GitBranch;
  readonly Shield = Shield;
  readonly Zap = Zap;
  readonly Monitor = Monitor;
  readonly Cpu = Cpu;
  readonly Package = Package;
  readonly FileCode = FileCode;
  readonly Palette = Palette;
  readonly Wrench = Wrench;
  readonly Boxes = Boxes;
  readonly Award = Award;

  frontendSkills: Skill[] = [
    { name: 'Angular', icon: 'angular', level: 'Expert' },
    { name: 'TypeScript', icon: 'typescript', level: 'Expert' },
    { name: 'JavaScript', icon: 'javascript', level: 'Expert' },
    { name: 'HTML/CSS', icon: 'code', level: 'Expert' },
    { name: 'Tailwind CSS', icon: 'palette', level: 'Advanced' },
    { name: 'Bootstrap', icon: 'layers', level: 'Advanced' },
    { name: 'Blazor', icon: 'code', level: 'Intermediate' },
    { name: 'SASS/SCSS', icon: 'palette', level: 'Advanced' }
  ];

  backendSkills: Skill[] = [
    { name: '.NET Core', icon: 'server', level: 'Expert' },
    { name: 'C#', icon: 'code', level: 'Expert' },
    { name: 'ASP.NET', icon: 'globe', level: 'Expert' },
    { name: 'Entity Framework', icon: 'database', level: 'Advanced' },
    { name: 'SQL Server', icon: 'database', level: 'Advanced' },
    { name: 'PostgreSQL', icon: 'database', level: 'Advanced' },
    { name: 'Redis', icon: 'zap', level: 'Intermediate' },
    { name: 'REST APIs', icon: 'globe', level: 'Expert' }
  ];

  cloudSkills: Skill[] = [
    { name: 'Azure', icon: 'cloud', level: 'Expert' },
    { name: 'Azure Cosmos DB', icon: 'database', level: 'Advanced' },
    { name: 'Azure App Service', icon: 'monitor', level: 'Advanced' },
    { name: 'Azure Function App', icon: 'zap', level: 'Advanced' },
    { name: 'Azure Static Web App', icon: 'globe', level: 'Intermediate' },
    { name: 'Azure SQL Server', icon: 'database', level: 'Advanced' },
    { name: 'Azure AD B2C', icon: 'shield', level: 'Intermediate' },
    { name: 'Azure DNS Management', icon: 'globe', level: 'Intermediate' },
    { name: 'Azure Kubernetes Service', icon: 'boxes', level: 'Intermediate' },
    { name: 'Azure Container Registry', icon: 'package', level: 'Intermediate' },
    { name: 'Azure IoT Hub', icon: 'cpu', level: 'Intermediate' },
    { name: 'Azure DPS', icon: 'layers', level: 'Intermediate' },
    { name: 'Docker', icon: 'package', level: 'Advanced' },
    { name: 'Kubernetes', icon: 'boxes', level: 'Intermediate' },
    { name: 'Helm', icon: 'wrench', level: 'Intermediate' },
    { name: 'ArgoCD', icon: 'git-branch', level: 'Intermediate' },
    { name: 'GitLab', icon: 'git-branch', level: 'Advanced' },
    { name: 'CI/CD', icon: 'settings', level: 'Advanced' },
    { name: 'Git', icon: 'git-branch', level: 'Expert' },
    { name: 'Azure DevOps', icon: 'settings', level: 'Advanced' },
    { name: 'Microservices', icon: 'package', level: 'Advanced' },
    { name: 'Terraform', icon: 'wrench', level: 'Intermediate' }
  ];

  /**
   * Get Lucide icon component for skills
   */
  getSkillIcon(iconName: string): any {
    const iconMap: { [key: string]: any } = {
      'angular': this.Code,
      'typescript': this.FileCode,
      'javascript': this.Code,
      'code': this.Code,
      'palette': this.Palette,
      'layers': this.Layers,
      'server': this.Server,
      'globe': this.Globe,
      'database': this.Database,
      'zap': this.Zap,
      'cloud': this.Cloud,
      'monitor': this.Monitor,
      'package': this.Package,
      'boxes': this.Boxes,
      'git-branch': this.GitBranch,
      'settings': this.Settings,
      'wrench': this.Wrench,
      'shield': this.Shield,
      'cpu': this.Cpu
    };
    return iconMap[iconName] || this.Code;
  }
}
