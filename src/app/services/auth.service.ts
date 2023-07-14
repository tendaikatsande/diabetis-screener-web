import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { JwtResponse } from '../models/jwt.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly API_TOKEN_COOKIE = 'api_token';
  private readonly REFRESH_TOKEN_COOKIE = 'refresh_token';
  private readonly baseUrl = environment.serverUrl;

  constructor(private cookieService: CookieService, private http: HttpClient) {}
  login(username: string, password: string) {
    return this.http.post<JwtResponse>(`${this.baseUrl}/auth/authenticate`, {
      username,
      password,
    });
  }

  setTokens(apiToken: string, refreshToken: string): void {
    this.cookieService.set(this.API_TOKEN_COOKIE, apiToken);
    this.cookieService.set(this.REFRESH_TOKEN_COOKIE, refreshToken);
  }

  getApiToken(): string {
    return this.cookieService.get(this.API_TOKEN_COOKIE);
  }

  getRefreshToken(): string {
    return this.cookieService.get(this.REFRESH_TOKEN_COOKIE);
  }

  isAuthenticated(): boolean {
    return !!this.getApiToken();
  }

  logout(): void {
    this.cookieService.delete(this.API_TOKEN_COOKIE);
    this.cookieService.delete(this.REFRESH_TOKEN_COOKIE);
  }
}
