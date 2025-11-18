import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  apiURL = 'http://localhost:3000/projects';
  constructor(private http: HttpClient) {
  }
  getProjects() {
    return this.http.get<any[]>(this.apiURL);
  }
  createProject(project: any) {
    return this.http.post<any>(this.apiURL, project);
  }
  updateProject(id: string, project: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, project);
  }
  deleteProject(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
