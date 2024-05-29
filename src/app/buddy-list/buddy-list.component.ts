import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Buddy } from '../buddy';
import { BuddyCardComponent } from '../buddy-card/buddy-card.component';
import {CommonModule} from '@angular/common'
import { BuddyFormComponent } from '../buddy-form/buddy-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-buddy-list',
  standalone: true,
  imports: [SharedModule, BuddyCardComponent, CommonModule, BuddyFormComponent],
  templateUrl: './buddy-list.component.html',
  styleUrl: './buddy-list.component.css'
})
export class BuddyListComponent {
  @Input() buddies!: Buddy[];
  constructor(public dialog: MatDialog) {}

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
