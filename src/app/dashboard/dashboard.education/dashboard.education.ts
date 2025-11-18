import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Table } from '../../components/table/table';
@Component({
  selector: 'app-dashboard.education',
  imports: [RouterOutlet, RouterLink, Table],
  templateUrl: './dashboard.education.html',
  styleUrl: './dashboard.education.css',
})
export class DashboardEducation {

}
