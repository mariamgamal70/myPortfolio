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
    name: new FormControl<string | null>(null),
    skills: new FormArray<FormControl<string | null>>([
      new FormControl<string | null>(null)
    ]),
    link: new FormControl<string | null>(null),
    image: new FormControl<File | null>(null),
    status: new FormControl<string>('Not Started'),
  });

  constructor(private projectsService: ProjectsService) { }

  get skillsArray(): FormArray<FormControl<string | null>> {
    return this.projectForm.get('skills') as FormArray<FormControl<string | null>>;
  }

  addSkill(skill: string) {
    if (!skill) return;
    this.skillsArray.push(new FormControl<string | null>(skill));
  }

  removeSkill(index: number) {
    this.skillsArray.removeAt(index);
  }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.projectForm.patchValue({ image: input.files[0] });
    }
  }

  onSubmit() {
    const formValue = this.projectForm.value;

    const formData = new FormData();
    formData.append('name', formValue.name ?? '');
    formData.append('link', formValue.link ?? '');
    formData.append('status', formValue.status ?? 'Not Started');

    formValue.skills?.forEach((skill, index) => {
      if (skill) formData.append(`skills[${index}]`, skill);
    });

    if (formValue.image) {
      formData.append('image', formValue.image);
    }

    this.projectsService.createProject(formData).subscribe({
      next: (res) => console.log("Project created successfully", res),
      error: (err) => console.error(err)
    });
  }
}
