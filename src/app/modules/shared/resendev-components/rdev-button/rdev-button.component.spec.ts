import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevButtonComponent } from './rdev-button.component';

describe('RdevButtonComponent', () => {
  let component: RdevButtonComponent;
  let fixture: ComponentFixture<RdevButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdevButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdevButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
