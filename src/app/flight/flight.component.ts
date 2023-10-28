import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlane, faArrowRightLong, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  faPlane = faPlane
  faArrowRightLong = faArrowRightLong
  faCaretRight = faCaretRight
  selectedDetailDeparture: string = ''
  selectedDetailReturn: string = ''
  selectedFlight: string = '';
  selectedFlightBack: string = '';

  constructor(private toastr: ToastrService, private router: Router) { };


  ngOnInit(): void {

  }
  goToNextStep = () => {
    if (this.selectedFlight != '') {
      // this.router.navigate(['/result/first-destination']);
      const data = {
        flight: true,
        firstDestination: true,
        secondDestination: false,
        transfer: false,
        summary: false,
      }
      localStorage.setItem('steps', JSON.stringify(data))
      window.location.href = '/result/first-destination'
    } else {
      this.toastr.info("Please select a flight before proceeding.")
    }
  }

  checkFlight(value: string) {
    this.selectedFlight = value;
  }

  checkFlightBack(value: string) {
    this.selectedFlightBack = value;
  }
  collapsedDetailDeparture(value: string) {
    this.selectedDetailDeparture = value
  }
  collapsedDetailReturn(value: string) {
    this.selectedDetailReturn = value
  }
}

