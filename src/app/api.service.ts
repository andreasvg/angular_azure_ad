import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl: string = 'http://localhost:49998/api';

  constructor(private httpClient: HttpClient) { }

  public getPublicValues(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.apiUrl}/public/values`);
  }

  public getSignedInValues(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.apiUrl}/signedin/values`);
  }

  public getAdminValues(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.apiUrl}/admin/values`);
  }
}
