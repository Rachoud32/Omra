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

      const targetDiv = document.getElementById('services-navigation');
      
      if (targetDiv) {
        // Use ScrollToOptions type for scrollOptions
        const scrollOptions: ScrollToOptions = {
            top: targetDiv.offsetTop,
            behavior: 'smooth'
        };

        // Check if 'scrollTo' function supports 'options' parameter
        if ('scrollBehavior' in document.documentElement.style) {
            // Scroll to the target div
            window.scrollTo(scrollOptions);
        } else {
            // Use the old way of scrolling for browsers that don't support 'scrollBehavior'
            window.scrollTo(scrollOptions.left || 0, scrollOptions.top || 0);
        }
      }
    }
  }
}
