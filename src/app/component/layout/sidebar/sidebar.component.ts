import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpService } from '../../../services/http/http.service';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLinkActive,
    RouterLink,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    LayoutModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private _httpService = inject(HttpService);

  sidebarItem: {
    label: string;
    link: string;
    routerLinkActive: string;
    icon: string;
    title?: string;
    hr?: boolean;
  }[] = [
    {
      label: 'Dashboard',
      link: 'dashboard',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-house-door',
    },
    {
      title: 'Dashboard',
      label: 'Documents',
      link: 'documents',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-file-earmark-text',
    },
    {
      label: 'Template',
      link: 'template',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-clipboard2-plus',
    },

    {
      title: 'Contacts',
      label: 'Contacts',
      link: 'create-contact',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-person',
    },
    {
      label: 'Team',
      link: 'team',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-people',
    },
    {
      label: 'API',
      link: 'api',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-code',
    },
    {
      label: 'Admin',
      link: 'admin',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-person-workspace',
    },
    {
      label: 'Support',
      link: 'support',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-file-person',
    },
    {
      label: 'Setting',
      link: 'setting',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-gear',
    },
    {
      hr: true,
      label: 'Reports',
      link: 'reports',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-file-bar-graph',
    },
    {
      label: 'Plans & Pricing',
      link: 'plans',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-currency-rupee',
    },
  ];

  logOut() {
    this._httpService.logout();
  }
}
