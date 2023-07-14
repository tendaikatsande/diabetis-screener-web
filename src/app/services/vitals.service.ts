import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-page.model';

@Injectable({
  providedIn: 'root'
})
export class VitalsService {
  private readonly baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getAll(page:{}) {
    return this.http.get<ApiResponse>(`${this.baseUrl}/vitals/`);
  }

  getById(id:number) {
    return this.http.get(`${this.baseUrl}/vitals/${id}`);
  }

  create(payload:any) {
    return this.http.post(`${this.baseUrl}/vitals/`, payload);
  }
}
