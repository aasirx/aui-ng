import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { Select2Component } from './select2/select2.component';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    AppComponent,
    Select2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Select2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
