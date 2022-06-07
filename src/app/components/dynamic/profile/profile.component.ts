import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

	userData: any;

	constructor(
		public authService: AuthService,
		public storeService: StoreService
	) {
		this.userData = this.authService.userData;
	}

	ngOnInit(): void { }
}
