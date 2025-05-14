import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./component/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./component/signup/signup.component').then(
        (c) => c.SignupComponent
      ),
  },

  {
    path: '',
    loadComponent: () =>
      import('./component/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        title: 'Dashboard',
      },
      {
        path: 'documents',
        loadChildren: () =>
          import('./pages/documents/documents.component').then(
            (c) => c.DocumentsComponent
          ),
        title: 'Documents',
      },
    ],
  },
];
