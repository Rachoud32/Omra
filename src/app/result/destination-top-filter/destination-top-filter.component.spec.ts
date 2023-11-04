import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationTopFilterComponent } from './destination-top-filter.component';

describe('DestinationTopFilterComponent', () => {
  let component: DestinationTopFilterComponent;
  let fixture: ComponentFixture<DestinationTopFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationTopFilterComponent]
    });
    fixture = TestBed.createComponent(DestinationTopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
