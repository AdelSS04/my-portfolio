import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar';
import { EducationComponent } from '../components/education/education.component';
import { FooterComponent } from '../components/footer/footer';

@Component({
  selector: 'app-education-page',
  standalone: true,
  imports: [NavbarComponent, EducationComponent, FooterComponent],
  template: `
    <div class="min-h-screen transition-all duration-500 bg-[var(--theme-background)]">
      <div class="fixed inset-0 opacity-90 transition-all duration-500"
           style="background: var(--theme-gradient)">
      </div>
      <div class="relative z-10">
        <app-navbar></app-navbar>
        <div class="pt-20">
          <app-education></app-education>
        </div>
        <app-footer [name]="'Adel Lajil'"></app-footer>
      </div>
    </div>
  `
})
export class EducationPageComponent {}
