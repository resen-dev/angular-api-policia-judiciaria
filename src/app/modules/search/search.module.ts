import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchContainerComponent } from './containers/search-container/search-container.component';
import { FilterComponent } from './components/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { PersonDetailContainerComponent } from './containers/person-detail-container/person-detail-container.component';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { PersonCardListComponent } from './components/person-card-list/person-card-list.component';
import { PersonDetailsCardComponent } from './components/person-details-card/person-details-card.component';

@NgModule({
  declarations: [
    SearchContainerComponent,
    FilterComponent,
    PersonCardComponent,
    PersonCardListComponent,
    PersonDetailContainerComponent,
    PersonDetailsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SearchModule { }
