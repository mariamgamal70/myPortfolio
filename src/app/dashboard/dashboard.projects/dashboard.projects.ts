import { Component, OnInit } from '@angular/core';
import { Table } from '../../components/table/table';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-dashboard-projects',
  standalone: true,
  imports: [Table, RouterOutlet, RouterLink, CommonModule],
  templateUrl: './dashboard.projects.html',
  styleUrl: './dashboard.projects.css',
})
export class DashboardProjects implements OnInit {
  projectsData: any[] = [];
  // Define which columns (keys) from your data objects you want to display
  projectColumns: string[] = ['name', 'status', 'link', 'id']; // Example keys

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe((data: any[]) => {
      this.projectsData = data;
    });
  }

  // Handle the action event emitted by the <app-table> component
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.projectsService.updateProject(rowData.id, rowData).subscribe({
        next: () => console.log('Project updated successfully'),
        error: (err) => { console.error('Error updating project', err);
        },
      })
    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      this.projectsService.deleteProject(rowData.id).subscribe({
        next: () => {
          console.log('Project deleted successfully');
        },
        error: (err) => {
            console.error('Error deleting project', err);
        }
      })
    }
  }
}
