import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface TamburDoor extends Door {
  id: 'tambur1' | 'tambur2' | 'tambur3';
}

@Injectable({
  providedIn: 'root'
})
export class TamburService {

  doors: TamburDoor[] = [
    {
      id: 'tambur1',
      name: 'Тамбурная-1',
      price: 12800,
    },
    {
      id: 'tambur2',
      name: 'Тамбурная-2',
      price: 15500,
    },
    {
      id: 'tambur3',
      name: 'Тамбурная-3',
      price: 16500,
    },
  ];
}
