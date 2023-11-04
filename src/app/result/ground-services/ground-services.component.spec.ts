import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundServicesComponent } from './ground-services.component';

describe('GroundServicesComponent', () => {
  let component: GroundServicesComponent;
  let fixture: ComponentFixture<GroundServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroundServicesComponent]
    });
    fixture = TestBed.createComponent(GroundServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
