import { Component } from '@angular/core';
import { GamesService } from '../../../services/games/games.service';
@Component({
  selector: 'app-gaming-card',
  templateUrl: './gaming-card.component.html',
  styleUrls: ['./gaming-card.component.css'],
})
export class GamingCardComponent {
  gamesArrayCollection = [] as any;
  getData = async () => {
    await this.gameService.gamesCollection.then((response: { docs: any[] }) => {
      response.docs.map((doc) => this.gamesArrayCollection.push(doc.data())); //Get data, push each doc in new arr
    });
  };
  constructor(public gameService: GamesService) {}
  ngOnInit() {
    this.getData();
  }
}
