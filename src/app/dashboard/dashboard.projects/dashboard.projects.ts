import { Component, OnInit } from '@angular/core';
import { Table } from '../../components/table/table';
import { Router,RouterOutlet, RouterLink } from '@angular/router';
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
  projectColumns: string[] = ['name', 'skills', 'link', 'status']; // Example keys

  constructor(private projectsService: ProjectsService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }
  loadProjects() {
    this.projectsService.getProjects().subscribe({
      next: (data: any[]) => {
        this.projectsData = data;
      },
      error: (err) => console.error('Error loading projects', err),
    });
  }
  // Handle the action event emitted by the <app-table> component
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.router.navigate(['/dashboard/projects/edit',  rowData._id]);

    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      console.log('Deleting project with ID:', rowData._id);
      this.projectsService.deleteProject(rowData._id).subscribe({
        next: () => {
          console.log('Project deleted successfully');
          this.loadProjects();
        },
        error: (err) => {
            console.error('Error deleting project', err);
        }
      })

    }
  }
}
