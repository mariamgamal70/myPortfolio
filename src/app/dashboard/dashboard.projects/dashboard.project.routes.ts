import { AddProject } from './add-project/add-project';

import { NotfoundComponent } from '../../components/notfound/notfound';
import { RouterModule, Routes } from '@angular/router';

export const dashboardRoutes: Routes = [
  { path: 'add-product', component: AddProject },
  { path: '**', component: NotfoundComponent }
];

