import { Route } from '@angular/router';
import { TemplateLayoutComponent } from './template-layout.component';
import { TemplateComponent } from './template/template.component';

export default [
  {
    path: '',
    component: TemplateLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'template',
        pathMatch: 'full',
      },
      {
        path: '',
        component: TemplateComponent,
      },
    ],
  },
] as Route[];
