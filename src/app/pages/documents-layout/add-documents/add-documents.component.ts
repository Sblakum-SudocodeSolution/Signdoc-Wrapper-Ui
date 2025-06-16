import { Component, inject } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { StepperModule } from 'primeng/stepper';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-add-documents',
  imports: [MatButtonModule, MatMenuModule, StepperModule],
  templateUrl: './add-documents.component.html',
  styleUrl: './add-documents.component.scss',
})
export class AddDocumentsComponent {
  private _httpService = inject(HttpService);

  redirectRecipientsRoute() {
    this._httpService.navigateByUrl('/documents/add-recipients');
  }

  showDropdownMenu() {
    document.getElementById('fileUploadMenu')?.classList.toggle('show');
  }
}
