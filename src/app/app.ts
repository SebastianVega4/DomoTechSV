import { Component } from '@angular/core';
import { FooterComponent } from "./core/components/footer/footer";
import { HeaderComponent } from "./core/components/header/header";
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationService } from './services/navigation';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FooterComponent, HeaderComponent, RouterModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  providers: [NavigationService]
})
export class AppComponent {
  title = 'DomoTechSV';
}