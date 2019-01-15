import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2018,
      color: 'red'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2017,
      color: 'blue'
    },
    {
      name: 'BMW',
      id: 3,
      year: 2019,
      color: 'black'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2015,
      color: 'yellow'
    }
  ];

  constructor() { }
}
