import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  private _router = inject(Router);

  logout() {
    localStorage.removeItem('LoggedInUser');
    this._router.navigateByUrl('/login');
  }
}
