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
// import { EditProject } from './dashboard.projects/edit-project/edit-project';
import { AddSkill } from './dashboard.skills/add-skill/add-skill';
import { AddExperience } from './dashboard.experience/add-experience/add-experience';
import { AddEducation } from './dashboard.education/add-education/add-education';
import { AddActivity } from './dashboard.activities/add-activity/add-activity';
import { AddContact } from './dashboard.contact/add-contact/add-contact';
import { DashboardAwards } from './dashboard.awards/dashboard.awards';
import { AddAward } from './dashboard.awards/add-award/add-award';

export const dashboardRoutes: Routes = [
  { path: '', component: DashboardOverview, pathMatch: 'full' },
  { path: 'overview', component: DashboardOverview },
  { path: 'education', component: DashboardEducation },
  { path: 'education/add', component: AddEducation },
  // { path: 'education/edit:id', component: EditEducation },
  { path: 'experience', component: DashboardExperience },
  { path: 'experience/add', component: AddExperience },
  // { path: 'experience/edit:id', component: EditExperience  },
  { path: 'skills', component: DashboardSkills },
  { path: 'skills/add', component: AddSkill },
  // { path: 'skills/edit:id', component: EditSkill },
  { path: 'projects', component: DashboardProjects},
  { path: 'projects/add', component: AddProject},
  // { path: 'projects/edit:id', component: EditProject },
  { path: 'activities', component: DashboardActivities },
  { path: 'activities/add', component: AddActivity },

  { path: 'contacts', component: DashboardContact },
  { path: 'contacts/add', component: AddContact },

  { path: 'awards', component: DashboardAwards },
  { path: 'awards/add', component: AddAward },

  { path: '**', component: NotfoundComponent }
];

