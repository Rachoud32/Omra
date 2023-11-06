import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookings-sidebar',
  templateUrl: './bookings-sidebar.component.html',
  styleUrls: ['./bookings-sidebar.component.css']
})
export class BookingsSidebarComponent {
  @Input() eventgoToNextStep!: Function;

  goToNextStep() {
    if (this.eventgoToNextStep) {
      this.eventgoToNextStep();
      window.scrollTo(0, 500);
    }
  }
}
