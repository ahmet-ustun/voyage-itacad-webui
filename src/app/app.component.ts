import { Component } from '@angular/core';
import { slideInAnimation } from './app.animation';

interface Item {
  title: string,
  genre:string
};
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'./app.component.css'
	],
	animations: [
		slideInAnimation
	]
})
export class AppComponent {
<<<<<<< HEAD
 
=======
	title = 'voyage';
>>>>>>> 4a727d7378ee799b7b689c07540cb7b8a88edde7
}
