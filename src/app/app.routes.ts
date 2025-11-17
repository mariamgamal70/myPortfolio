import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { PortfolioComponent } from './portfolio/portfolio';
import { DashboardComponent } from './dashboard/dashboard';
import { NotfoundComponent } from './components/notfound/notfound';
import { dashboardRoutes } from './dashboard/dashboard.routes';
export const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: dashboardRoutes
},
  {
    path: '**',
    component: NotfoundComponent
  }
];
