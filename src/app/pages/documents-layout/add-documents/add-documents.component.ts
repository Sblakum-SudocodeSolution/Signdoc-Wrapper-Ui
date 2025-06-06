import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { StepperModule } from 'primeng/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-documents',
  imports: [MatButtonModule, MatMenuModule, StepperModule],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.scss',
})
export class AddDocumentsComponent {
  private router = inject(Router);

  redirectRecipientsRoute() {
    this.router.navigateByUrl('documents/add-recipients');
  }

  showDropdownMenu() {
    document.getElementById('fileUploadMenu')?.classList.toggle('show');
  }
}
