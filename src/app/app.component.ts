import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuddyListComponent } from './buddy-list/buddy-list.component';
import { SharedModule } from './shared/shared.module';
import { Buddy } from './buddy';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuddyListComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FindMyBuddy';

  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  buddies: Buddy[] = [{
    id: 9999,
    name: 'Honey',
    photo: `${this.baseUrl}/example-house.jpg`,
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
    photo: `${this.baseUrl}/example-house.jpg`,
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
    photo: `${this.baseUrl}/example-house.jpg`,
    isAdopted: false,
    description: 'Old and friendly dog',
    breed: 'Husky',
    age: 6,
    vaccinated: true,
    arrivingDate: new Date(),
  }];
}
