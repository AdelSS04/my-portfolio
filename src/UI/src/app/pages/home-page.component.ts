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
    <div class="min-h-screen bg-[var(--theme-background)]">

      <div class="relative z-10">
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
  `]
})
export class HomePageComponent {
  userData = {
    name: 'Adel Lajil',
    headline: 'Senior Software Engineer | .NET & Azure',
    subheadline: 'I build SaaS platforms and services that connect industrial devices to the cloud. My work spans .NET APIs, Angular applications, and Azure infrastructure, from technical design to production support.',
    profileImage: 'me.png',
    aboutText: `I'm a software engineer based in Québec, Canada, with a focus on .NET and Azure. At Evident Industrial, I contribute to EvidentConnect, a SaaS platform serving 100+ organizations and about 1,000 users. I own several device services and maintain provisioning for 5,000+ devices using Azure IoT Hub, DPS, and X.509 certificates. I also write architecture decision records, review code, and mentor an intern.`,
    additionalInfo: `Previously, I delivered features for Revenu Québec through Cofomo and led seven developers at Podyam. At Podyam, I reduced Azure infrastructure costs by more than 30% through resource sizing and Cosmos DB configuration changes. Outside work, I build Slotafy and CleanTrack, publish .NET libraries, and maintain a Proxmox homelab. I work professionally in French and English, and Arabic is my native language.`,
  };
}
