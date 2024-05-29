import { Injectable } from '@angular/core';
import { Buddy } from './buddy';
import { Subject } from 'rxjs';

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
  buddyChange = new Subject<void>();

  getAllBuddies(): Buddy[] {
    return this.buddies;
  }

  saveBuddy(buddy: Buddy): void {
    if (!buddy.id) {
      buddy.id = this.buddies.length + 1;
      this.buddies.push(buddy);
    } else
    {
      this.buddies = this.buddies.map(b => b.id === buddy.id ? buddy : b);
    }
    console.log(this.buddies);
    this.buddyChange.next();
  }

  deleteBuddy(buddy: Buddy): void {
    this.buddies = this.buddies.filter(b => b.id !== buddy.id);
    this.buddyChange.next();
    console.log(this.buddies);
  } 
}
