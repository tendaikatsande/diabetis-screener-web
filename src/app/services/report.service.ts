import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DashboardStats } from '../models/dashboard-stats.model';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private readonly baseUrl = environment.serverUrl;
  constructor(private http: HttpClient) {}

  getDashboadStarts(asAt: Date) {
    return this.http.get<DashboardStats>(
      `${this.baseUrl}/reports/dashboard/${asAt.toISOString()}`
    );
  }
}
