import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person';
import { SearchFacade } from '../../facade/search.facade';

@Component({
  selector: 'app-person-card-list',
  templateUrl: './person-card-list.component.html',
  styleUrls: ['./person-card-list.component.css']
})
export class PersonCardListComponent implements OnInit {

  constructor(protected searchFacade: SearchFacade) { }

  @Input() persons: Person[] = []

  ngOnInit(): void {
  }

}
