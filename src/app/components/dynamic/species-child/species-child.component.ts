import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ISpecies } from 'src/app/interfaces/ispecies';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
	selector: 'app-species-child',
	templateUrl: './species-child.component.html',
	styleUrls: ['./species-child.component.css']
})
export class SpeciesChildComponent implements OnInit, OnDestroy {

	subscription$: any;
	speciesId!: string;
	speciesData!: ISpecies;

	constructor(
		private route: ActivatedRoute,
		private storeService: StoreService,
		private toastr: ToastrService
	) { }

	ngOnInit(): void {
		this.subscription$ = this.route.params.subscribe(params => {
			this.speciesId = params['id'];
			this.storeService.getSpecies(this.speciesId).valueChanges().subscribe({
				next: data => this.speciesData = data,
				error: error => this.toastr.error(error.message)
			})
		});
	}

	ngOnDestroy(): void {
		this.subscription$.unsubscribe();
	}
}
