import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { StepperModule } from 'primeng/stepper';
import { LoginService } from '../../../services/Login/login.service';

@Component({
  selector: 'app-add-documents',
  imports: [MatButtonModule, MatMenuModule, StepperModule],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.scss',
})
export class AddDocumentsComponent {
  private _loginService = inject(LoginService);

  redirectRecipientsRoute() {
    this._loginService.navigateByUrl('/documents/add-recipients');
  }

  showDropdownMenu() {
    document.getElementById('fileUploadMenu')?.classList.toggle('show');
  }
}
