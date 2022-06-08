import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/static/navbar/navbar.component';
import { FooterComponent } from './components/static/footer/footer.component';

import { HomeComponent } from './components/dynamic/home/home.component';
import { ExploreComponent } from './components/dynamic/explore/explore.component';
import { SpeciesComponent } from './components/dynamic/species/species.component';
import { GamingComponent } from './components/dynamic/gaming/gaming.component';
import { GamingCardComponent } from './components/dynamic/gaming-card/gaming-card.component';
import { GamingChildComponent } from './components/dynamic/gaming-child/gaming-child.component';
import { ProfileComponent } from './components/dynamic/profile/profile.component';
import { NotFoundComponent } from './components/dynamic/not-found/not-found.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ExploreChildComponent } from './components/dynamic/explore-child/explore-child.component';
import { SpeciesChildComponent } from './components/dynamic/species-child/species-child.component';
import { SpeciesFormComponent } from './components/dynamic/species-form/species-form.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		FooterComponent,
		HomeComponent,
		ExploreComponent,
		SpeciesComponent,
		GamingComponent,
		GamingCardComponent,
		ProfileComponent,
		NotFoundComponent,
		GamingChildComponent,
		FilterPipe,
		ExploreChildComponent,
		SpeciesChildComponent,
		SpeciesFormComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		ToastrModule.forRoot({
			timeOut: 3000,
			progressBar: true,
			progressAnimation: 'increasing',
			positionClass: 'toast-bottom-right',
			newestOnTop: false,
		}),
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule,
		MatCardModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [
		AuthService
	],
	bootstrap: [
		AppComponent
	],
})

export class AppModule { }