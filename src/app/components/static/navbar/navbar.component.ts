import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

	isPlaying: boolean = false;
	user$: any;

	@ViewChild('music') audioMusic!: ElementRef;

	constructor(
		public authService: AuthService,
		public authFirebase: AngularFireAuth
	) {
		this.authFirebase.authState.subscribe(
			user => {
				this.user$ = user;
			}
		);
	}

	ngOnInit(): void { }

	activate() {
		this.isPlaying = !this.isPlaying;

		this.isPlaying
			? this.audioMusic.nativeElement.play()
			: this.audioMusic.nativeElement.pause();
	}

	login() {
		this.authService.googleLogin();
	}

	logout() {
		this.authService.googleLogout();
	}
}
