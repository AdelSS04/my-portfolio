import { Component } from '@angular/core';

import { AboutComponent } from '../components/about/about';
import { ContactComponent } from '../components/contact/contact';
import { FooterComponent } from '../components/footer/footer';
import { HeroComponent } from '../components/hero/hero';
import { NavbarComponent } from '../components/navbar/navbar';
import { ProjectsComponent } from '../components/projects/projects';
import { ServicesComponent } from '../components/services/services.component';
import { ProofBarComponent } from '../components/proof-bar/proof-bar.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { BlogInsightsComponent } from '../components/blog-insights/blog-insights.component';
import { HowIWorkComponent } from '../components/how-i-work/how-i-work.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProofBarComponent,
    ServicesComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    BlogInsightsComponent,
    HowIWorkComponent
  ],
  template: `
    <div class="min-h-screen transition-all duration-500 bg-[var(--theme-background)]">

      <div class="fixed inset-0 opacity-90 transition-all duration-500"
           style="background: var(--theme-gradient)">
      </div>

      <div class="relative z-10 animate-fade-in">
        <app-navbar></app-navbar>
        <app-hero
          [name]="userData.name"
          [headline]="userData.headline"
          [subheadline]="userData.subheadline"
          [profileImage]="userData.profileImage"
        ></app-hero>
        <app-proof-bar></app-proof-bar>
        <app-projects></app-projects>
        <app-services></app-services>
        <app-about
          [aboutText]="userData.aboutText"
          [additionalInfo]="userData.additionalInfo"
        ></app-about>
        <app-how-i-work></app-how-i-work>
        <app-blog-insights></app-blog-insights>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
        <app-footer [name]="userData.name"></app-footer>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }

    .animate-fade-in {
      animation: fadeInUp 0.8s ease-out 0.2s both;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class HomePageComponent {
  userData = {
    name: 'Adel Lajil',
    headline: 'Backend-Heavy Product Engineer & SaaS Builder',
    subheadline: 'I help founders and technical teams architect, build, and ship production-grade systems — SaaS platforms, internal tools, API integrations, and AI-enabled workflows. From system design to deployment.',
    profileImage: 'me.png',
    aboutText: `I'm a full-stack engineer with a backend and systems focus, based in Quebec, Canada. I specialize in building production-grade software that scales — multi-tenant SaaS platforms, internal tools, API-heavy integrations, and cloud-native architectures.

I've shipped a live restaurant ordering SaaS, a marketplace with 100K+ downloads processing 50K+ monthly transactions, enterprise systems for Evident Scientific and Cofomo, and open-source tools used by .NET developers. I also maintain a technical blog where I write about architecture, Azure infrastructure, Cosmos DB, microservices, and production deployment patterns.`,
    additionalInfo: `Beyond pure engineering, I work with AI-assisted workflows, automation tooling, and self-hosted developer infrastructure. I'm not chasing AI hype — I use it where it genuinely improves productivity and systems.

I work with founders and teams who need a technical partner to own the full delivery lifecycle — from architecture decisions to CI/CD to production monitoring.`,
  };
}
