import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home-page.component').then(m => m.HomePageComponent),
    pathMatch: 'full'
  },
  {
    path: 'education',
    loadComponent: () => import('./pages/education-page.component').then(m => m.EducationPageComponent)
  }
];
