import { Component, OnInit } from '@angular/core';
import { PlanetService } from 'src/app/services/planet/planet.service';

@Component({
	selector: 'app-explore',
	templateUrl: './explore.component.html',
	styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

	searchKey: string = '';

	constructor(
		public planetService: PlanetService
	) { }

	ngOnInit(): void {
	}
}