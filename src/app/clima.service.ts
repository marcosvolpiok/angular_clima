import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  constructor(protected http: HttpClient) {}

  getForecast(ciudad) {
    return this.http.get(`${environment.urlApi}forecast/${ciudad}`);
  }

  getCurrent(ciudad) {
    return this.http.get(`${environment.urlApi}current/${ciudad}`);
  }
}
