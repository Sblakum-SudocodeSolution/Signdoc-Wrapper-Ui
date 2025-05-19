import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  sidebarItem: {
    label: string;
    link: string;
    routerLinkActive: string;
    icon: string;
    title?: string;
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
      link: 'contacts',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-person',
    },
    {
      label: 'Team',
      link: 'team',
      routerLinkActive: 'activated-route',
      icon: 'bi bi-people',
    },
  ];
}
