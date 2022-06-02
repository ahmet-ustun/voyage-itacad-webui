import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../../services/games/games.service';

@Component({
  selector: 'app-gaming',
  templateUrl: './gaming.component.html',
  styleUrls: ['./gaming.component.css'],
})
export class GamingComponent {
  // gamesArrayCollection = [] as any;
  // getData = async () => {
  //   await this.gameService.gamesCollection.then((response: { docs: any[] }) => {
  //     response.docs.map((doc) => this.gamesArrayCollection.push(doc.data())); //Get data, push each doc in new arr
  //   });
  //   console.log(this.gamesArrayCollection);
  // };
  // constructor(private gameService: GamesService) {}
  // ngOnInit() {
  //   this.getData();
  // }
}
