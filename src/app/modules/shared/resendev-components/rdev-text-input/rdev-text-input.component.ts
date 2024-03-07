import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'rdev-text-input',
  templateUrl: './rdev-text-input.component.html',
  styleUrls: ['./rdev-text-input.component.css']
})
export class RdevTextInputComponent implements OnInit {

  @Input() placeHolder: string = "" 
  @Input() onlyLetters: boolean = false 
  @Input() style: any = {} 

  @Output() onInputChange = new EventEmitter<string>();

  onlyLettersRegex = /[a-zA-Z ]/i

  constructor() { }

  ngOnInit(): void {
  }

  onInputEvent(event: any) {
    this.onInputChange.emit(event.target.value);
  }
}
