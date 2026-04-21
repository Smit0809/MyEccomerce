import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(`${environment.apiUrl}/products`);
  }

  login(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/login`, data);
  }

  register(data: any) {
    return this.http.post(`${environment.apiUrl}/auth/register`, data);
  }
}