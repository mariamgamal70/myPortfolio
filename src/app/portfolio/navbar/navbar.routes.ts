
import { HomeComponent } from '../../portfolio/home/home';
import { AboutComponent } from '../../portfolio/about/about';
import { EducationComponent } from '../../portfolio/education/education';
import { ExperienceComponent } from '../../portfolio/experience/experience';
import { SkillsComponent } from '../../portfolio/skills/skills';
import { ProjectsComponent } from '../../portfolio/projects/projects';
import { ActivitiesComponent } from '../../portfolio/activities/activities';
import { ContactComponent } from '../../portfolio/contact/contact';
import { NotfoundComponent } from '../../components/notfound/notfound';
import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'activities', component: ActivitiesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
