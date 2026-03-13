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
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-lg mx-auto">
          I help startups and businesses ship reliable, scalable software.
        </p>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          @for (service of services; track service.title) {
            <div class="bg-[var(--theme-surface)] rounded-xl p-6 border border-[var(--theme-border)]/30 hover:border-[var(--theme-primary)]/30 transition-colors">
              <h3 class="text-base font-semibold text-[var(--theme-text)] mb-2">{{ service.title }}</h3>
              <p class="text-[var(--theme-text-secondary)] text-sm leading-relaxed mb-3">{{ service.description }}</p>
              <p class="text-[var(--theme-primary)] text-xs">{{ service.forWho }}</p>
            </div>
          }
        </div>

        <div class="text-center mt-10">
          <a
            href="#contact"
            class="inline-block px-7 py-3 border border-[var(--theme-border)] text-[var(--theme-text)] rounded-lg hover:border-[var(--theme-text-secondary)] hover:bg-[var(--theme-surface)] transition-colors text-sm"
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
      title: 'SaaS Product Development',
      description: 'End-to-end SaaS builds. Multi-tenant architecture, authentication, billing integration (Stripe/Paddle), admin panels, real-time features, usage tracking. I ship complete products, not half-built MVPs.',
      forWho: 'For founders launching a SaaS or technical product.'
    },
    {
      title: 'Internal Tools & Dashboards',
      description: 'Custom backoffices your team will actually use. Data management interfaces, reporting dashboards, role-based access, bulk operations, API integrations. Replace fragile spreadsheet workflows with real software.',
      forWho: 'For companies outgrowing manual processes and no-code limitations.'
    },
    {
      title: 'API Development & System Integration',
      description: 'Backend APIs that scale. REST, GraphQL, real-time WebSockets. Third-party integrations, webhook systems, data sync pipelines. I build APIs that handle load and stay reliable under pressure.',
      forWho: 'For teams connecting systems or building platform integrations.'
    },
    {
      title: 'Cloud Infrastructure & CI/CD',
      description: 'Production-ready Azure infrastructure. Docker containers, Kubernetes orchestration, CI/CD pipelines, monitoring, automated deployments. Go from manual deploys to repeatable, reliable infrastructure.',
      forWho: 'For teams shipping manually or migrating legacy systems to the cloud.'
    },
    {
      title: 'Architecture & Modernization',
      description: 'Rescue legacy codebases. Architecture audits, refactoring, Clean Architecture migration, microservices extraction, performance optimization. Make your system maintainable and scalable again.',
      forWho: 'For codebases that have grown faster than their architecture can support.'
    },
    {
      title: 'AI-Enabled Workflows & Automation',
      description: 'Practical AI integration for real business use cases. LLM-powered features, document processing, intelligent automation, agent-based workflows. No hype — only AI that solves actual problems.',
      forWho: 'For teams wanting to add AI capabilities without the buzzword noise.'
    }
  ];
}
