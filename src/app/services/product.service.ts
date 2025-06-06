import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  private http = inject(HttpClient);
  private _router = inject(Router);

  fetchProducts() {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(API_URL);
  }

  logOut() {
    this._router.navigateByUrl('/login');
  }
}
