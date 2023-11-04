import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsSidebarComponent } from './bookings-sidebar.component';

describe('BookingsSidebarComponent', () => {
  let component: BookingsSidebarComponent;
  let fixture: ComponentFixture<BookingsSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingsSidebarComponent]
    });
    fixture = TestBed.createComponent(BookingsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
