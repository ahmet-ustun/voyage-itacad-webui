import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanetService } from 'src/app/services/planet/planet.service';

@Component({
	selector: 'app-explore-child',
	templateUrl: './explore-child.component.html',
	styleUrls: ['./explore-child.component.css']
})

export class ExploreChildComponent implements OnInit, OnDestroy {

	subscription$: any;
	planetName!: string;
	planetData: any;

	constructor(
		private route: ActivatedRoute,
		private planetService: PlanetService,
	) { }

	ngOnInit(): void {
		this.subscription$ = this.route.params.subscribe(params => {
			this.planetName = params['name'];
			this.planetData = this.planetService.database.find(planet => {
				return planet.name.toLowerCase() === this.planetName;
			});
		});
	}

	ngOnDestroy(): void {
		this.subscription$.unsubscribe();
	}
}
