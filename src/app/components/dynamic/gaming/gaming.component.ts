import { Component, OnInit } from '@angular/core';
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore"

@Component({
	selector: 'app-gaming',
	templateUrl: './gaming.component.html',
	styleUrls: ['./gaming.component.css']
})

export class GamingComponent {

	// app = initializeApp({
	// 	apiKey: "AIzaSyBfsnIU8x5lolSFm_TsoOFYVlF1_gqTUHQ",
	// 	authDomain: "angular-gaming.firebaseapp.com",
	// 	projectId: "angular-gaming",
	// 	storageBucket: "angular-gaming.appspot.com",
	// 	messagingSenderId: "740094315542",
	// 	appId: "1:740094315542:web:4a84841cc1b64cbe03f937"
	// });
	// db = getFirestore(this.app);

	// querySnapshot = getDocs(collection(this.db, "games"));
	// newArr = [] as any
	// getData = async () => {
	// 	await this.querySnapshot.then(response => {
	// 		response.docs.map(doc => this.newArr.push(doc.data())) //Get data, push each doc in new arr
	// 	})
	// 	console.log(this.newArr)
	// }

	constructor() { }

	ngOnInit() {
		// this.getData();
	}
}
