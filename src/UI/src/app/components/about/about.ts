import { Component, input } from '@angular/core';

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
            <div class="bg-[var(--theme-surface)]/60 backdrop-blur-sm rounded-2xl p-6 border border-[var(--theme-border)]/20">
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
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  aboutText = input<string>('');
  additionalInfo = input<string>('');

  workHistory = [
    { company: 'Evident Scientific', role: 'Senior Full Stack Developer' },
    { company: 'Cofomo', role: 'Full Stack Engineer' },
    { company: 'PODYAM', role: 'Development Team Lead' },
    { company: 'SnB Company', role: 'API Developer' }
  ];
}
