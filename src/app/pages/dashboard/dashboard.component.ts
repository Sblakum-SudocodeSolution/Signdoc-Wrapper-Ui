import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

interface todos {
  id: number;
  name: string;
  username: string;
  email: string;
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
  todoList: any[] = [];
  selectedTodo!: todos;
  toggleTablePopup: boolean = false;
  // cols!: Column[];

  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit() {
    this.getProduct();

    // this.cols = [
    //   { field: 'id', header: 'Id' },
    //   { field: 'name', header: 'Name' },
    //   { field: 'email', header: 'Email' },
    // ];
  }

  toggleTablePopupMenu(id: number) {
    // if (id) {
    //   this.toggleTablePopup = !this.toggleTablePopup;
    // }
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
