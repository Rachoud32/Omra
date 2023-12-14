import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBookingsSidebarComponent } from './package-bookings-sidebar.component';

describe('PackageBookingsSidebarComponent', () => {
  let component: PackageBookingsSidebarComponent;
  let fixture: ComponentFixture<PackageBookingsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageBookingsSidebarComponent]
    });
    fixture = TestBed.createComponent(PackageBookingsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
