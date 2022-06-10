import { Injectable } from '@angular/core';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  app = initializeApp(environment.firebase);
  db = getFirestore(this.app);
  gamesCollection = getDocs(collection(this.db, 'games'));

  constructor() {}
}
