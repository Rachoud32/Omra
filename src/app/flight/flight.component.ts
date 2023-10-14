import { Component, OnInit } from '@angular/core';
import { faPlane, faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight

  selectedFlight: string = 'flightbox1';
  checkOption(value: string) {
    this.selectedFlight = value;
  }

  ngOnInit(): void {

  }
}

