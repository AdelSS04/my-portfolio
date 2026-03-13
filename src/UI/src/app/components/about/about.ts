import { Component, input, signal } from '@angular/core';

interface StackCategory {
  label: string;
  items: string[];
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  template: `
    <section id="about" class="py-24 px-6">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-14">About</h2>

        <div class="grid md:grid-cols-5 gap-10">
          <div class="md:col-span-3">
            <p class="text-[var(--theme-text-secondary)] leading-relaxed mb-4">
              {{ aboutText() }}
            </p>
            <p class="text-[var(--theme-text-secondary)] leading-relaxed">
              {{ additionalInfo() }}
            </p>
          </div>

          <div class="md:col-span-2">
            <div class="bg-[var(--theme-surface)] rounded-xl p-6 border border-[var(--theme-border)]/30">
              <h3 class="text-sm font-semibold text-[var(--theme-text-secondary)] uppercase tracking-wider mb-4">Work History</h3>
              <div class="space-y-3">
                @for (job of workHistory; track job.company) {
                  <div class="flex justify-between items-start">
                    <div>
                      <p class="text-[var(--theme-text)] font-medium text-sm">{{ job.company }}</p>
                      <p class="text-[var(--theme-text-secondary)] text-xs">{{ job.role }}</p>
                    </div>
                  </div>
                }
              </div>
            </div>

            <div class="mt-6 text-[var(--theme-text-secondary)] text-sm leading-relaxed">
              <span class="font-medium text-[var(--theme-text)]">Core stack:</span>
              .NET / C# &middot; Angular / TypeScript &middot; Azure &middot; PostgreSQL / SQL Server &middot; Docker / Kubernetes
            </div>

            <div class="mt-3">
              <button
                (click)="showFullStack.set(!showFullStack())"
                class="text-[var(--theme-primary)] text-xs font-medium hover:text-[var(--theme-accent)] transition-colors"
              >
                {{ showFullStack() ? 'Hide full stack' : 'View full stack' }}
              </button>
            </div>

            @if (showFullStack()) {
              <div class="mt-4 space-y-4 bg-[var(--theme-surface)] rounded-xl p-5 border border-[var(--theme-border)]/20 animate-slide-down">
                @for (category of stack; track category.label) {
                  <div>
                    <span class="text-[var(--theme-text)] font-medium text-xs">{{ category.label }}</span>
                    <div class="flex flex-wrap gap-1.5 mt-1.5">
                      @for (item of category.items; track item) {
                        <span class="px-2 py-1 bg-[var(--theme-surface)]/60 text-[var(--theme-text-secondary)] rounded text-xs border border-[var(--theme-border)]/20">
                          {{ item }}
                        </span>
                      }
                    </div>
                  </div>
                }
                <div class="pt-2">
                  <span class="inline-flex items-center gap-2 bg-[var(--theme-primary)] text-[var(--theme-background)] px-4 py-1.5 rounded-lg text-xs font-medium">
                    Azure AZ-204 Certified
                  </span>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes slideDown {
      from { opacity: 0; max-height: 0; }
      to { opacity: 1; max-height: 500px; }
    }
    .animate-slide-down {
      animation: slideDown 0.3s ease-out;
    }
  `]
})
export class AboutComponent {
  aboutText = input<string>('');
  additionalInfo = input<string>('');
  showFullStack = signal(false);

  workHistory = [
    { company: 'Evident Scientific', role: 'Senior Full Stack Developer' },
    { company: 'Cofomo', role: 'Full Stack Engineer' },
    { company: 'PODYAM', role: 'Development Team Lead' },
    { company: 'SnB Company', role: 'API Developer' }
  ];

  stack: StackCategory[] = [
    {
      label: 'Backend',
      items: ['.NET Core', 'C#', 'ASP.NET', 'Entity Framework', 'PostgreSQL', 'SQL Server', 'Redis', 'SignalR', 'gRPC']
    },
    {
      label: 'Frontend',
      items: ['Angular', 'TypeScript', 'Tailwind CSS', 'RxJS', 'Nx']
    },
    {
      label: 'Cloud & DevOps',
      items: ['Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'GitLab CI/CD']
    }
  ];
}
