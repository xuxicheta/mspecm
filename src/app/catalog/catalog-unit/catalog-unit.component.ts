import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-unit',
  templateUrl: './catalog-unit.component.html',
  styleUrls: ['./catalog-unit.component.css']
})
export class CatalogUnitComponent {
  @Input() imgSrc: string;
  @Input() name: string;
  @Input() price: string|number;

}
