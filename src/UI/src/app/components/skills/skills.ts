// skills.component.ts
import { Component } from '@angular/core';


interface Skill {
  name: string;
  icon: string;
  level: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
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
                    <div class="text-2xl group-hover:scale-110 transition-transform">{{skill.icon}}</div>
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
                    <div class="text-2xl group-hover:scale-110 transition-transform">{{skill.icon}}</div>
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
                    <div class="text-2xl group-hover:scale-110 transition-transform">{{skill.icon}}</div>
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
            <div class="bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white px-6 py-3 rounded-full font-medium border border-[var(--theme-border)]/20 shadow-lg">
              🏅 Azure AZ-204 Certified
            </div>
            <div class="bg-[var(--theme-surface)]/80 backdrop-blur text-[var(--theme-text)] px-6 py-3 rounded-full border border-[var(--theme-border)]/20">
              📜 .NET Expert
            </div>
            <div class="bg-[var(--theme-surface)]/80 backdrop-blur text-[var(--theme-text)] px-6 py-3 rounded-full border border-[var(--theme-border)]/20">
              🎯 Angular Advanced
            </div>
          </div>
        </div>
      </div>
    </section>
    `
})
export class SkillsComponent {
  frontendSkills: Skill[] = [
    { name: 'Angular', icon: '🅰️', level: 'Expert' },
    { name: 'TypeScript', icon: '📘', level: 'Expert' },
    { name: 'JavaScript', icon: '🟨', level: 'Expert' },
    { name: 'HTML/CSS', icon: '🎨', level: 'Expert' },
    { name: 'Tailwind CSS', icon: '💨', level: 'Advanced' },
    { name: 'Bootstrap', icon: '🅱️', level: 'Advanced' },
    { name: 'Blazor', icon: '🟪', level: 'Intermediate' },
    { name: 'SASS/SCSS', icon: '🎨', level: 'Advanced' }
  ];

  backendSkills: Skill[] = [
    { name: '.NET Core', icon: '🔷', level: 'Expert' },
    { name: 'C#', icon: '🟦', level: 'Expert' },
    { name: 'ASP.NET', icon: '🌐', level: 'Expert' },
    { name: 'Entity Framework', icon: '🗃️', level: 'Advanced' },
    { name: 'SQL Server', icon: '🗄️', level: 'Advanced' },
    { name: 'PostgreSQL', icon: '🐘', level: 'Advanced' },
    { name: 'Redis', icon: '🔴', level: 'Intermediate' },
    { name: 'REST APIs', icon: '🔌', level: 'Expert' }
  ];

  cloudSkills: Skill[] = [
    { name: 'Azure', icon: '☁️', level: 'Expert' },
    { name: 'Azure Cosmos DB', icon: '🪐', level: 'Advanced' },
    { name: 'Azure App Service', icon: '🖥️', level: 'Advanced' },
    { name: 'Azure Function App', icon: '⚡', level: 'Advanced' },
    { name: 'Azure Static Web App', icon: '🌐', level: 'Intermediate' },
    { name: 'Azure SQL Server', icon: '🗄️', level: 'Advanced' },
    { name: 'Azure AD B2C', icon: '🔑', level: 'Intermediate' },
    { name: 'Azure DNS Management', icon: '🌍', level: 'Intermediate' },
    { name: 'Azure Kubernetes Service', icon: '☸️', level: 'Intermediate' },
    { name: 'Azure Container Registry', icon: '📦', level: 'Intermediate' },
    { name: 'Azure IoT Hub', icon: '📡', level: 'Intermediate' },
    { name: 'Azure DPS', icon: '🔗', level: 'Intermediate' },
    { name: 'Docker', icon: '🐳', level: 'Advanced' },
    { name: 'Kubernetes', icon: '☸️', level: 'Intermediate' },
    { name: 'Helm', icon: '⎈', level: 'Intermediate' },
    { name: 'ArgoCD', icon: '🚦', level: 'Intermediate' },
    { name: 'GitLab', icon: '🦊', level: 'Advanced' },
    { name: 'CI/CD', icon: '🔄', level: 'Advanced' },
    { name: 'Git', icon: '🐙', level: 'Expert' },
    { name: 'Azure DevOps', icon: '🔧', level: 'Advanced' },
    { name: 'Microservices', icon: '📦', level: 'Advanced' },
    { name: 'Terraform', icon: '🏗️', level: 'Intermediate' }
  ];
}
