import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  apiURL = 'http://localhost:3000/dashboard/experience';
  constructor(private http: HttpClient) {
  }
  getExperience() {
    return this.http.get<any[]>(this.apiURL);
  }
  getExperienceById(id: string) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  createExperience(experience: any) {
    return this.http.post<any>(this.apiURL, experience);
  }
  updateExperience(id: string, experience: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, experience);
  }
  deleteExperience(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
