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

  getForecast(ciudad) {
    if (ciudad == undefined) {
      ciudad = '';
    }

    this.climaService.getForecast(ciudad).subscribe(
      data => {
        // Success
        this.tiempo = data;
        console.log(this.tiempo);
      },
      error => {
        console.error(error);
      }
    );
  }

  getCurrent(ciudad) {
    if (ciudad == undefined) {
      ciudad = '';
    }

    this.climaService.getCurrent(ciudad).subscribe(
      data => {
        // Success
        this.tiempo = data;
        console.log(this.tiempo);
      },
      error => {
        console.error(error);
      }
    );
  }
}
