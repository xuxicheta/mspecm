import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-unit',
  templateUrl: './catalog-unit.component.html',
  host: { class: 'flex flex-col cursor-pointer hover:shadow-md p-4 transition-all' },
})
export class CatalogUnitComponent {
  @Input() imgSrc: string;
  @Input() name: string;
  @Input() price: string|number;

}
