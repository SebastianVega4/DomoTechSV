import { Injectable } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AchievementsService {
  constructor(private firestore: Firestore) { }

  getAchievements(): Observable<any> {
    const achievementsRef = doc(this.firestore, 'logros/estadisticas');
    return docData(achievementsRef);
  }
}