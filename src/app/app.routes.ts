import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './landing/landing.component';
import { CreateBenefitComponent } from './create-benefit/create-benefit.component';
import { ListBenefitsComponent } from './list-benefits/list-benefit.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'benefits/create', component: CreateBenefitComponent },
  { path: 'benefits', component: ListBenefitsComponent },
];
