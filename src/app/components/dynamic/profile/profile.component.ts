import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	userData: any;

	constructor(
		public authService: AuthService,
	) {
		this.userData = JSON.parse(localStorage.getItem('user')!);
	}

	ngOnInit(): void {
	}
}
