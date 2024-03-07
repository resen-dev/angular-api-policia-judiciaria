import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rdev-combobox-input',
  templateUrl: './rdev-combobox-input.component.html',
  styleUrls: ['./rdev-combobox-input.component.css']
})
export class RdevComboboxInputComponent implements OnInit {

  @Input() options: string[] = []
  @Input() style: any = {} 
  @Input() blank?: string
  @Input() blankDisabled: boolean = true

  @Output() onOptionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectOption($event: any) {
    this.onOptionChange.emit($event.target.value);
  }
}
