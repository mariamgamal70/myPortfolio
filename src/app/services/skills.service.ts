import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  apiURL = 'http://localhost:3000/dashboard/skills';
  constructor(private http: HttpClient) {
  }
  getSkills() {
    return this.http.get<any[]>(this.apiURL);
  }
  createSkill(skill: any) {
    return this.http.post<any>(this.apiURL, skill);
  }
  updateSkill(id: string, skill: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, skill);
  }
  deleteSkill(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
