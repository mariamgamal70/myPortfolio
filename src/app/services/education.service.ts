import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  apiURL = 'http://localhost:3000/education';
  constructor(private http: HttpClient) {
  }
  getEducation() {
    return this.http.get<any[]>(this.apiURL);
  }
  getEducationById(id: string) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  createEducation(education: any) {
    return this.http.post<any>(this.apiURL, education);
  }
  updateEducation(id: string, education: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, education);
  }
  deleteEducation(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
