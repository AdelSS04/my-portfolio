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
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-4">Technical Skills</h2>
        <p class="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Leveraging modern technologies to build robust, scalable applications
        </p>
    
        <div class="space-y-8">
          <!-- Frontend Skills -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">Frontend Development</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (skill of frontendSkills; track skill) {
                <div
                  class="bg-[#112231]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-white/20 hover:bg-[#122331]/50 transition-all duration-300 group"
                  >
                  <div class="flex items-center gap-3">
                    <div class="text-2xl group-hover:scale-110 transition-transform">{{skill.icon}}</div>
                    <div>
                      <p class="text-white font-medium">{{skill.name}}</p>
                      <p class="text-xs text-gray-500">{{skill.level}}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
    
          <!-- Backend Skills -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">Backend Development</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (skill of backendSkills; track skill) {
                <div
                  class="bg-[#112231]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-white/20 hover:bg-[#122331]/50 transition-all duration-300 group"
                  >
                  <div class="flex items-center gap-3">
                    <div class="text-2xl group-hover:scale-110 transition-transform">{{skill.icon}}</div>
                    <div>
                      <p class="text-white font-medium">{{skill.name}}</p>
                      <p class="text-xs text-gray-500">{{skill.level}}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
    
          <!-- Cloud & DevOps -->
          <div>
            <h3 class="text-xl font-semibold text-white mb-4">Cloud & DevOps</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              @for (skill of cloudSkills; track skill) {
                <div
                  class="bg-[#112231]/50 backdrop-blur-sm rounded-xl p-4 border border-white/5 hover:border-white/20 hover:bg-[#122331]/50 transition-all duration-300 group"
                  >
                  <div class="flex items-center gap-3">
                    <div class="text-2xl group-hover:scale-110 transition-transform">{{skill.icon}}</div>
                    <div>
                      <p class="text-white font-medium">{{skill.name}}</p>
                      <p class="text-xs text-gray-500">{{skill.level}}</p>
                    </div>
                  </div>
                </div>
              }
            </div>
          </div>
        </div>
    
        <!-- Certifications -->
        <div class="mt-12 text-center">
          <h3 class="text-xl font-semibold text-white mb-6">Certifications</h3>
          <div class="flex flex-wrap gap-4 justify-center">
            <div class="bg-gradient-to-r from-[#122331] to-[#122433] text-white px-6 py-3 rounded-full font-medium border border-white/10">
              🏅 Azure AZ-204 Certified
            </div>
            <div class="bg-[#112231]/50 backdrop-blur text-white px-6 py-3 rounded-full border border-white/10">
              📜 .NET Expert
            </div>
            <div class="bg-[#112231]/50 backdrop-blur text-white px-6 py-3 rounded-full border border-white/10">
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
    { name: 'React', icon: '⚛️', level: 'Intermediate' },
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
    { name: 'Docker', icon: '🐳', level: 'Advanced' },
    { name: 'Kubernetes', icon: '☸️', level: 'Intermediate' },
    { name: 'CI/CD', icon: '🔄', level: 'Advanced' },
    { name: 'Git', icon: '🐙', level: 'Expert' },
    { name: 'Azure DevOps', icon: '🔧', level: 'Advanced' },
    { name: 'Microservices', icon: '📦', level: 'Advanced' },
    { name: 'Terraform', icon: '🏗️', level: 'Intermediate' }
  ];
}
