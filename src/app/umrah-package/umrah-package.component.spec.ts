import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmrahPackageComponent } from './umrah-package.component';

describe('UmrahPackageComponent', () => {
  let component: UmrahPackageComponent;
  let fixture: ComponentFixture<UmrahPackageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UmrahPackageComponent]
    });
    fixture = TestBed.createComponent(UmrahPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
