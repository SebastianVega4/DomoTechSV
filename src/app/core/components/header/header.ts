import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  menuOpen = false;
  private scrollTop = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      // Guarda la posición actual del scroll
      this.scrollTop = window.scrollY;
      document.body.style.setProperty('--scroll-top', `-${this.scrollTop}px`);
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
      // Restaura la posición del scroll
      window.scrollTo(0, this.scrollTop);
      document.body.style.removeProperty('--scroll-top');
    }
  }

  closeMenuOnNavigation() {
    this.menuOpen = false;
    document.body.classList.remove('menu-open');
  }
}