import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AchievementsService {
  constructor(private firestore: AngularFirestore) {}

  getAchievements(): Observable<any> {
    return this.firestore.collection('logros').doc('estadisticas').valueChanges();
  }
}