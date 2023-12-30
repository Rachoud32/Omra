import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-package-bookings-sidebar',
  templateUrl: './package-bookings-sidebar.component.html',
  styleUrls: ['./package-bookings-sidebar.component.css']
})
export class PackageBookingsSidebarComponent {
  @Input() eventgoToNextStep!: Function;
  
  goToNextStep() {
    if (this.eventgoToNextStep) {
      this.eventgoToNextStep();
      // window.scrollTo(0, 420);
    }
  }
}
