import { Component, OnInit } from '@angular/core';
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
	selector: 'app-species-form',
	templateUrl: './species-form.component.html',
	styleUrls: ['./species-form.component.css']
})

export class SpeciesFormComponent implements OnInit {

	isChecked: boolean = false;
	toBeSaved: any;
	userData: any;
	imageUrl!: string;


	speciesForm = this.formBuilder.group({
		name: [null, [Validators.required, Validators.maxLength(20)]],
		info: [null, [Validators.required, Validators.maxLength(400)]],
		image: [null, [Validators.required]]
	});

	constructor(
		public formBuilder: FormBuilder,
		private authService: AuthService,
		private storeService: StoreService,
		private toastr: ToastrService
	) {
		this.userData = this.authService.userData;
	}

	ngOnInit(): void {
	}

	onFileChange(event: any) {
		if (event.target.files[0]) {
			this.toBeSaved = event.target.files[0];
		}
	}

	onSubmit() {

		if (this.speciesForm.valid) {

			this.storeService.pushImgToStorage(this.toBeSaved)
				.then(() => {
					const storage = getStorage();
					const fireUrl = `${this.userData.email}/${this.toBeSaved.name}`;
					getDownloadURL(ref(storage, fireUrl))
						.then(url => {
							this.storeService.createSpecies({
								name: this.speciesForm.value.name,
								info: this.speciesForm.value.info,
								imageUrl: url,
								recordedBy: this.userData.uid,
							});
						}).catch(error => {
							this.toastr.error(error.message);
						}).finally(() => {
							this.speciesForm.reset();
							this.isChecked = false;
						})
				}).catch(error => {
					this.toastr.error(error.message);
				});
		}
	}
}