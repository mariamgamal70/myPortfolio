import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormArray } from '@angular/forms';
import { ExperienceService } from '../../../services/experience.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-experience',
  imports: [ReactiveFormsModule, CommonModule],
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

  get responsibilitiesArray(): FormArray {
    return this.experienceForm.get('responsibilities') as FormArray;
  }

  constructor(private experienceService: ExperienceService, private router:Router) {}
  onSubmit() {
    const experienceData = this.experienceForm.value;
    this.experienceService.createExperience(experienceData).subscribe({
      next: (response) => {
        console.log('Experience added successfully', response);
      },
      error: (error) => {
        console.error('Error adding experience', error);
        this.router.navigate(['/dashboard/experience']);
      },
      complete: () => {
        console.log('Add experience request completed');
      }
    });
  }
}
