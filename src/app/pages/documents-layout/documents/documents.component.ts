import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-documents',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent {
  visible: boolean = false;
  private router = inject(Router);
  isPopupShow: boolean = false;
  isUrlShow: boolean = false;

  redirectDocumentRoute() {
    this.router.navigateByUrl('documents/add-documents');
  }

  toggleMenuPopup() {
    this.isPopupShow = !this.isPopupShow;
  }

  toggleUrlPopup() {
    this.isPopupShow = false;
    this.isUrlShow = !this.isUrlShow;
  }
}
