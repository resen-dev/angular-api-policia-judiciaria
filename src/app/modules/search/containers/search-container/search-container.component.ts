import { Component, OnDestroy, OnInit } from '@angular/core';
import { SearchFacade } from '../../facade/search.facade';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  constructor(protected searchFacade: SearchFacade) { }

  ngOnInit(): void {
    this.searchFacade.resetFilter()
  }
}
