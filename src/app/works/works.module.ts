import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorksRoutingModule } from './works-routing.module';
import { WorksComponent } from './works.component';
import { PorchInstallComponent } from './porch-install/porch-install.component';
import { LightboxModule } from 'ng-gallery/lightbox';
import { GalleryModule } from '../gallery/gallery.module';
import { GarageInstallComponent } from './garage-install/garage-install.component';


@NgModule({
  declarations: [WorksComponent, PorchInstallComponent, GarageInstallComponent],
  imports: [
    CommonModule,
    WorksRoutingModule,
    GalleryModule,
    LightboxModule,
    GalleryModule,
  ]
})
export class WorksModule { }
