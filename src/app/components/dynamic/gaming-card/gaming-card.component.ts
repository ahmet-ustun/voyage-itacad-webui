import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GamesService } from '../../../services/games/games.service';

@Component({
	selector: 'app-gaming-card',
	templateUrl: './gaming-card.component.html',
	styleUrls: ['./gaming-card.component.css'],
})

export class GamingCardComponent implements OnInit {

	gamesArrayCollection: any = [];

	getData = async () => {
		await this.gameService.gamesCollection
			.then(response => {
				response.docs.map(doc => {
					this.gamesArrayCollection.push(doc.data());
				});
			}).catch(error => {
				this.toastr.error(error.message);
			});
	};

	constructor(
		public gameService: GamesService,
		private toastr: ToastrService
	) { }

	ngOnInit() {
		this.getData();
	}
}
