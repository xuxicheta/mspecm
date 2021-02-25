import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTableComponent } from './service-table.component';



@NgModule({
  declarations: [ServiceTableComponent],
  exports: [
    ServiceTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ServiceTableModule { }
