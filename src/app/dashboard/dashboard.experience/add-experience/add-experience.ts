import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ExperienceService } from '../../../services/experience.service';
@Component({
  selector: 'app-add-experience',
  imports: [ReactiveFormsModule],
  templateUrl: './add-experience.html',
  styleUrl: './add-experience.css',
})
export class AddExperience {

  experienceForm = new FormGroup({
    company: new FormControl(''),
    position: new FormControl(''),
    location: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    responsibilities: new FormArray([ new FormControl('') ]),
    status: new FormControl('Present'),
  })


  addResponsibility(value = '') {
    (this.experienceForm.get('responsibilities') as FormArray).push(new FormControl<string>(value));
  }

  removeResponsibility(index: number) {
    (this.experienceForm.get('responsibilities') as FormArray).removeAt(index);
  }
  constructor(private experienceService: ExperienceService) {}
  onSubmit() {
    const experienceData = this.experienceForm.value;
    this.experienceService.createExperience(experienceData).subscribe({
      next: (response) => {
        console.log('Experience added successfully', response);
      },
      error: (error) => {
        console.error('Error adding experience', error);
      },
      complete: () => {
        console.log('Add experience request completed');
      }
    });
  }
}
