import { Component } from '@angular/core';
import { LucideAngularModule, Globe, Wrench, Layers, Cloud } from 'lucide-angular';

interface Service {
  icon: any;
  title: string;
  description: string;
  points: string[];
}

interface Step {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <section id="services" class="py-20 px-6">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl md:text-4xl font-bold text-[var(--theme-text)] text-center mb-4">Services</h2>
        <p class="text-[var(--theme-text-secondary)] text-center mb-12 max-w-2xl mx-auto">
          Des solutions web et cloud concrètes pour les petites entreprises — en français, sans jargon.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-16">
          @for (service of services; track service.title) {
            <div class="bg-[var(--theme-surface)]/80 backdrop-blur-sm rounded-2xl p-8 border border-[var(--theme-border)]/20 hover:border-[var(--theme-primary)]/30 transition-all duration-300">
              <div class="w-14 h-14 mb-5 bg-gradient-to-br from-[var(--theme-primary)] to-[var(--theme-accent)] rounded-xl flex items-center justify-center">
                <lucide-icon [img]="service.icon" class="w-7 h-7 text-white"></lucide-icon>
              </div>
              <h3 class="text-xl font-semibold text-[var(--theme-text)] mb-3">{{ service.title }}</h3>
              <p class="text-[var(--theme-text-secondary)] leading-relaxed mb-4">{{ service.description }}</p>
              <ul class="space-y-2">
                @for (point of service.points; track point) {
                  <li class="flex items-start gap-2 text-sm text-[var(--theme-text-secondary)]">
                    <span class="text-[var(--theme-primary)] mt-0.5">✓</span>
                    <span>{{ point }}</span>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <div class="bg-[var(--theme-surface)]/50 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-[var(--theme-border)]/20 mb-12">
          <h3 class="text-2xl font-bold text-[var(--theme-text)] text-center mb-8">Comment ça se passe</h3>
          <div class="grid md:grid-cols-4 gap-6">
            @for (step of steps; track step.title) {
              <div class="text-center">
                <div class="w-10 h-10 mx-auto mb-3 rounded-full bg-[var(--theme-primary)]/15 border border-[var(--theme-primary)]/30 flex items-center justify-center">
                  <span class="text-[var(--theme-primary)] font-bold">{{ $index + 1 }}</span>
                </div>
                <h4 class="text-[var(--theme-text)] font-semibold mb-1">{{ step.title }}</h4>
                <p class="text-[var(--theme-text-secondary)] text-sm">{{ step.description }}</p>
              </div>
            }
          </div>
        </div>

        <div class="text-center">
          <a
            href="#contact"
            class="inline-block px-8 py-3.5 bg-[var(--theme-primary)] text-white font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            Discuter de mon projet
          </a>
          <p class="text-[var(--theme-text-secondary)] text-sm mt-4">Sur devis — chaque projet est différent, parlons-en.</p>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: Globe,
      title: 'Sites web professionnels',
      description: 'Création ou refonte de ton site vitrine : rapide, moderne et bien référencé, pensé pour transformer les visiteurs en clients.',
      points: [
        'Design moderne adapté aux mobiles',
        'Optimisé pour Google (SEO)',
        'Formulaires de contact et appels à l’action'
      ]
    },
    {
      icon: Wrench,
      title: 'Outils internes sur mesure',
      description: 'Tableaux de bord, automatisations et gestion : des outils pensés pour ton équipe, qui font gagner du temps chaque jour.',
      points: [
        'Tableaux de bord et rapports',
        'Automatisation des tâches répétitives',
        'Accès sécurisés par rôle'
      ]
    },
    {
      icon: Layers,
      title: 'Applications web',
      description: 'Applications robustes en .NET et Angular : espaces clients, réservation en ligne, commandes ou gestion d’inventaire.',
      points: [
        'API et bases de données',
        'Espaces clients sécurisés',
        'Paiements en ligne (Stripe)'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & infrastructure',
      description: 'Hébergement, sécurité et sauvegardes sur Azure : une infrastructure fiable qui tourne sans que tu t’en occupes.',
      points: [
        'Hébergement et noms de domaine',
        'Sauvegardes automatiques',
        'Déploiements sans interruption'
      ]
    }
  ];

  steps: Step[] = [
    {
      title: 'Appel découverte',
      description: 'On discute de ton besoin, sans engagement.'
    },
    {
      title: 'Proposition claire',
      description: 'Périmètre, délais et budget, noir sur blanc.'
    },
    {
      title: 'Réalisation',
      description: 'Je construis, avec des points réguliers.'
    },
    {
      title: 'Suivi',
      description: 'Mise en ligne, formation et support.'
    }
  ];
}
