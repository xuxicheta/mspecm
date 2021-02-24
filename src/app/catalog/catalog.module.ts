import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogUnitComponent } from './catalog-unit/catalog-unit.component';



@NgModule({
  declarations: [CatalogComponent, CatalogUnitComponent],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
