import { Component, signal } from '@angular/core';
import { NavbarComponent } from './navbar/navbar';
import { HomeComponent } from './home/home';
import { AboutComponent } from './about/about';
import { EducationComponent } from './education/education';
import { ExperienceComponent } from './experience/experience';
import { SkillsComponent } from './skills/skills';
import { ProjectsComponent } from './projects/projects';
import { ActivitiesComponent } from './activities/activities';
import { ContactComponent } from './contact/contact';
@Component({
  selector: 'app-portfolio',
  imports: [NavbarComponent, HomeComponent, AboutComponent, EducationComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, ActivitiesComponent, ContactComponent],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css'
})
export class PortfolioComponent {
  protected readonly title = signal('myPortfolio');
}
