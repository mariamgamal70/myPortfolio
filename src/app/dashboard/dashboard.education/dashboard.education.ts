import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
import { Router } from '@angular/router';
import {EducationService} from '../../services/education.service';
@Component({
  selector: 'app-dashboard.education',
  imports: [RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.education.html',
  styleUrl: './dashboard.education.css',
})
export class DashboardEducation {
  educationData: any[] = [];
  // Define which columns (keys) from your data objects you want to display
  educationColumns: string[] = ['institution', 'degree', 'fieldOfStudy', 'startDate', 'endDate', 'grade', 'description', 'courses', 'status']; // Example keys

  constructor(private educationService: EducationService, private router: Router) { }

  ngOnInit(): void {
    this.loadEducation();
  }
  loadEducation() {
    this.educationService.getEducation().subscribe({
      next: (data: any[]) => {
        this.educationData = data;
      },
      error: (err) => console.error('Error loading education', err),
    });
  }
  // Handle the action event emitted by the <app-table> component
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.router.navigate(['/dashboard/education/edit', rowData._id]);

    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      console.log('Deleting education with ID:', rowData._id);
      this.educationService.deleteEducation(rowData._id).subscribe({
        next: () => {
          console.log('Education deleted successfully');
          this.loadEducation();
        },
        error: (err) => {
          console.error('Error deleting education', err);
        }
      })

    }
  }
}
