import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevNumberInputComponent } from './rdev-number-input.component';

describe('RdevNumberInputComponent', () => {
  let component: RdevNumberInputComponent;
  let fixture: ComponentFixture<RdevNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdevNumberInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdevNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
