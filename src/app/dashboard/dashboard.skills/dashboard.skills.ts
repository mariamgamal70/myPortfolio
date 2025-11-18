import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
@Component({
  selector: 'app-dashboard.skills',
  imports: [RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.skills.html',
  styleUrl: './dashboard.skills.css',
})
export class DashboardSkills {
  constructor(private http: HttpClient) { }
  

}
