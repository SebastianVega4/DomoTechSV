import { Component } from '@angular/core';
import { AchievementsService } from '../../core/services/achievements.service';

@Component({
  selector: 'app-achievements',
  standalone: true,
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent {
  achievements: any = {};

  constructor(private achievementsService: AchievementsService) {}

  ngOnInit() {
    this.achievementsService.getAchievements().subscribe(data => {
      this.achievements = data;
    });
  }
}