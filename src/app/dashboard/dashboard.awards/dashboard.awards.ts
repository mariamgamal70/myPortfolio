import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
@Component({
  selector: 'app-dashboard.awards',
  imports: [ RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.awards.html',
  styleUrl: './dashboard.awards.css',
})
export class DashboardAwards {

}
