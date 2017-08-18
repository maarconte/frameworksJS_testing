import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { ArtistsComponent }      from '../artists/artists.component';
import { ArtistDetailsComponent }  from '../artist-details/artist-details.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: ArtistDetailsComponent },
  { path: 'artists',     component: ArtistsComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}