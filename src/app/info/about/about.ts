import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigService } from '../../core/services/config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
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