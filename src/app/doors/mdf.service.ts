import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface MdfDoor extends Door {
  id: 'mdf1' | 'mdf2' | 'mdf3';
}

@Injectable({
  providedIn: 'root'
})
export class MdfService {
  doors: MdfDoor[] = [
    {
      id: 'mdf1',
      name: 'МДФ-1',
      price: 14500,
    },
    {
      id: 'mdf2',
      name: 'МДФ-2',
      price: 16500,
    },
    {
      id: 'mdf3',
      name: 'МДФ-3',
      price: 19000,
    },
  ];
}
