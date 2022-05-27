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
	) {
		this.authFirebase.authState.subscribe(user => {
			if (user) {
				localStorage.setItem('user', JSON.stringify(user));
			} else {
				localStorage.setItem('user', 'null');
			}
		})
	}

	googleLogin() {
		
		const provider = new Firebase.auth.GoogleAuthProvider();

		provider.setCustomParameters({
			prompt: "select_account"
		});

		this.authFirebase.signInWithPopup(provider)
			.then(() => {
				console.log('You have logged in successfully.');
			}).catch(error => {
				console.log(error.message);
			});
	}

	googleLogout() {

		this.authFirebase.signOut()
			.then(() => {
				if (this.router.url === '/profile') {
					this.router.navigate(['home']);
				}
				console.log('You have logged out successfully.');
			}).catch(error => {
				console.log(error.message);
			});
	}

	get isLoggedIn(): boolean {
		
		const user = JSON.parse(localStorage.getItem('user')!);

		return user 
			? true 
			: false;
	}
}