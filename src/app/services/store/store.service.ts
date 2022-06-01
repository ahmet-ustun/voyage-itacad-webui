import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ISpecies } from 'src/app/interfaces/ispecies';

@Injectable({
	providedIn: 'root'
})

export class StoreService {

	speciesRef: AngularFirestoreCollection<any>;

	constructor(
		private storeFirebase: AngularFirestore,
	) {
		this.speciesRef = this.storeFirebase.collection('species');
	}

	getSpecies(speciesId: string) {
		return this.speciesRef.doc(speciesId);
	}

	createSpecies(speciesInfo: ISpecies) {
		return this.speciesRef.add({ ...speciesInfo });
	}

	deleteSpecies(speciesId: string): any {
		if(confirm('Do you want to delete this species?')) {
			return this.speciesRef.doc(speciesId).delete();
		}
	}
}