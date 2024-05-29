import { Component, Inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SharedModule } from '../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Buddy } from '../buddy';

@Component({
  selector: 'app-buddy-form',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './buddy-form.component.html',
  styleUrl: './buddy-form.component.css',
})
export class BuddyFormComponent {
  buddy!: Buddy;
  constructor(public dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: {buddy: Buddy}, private formBuilder: FormBuilder) {
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
}
