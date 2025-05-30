import { Route } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { AddDocumentsComponent } from './add-documents/add-documents.component';
import { DocumentsLayoutComponent } from './documents-layout.component';
import { AddRecipientsComponent } from './add-recipients/add-recipients.component';

export default [
  {
    path: '',
    component: DocumentsLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'documents',
        pathMatch: 'full',
      },
      {
        path: '',
        component: DocumentsComponent,
      },
      {
        path: 'add-documents',
        component: AddDocumentsComponent,
      },
      {
        path: 'add-recipients',
        component: AddRecipientsComponent,
      },
    ],
  },
] as Route[];
