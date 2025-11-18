import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
import { Router } from '@angular/router';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-dashboard.skills',
  imports: [RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.skills.html',
  styleUrl: './dashboard.skills.css',
})
export class DashboardSkills {
  skillsData: any[] = [];
  // Define which columns (keys) from your data objects you want to display
  skillsColumns: string[] = ['name', 'image']; // Example keys

  constructor(private skillsService: SkillsService, private router: Router) { }

  ngOnInit(): void {
    this.loadProjects();
  }
  loadProjects() {
    this.skillsService.getSkills().subscribe({
      next: (data: any[]) => {
        this.skillsData = data;
      },
      error: (err) => console.error('Error loading skills', err),
    });
  }
  // Handle the action event emitted by the <app-table> component
  handleTableAction(event: { actionKey: string; rowData: any }): void {
    const { actionKey, rowData } = event;

    if (actionKey === 'edit') {
      // Call your edit API using the project service
      this.router.navigate(['/dashboard/skills/edit', rowData._id]);

    } else if (actionKey === 'delete') {
      // Call your delete API using the project service
      console.log('Deleting project with ID:', rowData._id);
      this.skillsService.deleteSkill(rowData._id).subscribe({
        next: () => {
          console.log('skill deleted successfully');
          this.loadProjects();
        },
        error: (err) => {
          console.error('Error deleting skill', err);
        }
      })

    }
  }


}
