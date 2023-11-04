import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferTopFilterComponent } from './transfer-top-filter.component';

describe('TransferTopFilterComponent', () => {
  let component: TransferTopFilterComponent;
  let fixture: ComponentFixture<TransferTopFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferTopFilterComponent]
    });
    fixture = TestBed.createComponent(TransferTopFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
