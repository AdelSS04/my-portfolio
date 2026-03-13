import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
  forWho: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <section id="services" class="py-24 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">What I Build</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-2xl mx-auto">
          I help startups and businesses ship reliable, scalable software.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (service of services; track service.title) {
            <div class="bg-[var(--theme-surface)]/60 backdrop-blur-sm rounded-2xl p-7 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/30 transition-all duration-300">
              <h3 class="text-lg font-semibold text-[var(--theme-text)] mb-3">{{ service.title }}</h3>
              <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed mb-4">{{ service.description }}</p>
              <p class="text-[var(--theme-primary)] text-xs font-medium">{{ service.forWho }}</p>
            </div>
          }
        </div>

        <div class="text-center mt-12">
          <a
            href="#contact"
            class="inline-block px-8 py-3 bg-[var(--theme-surface)]/60 text-[var(--theme-text)] rounded-full border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/50 hover:bg-[var(--theme-surface)]/80 transition-all duration-300 text-sm"
          >
            Have a project like this? Let's talk.
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'SaaS & Multi-Tenant Platforms',
      description: 'Full product builds from architecture to deployment. Multi-tenant data isolation, billing integration, user management, real-time features.',
      forWho: 'For: Founders building a SaaS product.'
    },
    {
      title: 'Admin Panels & Backoffices',
      description: 'Custom dashboards, role-based access, data management interfaces. Designed for actual daily use, not just demos.',
      forWho: 'For: Companies outgrowing spreadsheets or no-code tools.'
    },
    {
      title: 'API Development & System Integration',
      description: 'REST and real-time APIs. Third-party connectors. Backend systems that handle load and stay reliable.',
      forWho: 'For: Teams that need backend reliability.'
    },
    {
      title: 'Cloud Infrastructure & DevOps',
      description: 'Azure, Docker, Kubernetes, CI/CD pipelines. From manual deployment to automated, repeatable infrastructure.',
      forWho: 'For: Teams shipping manually or migrating to the cloud.'
    },
    {
      title: 'Architecture & Codebase Modernization',
      description: 'Audit, refactor, and restructure. Clean Architecture, DDD, CQRS, microservices extraction. Make your system maintainable again.',
      forWho: 'For: Codebases that have grown faster than their architecture.'
    }
  ];
}
