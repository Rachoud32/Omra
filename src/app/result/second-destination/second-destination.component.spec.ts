import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondDestinationComponent } from './second-destination.component';

describe('SecondDestinationComponent', () => {
  let component: SecondDestinationComponent;
  let fixture: ComponentFixture<SecondDestinationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondDestinationComponent]
    });
    fixture = TestBed.createComponent(SecondDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
