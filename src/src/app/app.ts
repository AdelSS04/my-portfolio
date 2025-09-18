import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';

@Component({
  selector: 'app-root',
  imports: [CommonModule,
    NavbarComponent,
    ProjectsComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent],
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
    title: 'Senior Full Stack Developer',
    subtitle: 'AZ-204 Certified | .NET & Angular Expert',
    profileImage: 'assets/profile.jpg', // Add your profile image path
    aboutText: `I'm a passionate Senior Full Stack Developer with expertise in .NET and Angular.
                Azure AZ-204 certified with extensive experience in building scalable cloud applications.`,
    additionalInfo: `Specializing in enterprise-level applications with a focus on clean architecture,
                     microservices, and cloud-native solutions using Azure services.`
  };

}
