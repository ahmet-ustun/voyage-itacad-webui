import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { map, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {

	userData: any;
	userSpecies: any;
	subscription!: Subscription;

	constructor(
		public authService: AuthService,
		private storeService: StoreService,
		private toastr: ToastrService
	) {
		this.userData = JSON.parse(localStorage.getItem('user')!);
	}

	ngOnInit(): void {
		this.subscription = this.storeService.speciesRef.valueChanges()
			.pipe(
				map(val => val.filter(el => el.recordedBy === this.userData.uid)))
			.subscribe({
				next: data => this.userSpecies = data,
				error: error => this.toastr.error(error.message)
			})
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}
}
