import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-page.model';

@Injectable({
  providedIn: 'root'
})
export class PatientVisitsService {
  private readonly baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getAll(page:{}) {
    return this.http.get<ApiResponse>(`${this.baseUrl}/patient-visits/`);
  }

  getById(id:number) {
    return this.http.get(`${this.baseUrl}/patient-visits/${id}`);
  }

  create(payload:any) {
    return this.http.post(`${this.baseUrl}/patient-visits/`, payload);
  }
}
