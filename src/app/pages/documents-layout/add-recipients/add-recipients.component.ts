import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { LoginService } from '../../../services/Login/login.service';

@Component({
  selector: 'app-add-recipients',
  imports: [
    AccordionModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  templateUrl: './add-recipients.component.html',
  styleUrl: './add-recipients.component.scss',
})
export class AddRecipientsComponent {
  recipientForm = signal<FormGroup | null>(null);
  private _formBuilder = inject(FormBuilder);
  isStepActive: boolean = false;
  private _loginService = inject(LoginService);

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
  }

  backToDocument() {
    this._loginService.navigateByUrl('/documents/add-documents');
  }

  recipientSubmit() {
    if (this.recipientForm()?.invalid) {
      this.recipientForm()?.markAllAsTouched();
      alert('Please fill the all required fields');
      return;
    }

    console.log(this.recipientForm()?.value);
    this.recipientForm()?.reset();
    this._loginService.navigateByUrl('/dashboard');
  }
}
