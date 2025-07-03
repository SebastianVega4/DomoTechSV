import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private firestore: AngularFirestore) {}

  getGlobalConfig(): Observable<any> {
    return this.firestore.collection('configuracion').doc('general').valueChanges();
  }
}