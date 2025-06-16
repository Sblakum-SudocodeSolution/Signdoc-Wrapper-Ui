import { Component, inject } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-plans',
  imports: [FormsModule, ToggleSwitch],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  checked: boolean = false;
  private _httpService = inject(HttpService);

  ngOnInit() {
    this.checkIconsColor();
  }

  redirectToHome() {
    this._httpService.navigateByUrl('/dashboard');
  }

  checkIconsColor() {
    const icon = document.getElementById('card-icons')?.children;
    console.log(icon);
  }
}
