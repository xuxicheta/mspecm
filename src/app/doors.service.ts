import { Injectable } from '@angular/core';
import { Door } from './doors/door.interface';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {

  constructor(
  ) {
  }

  getMinimum(doors: Door[]): number {
    return Math.min(...doors.map(door => door.price));
  }
}
