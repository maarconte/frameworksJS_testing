// Angular Core
import { RouterModule, Routes } from '@angular/router';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import 'hammerjs';

// Angular Material
import {  MaterialModule } from '@angular/material';

// App Component
import { AppComponent } from './app.component';

@NgModule({
  // Components, Pipes, Directive
  declarations: [
    AppComponent,
  ],
  // Entry Components
  entryComponents: [
    AppComponent
  ],
  // Providers
  providers: [
  ],
  // Modules
  imports: [
    BrowserModule,
   MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2FilterPipeModule,
    
  ],
  // Main Component
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {

  }
}
