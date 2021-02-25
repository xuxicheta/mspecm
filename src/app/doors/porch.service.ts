import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface PorchDoor extends Door {
  id: 'porch1';
}

@Injectable({
  providedIn: 'root'
})
export class PorchService {

  doors: PorchDoor[] = [
    {
      id: 'porch1',
      name: 'Подъездная-1',
      price: 15000,
    },
  ];
}
