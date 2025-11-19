import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
import { Router } from '@angular/router';
import { AwardsService } from '../../services/awards.service';
@Component({
  selector: 'app-dashboard.awards',
  imports: [ RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.awards.html',
  styleUrl: './dashboard.awards.css',
})
export class DashboardAwards {
  awardsData: any[] = [];
  // Define which columns (keys) from your data objects you want to display
  awardsColumns: string[] = ['name', 'email', 'phone', 'status']; // Example keys

  constructor(private awardsService: AwardsService, private router: Router) { }

  ngOnInit(): void {
    this.loadAwards();
  }
  loadAwards() {
    this.awardsService.getAwards().subscribe({
      next: (data: any[]) => {
        this.awardsData = data;
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
      this.awardsService.deleteAward(rowData._id).subscribe({
        next: () => {
          console.log('Award deleted successfully');
          this.loadAwards();
        },
        error: (err) => {
          console.error('Error deleting award', err);
        }
      })
    }
  }
}
