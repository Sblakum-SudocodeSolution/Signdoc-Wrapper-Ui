import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  private http = inject(HttpClient);

  fetchProducts() {
    const API_URL = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get(API_URL);
  }
}
