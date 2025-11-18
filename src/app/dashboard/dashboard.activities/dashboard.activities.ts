import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
@Component({
  selector: 'app-dashboard.activities',
  standalone: true,
  imports: [  RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.activities.html',
  styleUrl: './dashboard.activities.css',
})
export class DashboardActivities {

}
