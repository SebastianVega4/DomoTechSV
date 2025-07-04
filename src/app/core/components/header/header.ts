import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  // Lógica para manejar el estado activo
  isActive(url: string): boolean {
    return window.location.pathname === url || 
           (url !== '/' && window.location.pathname.startsWith(url));
  }
}