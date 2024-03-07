import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rdev-number-input',
  templateUrl: './rdev-number-input.component.html',
  styleUrls: ['./rdev-number-input.component.css']
})
export class RdevNumberInputComponent implements OnInit {

  @Input() placeHolder: string = "" 
  @Input() style: any = {} 
  @Input() allowDecimal: boolean = false 
  @Input() allowNegative: boolean = false 
  @Input() min?: number 
  @Input() max?: number

  @Output() onInputChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onInputEvent(event: any) {
      this.onInputChange.emit(event.target.value);
  }

  handleKeyDown(event: KeyboardEvent) {
    const currentValue = parseFloat((event.target as HTMLInputElement).value + event.key);

    if (
      (event.key === '.' && !this.allowDecimal) ||
      (event.key === '-' && !this.allowNegative) ||
      (this.max !== undefined && currentValue > this.max) ||
      (this.min !== undefined && currentValue < this.min) 
    ) {
      event.preventDefault();
    }
  }
}
