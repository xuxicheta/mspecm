import { Injectable } from '@angular/core';
import { EkonomService } from '../doors/ekonom.service';
import { DoorsService } from '../doors.service';
import { LaminatService } from '../doors/laminat.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  minEkonom = this.doors.getMinimum(this.ekonomService.doors);
  minLaminat = this.doors.getMinimum(this.laminatService.doors);


  constructor(
    private ekonomService: EkonomService,
    private laminatService: LaminatService,
    private doors: DoorsService,
  ) { }
}
