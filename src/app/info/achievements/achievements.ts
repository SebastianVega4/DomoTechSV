import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AchievementsService } from '../../core/services/achievements';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
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