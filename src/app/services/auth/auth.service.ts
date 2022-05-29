import { Injectable } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	userData: any;

	constructor(
		public authFirebase: AngularFireAuth,
		private router: Router,
		private toastr: ToastrService
	) {
		this.authFirebase.authState.subscribe(user => {
			if (user) {
				this.userData = user;
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
				this.toastr.success('You have logged in successfully.');
			}).catch(error => {
				this.toastr.error(error.message);
			});
	}

	googleLogout() {

		this.authFirebase.signOut()
			.then(() => {
				if (this.router.url === '/profile') {
					this.router.navigate(['home']);
				}
				this.toastr.success('You have logged out successfully.');
			}).catch(error => {
				this.toastr.error(error.message);
			});
	}

	get isLoggedIn(): boolean {

		const user = JSON.parse(localStorage.getItem('user')!);

		return user
			? true
			: false;
	}
}