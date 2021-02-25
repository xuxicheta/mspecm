import { Injectable } from '@angular/core';
import { EkonomService } from '../doors/ekonom.service';
import { DoorsService } from '../doors.service';
import { LaminatService } from '../doors/laminat.service';
import { PowderService } from '../doors/powder.service';
import { MdfService } from '../doors/mdf.service';
import { TamburService } from '../doors/tambur.service';
import { PorchService } from '../doors/porch.service';
import { EliteService } from '../doors/elite.service';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  minEkonom = this.doors.getMinimum(this.ekonomService.doors);
  minLaminat = this.doors.getMinimum(this.laminatService.doors);
  minPowder = this.doors.getMinimum(this.powderService.doors);
  minMdf = this.doors.getMinimum(this.mdfService.doors);
  minTambur = this.doors.getMinimum(this.tamburService.doors);
  minPorch = this.doors.getMinimum(this.porchService.doors);
  minElite = this.doors.getMinimum(this.eliteService.doors);

  constructor(
    private ekonomService: EkonomService,
    private laminatService: LaminatService,
    private powderService: PowderService,
    private mdfService: MdfService,
    private tamburService: TamburService,
    private porchService: PorchService,
    private eliteService: EliteService,
    private doors: DoorsService,
  ) {
  }
}
