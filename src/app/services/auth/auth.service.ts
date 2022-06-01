import { Injectable } from '@angular/core';
import Firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/interfaces/iuser';

@Injectable({
	providedIn: 'root'
})

export class AuthService {

	userData: any;

	constructor(
		public authFirebase: AngularFireAuth,
		public storeFirebase: AngularFirestore,
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
			.then((result) => {
				this.toastr.success('You have logged in successfully.');
				this.saveUser(result.user);
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

	saveUser(user: any) {

		const userRef: AngularFirestoreDocument<any> = this.storeFirebase.doc(`users/${user.uid}`);

		const userData: IUser = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL
		};

		userRef.set(userData, { merge: true });
	}

	get isLoggedIn(): boolean {

		const user = JSON.parse(localStorage.getItem('user')!);

		return user
			? true
			: false;
	}
}