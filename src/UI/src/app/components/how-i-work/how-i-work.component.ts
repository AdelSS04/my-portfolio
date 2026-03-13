import { Component } from '@angular/core';
import { LucideAngularModule, FileSearch, Code2, TestTube2, Rocket } from 'lucide-angular';

interface WorkStep {
  icon: any;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-i-work',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">How I Work</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-2xl mx-auto">
          Clear process. Reliable delivery. No surprises.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          @for (step of workSteps; track step.title; let i = $index) {
            <div class="relative">
              <div class="bg-[var(--theme-surface)] rounded-xl p-6 border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/30 transition-colors h-full">
                <div class="w-10 h-10 bg-[var(--theme-primary)]/10 rounded-lg flex items-center justify-center mb-4">
                  <lucide-icon [img]="step.icon" class="w-5 h-5 text-[var(--theme-primary)]" />
                </div>
                <div class="absolute top-4 right-4 text-[var(--theme-text)]/8 text-2xl font-bold">
                  {{i + 1}}
                </div>
                <h3 class="text-base font-semibold text-[var(--theme-text)] mb-2">{{step.title}}</h3>
                <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed">{{step.description}}</p>
              </div>
              @if (i < workSteps.length - 1) {
                <div class="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-[var(--theme-border)]"></div>
              }
            </div>
          }
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div class="text-center p-6">
            <div class="text-2xl font-bold text-[var(--theme-text)] mb-1">24h</div>
            <div class="text-[var(--theme-text-secondary)] text-sm">Response time</div>
          </div>
          <div class="text-center p-6">
            <div class="text-2xl font-bold text-[var(--theme-text)] mb-1">5+ years</div>
            <div class="text-[var(--theme-text-secondary)] text-sm">Production experience</div>
          </div>
          <div class="text-center p-6">
            <div class="text-2xl font-bold text-[var(--theme-text)] mb-1">100%</div>
            <div class="text-[var(--theme-text-secondary)] text-sm">Remote collaboration</div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HowIWorkComponent {
  readonly FileSearch = FileSearch;
  readonly Code2 = Code2;
  readonly TestTube2 = TestTube2;
  readonly Rocket = Rocket;

  workSteps: WorkStep[] = [
    {
      icon: FileSearch,
      title: 'Discovery',
      description: 'Understand your problem, business goals, technical constraints, and success metrics. Define scope and architecture approach.'
    },
    {
      icon: Code2,
      title: 'Build',
      description: 'Iterative development with regular check-ins. Clean, maintainable code. Architecture decisions documented and explained.'
    },
    {
      icon: TestTube2,
      title: 'Test & Review',
      description: 'Thorough testing, code review, performance validation. Fix issues before they reach production.'
    },
    {
      icon: Rocket,
      title: 'Ship & Support',
      description: 'Deployment to production with CI/CD, monitoring setup, documentation, and post-launch support.'
    }
  ];
}
