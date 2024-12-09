import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  private servicesUrl = 'assets/json/services.json';

  constructor(private http: HttpClient) {}

  getServices(): Observable<{ services: string[] }> {
    return this.http.get<{ services: string[] }>(this.servicesUrl);
  }
}
