import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondTransferComponent } from './second-transfer.component';

describe('SecondTransferComponent', () => {
  let component: SecondTransferComponent;
  let fixture: ComponentFixture<SecondTransferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondTransferComponent]
    });
    fixture = TestBed.createComponent(SecondTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
