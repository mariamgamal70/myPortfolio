import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
import { Router } from '@angular/router';
import { ActivitiesService } from '../../services/activities.service';
@Component({
  selector: 'app-dashboard.activities',
  standalone: true,
  imports: [  RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.activities.html',
  styleUrl: './dashboard.activities.css',
})
export class DashboardActivities {
  activitiesData: any[] = [];
  // Define which columns (keys) from your data objects you want to display
  activitiesColumns: string[] = ['name', 'email', 'phone', 'status']; // Example keys

  constructor(private activitiesService: ActivitiesService, private router: Router) { }
  ngOnInit(): void {
    this.loadActivities();
  }
  loadActivities() {
    this.activitiesService.getActivities().subscribe({
      next: (data: any[]) => {
        this.activitiesData = data;
      },
      error: (err) => console.error('Error loading projects', err),
    });
  }
  // Handle the action event emitted by the <app-table> component
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.router.navigate(['/dashboard/activities/edit', rowData._id]);

    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      console.log('Deleting project with ID:', rowData._id);
      this.activitiesService.deleteActivity(rowData._id).subscribe({
        next: () => {
          console.log('Activity deleted successfully');
          this.loadActivities();
        },
        error: (err) => {
          console.error('Error deleting activity', err);
        }
      })
    }
  }
}
