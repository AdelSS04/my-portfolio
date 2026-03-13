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
            Tell me what you need built
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services: Service[] = [
    {
      title: 'Build Your SaaS Product',
      description: 'Full product builds from architecture to deployment. Multi-tenant isolation, billing, user management, real-time features.',
      forWho: 'For founders launching a SaaS product.'
    },
    {
      title: 'Custom Dashboards & Backoffices',
      description: 'Internal tools your team actually uses daily. Role-based access, data management, reporting interfaces.',
      forWho: 'For companies outgrowing spreadsheets or no-code tools.'
    },
    {
      title: 'Connect Your Systems',
      description: 'REST and real-time APIs. Third-party integrations. Backend systems that handle load and stay reliable.',
      forWho: 'For teams that need their systems talking to each other.'
    },
    {
      title: 'Automate Your Deployment',
      description: 'Azure, Docker, Kubernetes, CI/CD pipelines. Go from manual deploys to automated, repeatable infrastructure.',
      forWho: 'For teams shipping manually or migrating to the cloud.'
    },
    {
      title: 'Fix & Scale Your Codebase',
      description: 'Audit, refactor, and restructure. Clean Architecture, DDD, microservices extraction. Make your system maintainable again.',
      forWho: 'For codebases that have grown faster than their architecture.'
    }
  ];
}
