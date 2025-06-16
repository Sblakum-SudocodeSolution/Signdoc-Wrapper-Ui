import { Component, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from '../../services/http/http.service';

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
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  todoList: any[] = [];
  selectedTodo!: todos;
  private _httpService = inject(HttpService);

  ngOnInit() {}

  createPackage() {
    this._httpService.navigateByUrl('/documents');
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
}
