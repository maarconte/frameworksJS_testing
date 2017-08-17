import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material'; // <-- Material Angular
import { FormsModule }  from '@angular/forms'; // <-- NgModel lives here

import 'hammerjs';

import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
