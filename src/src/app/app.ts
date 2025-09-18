import { Component, signal } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';

import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, ProjectsComponent, HeroComponent, AboutComponent, SkillsComponent, ContactComponent, ExperienceComponent, FooterComponent],
  templateUrl: './app.html',
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
  `]
})
export class App {
  protected readonly title = signal('my-portfolio');
    userData = {
    name: 'Adel Lajil',
    title: 'Cloud Full Stack Senior Developer',
    subtitle: 'AZ-204 Certified | .NET & Angular Expert | Azure Cloud Architect',
    profileImage: 'me.png',
    aboutText: `I'm a passionate Cloud Full Stack Senior Developer with 5+ years of experience building scalable SaaS platforms and cloud-native solutions.
                Currently at Evident Industrial, I specialize in Angular, .NET Core, and Azure cloud services, with expertise in microservices architecture, IoT integration, and DevOps automation.`,
    additionalInfo: `From leading development teams to architecting enterprise-level applications, I focus on delivering high-performance, secure solutions.
                     My experience spans across FinTech, IoT, and enterprise platforms, always committed to clean architecture and solving real-world challenges through innovative technology.`
  };

}
