import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-project',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-project.html',
  styleUrl: './add-project.css',
})
export class AddProject {

  projectForm = new FormGroup({
    name: new FormControl(''),
    skills: new FormArray([new FormControl<string>('')]),
    link: new FormControl(''),
    image: new FormControl(''),
    status: new FormControl('Not Started'),
  });
  constructor(private projectsService: ProjectsService) { }

  addSkill(skill: string) {
    (this.projectForm.get('skills') as FormArray).push(new FormControl<string>(skill));
  }
  removeSkill(index: number) {
    (this.projectForm.get('skills') as FormArray).removeAt(index);
  }

  get skillsArray(): FormArray {
    return this.projectForm.get('skills') as FormArray;
  }

  onSubmit() {
    const projectData = this.projectForm.value;
    this.projectsService.createProject(projectData).subscribe({
      next: (value) => console.log('Next:', value),
      error: (error) => console.error('Error:', error),
      complete: () => console.log('Complete')
    });
  }
}
