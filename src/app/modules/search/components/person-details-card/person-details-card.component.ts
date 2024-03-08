import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '../../facade/search.facade';

@Component({
  selector: 'app-person-details-card',
  templateUrl: './person-details-card.component.html',
  styleUrls: ['./person-details-card.component.css']
})
export class PersonDetailsCardComponent implements OnInit {

  constructor(protected searchfacade: SearchFacade) { }

  ngOnInit(): void {
  }

}
