import { Routes } from '@angular/router';
import { auth } from './services/auth.guard';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full',
  // },
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
      import('./pages/plans&pricing/plans.component').then(
        (c) => c.PlansComponent
      ),
    canActivate: [auth],
  },

  {
    path: '',
    loadComponent: () =>
      import('./component/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    canActivate: [auth],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        canActivate: [auth],
        title: 'Dashboard',
      },
      {
        path: 'documents',
        loadChildren: () => import('./pages/documents-layout/documents.routes'),
        canActivate: [auth],
      },
      {
        path: 'template',
        loadChildren: () => import('./pages/template-layout/template-routes'),
        canActivate: [auth],
      },
      {
        path: 'create-contact',
        loadComponent: () =>
          import('./pages/create-contact/create-contact.component').then(
            (c) => c.CreateContactComponent
          ),
        canActivate: [auth],
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
    canActivate: [auth],
  },
];
