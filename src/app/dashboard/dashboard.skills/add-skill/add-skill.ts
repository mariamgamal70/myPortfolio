import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { SkillsService } from '../../../services/skills.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-skill',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-skill.html',
  styleUrl: './add-skill.css',
})
export class AddSkill {
  skillForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl<File | null>(null)
  });

  constructor(private skillsService: SkillsService) { }

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.skillForm.patchValue({ image: input.files[0] });
    }
  }

  onSubmit() {
    const formValue = this.skillForm.value;

    const formData = new FormData();
    formData.append('name', formValue.name ?? '');

    if (formValue.image) {
      formData.append('image', formValue.image);
    }
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    this.skillsService.createSkill(formData).subscribe({
      next: (res) => console.log("Skill created successfully", res),
      error: (err) => console.error(err)
    });
  }
}

