import { Component, inject } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { ServicesComponent } from './components/services/services.component';
import { ProofBarComponent } from './components/proof-bar/proof-bar.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    ProofBarComponent,
    ServicesComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent
  ],
  template: `
    @if (isHomePage()) {
      <div class="min-h-screen transition-all duration-500"
           [style.background]="themeService.getCurrentColors().background">

        <div class="fixed inset-0 opacity-90 transition-all duration-500"
             [style.background]="themeService.getCurrentColors().gradient">
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
          <app-services></app-services>
          <app-projects></app-projects>
          <app-about
            [aboutText]="userData.aboutText"
            [additionalInfo]="userData.additionalInfo"
          ></app-about>
          <app-skills></app-skills>
          <app-testimonials></app-testimonials>
          <app-contact></app-contact>
          <app-footer [name]="userData.name"></app-footer>
        </div>
      </div>
    } @else {
      <router-outlet></router-outlet>
    }
  `,
  styles: [
    `
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
    `,
  ],
})
export class App {
  themeService = inject(ThemeService);
  private router = inject(Router);

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }

  userData = {
    name: 'Adel Lajil',
    headline: 'I build SaaS platforms, internal tools, and cloud-native systems.',
    subheadline: 'Full-stack engineer with 5+ years shipping production software for enterprises, startups, and open-source. .NET, Angular, Azure.',
    profileImage: 'me.png',
    aboutText: `I'm a full-stack engineer based in Quebec, Canada. I build backend-heavy systems — SaaS platforms, internal tools, admin panels, API integrations — and I care about architecture, reliability, and shipping things that actually work in production.

I've built a multi-tenant restaurant ordering platform, a marketplace app with 100K+ downloads, enterprise software for companies like Evident Scientific and Cofomo, and open-source tools used by .NET developers.`,
    additionalInfo: `I'm not looking for a job. I work with founders and teams who need a technical partner to own delivery — from system design to deployment.`,
  };
}
