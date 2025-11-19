import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
@Component({
  selector: 'app-dashboard.contact',
  imports: [  RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.contact.html',
  styleUrl: './dashboard.contact.css',
})
export class DashboardContact {
  contactsData: any[] = [];
  // Define which columns (keys) from your data objects you want to display
  contactColumns: string[] = ['name', 'email', 'phone', 'status']; // Example keys

  constructor(private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.loadContacts();
  }
  loadContacts() {
    this.contactService.getContacts().subscribe({
      next: (data: any[]) => {
        this.contactsData = data;
      },
      error: (err) => console.error('Error loading projects', err),
    });
  }
  // Handle the action event emitted by the <app-table> component
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.router.navigate(['/dashboard/contacts/edit', rowData._id]);

    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      console.log('Deleting project with ID:', rowData._id);
      this.contactService.deleteContact(rowData._id).subscribe({
        next: () => {
          console.log('Contact deleted successfully');
          this.loadContacts();
        },
        error: (err) => {
          console.error('Error deleting contact', err);
        }
      })
    }
  }
}
