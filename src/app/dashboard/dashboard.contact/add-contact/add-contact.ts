import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-contact',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-contact.html',
  styleUrl: './add-contact.css',
})
export class AddContact {
  contactForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    link: new FormControl(''),
  });

  constructor(private contactService: ContactService) {}

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.createContact(this.contactForm.value).subscribe({
        next: (response) => {
          console.log('Contact added successfully', response);
          this.contactForm.reset();
        },
        error: (error) => {
          console.error('Error adding contact', error);
        }
      });
    }
  }
}
