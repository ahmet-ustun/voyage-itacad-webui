import { Injectable } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})

export class AuthService {
	constructor(
		public authFirebase: AngularFireAuth,
		private router: Router
	) {	}

	googleLogin() {
		const provider = new Firebase.auth.GoogleAuthProvider();

		provider.setCustomParameters({
			prompt: "select_account"
		});

		this.authFirebase.signInWithPopup(provider)
			.then(() => {
				this.router.navigate(['profile']);
			}).catch(error => {
				alert(error.message);
				this.router.navigate(['home']);
			});
	}

	googleLogout() {

		this.authFirebase.signOut()
			.then(() => {
				this.router.navigate(['home']);
			}).catch(error => {
				alert(error.message);
				this.router.navigate(['home']);
			});
	}
}