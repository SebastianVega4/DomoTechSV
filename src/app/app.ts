import { Component } from '@angular/core';
import { FooterComponent } from "./core/components/footer/footer";
import { Header } from "./core/components/header/header";
import { RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [FooterComponent, Header, RouterModule]
})
export class AppComponent {
  title = 'DomoTechSV';
}
