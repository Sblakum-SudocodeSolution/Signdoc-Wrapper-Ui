import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  // styleUrl: './login.component.scss',
  styleUrls: ['./login.component.scss', '../layout-styles.scss'],
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted: boolean = false;
  private fb = inject(FormBuilder);
  private router = inject(Router);

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [
        'admin@gamil.com',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ]),
      ],
      password: [
        '1234567890',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(16),
        ]),
      ],
      remember: [false],
    });
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginFormControls['email'].value;
    const password = this.loginFormControls['password'].value;

    if (email == 'admin@gamil.com' && password == '1234567890') {
      this.router.navigate(['dashboard']);
      console.log('admin LoggedIn success');
      this.loginForm.reset();
    } else {
      alert('Invalid userName and Password');
    }
  }
}
