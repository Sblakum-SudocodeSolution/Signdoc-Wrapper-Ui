import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../../services/Login/login.service';

@Component({
  selector: 'app-documents',
  imports: [CardModule, ButtonModule, CommonModule],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent {
  visible: boolean = false;
  isPopupShow: boolean = false;
  isUrlShow: boolean = false;

  private _loginService = inject(LoginService);

  redirectDocumentRoute() {
    this._loginService.navigateByUrl('/documents/add-documents');
  }

  toggleMenuPopup() {
    this.isPopupShow = !this.isPopupShow;
  }

  toggleUrlPopup() {
    this.isPopupShow = false;
    this.isUrlShow = !this.isUrlShow;
  }
}
