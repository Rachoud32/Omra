import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageSearchBarComponent } from './package-search-bar.component';

describe('PackageSearchBarComponent', () => {
  let component: PackageSearchBarComponent;
  let fixture: ComponentFixture<PackageSearchBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackageSearchBarComponent]
    });
    fixture = TestBed.createComponent(PackageSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
