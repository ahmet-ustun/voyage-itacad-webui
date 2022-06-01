import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
	providedIn: 'root'
})

export class StoreService {

	speciesRef: AngularFirestoreCollection<any>;

	constructor(
		private storeFirebase: AngularFirestore,
	) {
		this.speciesRef = storeFirebase.collection('species');
	}

	getSpecies(speciesID: string) {
		return this.speciesRef.doc(speciesID);
	}
}
