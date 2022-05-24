import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/static/navbar/navbar.component';
import { FooterComponent } from './components/static/footer/footer.component';

import { HomeComponent } from './components/dynamic/home/home.component';
import { ExploreComponent } from './components/dynamic/explore/explore.component';
import { SpeciesComponent } from './components/dynamic/species/species.component';
import { GamingComponent } from './components/dynamic/gaming/gaming.component';
import { GamingCardComponent } from './components/dynamic/gaming-card/gaming-card.component';
import { ProfileComponent } from './components/dynamic/profile/profile.component';
import { NotFoundComponent } from './components/dynamic/not-found/not-found.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from 'src/environments/environment';

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
		NotFoundComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }