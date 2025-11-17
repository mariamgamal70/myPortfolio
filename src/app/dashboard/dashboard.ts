import { Component } from '@angular/core';
import { SideNavbar } from './sidenavbar/sidenavbar';
import  { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideNavbar, RouterOutlet],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {

}
