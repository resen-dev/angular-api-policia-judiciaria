import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '../../facade/search.facade';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(protected searchFacade: SearchFacade) { }

  ngOnInit(): void {
  }

}
