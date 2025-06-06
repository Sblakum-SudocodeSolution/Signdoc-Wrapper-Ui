import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const auth: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const token = localStorage.getItem('LoggedInUser');

  if (token != null) {
    console.log(token);
    return true;
  } else {
    _router.navigateByUrl('/login');
    return false;
  }
};
