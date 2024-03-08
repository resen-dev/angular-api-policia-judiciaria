import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevPaginatorComponent } from './rdev-paginator.component';

describe('RdevPaginatorComponent', () => {
  let component: RdevPaginatorComponent;
  let fixture: ComponentFixture<RdevPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdevPaginatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RdevPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
