import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TripboxComponent } from './tripbox/tripbox.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TripboxComponent,
    TripDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
