import { Component, inject } from '@angular/core';

import { ExperienceComponent } from './components/experience/experience.component';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { NavbarComponent } from './components/navbar/navbar';
import { ProjectsComponent } from './components/projects/projects';
import { SkillsComponent } from './components/skills/skills';
import { EducationComponent } from './components/education/education.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent
  ],
  template: `
    <div class="min-h-screen bg-[var(--theme-background)] transition-all duration-300 theme-transition">
      <div
        class="fixed inset-0 bg-theme-gradient opacity-90 transition-all duration-300"
      ></div>
      <div class="relative z-10">
        <app-navbar></app-navbar>
        <app-hero
          [name]="userData.name"
          [title]="userData.title"
          [subtitle]="userData.subtitle"
          [profileImage]="userData.profileImage"
        ></app-hero>
        <app-about
          [aboutText]="userData.aboutText"
          [additionalInfo]="userData.additionalInfo"
        ></app-about>
        <app-experience></app-experience>
        <app-education></app-education>
        <app-skills></app-skills>
        <app-projects></app-projects>
        <app-testimonials></app-testimonials>
        <app-contact></app-contact>
        <app-footer [name]="userData.name"></app-footer>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        min-height: 100vh;
      }
    `,
  ],
})
export class App {
  themeService = inject(ThemeService);

  userData = {
    name: 'Adel Lajil',
    title: 'Cloud Full Stack Senior Developer',
    subtitle: 'AZ-204 Certified | .NET & Angular Expert | Azure Cloud Architect',
    profileImage: 'me.png', // Add your profile image path
    aboutText: `I'm a passionate Cloud Full Stack Senior Developer with 5+ years of experience building scalable SaaS platforms and cloud-native solutions.
                Currently at Evident Industrial, I specialize in Angular, .NET Core, and Azure cloud services, with expertise in microservices architecture, IoT integration, and DevOps automation.`,
    additionalInfo: `From leading development teams to architecting enterprise-level applications, I focus on delivering high-performance, secure solutions.
                     My journey includes building platforms like Podium360, SnB marketplace (100K+ downloads), and implementing clean DDD architecture patterns.`,
  };
}
