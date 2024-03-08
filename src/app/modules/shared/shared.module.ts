import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RdevButtonComponent } from './resendev-components/rdev-button/rdev-button.component';
import { RdevTextInputComponent } from './resendev-components/rdev-text-input/rdev-text-input.component';
import { RdevNumberInputComponent } from './resendev-components/rdev-number-input/rdev-number-input.component';
import { RdevComboboxInputComponent } from './resendev-components/rdev-combobox-input/rdev-combobox-input.component';
import { RdevPaginatorComponent } from './resendev-components/rdev-paginator/rdev-paginator.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RdevButtonComponent,
    RdevTextInputComponent,
    RdevNumberInputComponent,
    RdevComboboxInputComponent,
    RdevPaginatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    RdevButtonComponent,
    RdevTextInputComponent,
    RdevNumberInputComponent,
    RdevComboboxInputComponent,
    RdevPaginatorComponent
  ]
})
export class SharedModule { }
