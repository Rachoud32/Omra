import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { interval, take } from 'rxjs';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  loading = false

  skeletons: any[] = [1, 2, 3]
  dataFlight: any[] = []
  returnFlights: any[] = []
  collapsed = true;
  selectedDetailDeparture: string = ''
  selectedDetailReturn: string = ''
  selectedFlight: string = '';
  selectedFlightBack: string = '';
  showDetailsDeparture: any
  showDetailsReturn: any
  counterValue = 0;
  targetValue = 100;
  durationInSeconds = 4;
  flightDepartureData: any
  flightReturnData: any

  constructor(private toastr: ToastrService, private router: Router, private flightService: FlightService) { };

  ngOnInit(): void {
    this.loading = true
    this.startCounter(this.durationInSeconds)
    setTimeout(() => {
      this.dataFlight = this.flightService.flightData()
      this.loading = false
    }, this.durationInSeconds * 1000)
    this.counterValue = 0
  }
  startCounter(value: any) {
    const interval$ = interval((value * 1000) / this.targetValue);
    interval$
      .pipe(
        take(this.targetValue + 1) // +1 to include the target value
      )
      .subscribe(() => {
        this.counterValue++;
      });

  }
  goToNextStep = () => {
    if (this.selectedFlight != '') {
      if (this.showDetailsReturn) {
        const data = {
          flight: true,
          firstDestination: true,
          secondDestination: false,
          transfer: false,
          summary: false,
        }
        localStorage.setItem('steps', JSON.stringify(data))
        window.location.href = 'umrah-custom/result/first-destination'
      }
      else {
        this.toastr.info("Please select a return flight before proceeding.")
      }
    } else {
      this.toastr.info("Please select a departure flight before proceeding.")
    }
  }
  clearData() {
    this.showDetailsDeparture = null
    this.showDetailsReturn = null
    this.selectedFlight = '';
    this.selectedFlightBack = '';
    this.returnFlights = []
  }

  checkFlight(value: any) {
    this.loading = true
    this.selectedFlight = value;
    this.startCounter(this.durationInSeconds / 2)
    this.flightDepartureData = this.dataFlight.find((flight: any) => flight._id === this.selectedFlight)
    setTimeout(() => {
      this.showDetailsDeparture = this.flightDepartureData
      this.returnFlights = this.flightDepartureData.flightReturns
      this.loading = false
    }, (this.durationInSeconds / 2) * 1000)
    this.counterValue = 0
    localStorage.setItem('flightDepartureData', JSON.stringify(this.flightDepartureData))
  }
  checkFlightBack(value: any) {
    this.loading = true
    this.selectedFlightBack = value;
    this.startCounter(this.durationInSeconds / 2)
    this.flightReturnData = this.flightDepartureData.flightReturns.find((data: any) => data._id === value)
    setTimeout(() => {
      this.showDetailsReturn = this.showDetailsDeparture.flightReturns[value]
      this.loading = false
    }, (this.durationInSeconds / 2) * 1000)
    this.counterValue = 0
    localStorage.setItem('flightReturnData', JSON.stringify(this.flightReturnData))
  }
  collapsedDetailDeparture(value: any) {
    this.selectedDetailDeparture = value
  }
  collapsedDetailReturn(value: any) {
    this.selectedDetailReturn = value
  }

}

