import { Injectable } from '@angular/core';

export type Categories = 'ekonom' | '';

@Injectable({
  providedIn: 'root'
})
export class DoorsService {

  doors = {
    ekonom: {
      sleek: {
        name: 'Эконом-гладкая',
        price: 9000,
      },
      blown: {
        name: 'Эконом-дутая',
        price: 11000,
      },
      nitro: {
        name: 'Эконом с нитроэмалью',
        price: 11300,
      },
      laminat: {
        name: 'Эконом-ламинат',
        price: 12500,
      },
    }
  } as const;

  getMinimums(): Record<Categories, number> {
    return Object.entries(this.doors).reduce((acc, [key, values]) => {
      acc[key] = Math.min(...Object.values(values).map(v => v.price));
      return acc;
    }, {} as Record<Categories, number>);
  }
}
