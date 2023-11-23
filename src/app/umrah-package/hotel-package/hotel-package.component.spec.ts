import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelPackageComponent } from './hotel-package.component';

describe('HotelPackageComponent', () => {
  let component: HotelPackageComponent;
  let fixture: ComponentFixture<HotelPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelPackageComponent]
    });
    fixture = TestBed.createComponent(HotelPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
