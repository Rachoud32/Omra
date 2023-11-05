import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsMobComponent } from './bookings-mob.component';

describe('BookingsMobComponent', () => {
  let component: BookingsMobComponent;
  let fixture: ComponentFixture<BookingsMobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsMobComponent]
    });
    fixture = TestBed.createComponent(BookingsMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
