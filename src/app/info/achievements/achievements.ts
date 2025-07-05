import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsService } from '../../core/services/achievements';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  templateUrl: './achievements.html',
  styleUrls: ['./achievements.scss']
})
export class AchievementsComponent {
  achievements: any = {};

  constructor(private achievementsService: AchievementsService) { }

  ngOnInit() {
    this.achievementsService.getAchievements().subscribe(data => {
      this.achievements = data;
    });
  }
}