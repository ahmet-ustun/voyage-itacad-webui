import { Component } from '@angular/core';
import { slideInAnimation } from './modules/app.animation';

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
