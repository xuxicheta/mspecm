import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { LightboxModule } from 'ng-gallery/lightbox';



@NgModule({
  declarations: [GalleryComponent],
  exports: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    LightboxModule
  ]
})
export class GalleryModule { }
