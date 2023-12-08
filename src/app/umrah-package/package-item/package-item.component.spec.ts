import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageItemComponent } from './package-item.component';

describe('HotelPackageComponent', () => {
  let component: PackageItemComponent;
  let fixture: ComponentFixture<PackageItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageItemComponent]
    });
    fixture = TestBed.createComponent(PackageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
