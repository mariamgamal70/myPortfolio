import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ProjectsService } from '../../../services/projects.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-edit-project',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './edit-project.html',
  styleUrl: './edit-project.css',
})
export class EditProject {

  projectEditForm = new FormGroup({
    name: new FormControl<string | null>(null),
    skills: new FormArray<FormControl<string | null>>([
      new FormControl<string | null>(null)
    ]),
    link: new FormControl<string | null>(null),
    image: new FormControl<File | null>(null),
    status: new FormControl<string>('Not Started'),
  });
  constructor(private projectsService: ProjectsService) { }
  projectData: any = {};

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data: any[]) => {
      // data is an array of project objects; use the first project for editing (adjust as needed)
      this.projectData = data && data.length > 0 ? data[0] : {};
    });
  }


  get skillsArray(): FormArray<FormControl<string | null>> {
    return this.projectEditForm.get('skills') as FormArray<FormControl<string | null>>;
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
      this.projectEditForm.patchValue({ image: input.files[0] });
    }
  }

  onSubmit() {
    const formValue = this.projectEditForm.value;

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

    this.projectsService.updateProject(this.projectData._id, formData).subscribe({
      next: () => console.log('Project updated successfully'),
      error: (err) => {
        console.error('Error updating project', err);
      },
    })
  }
}
