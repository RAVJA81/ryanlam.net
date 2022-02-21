import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';   
import { HomeComponent } from './home/home.component';   
import { SharedModule } from '../shared/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IndexRoutingModule,
    RouterModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class IndexModule { }
