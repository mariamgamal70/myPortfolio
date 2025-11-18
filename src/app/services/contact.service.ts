import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  apiURL = 'http://localhost:3000/dashboard/contact';
  constructor(private http: HttpClient) {
  }
  getContacts() {
    return this.http.get<any[]>(this.apiURL);
  }
  getContactById(id: string) {
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
  createContact(contact: any) {
    return this.http.post<any>(this.apiURL, contact);
  }
  updateContact(id: string, contact: any) {
    return this.http.put<any>(`${this.apiURL}/${id}`, contact);
  }
  deleteContact(id: string) {
    return this.http.delete<any>(`${this.apiURL}/${id}`);
  }
}
