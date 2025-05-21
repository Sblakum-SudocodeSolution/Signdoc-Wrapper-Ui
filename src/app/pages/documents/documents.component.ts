import { Component, inject } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Dialog } from 'primeng/dialog';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-documents',
  imports: [CardModule, ButtonModule, Dialog],
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.scss',
})
export class DocumentsComponent {
  visible: boolean = false;
  private router = inject(Router);

  showDialog() {
    this.visible = true;
  }

  addDucumentLink() {
    this.router.navigateByUrl('add-documents');
  }
}
