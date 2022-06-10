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

  constructor(
    public gameService: GamesService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.gameService.gamesCollection
      .then((response) => {
        response.docs.map((doc) => {
          this.gamesArrayCollection.push({
            ...doc.data(),
            id: doc.id,
          });
        });
      })
      .catch((error) => {
        this.toastr.error(error.message);
      });
  }
}
