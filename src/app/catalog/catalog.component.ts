import { Component, OnInit } from '@angular/core';
import { DoorsService } from '../doors.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  min = this.doorsService.getMinimums();

  constructor(
    private doorsService: DoorsService,
  ) { }

  ngOnInit(): void {
  }

}
