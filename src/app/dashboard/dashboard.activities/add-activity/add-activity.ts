import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivitiesService } from '../../../services/activities.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-activity',
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './add-activity.html',
  styleUrl: './add-activity.css',
})
export class AddActivity {
  activityForm = new FormGroup({
    place: new FormControl(''),
    position: new FormControl(''),
    description: new FormArray([new FormControl('')]),
    date: new FormControl(''),
  });

  constructor(private activitiesService: ActivitiesService, private router: Router) { }
  addDescription() {
    (this.activityForm.get('description') as FormArray).push(new FormControl(''));
  }
  removeDescription(index: number) {
    (this.activityForm.get('description') as FormArray).removeAt(index);
  }

  get descriptionArray(): FormArray {
    return this.activityForm.get('description') as FormArray;
  }
  onSubmit() {
    const activityData = this.activityForm.value;
    this.activitiesService.createActivity(activityData).subscribe({
      next: (response) => {
        console.log('Activity created successfully:', response);
        this.router.navigate(['/dashboard/activities']);

      }
      ,      error: (error) => {
        console.error('Error creating activity:', error);
      }
    }
    );
  }
}
