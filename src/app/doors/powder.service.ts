import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface PowderDoor extends Door {
  id: 'powder1' | 'powder2';
}

@Injectable({
  providedIn: 'root'
})
export class PowderService {
  doors: PowderDoor[] = [
    {
      id: 'powder1',
      name: 'Порошковая-1',
      price: 12400,
    },
    {
      id: 'powder2',
      name: 'Порошковая-2',
      price: 14700,
    },
  ];
}
