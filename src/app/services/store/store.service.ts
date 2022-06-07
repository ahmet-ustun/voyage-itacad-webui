import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs';
import { ISpecies } from 'src/app/interfaces/ispecies';
import { AuthService } from '../auth/auth.service';

@Injectable({
	providedIn: 'root'
})

export class StoreService {

	speciesRef: AngularFirestoreCollection<any>;
	userData: any;
	userSpecies: any;

	constructor(
		private storeFirebase: AngularFirestore,
		private authService: AuthService,
		private toastr: ToastrService
	) {
		this.speciesRef = this.storeFirebase.collection('species');
		this.userData = this.authService.userData;
		this.speciesRef.valueChanges({ idField: 'id' })
			.pipe(
				map(val => val.filter(el => el.recordedBy === this.userData.uid)))
			.subscribe({
				next: data => this.userSpecies = data,
				error: error => this.toastr.error(error.message)
			});

			console.log(this.userSpecies);
	}

	getSpecies(speciesId: string) {
		return this.speciesRef.doc(speciesId);
	}

	createSpecies(speciesInfo: ISpecies) {
		return this.speciesRef.add({ ...speciesInfo });
	}

	deleteSpecies(speciesId: string): any {
		if (confirm('Do you want to delete this species?')) {
			return this.speciesRef.doc(speciesId).delete();
		}
	}

	get isExceeding(): boolean {

		return this.userSpecies.length < 5
			? true
			: false;
	}
}