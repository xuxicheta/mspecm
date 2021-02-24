import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface EkonomDoor extends Door {
  id: 'sleek' | 'blown' | 'nitro' | 'laminat';
}

@Injectable({
  providedIn: 'root'
})
export class EkonomService {

  doors: EkonomDoor[] = [
    {
      id: 'sleek',
      name: 'Эконом-гладкая',
      price: 9000,
    },
    {
      id: 'blown',
      name: 'Эконом-дутая',
      price: 11000,
    },
    {
      id: 'nitro',
      name: 'Эконом с нитроэмалью',
      price: 11300,
    },
    {
      id: 'laminat',
      name: 'Эконом-ламинат',
      price: 12500,
    }
  ];
}
