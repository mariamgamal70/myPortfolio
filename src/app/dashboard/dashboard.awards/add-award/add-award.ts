import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl,FormArray } from '@angular/forms';
import { AwardsService } from '../../../services/awards.service';
@Component({
  selector: 'app-add-award',
  imports: [ ReactiveFormsModule  ],
  templateUrl: './add-award.html',
  styleUrl: './add-award.css',
})
export class AddAward {
  awardForm = new FormGroup({
    title: new FormControl(''),
    issuer: new FormControl(''),
    date: new FormControl(''),
    description: new FormArray([new FormControl('')]),
  });
  constructor(private awardsService: AwardsService) { }

  addDescription() {
    (this.awardForm.get('description') as FormArray).push(new FormControl(''));
  }
  removeDescription(index: number) {
    (this.awardForm.get('description') as FormArray).removeAt(index);
  }
  onSubmit() {
    const awardData = this.awardForm.value;
    this.awardsService.createAward(awardData).subscribe({
      next: (response) => {
        console.log('Award added successfully', response);
        this.awardForm.reset();
      },
      error: (error) => {
        console.error('Error adding award', error);
      }
    });
  }

}
