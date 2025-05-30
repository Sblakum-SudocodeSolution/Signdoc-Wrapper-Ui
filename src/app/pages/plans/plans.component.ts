import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-plans',
  imports: [FormsModule, ToggleSwitch],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  private _router = inject(Router);
  checked: boolean = false;

  redirectToHome() {
    this._router.navigateByUrl('/dashboard');
  }
}
