import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Strings } from '../../enum/strings.enum';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  private _router = inject(Router);

  logout() {
    localStorage.removeItem(Strings.LOGGED_IN_USER);
    this.navigateByUrl('/login');
  }

  navigateByUrl(url: string): void {
    this._router.navigateByUrl(url);
  }
}
