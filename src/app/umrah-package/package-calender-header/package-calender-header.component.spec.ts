import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageCalenderHeaderComponent } from './package-calender-header.component';

describe('PackageCalenderHeaderComponent', () => {
  let component: PackageCalenderHeaderComponent;
  let fixture: ComponentFixture<PackageCalenderHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageCalenderHeaderComponent]
    });
    fixture = TestBed.createComponent(PackageCalenderHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
