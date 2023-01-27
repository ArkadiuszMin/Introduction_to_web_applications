import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarSelectorComponent } from './car-selector/car-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    CarSelectorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
