import { DashboardOverview } from './dashboard.overview/dashboard.overview';
import { DashboardActivities } from './dashboard.activities/dashboard.activities';
import { DashboardContact } from './dashboard.contact/dashboard.contact';
import { DashboardEducation } from './dashboard.education/dashboard.education';
import { DashboardExperience } from './dashboard.experience/dashboard.experience';
import { DashboardProjects } from './dashboard.projects/dashboard.projects';
import { DashboardSkills } from './dashboard.skills/dashboard.skills';
import { NotfoundComponent } from '../components/notfound/notfound';
import { AddProject } from './dashboard.projects/add-project/add-project';
import { RouterModule, Routes } from '@angular/router';
import { EditProject } from './dashboard.projects/edit-project/edit-project';

export const dashboardRoutes: Routes = [
  { path: '', component: DashboardOverview, pathMatch: 'full' },
  { path: 'overview', component: DashboardOverview },
  { path: 'education', component: DashboardEducation },
  { path: 'experience', component: DashboardExperience },
  { path: 'skills', component: DashboardSkills },
  { path: 'projects', component: DashboardProjects},
  { path: 'projects/add', component: AddProject},
  { path: 'projects/edit:id', component: EditProject },
  { path: 'activities', component: DashboardActivities },
  { path: 'contact', component: DashboardContact },
  { path: '**', component: NotfoundComponent }
];

