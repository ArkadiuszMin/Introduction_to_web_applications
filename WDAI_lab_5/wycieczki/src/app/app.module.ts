import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TripComponent } from './trip/trip.component';
import { FormComponent } from './form/form.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TripHistoryComponent } from './trip-history/trip-history.component';
import { TripDetailedComponent } from './trip-detailed/trip-detailed.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TripComponent,
    FormComponent,
    KoszykComponent,
    NavbarComponent,
    TripListComponent,
    HomepageComponent,
    TripHistoryComponent,
    TripDetailedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
