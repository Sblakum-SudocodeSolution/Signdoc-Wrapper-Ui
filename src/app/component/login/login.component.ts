import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LoginService } from '../../services/Login/login.service';

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
  private _loginService = inject(LoginService);

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
    const Token: number = 12345678987654321;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginFormControls['email'].value;
    const password = this.loginFormControls['password'].value;

    if (email == 'admin@gamil.com' && password == '1234567890') {
      localStorage.setItem('LoggedInUser', JSON.stringify(Token));
      this._loginService.navigateByUrl('/dashboard');
      this.loginForm.reset();
    } else {
      alert('Invalid userName and Password');
    }
  }
}
