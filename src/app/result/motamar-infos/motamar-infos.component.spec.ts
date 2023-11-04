import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotamarInfosComponent } from './motamar-infos.component';

describe('MotamarInfosComponent', () => {
  let component: MotamarInfosComponent;
  let fixture: ComponentFixture<MotamarInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotamarInfosComponent]
    });
    fixture = TestBed.createComponent(MotamarInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
