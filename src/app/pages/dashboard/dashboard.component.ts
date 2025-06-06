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
  isTableMenu: boolean = false;

  private productService = inject(ProductService);
  private router = inject(Router);

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.fetchProducts().subscribe({
      next: (res: any) => {
        this.todoList = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createPackage() {
    this.router.navigateByUrl('documents');
  }

  products: any[] = [
    {
      packageTitle: 'Sample Package 1',
      status: 'In Progress',
      createdBy: 'Leigh Dickinson',
      createdOn: 'Apr 18, 2025',
    },
    {
      packageTitle: 'Sample Package 2',
      status: 'Rejected',
      createdBy: 'Akash Parmar',
      createdOn: 'Apr 7, 2025',
    },
    {
      packageTitle: 'Sample Package 3',
      status: 'Completed',
      createdBy: 'Suresh Lakum',
      createdOn: 'Apr 22, 2025',
    },
    {
      packageTitle: 'Sample Package 4',
      status: 'Pending',
      createdBy: 'Sandip Lakum',
      createdOn: 'Apr 5, 2025',
    },
    {
      packageTitle: 'Sample Package 5',
      status: 'In Progress',
      createdBy: 'Jiten Vaghela',
      createdOn: 'Apr 10, 2025',
    },
  ];

  showTableMenu() {
    // debugger;
    // document.getElementById('tableMenu')?.classList.toggle('show');
    // debugger;
    this.isTableMenu = !this.isTableMenu;
    console.log('Clicked');
  }
}
