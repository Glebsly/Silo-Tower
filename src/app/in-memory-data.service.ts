import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const indicators = [
      {
        id: '1',
        title: 'Уровень карналлита в силосной башне №',
        value: 550,
        minValue: 330,
        maxValue: 1515
      },
      {
        id: '2',
        title: 'Уровень карналлита в силосной башне №',
        value: 1512,
        minValue: 0,
        maxValue: 1780
      },
      {
        id: '3',
        title: 'Уровень карналлита в силосной башне №',
        value: 3,
        minValue: 5,
        maxValue: 2400
      },
      {
        id: '4',
        title: 'Уровень карналлита в силосной башне №',
        value: 1225,
        minValue: 0,
        maxValue: 1224
      },
      {
        id: '5',
        title: 'Уровень карналлита в силосной башне №',
        value: 1365,
        minValue: 200,
        maxValue: 1500
      }
    ];
    return {indicators};
  }

  constructor() { }
}
