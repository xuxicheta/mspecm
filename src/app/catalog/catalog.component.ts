import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
})
export class CatalogComponent implements OnInit {


  constructor(
    public catalogService: CatalogService,
  ) {
  }

  ngOnInit(): void {
  }

}
