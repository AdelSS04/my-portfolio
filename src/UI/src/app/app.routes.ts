import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'education',
    loadComponent: () => import('./pages/education-page.component').then(m => m.EducationPageComponent)
  }
];
