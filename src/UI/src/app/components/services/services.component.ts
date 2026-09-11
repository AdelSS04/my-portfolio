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
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-3">Where I Can Help</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-14 max-w-lg mx-auto">
          Backend development, cloud delivery, and application work grounded in the systems I build and maintain.
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
      title: 'SaaS Applications',
      description: 'Build tenant-aware APIs and Angular interfaces for scheduling, ordering, and billing. My own products include restaurant software and cleaning operations tools.',
      forWho: 'For teams building or extending a SaaS product.'
    },
    {
      title: 'Internal Tools & Reporting',
      description: 'Build admin interfaces, reports, and approval workflows with role-based access. Connect operational data so people can review it and act on it.',
      forWho: 'For teams managing work across several systems.'
    },
    {
      title: 'APIs & Integration',
      description: 'Develop .NET REST APIs, gRPC services, and SignalR features. Connect applications through messaging, background jobs, and data integration.',
      forWho: 'For teams connecting services and external platforms.'
    },
    {
      title: 'Azure Infrastructure & Delivery',
      description: 'Define Azure resources with Terraform, maintain Kubernetes and Helm deployments, and update CI/CD pipelines. Diagnose deployment and routing issues in production.',
      forWho: 'For teams maintaining applications on Azure.'
    },
    {
      title: 'Architecture & Code Quality',
      description: 'Review technical options, document decisions, and refactor complex code. Bring experience with multi-tenant systems, code reviews, and incremental releases.',
      forWho: 'For teams planning a change to an existing system.'
    },
    {
      title: 'Industrial Device Integration',
      description: 'Connect devices to Azure IoT Hub and build onboarding flows with DPS, X.509 certificates, and Azure Functions. Extend provisioning for new device types.',
      forWho: 'For teams building services around connected devices.'
    }
  ];
}
