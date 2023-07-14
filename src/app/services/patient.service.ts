import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-page.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private readonly baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getAll(page:{}) {
    return this.http.get<ApiResponse>(`${this.baseUrl}/patients/`);
  }

  getById(id:number) {
    return this.http.get(`${this.baseUrl}/patients/${id}`);
  }

  create(payload:any) {
    return this.http.post(`${this.baseUrl}/patients/`, payload);
  }
}
