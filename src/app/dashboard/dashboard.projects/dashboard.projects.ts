import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Table } from '../../components/table/table';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard.projects',
  imports: [Table, RouterOutlet, RouterLink],
  templateUrl: './dashboard.projects.html',
  styleUrl: './dashboard.projects.css',
})
export class DashboardProjects {


}
