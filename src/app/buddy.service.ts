import { Injectable } from '@angular/core';
import { Buddy } from './buddy';

@Injectable({
  providedIn: 'root'
})
export class BuddyService {
  buddies: Buddy[] = [{
    id: 9999,
    name: 'Honey',
    photo: '',
    isAdopted: true,
    description: 'Beautiful and friendly dog',
    breed: 'Golden Retriever',
    age: 2,
    vaccinated: true,
    arrivingDate: new Date(),
  },
  {
    id: 9998,
    name: 'Mickey',
    photo: '',
    isAdopted: false,
    description: 'Beautiful and friendly cat',
    breed: 'Angora',
    age: 1,
    vaccinated: true,
    arrivingDate: new Date(),
  },
  {
    id: 9997,
    name: 'Alaska',
    photo: '',
    isAdopted: false,
    description: 'Old and friendly dog',
    breed: 'Husky',
    age: 6,
    vaccinated: true,
    arrivingDate: new Date(),
  }];
  constructor() { }

  getAllBuddies(): Buddy[] {
    return this.buddies;
  }
}
