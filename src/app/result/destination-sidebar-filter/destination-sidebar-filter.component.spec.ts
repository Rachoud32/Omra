import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationSidebarFilterComponent } from './destination-sidebar-filter.component';

describe('DestinationSidebarFilterComponent', () => {
  let component: DestinationSidebarFilterComponent;
  let fixture: ComponentFixture<DestinationSidebarFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestinationSidebarFilterComponent]
    });
    fixture = TestBed.createComponent(DestinationSidebarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
