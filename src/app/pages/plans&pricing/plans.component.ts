import { Component, inject } from '@angular/core';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/Login/login.service';

@Component({
  selector: 'app-plans',
  imports: [FormsModule, ToggleSwitch],
  templateUrl: './plans.component.html',
  styleUrl: './plans.component.scss',
})
export class PlansComponent {
  checked: boolean = false;
  private _loginService = inject(LoginService);

  ngOnInit() {
    this.checkIconsColor();
  }

  redirectToHome() {
    this._loginService.navigateByUrl('/dashboard');
  }

  checkIconsColor() {
    const icon = document.getElementById('card-icons')?.children;
    console.log(icon);
  }
}
