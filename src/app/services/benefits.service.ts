import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BenefitsService {
    constructor(private firestore: Firestore) { }

    createBenefit(benefit: any) {
        return of(true);
    }

    getBenefits() {
        return of([]);
    }
}