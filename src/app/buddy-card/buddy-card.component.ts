import { Component, Input } from '@angular/core';
import { Buddy } from '../buddy';
import { SharedModule } from '../shared/shared.module';
import { DatePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-buddy-cardß',
  templateUrl: './buddy-card.component.html',
  styleUrls: ['./buddy-card.component.css'],
  imports: [SharedModule, DatePipe],
})
export class BuddyCardComponent {
  @Input() buddy!: Buddy;
}
