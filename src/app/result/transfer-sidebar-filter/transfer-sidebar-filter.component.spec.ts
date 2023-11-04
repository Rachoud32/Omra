import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferSidebarFilterComponent } from './transfer-sidebar-filter.component';

describe('TransferSidebarFilterComponent', () => {
  let component: TransferSidebarFilterComponent;
  let fixture: ComponentFixture<TransferSidebarFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferSidebarFilterComponent]
    });
    fixture = TestBed.createComponent(TransferSidebarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
