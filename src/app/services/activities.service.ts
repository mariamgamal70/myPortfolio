import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ActivitiesService {
  apiURL = 'http://localhost:3000/dashboard/activities';
  constructor(private http: HttpClient) {
  }
  getActivities() {
    return this.http.get<any[]>(this.apiURL);
  }
  getActivityById(id: string) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  createActivity(activity: any) {
    return this.http.post<any>(this.apiURL, activity);
  }
  updateActivity(id: string, activity: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, activity);
  }
  deleteActivity(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
