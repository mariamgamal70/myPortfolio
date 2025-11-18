import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
@Component({
  selector: 'app-dashboard.contact',
  imports: [  RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.contact.html',
  styleUrl: './dashboard.contact.css',
})
export class DashboardContact {


}
