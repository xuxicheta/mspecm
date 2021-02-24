import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface LaminatDoor extends Door {
  id: 'laminat1' | 'laminat2';
}

@Injectable({
  providedIn: 'root'
})
export class LaminatService {

  doors: LaminatDoor[] = [
    {
      id: 'laminat1',
      name: 'Ламинат - 1',
      price: 12500,
    },
    {
      id: 'laminat2',
      name: 'Ламинат - 2',
      price: 14500,
    },
  ];
}
