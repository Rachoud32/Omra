import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageExtrasComponent } from './package-extras.component';

describe('PackageExtrasComponent', () => {
  let component: PackageExtrasComponent;
  let fixture: ComponentFixture<PackageExtrasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageExtrasComponent]
    });
    fixture = TestBed.createComponent(PackageExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
