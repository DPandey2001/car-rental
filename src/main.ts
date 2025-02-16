import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { HomeComponent } from './app/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `
})
export class App {}

const routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'about',
    loadComponent: () => import('./app/pages/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'services',
    loadComponent: () => import('./app/pages/services/services.component').then(m => m.ServicesComponent)
  },
  { 
    path: 'contact',
    loadComponent: () => import('./app/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  { 
    path: 'query',
    loadComponent: () => import('./app/pages/query/query.component').then(m => m.QueryComponent)
  }
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
});