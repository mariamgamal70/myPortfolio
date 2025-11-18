import { AddExperience } from './add-experience/add-experience';

import { NotfoundComponent } from '../../components/notfound/notfound';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: 'add-experience', component: AddExperience },
  { path: '**', component: NotfoundComponent }
];

