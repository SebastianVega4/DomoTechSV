import { Injectable } from '@angular/core';
import { Firestore, doc, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(private firestore: Firestore) {}

  getGlobalConfig(): Observable<any> {
    const configRef = doc(this.firestore, 'configuracion/general');
    return docData(configRef);
  }
}