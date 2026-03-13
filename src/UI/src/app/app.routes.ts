import { Routes } from '@angular/router';
import { Component } from '@angular/core';

// Empty placeholder — actual home content is rendered inline by App component
@Component({ template: '', standalone: true })
class HomeRouteStub {}

export const routes: Routes = [
  {
    path: '',
    component: HomeRouteStub,
    pathMatch: 'full'
  },
  {
    path: 'education',
    loadComponent: () => import('./pages/education-page.component').then(m => m.EducationPageComponent)
  }
];
