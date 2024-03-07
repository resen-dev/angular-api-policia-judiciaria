import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevTextInputComponent } from './rdev-text-input.component';

describe('RdevTextInputComponent', () => {
  let component: RdevTextInputComponent;
  let fixture: ComponentFixture<RdevTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdevTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdevTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
