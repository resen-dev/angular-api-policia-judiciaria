import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContainerComponent } from './modules/home/containers/home-container/home-container.component';
import { SearchContainerComponent } from './modules/search/containers/search-container/search-container.component';
import { PersonDetailContainerComponent } from './modules/search/containers/person-detail-container/person-detail-container.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeContainerComponent },
  { path: 'search', component: SearchContainerComponent },
  { path: 'person-details/:id', component: PersonDetailContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
