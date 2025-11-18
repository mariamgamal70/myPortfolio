import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AwardsService {
  apiURL = 'http://localhost:3000/dashboard/awards';
  constructor(private http: HttpClient) {
  }
  getAwards() {
    return this.http.get<any[]>(this.apiURL);
  }
  getAwardById(id: string) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  createAward(award: any) {
    return this.http.post<any>(this.apiURL, award);
  }
  updateAward(id: string, award: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, award);
  }
  deleteAward(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
