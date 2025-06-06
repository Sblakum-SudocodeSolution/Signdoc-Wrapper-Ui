import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AccordionModule } from 'primeng/accordion';
import { Dialog } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-add-recipients',
  imports: [
    AccordionModule,
    ReactiveFormsModule,
    Dialog,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './add-recipients.component.html',
  styleUrl: './add-recipients.component.scss',
})
export class AddRecipientsComponent {
  recipientForm = signal<FormGroup | null>(null);
  private _formBuilder = inject(FormBuilder);
  private _router = inject(Router);
  isStepActive: boolean = false;

  constructor() {
    this.initFormGroup();
  }

  initFormGroup() {
    const recipientForm = this._formBuilder.group({
      recipientDetails: this._formBuilder.group({
        recipientOrder: [''],
        recipientName: ['', Validators.compose([Validators.required])],
        recipientEmail: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ]),
        ],
      }),

      packageDetails: this._formBuilder.group({
        packageName: ['', Validators.compose([Validators.required])],
        packageDescription: [''],
      }),

      emailNotificationDetails: this._formBuilder.group({
        emailSubject: ['', Validators.compose([Validators.required])],
        emailSubjectDescription: [''],
      }),
    });

    this.recipientForm.set(recipientForm);
  }

  toggleStepActive() {
    this.isStepActive = !this.isStepActive;
    // const stepCount = document.;
  }

  backToDocument() {
    this._router.navigateByUrl('/documents/add-documents');
  }

  recipientSubmit() {
    if (this.recipientForm()?.invalid) {
      this.recipientForm()?.markAllAsTouched();
      alert('Please fill the all required fields');
      return;
    }

    console.log(this.recipientForm()?.value);
    this.recipientForm()?.reset();
    this._router.navigateByUrl('/dashboard');
  }
}
