import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RealButtonModule } from 'real-button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RealButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
