import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    }
  }
}
