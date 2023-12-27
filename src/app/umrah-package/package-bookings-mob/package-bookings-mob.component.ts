import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-package-bookings-mob',
  templateUrl: './package-bookings-mob.component.html',
  styleUrls: ['./package-bookings-mob.component.css']
})
export class PackageBookingsMobComponent {
  @Input() eventgoToNextStep!: Function;

  goToNextStep() {
    if (this.eventgoToNextStep) {
      this.eventgoToNextStep();
      // window.scrollTo(0, 420);
    }
  }
}
