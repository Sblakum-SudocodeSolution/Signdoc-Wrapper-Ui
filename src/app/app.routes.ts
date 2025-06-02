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
    path: 'plans',
    loadComponent: () =>
      import('./pages/plans&pricing/plans.component').then((c) => c.PlansComponent),
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
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        title: 'Dashboard',
      },
      {
        path: 'documents',
        loadChildren: () => import('./pages/documents-layout/documents.routes'),
      },
      {
        path: 'template',
        loadChildren: () => import('./pages/template-layout/template-routes'),
      },
      {
        path: 'create-contact',
        loadComponent: () =>
          import('./pages/create-contact/create-contact.component').then(
            (c) => c.CreateContactComponent
          ),
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    loadComponent: () =>
      import('../app/pages/page404/page404.component').then(
        (c) => c.Page404Component
      ),
  },
];
