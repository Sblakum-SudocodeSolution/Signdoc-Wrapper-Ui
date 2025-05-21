import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

interface Column {
  field: string;
  header: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [
    TableModule,
    CommonModule,
    InputIcon,
    IconField,
    InputTextModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  private productService = inject(ProductService);
  todoList: any[] = [];
  cols!: Column[];

  private router = inject(Router);

  ngOnInit() {
    this.getProduct();

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'Email' },
    ];
  }

  getProduct() {
    this.productService.fetchProducts().subscribe({
      next: (res: any) => {
        this.todoList = res;
        console.log(this.todoList);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createPackage() {
    this.router.navigateByUrl('documents');
  }
}
