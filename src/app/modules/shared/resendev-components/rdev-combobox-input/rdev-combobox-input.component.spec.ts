import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevComboboxInputComponent } from './rdev-combobox-input.component';

describe('RdevComboboxInputComponent', () => {
  let component: RdevComboboxInputComponent;
  let fixture: ComponentFixture<RdevComboboxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdevComboboxInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdevComboboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
