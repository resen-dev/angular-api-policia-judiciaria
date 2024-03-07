import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { FilterComponent } from './components/filter/filter.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';
import { PeopleCardListComponent } from './components/people-card-list/people-card-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchContainerComponent,
    FilterComponent,
    PeopleCardComponent,
    PeopleCardListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SearchModule { }
