import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFirstFilterComponent } from './transfer-first-filter.component';

describe('TransferFirstFilterComponent', () => {
  let component: TransferFirstFilterComponent;
  let fixture: ComponentFixture<TransferFirstFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferFirstFilterComponent]
    });
    fixture = TestBed.createComponent(TransferFirstFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
