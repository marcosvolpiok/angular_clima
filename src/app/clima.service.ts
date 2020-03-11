import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  constructor(protected http: HttpClient) {}

  getWeather() {
    return this.http.get('http://172.24.34.81:8081/v1/forecast/rosario');
  }
}
