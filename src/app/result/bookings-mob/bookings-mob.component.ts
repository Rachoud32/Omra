import { Component, Input } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings-mob',
  templateUrl: './bookings-mob.component.html',
  styleUrls: ['./bookings-mob.component.css']
})
export class BookingsMobComponent {
  constructor(private scroller: ViewportScroller, private router: Router) {}

  goUp() {
    this.scroller.scrollToAnchor("searchbar");
  }

  @Input() eventgoToNextStep!: Function;

  goToNextStep() {
    if (this.eventgoToNextStep) {
      this.eventgoToNextStep();
      window.scrollTo(0, 500);
    }
  }

  
}
