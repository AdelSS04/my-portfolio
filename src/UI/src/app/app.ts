import { Component, inject, effect } from '@angular/core';
import { LucideAngularModule, Loader2 } from 'lucide-angular';

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
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LucideAngularModule,
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
    <!-- Loading Screen -->
    @if (themeService.isLoading() || !loaderService.isComplete()) {
      <div class="fixed inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center z-[9999]">
        <div class="text-center max-w-md mx-auto px-6">
          <!-- Animated Logo -->
          <div class="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-blue-500/25 animate-pulse">
            <img src="/logo_adel.png" alt="Logo" class="w-14 h-14 object-contain" />
          </div>
          
          <!-- Loading Spinner and Text -->
          <div class="flex items-center justify-center gap-3 mb-6">
            <lucide-icon [img]="Loader2" class="w-6 h-6 text-blue-400 animate-spin" />
            <span class="text-white text-xl font-semibold">Loading Portfolio</span>
          </div>
          
          <!-- Progress Bar -->
          <div class="w-full h-2 bg-slate-700 rounded-full overflow-hidden mx-auto mb-4">
            <div class="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
                 [style.width.%]="loaderService.progress()"></div>
          </div>
          
          <!-- Progress Text -->
          <div class="text-center space-y-2">
            <p class="text-slate-300 text-sm font-medium">{{ loaderService.progress() }}% Complete</p>
            @if (loaderService.currentStep()) {
              <p class="text-slate-400 text-sm animate-pulse">
                {{ loaderService.currentStep()?.name }}
              </p>
            }
          </div>
          
          <!-- Loading Steps -->
          <div class="mt-6 space-y-2">
            @for (step of loaderService.loadingSteps(); track step.id) {
              <div class="flex items-center gap-3 text-sm">
                <div class="w-2 h-2 rounded-full transition-all duration-300" 
                     [class]="step.completed ? 'bg-green-400' : 'bg-slate-600'">
                </div>
                <span [class]="step.completed ? 'text-green-400' : 'text-slate-400'">
                  {{ step.name }}
                </span>
                @if (step.completed) {
                  <span class="text-green-400">✓</span>
                }
              </div>
            }
          </div>
        </div>
      </div>
    }

    <!-- Main Portfolio Content -->
    @if (!themeService.isLoading() && loaderService.isComplete()) {
      <div class="min-h-screen transition-all duration-500"
           [style.background]="themeService.getCurrentColors().background">
        
        <!-- Background Gradient -->
        <div class="fixed inset-0 opacity-90 transition-all duration-500"
             [style.background]="themeService.getCurrentColors().gradient">
        </div>
        
        <!-- Portfolio Components with fade-in animation -->
        <div class="relative z-10 animate-fade-in">
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
      
      .theme-transition {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
    `,
  ],
})
export class App {
  themeService = inject(ThemeService);
  loaderService = inject(LoaderService);
  
  // Lucide icons
  readonly Loader2 = Loader2;

  constructor() {
    // Effect to initialize app when theme is ready
    effect(() => {
      if (!this.themeService.isLoading()) {
        this.initializeApp();
      }
    });
  }

  private async initializeApp(): Promise<void> {
    // Start the loader simulation once theme is ready
    await this.loaderService.simulateLoading();
  }

  userData = {
    name: 'Adel Lajil',
    title: 'Cloud Full Stack Senior Developer',
    subtitle: 'AZ-204 Certified | .NET & Angular Expert | Azure Cloud Architect',
    profileImage: 'me.png',
    aboutText: `I'm a passionate Cloud Full Stack Senior Developer with 5+ years of experience building scalable SaaS platforms and cloud-native solutions.
                Currently at Evident Industrial, I specialize in Angular, .NET Core, and Azure cloud services, with expertise in microservices architecture, IoT integration, and DevOps automation.`,
    additionalInfo: `From leading development teams to architecting enterprise-level applications, I focus on delivering high-performance, secure solutions.
                     My journey includes building platforms like Podium360, SnB marketplace (100K+ downloads), and implementing clean DDD architecture patterns.`,
  };
}