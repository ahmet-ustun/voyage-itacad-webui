import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-gaming-child',
  templateUrl: './gaming-child.component.html',
  styleUrls: ['./gaming-child.component.css'],
})
export class GamingChildComponent implements OnInit, OnDestroy {
  subscription$: any;
  gamingId!: string;
  gamingData: any;
  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscription$ = this.route.params.subscribe((params) => {
      this.gamingId = params['id'];
      this.storeService
        .getGames(this.gamingId)
        .valueChanges()
        .subscribe({
          next: (data) => (this.gamingData = data),
          error: (error) => this.toastr.error(error.message),
        });
    });
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
