import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageBookingsMobComponent } from './package-bookings-mob.component';

describe('PackageBookingsMobComponent', () => {
  let component: PackageBookingsMobComponent;
  let fixture: ComponentFixture<PackageBookingsMobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageBookingsMobComponent]
    });
    fixture = TestBed.createComponent(PackageBookingsMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
