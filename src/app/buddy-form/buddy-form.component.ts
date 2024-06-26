import { Component, Inject, Input, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedModule } from '../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Buddy } from '../buddy';
import { BuddyService } from '../buddy.service';

@Component({
  selector: 'app-buddy-form',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './buddy-form.component.html',
  styleUrl: './buddy-form.component.css',
})
export class BuddyFormComponent {
  buddy!: Buddy;
  @Input() fetchBuddies!: Function;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {buddy: Buddy}, private formBuilder: FormBuilder, private buddyService: BuddyService) {
    console.log(data);
    this.buddy = data?.buddy;
    merge(this.buddyForm.valueChanges, this.buddyForm.statusChanges)
    .pipe(takeUntilDestroyed())
    .subscribe(() => this.updateErrorMessage());
    if (this.buddy) {
      this.buddyForm = this.formBuilder.group({
        name: [this.buddy?.name, Validators.required],
        photo: [''],
        isAdopted: [this.buddy?.isAdopted, Validators.required],
        description: [this.buddy?.description, Validators.required],
        breed: [this.buddy?.breed, Validators.required],
        age: [this.buddy?.age, [Validators.required, Validators.min(1)]],
        vaccinated: [this.buddy?.vaccinated, Validators.required],
        arrivingDate: [this.buddy?.arrivingDate, Validators.required],
      });
    }
  }

  buddyForm = this.formBuilder.group({
    name: [this.buddy?.name || '', Validators.required],
    photo: [''],
    isAdopted: [false, Validators.required],
    description: ['', Validators.required],
    breed: ['', Validators.required],
    age: [1, [Validators.required, Validators.min(1)]],
    vaccinated: [true, Validators.required],
    arrivingDate: [new Date(), Validators.required],
  });
  errorMessage = '';
  updateErrorMessage() {
    if (this.buddyForm.hasError('required')) {
      this.errorMessage = 'You must enter a value';
    } else {
      this.errorMessage = '';
    }
  }
  closeDialog() {
    this.dialog.closeAll();
  }
  submit() {
    if (this.buddyForm.valid) {
      const buddyToBeSaved: Buddy = {
        name: this.buddyForm.get('name')?.value ?? '',
        photo: this.buddyForm.get('photo')?.value ?? '',
        isAdopted: this.buddyForm.get('isAdopted')?.value ?? false,
        description: this.buddyForm.get('description')?.value ?? '',
        breed: this.buddyForm.get('breed')?.value ?? '',
        age: this.buddyForm.get('age')?.value ?? 1,
        vaccinated: this.buddyForm.get('vaccinated')?.value ?? true,
        arrivingDate: this.buddyForm.get('arrivingDate')?.value ?? new Date(),
        id: this.buddy?.id,
      };
      console.log(buddyToBeSaved);
      this.buddyService.saveBuddy(buddyToBeSaved);
      this.dialog.closeAll();
    }
  }
}
