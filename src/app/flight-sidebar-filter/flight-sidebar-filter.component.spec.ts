import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSidebarFilterComponent } from './flight-sidebar-filter.component';

describe('FlightSidebarFilterComponent', () => {
  let component: FlightSidebarFilterComponent;
  let fixture: ComponentFixture<FlightSidebarFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSidebarFilterComponent]
    });
    fixture = TestBed.createComponent(FlightSidebarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
