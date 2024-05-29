import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BuddyListComponent } from './buddy-list/buddy-list.component';
import { SharedModule } from './shared/shared.module';
import { Buddy } from './buddy';
import { BuddyService } from './buddy.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuddyListComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FindMyBuddy';
  buddies: Buddy[];
  buddyService: BuddyService = inject(BuddyService);
  constructor() {
    this.buddies = this.buddyService.getAllBuddies();
  }
}
