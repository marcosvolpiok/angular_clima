import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClimaComponent } from './clima/clima.component';
import { ClimaService } from './clima.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ClimaComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
