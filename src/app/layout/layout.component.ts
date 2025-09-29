import { BreakpointObserver } from '@angular/cdk/layout';
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  isMobile = window.innerWidth <= 695;
  isClicked = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe([`(max-width: 695px)`])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  onOpen() {
    this.isClicked = true;
  }

  onClose() {
    this.isClicked = false;
  }
}
