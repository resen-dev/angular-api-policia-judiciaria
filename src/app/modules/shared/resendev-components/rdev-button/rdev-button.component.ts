import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'rdev-button',
  templateUrl: './rdev-button.component.html',
  styleUrls: ['./rdev-button.component.css']
})
export class RdevButtonComponent {

  @Input() label: string = "button"
  @Input() icon: string = ""

  @Output() onClick = new EventEmitter<void>();

  onClickEvent() {
    this.onClick.emit();
  }
}
