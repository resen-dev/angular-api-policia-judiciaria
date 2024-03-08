import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsCardComponent } from './person-details-card.component';

describe('PersonDetailsCardComponent', () => {
  let component: PersonDetailsCardComponent;
  let fixture: ComponentFixture<PersonDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetailsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
