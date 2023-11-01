import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPeriodTopFilterComponent } from './transfer-period-top-filter.component';

describe('TransferPeriodTopFilterComponent', () => {
  let component: TransferPeriodTopFilterComponent;
  let fixture: ComponentFixture<TransferPeriodTopFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferPeriodTopFilterComponent]
    });
    fixture = TestBed.createComponent(TransferPeriodTopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
