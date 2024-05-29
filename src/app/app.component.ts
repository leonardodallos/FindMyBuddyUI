import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'FindMyBuddy';
  buddies: Buddy[] = [];
  constructor(private buddyService: BuddyService) {
    this.fetchBuddies();
    // Subscribe to buddyChange
    this.buddyService.buddyChange.subscribe(() => {
      this.buddies = this.buddyService.getAllBuddies();
    });
  }

  fetchBuddies() {
    console.log('updated');
    this.buddies = this.buddyService.getAllBuddies();
  }
}
