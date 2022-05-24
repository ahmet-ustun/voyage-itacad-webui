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

	title = 'voyage';

}
