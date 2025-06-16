import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Strings } from '../../enum/strings.enum';

export const auth: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const token = localStorage.getItem(Strings.LOGGED_IN_USER);

  if (token != null) {
    return true;
  } else {
    _router.navigateByUrl('/login');
    return false;
  }
};
