import { Component } from '@angular/core';
import { ClimaService } from './clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clima';
  tiempo: any[] = [];

  constructor(protected climaService: ClimaService) {}

  ngOnInit() {
    this.climaService.getWeather().subscribe(
      data => {
        // Success
        this.tiempo = data['results'];
      },
      error => {
        console.error(error);
      }
    );
  }
}
