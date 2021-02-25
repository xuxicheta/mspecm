import { Injectable } from '@angular/core';
import { Door } from './door.interface';

export interface EliteDoor extends Door {
  id: 'elite1';
}

@Injectable({
  providedIn: 'root'
})
export class EliteService {

  doors: EliteDoor[] = [
    {
      id: 'elite1',
      name: 'Элит',
      price: 25000,
    },
  ];
}
