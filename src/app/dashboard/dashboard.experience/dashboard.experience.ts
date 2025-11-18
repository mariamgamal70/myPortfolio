import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';

@Component({
  selector: 'app-dashboard.experience',
  imports: [RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.experience.html',
  styleUrl: './dashboard.experience.css',
})
export class DashboardExperience {

  
}
