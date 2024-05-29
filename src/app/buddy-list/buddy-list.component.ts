import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Buddy } from '../buddy';
import { BuddyCardComponent } from '../buddy-card/buddy-card.component';
import {CommonModule} from '@angular/common'
import { BuddyFormComponent } from '../buddy-form/buddy-form.component';
import { MatDialog } from '@angular/material/dialog';
import { BuddyService } from '../buddy.service';

@Component({
  selector: 'app-buddy-list',
  standalone: true,
  imports: [SharedModule, BuddyCardComponent, CommonModule, BuddyFormComponent],
  templateUrl: './buddy-list.component.html',
  styleUrl: './buddy-list.component.css'
})
export class BuddyListComponent {
  buddies: Buddy[] = [];
  constructor(public dialog: MatDialog, private buddyService: BuddyService, private cdr: ChangeDetectorRef) {
    this.fetchBuddies();
    // Subscribe to buddyChange
    this.buddyService.buddyChange.subscribe(() => {
      this.fetchBuddies();
      this.cdr.detectChanges(); // Trigger change detection
    });
  }

  fetchBuddies() {
    this.buddies = this.buddyService.getAllBuddies();
  }
  
  openDialog() {
    const dialogRef = this.dialog.open(BuddyFormComponent, {
      height: '700px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
