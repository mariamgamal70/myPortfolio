import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
import { Router } from '@angular/router';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-dashboard.experience',
  imports: [RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.experience.html',
  styleUrl: './dashboard.experience.css',
})
export class DashboardExperience {

  experiencesData: any[] = [];
  experienceColumns: string[] = ['company', 'position', 'location', 'startDate', 'endDate', 'responsibilities', 'status'];

  constructor(private experienceService: ExperienceService, private router: Router) { }

  loadExperiences() {
    this.experienceService.getExperiences().subscribe({
      next: (data: any[]) => {
        this.experiencesData = data;
      },
      error: (err) => console.error('Error loading experiences', err),
    });
  }
  ngOnInit(): void {
    this.loadExperiences();
  }
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.router.navigate(['/dashboard/experiences/edit', rowData._id]);

    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      console.log('Deleting experience with ID:', rowData._id);
      this.experienceService.deleteExperience(rowData._id).subscribe({
        next: () => {
          console.log('Experience deleted successfully');
          this.loadExperiences();
        },
        error: (err) => {
          console.error('Error deleting experience', err);
        }
      })

    }
  }
}
