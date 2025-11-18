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
    image: new FormControl(null),
  });

  constructor(private skillsService: SkillsService) {

  }

  onSubmit() {
    const skillData = this.skillForm.value;
    console.log('Skill:', skillData);
    this.skillsService.createSkill(skillData).subscribe({
      next: (value) => console.log('Next:', value),
      error: (error) => console.error('Error:', error)
    });
  }
}
