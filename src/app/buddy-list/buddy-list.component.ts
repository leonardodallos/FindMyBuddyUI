import { Component, Input } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Buddy } from '../buddy';
import { BuddyCardComponent } from '../buddy-card/buddy-card.component';
import {CommonModule} from '@angular/common'

@Component({
  selector: 'app-buddy-list',
  standalone: true,
  imports: [SharedModule, BuddyCardComponent, CommonModule],
  templateUrl: './buddy-list.component.html',
  styleUrl: './buddy-list.component.css'
})
export class BuddyListComponent {
  @Input() buddies!: Buddy[];
}
