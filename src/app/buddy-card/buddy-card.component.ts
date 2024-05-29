import { Component, Input } from '@angular/core';
import { Buddy } from '../buddy';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BuddyFormComponent } from '../buddy-form/buddy-form.component';
import { BuddyService } from '../buddy.service';

@Component({
  standalone: true,
  selector: 'app-buddy-cardß',
  templateUrl: './buddy-card.component.html',
  styleUrls: ['./buddy-card.component.css'],
  imports: [SharedModule, DatePipe],
})
export class BuddyCardComponent {
  @Input() buddy!: Buddy;
  @Input() fetchBuddies!: Function;
  constructor(public dialog: MatDialog, private buddyService: BuddyService) {}
  openDialog() {
    const dialogRef = this.dialog.open(BuddyFormComponent, {
      height: '700px',
      width: '400px',
      data: { buddy: this.buddy },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  delete(){
    this.buddyService.deleteBuddy(this.buddy);
    this.fetchBuddies();

  }
}
