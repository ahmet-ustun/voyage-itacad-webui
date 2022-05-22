import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/dynamic/home/home.component';
import { ExploreComponent } from '../components/dynamic/explore/explore.component';
import { SpeciesComponent } from '../components/dynamic/species/species.component';
import { GamingComponent } from '../components/dynamic/gaming/gaming.component';
import { ProfileComponent } from '../components/dynamic/profile/profile.component';
import { NotFoundComponent } from '../components/dynamic/not-found/not-found.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'explore',
		component: ExploreComponent
	},
	{
		path: 'species',
		component: SpeciesComponent
	},
	{
		path: 'gaming',
		component: GamingComponent
	},
	{
		path: 'profile',
		component: ProfileComponent
	},
	{
		path: '',
		pathMatch: 'full',
		redirectTo: 'home'
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
