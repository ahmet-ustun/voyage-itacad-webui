import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from 'src/app/modules/app.animation';

@Component({
	selector: 'app-gaming-child',
	templateUrl: './gaming-child.component.html',
	styleUrls: ['./gaming-child.component.css'],
	animations: [slideInAnimation]
})
export class GamingChildComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}