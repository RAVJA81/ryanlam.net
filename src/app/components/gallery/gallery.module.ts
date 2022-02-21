import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';   
import { AlbumComponent } from './album/album.component';   
import { SharedModule } from '../shared/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
    RouterModule
  ],
  declarations: [ 
    AlbumComponent
  ]
})
export class GalleryModule { }
