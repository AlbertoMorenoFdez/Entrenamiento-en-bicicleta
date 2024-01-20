import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { RutasModule } from './rutas/rutas.module';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent  
  ],


  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RutasModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


