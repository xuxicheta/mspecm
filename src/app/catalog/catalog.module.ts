import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogUnitComponent } from './catalog-unit/catalog-unit.component';
import { CatalogRoutingModule } from './catalog-routing.module';



@NgModule({
  declarations: [CatalogComponent, CatalogUnitComponent],
  imports: [
    CommonModule,
    CatalogRoutingModule,
  ]
})
export class CatalogModule { }
