import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    CommonModule,
    MatSidenavModule,
    LayoutModule,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isSidebarOpen: boolean = true;
  breakPointObserver = inject(BreakpointObserver);

  ngOnInit() {
    this.breakPointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((res) => {
        if (
          this.breakPointObserver.isMatched([
            Breakpoints.XSmall,
            Breakpoints.Small,
          ])
        ) {
          this.isSidebarOpen = false;
        } else {
          this.isSidebarOpen = true;
        }
      });
  }
}
