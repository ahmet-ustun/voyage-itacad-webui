import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../components/dynamic/home/home.component';
import { ExploreComponent } from '../components/dynamic/explore/explore.component';
import { SpeciesComponent } from '../components/dynamic/species/species.component';
import { GamingComponent } from '../components/dynamic/gaming/gaming.component';
import { ProfileComponent } from '../components/dynamic/profile/profile.component';
import { NotFoundComponent } from '../components/dynamic/not-found/not-found.component';
import { AuthGuard } from '../guards/auth/auth.guard';
import { GamingChildComponent } from '../components/dynamic/gaming-child/gaming-child.component';
import { SpeciesChildComponent } from '../components/dynamic/species-child/species-child.component';
import { ExploreChildComponent } from '../components/dynamic/explore-child/explore-child.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	},
	{
		path: 'explore',
		component: ExploreComponent,
		children: [{
			path: ':name',
			component: ExploreChildComponent
		}]
	},
	{
		path: 'species',
		component: SpeciesComponent,
		children: [{
			path: ':id',
			component: SpeciesChildComponent
		}]
	},
	{
		path: 'gaming',
		component: GamingComponent,
		children: [{
			path: ':id',
			component: GamingChildComponent
		}]
	},
	{
		path: 'profile',
		component: ProfileComponent,
		canActivate: [AuthGuard]
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