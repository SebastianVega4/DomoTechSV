import { Component } from '@angular/core';
import { ConfigService } from '../../core/services/config.service';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  config: any = {};

  constructor(private configService: ConfigService) {}

  ngOnInit() {
    this.configService.getGlobalConfig().subscribe(config => {
      this.config = config;
    });
  }
}