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
        loadComponent: () =>
          import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent
          ),
        title: 'Dashboard',
      },
      {
        path: 'documents',
        loadComponent: () =>
          import('./pages/documents/documents.component').then(
            (c) => c.DocumentsComponent
          ),
        title: 'Documents',
      },
      {
        path: 'add-documents',
        loadComponent: () =>
          import('./pages/add-documents/add-documents.component').then(
            (c) => c.AddDocumentsComponent
          ),
        title: 'Add Documents',
      },
      {
        path: 'template',
        loadComponent: () =>
          import('./pages/template/template.component').then(
            (c) => c.TemplateComponent
          ),
        title: 'Template',
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
