import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
	selector: 'app-species',
	templateUrl: './species.component.html',
	styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit, OnDestroy {

	userData: any;
	allSpecies: any;
	subscription!: Subscription;

	constructor(
		public authService: AuthService,
		public storeService: StoreService,
		private toastr: ToastrService
	) {
		this.userData = JSON.parse(localStorage.getItem('user')!);
	}

	ngOnInit(): void {
		this.subscription = this.storeService.speciesRef.valueChanges({ idField: 'id' })
			.subscribe({
				next: data => this.allSpecies = data,
				error: error => this.toastr.error(error.message)
			});
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}