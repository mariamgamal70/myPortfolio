import { Component } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { CommonModule } from '@angular/common';
import { AwardsService } from '../../services/awards.service';
import { ExperienceService } from '../../services/experience.service';
import { EducationService } from '../../services/education.service';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-dashboard.overview',
  imports: [  CommonModule],
  templateUrl: './dashboard.overview.html',
  styleUrl: './dashboard.overview.css',
})
export class DashboardOverview {

  awardsCount: number = 0;
  experienceCount: number = 0;
  educationCount: number = 0;
  skillsCount: number = 0;
  projectsCount: number = 0;

  constructor(
    private awardsService: AwardsService,
    private experienceService: ExperienceService,
    private educationService: EducationService,
    private skillsService: SkillsService,
    private projectsService: ProjectsService
  ) { }
  ngOnInit(): void {
    this.awardsService.getAwards().subscribe((data: any[]) => {
      this.awardsCount = data.length;
    });
    this.experienceService.getExperience().subscribe((data: any[]) => {
      this.experienceCount = data.length;
    });
    this.educationService.getEducation().subscribe((data: any[]) => {
      this.educationCount = data.length;
    });
    this.skillsService.getSkills().subscribe((data: any[]) => {
      this.skillsCount = data.length;
    });
    this.projectsService.getProjects().subscribe((data: any[]) => {
      this.projectsCount = data.length;
    });
  }
}
