import { Observable, catchError, from, map, of } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class BenefitsService {
  benefitsCollection = collection(this.firestore, 'benefits');

  constructor(private firestore: Firestore) {}

  createBenefit(benefit: any) {
    return from(addDoc(this.benefitsCollection, benefit)).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }

  getBenefits() {
    return collectionData(this.benefitsCollection) as Observable<any[]>;
  }
}
