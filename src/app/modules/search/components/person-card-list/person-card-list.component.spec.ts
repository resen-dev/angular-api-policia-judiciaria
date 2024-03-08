import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCardListComponent } from './person-card-list.component';

describe('PersonCardListComponent', () => {
  let component: PersonCardListComponent;
  let fixture: ComponentFixture<PersonCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
