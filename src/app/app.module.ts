import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './../app/components/shared/share.module';  
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule ,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
