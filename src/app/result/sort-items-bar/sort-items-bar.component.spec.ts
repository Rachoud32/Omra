import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTopFilterComponent } from './sort-items-bar.component';

describe('FlightTopFilterComponent', () => {
  let component: FlightTopFilterComponent;
  let fixture: ComponentFixture<FlightTopFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightTopFilterComponent]
    });
    fixture = TestBed.createComponent(FlightTopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
