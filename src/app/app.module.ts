import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RealDragDropModule } from 'real-drag-drop';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RealDragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
