import { Component, Input } from '@angular/core';
import { Buddy } from '../buddy';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { BuddyFormComponent } from '../buddy-form/buddy-form.component';

@Component({
  standalone: true,
  selector: 'app-buddy-cardß',
  templateUrl: './buddy-card.component.html',
  styleUrls: ['./buddy-card.component.css'],
  imports: [SharedModule, DatePipe],
})
export class BuddyCardComponent {
  @Input() buddy!: Buddy;
  constructor(public dialog: MatDialog) {}
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
}
