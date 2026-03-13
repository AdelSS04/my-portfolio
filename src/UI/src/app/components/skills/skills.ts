import { Component } from '@angular/core';

interface StackCategory {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    <section id="stack" class="py-24 px-6">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-14">Tech Stack</h2>

        <div class="space-y-6">
          @for (category of stack; track category.label) {
            <div class="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
              <span class="text-[var(--theme-text)] font-medium text-sm min-w-[140px] shrink-0">{{ category.label }}</span>
              <div class="flex flex-wrap gap-2">
                @for (item of category.items; track item) {
                  <span class="px-3 py-1.5 bg-[var(--theme-surface)]/60 text-[var(--theme-text-secondary)] rounded-lg text-xs border border-[var(--theme-border)]/20">
                    {{ item }}
                  </span>
                }
              </div>
            </div>
          }
        </div>

        <div class="mt-12 flex justify-center">
          <div class="inline-flex items-center gap-3 bg-gradient-to-r from-[var(--theme-primary)] to-[var(--theme-accent)] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
            Azure AZ-204 Certified
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  stack: StackCategory[] = [
    {
      label: 'Backend',
      items: ['.NET Core', 'C#', 'ASP.NET', 'Entity Framework', 'PostgreSQL', 'SQL Server', 'Redis', 'REST APIs', 'SignalR', 'gRPC']
    },
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Nx']
    },
    {
      label: 'Cloud & DevOps',
      items: ['Azure', 'Docker', 'Kubernetes', 'Helm', 'Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Azure DevOps']
    },
    {
      label: 'Architecture',
      items: ['Microservices', 'DDD', 'CQRS', 'Clean Architecture', 'Event-Driven']
    }
  ];
}
