import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent {

  constructor() { }

  @Input() person?: Person

  @Output() onClick = new EventEmitter<Person>();

  click(){
    this.onClick.emit(this.person)
  }

}
