import { DashboardOverview } from './dashboard.overview/dashboard.overview';
import { DashboardAbout } from './dashboard.about/dashboard.about';
import { DashboardActivities } from './dashboard.activities/dashboard.activities';
import { DashboardContact } from './dashboard.contact/dashboard.contact';
import { DashboardEducation } from './dashboard.education/dashboard.education';
import { DashboardExperience } from './dashboard.experience/dashboard.experience';
import { DashboardProjects } from './dashboard.projects/dashboard.projects';
import { DashboardSkills } from './dashboard.skills/dashboard.skills';
import { NotfoundComponent } from '../components/notfound/notfound';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: '', component: DashboardOverview, pathMatch: 'full' },
  { path: 'home', component: DashboardOverview },
  { path: 'about', component: DashboardAbout },
  { path: 'education', component: DashboardEducation },
  { path: 'experience', component: DashboardExperience },
  { path: 'skills', component: DashboardSkills },
  { path: 'projects', component: DashboardProjects },
  { path: 'activities', component: DashboardActivities },
  { path: 'contact', component: DashboardContact },
  { path: '**', component: NotfoundComponent }
];

