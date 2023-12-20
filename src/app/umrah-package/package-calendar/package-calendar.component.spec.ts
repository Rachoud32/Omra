import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCalendarComponent } from './package-calendar.component';

describe('PackageCalendarComponent', () => {
  let component: PackageCalendarComponent;
  let fixture: ComponentFixture<PackageCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageCalendarComponent]
    });
    fixture = TestBed.createComponent(PackageCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
