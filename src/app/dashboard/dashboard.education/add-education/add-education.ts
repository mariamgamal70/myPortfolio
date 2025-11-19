import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl,FormArray } from '@angular/forms';
import { EducationService } from '../../../services/education.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-education',
  imports: [ReactiveFormsModule, CommonModule ],
  templateUrl: './add-education.html',
  styleUrl: './add-education.css',
})
export class AddEducation {
  educationForm = new FormGroup({
    institution: new FormControl(''),
    degree: new FormControl(''),
    fieldOfStudy: new FormControl(''),
    startDate: new FormControl(''),
    endDate: new FormControl(''),
    grade: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('Completed'),
    courses: new FormArray([ new FormControl('') ])
  });
  constructor(private educationService: EducationService, private router: Router) { }

  addCourse() {
    (this.educationForm.get('courses') as FormArray).push(new FormControl(''));
  }
  removeCourse(index: number) {
    (this.educationForm.get('courses') as FormArray).removeAt(index);
  }

  get coursesArray(): FormArray {
    return this.educationForm.get('courses') as FormArray;
  }
  onSubmit() {
    const educationData = this.educationForm.value;
    this.educationService.createEducation(educationData).subscribe({
      next: (response) => {
        console.log('Education added successfully', response);
        this.router.navigate(['/dashboard/education']);
        },
      error: (error) => {
        console.error('Error adding education', error);
      }
    });
  }
}
