import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {CarsService} from './cars.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CarPageComponent } from './car-page/car-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsPageComponent,
    HomePageComponent,
    CarPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
