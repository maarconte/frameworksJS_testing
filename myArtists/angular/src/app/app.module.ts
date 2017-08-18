import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material'; // <-- Material Angular
import { FormsModule }  from '@angular/forms'; // <-- NgModel lives here

import 'hammerjs';

import { AppComponent } from './app.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistsComponent }     from './artists/artists.component';
import { ArtistService }         from './service/artist.service';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistDetailsComponent,
    ArtistsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule // <-- import the FormsModule before binding with [(ngModel)]
  ],
  providers: [ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
